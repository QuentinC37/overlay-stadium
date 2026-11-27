/* Worker « tribune » : sert le site (fichiers du dépôt) et garde les looks des viewers.
   GET    /api/looks  → { login: look, … } (public, lu par l'overlay)
   PUT    /api/look   → enregistre le look du viewer connecté (jeton Twitch en Authorization: Bearer …)
   DELETE /api/look   → revient à l'avatar par défaut
   Les looks tiennent dans une seule entrée KV (« all ») : une lecture par chargement d'overlay. */
const CLIENT_ID = 'ygbm2p21bscx0ckd37l3i8mufsw6m9';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Max-Age': '86400',
};
const json = (data, status = 200, extra = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS, ...extra } });

const int = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;
function clean(b) {
  if (!b || typeof b !== 'object') return null;
  const L = { hair: b.hair, glyph: b.glyph, suit: b.suit, extra: b.extra, num: b.num };
  if (!int(L.hair, 0, 5) || !int(L.glyph, 0, 6) || !int(L.suit, 0, 8) || !int(L.extra, 0, 3) || !int(L.num, 1, 99)) return null;
  if (b.seat) {
    if (typeof b.seat !== 'string' || !/^#[0-9a-f]{6}$/i.test(b.seat)) return null;
    L.seat = b.seat.toLowerCase();
  }
  return L;
}

async function whoIs(request) {
  const m = (request.headers.get('Authorization') || '').match(/^Bearer ([a-z0-9]+)$/i);
  if (!m) return null;
  const r = await fetch('https://id.twitch.tv/oauth2/validate', { headers: { Authorization: 'OAuth ' + m[1] } });
  if (!r.ok) return null;
  const v = await r.json();
  if (v.client_id !== CLIENT_ID || !v.login) return null; // jeton émis pour notre application seulement
  return v.login.toLowerCase();
}

const readAll = async env => (await env.LOOKS.get('all', 'json')) || {};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });

    if (url.pathname === '/api/looks' && request.method === 'GET')
      return json(await readAll(env), 200, { 'Cache-Control': 'public, max-age=20' });

    if (url.pathname === '/api/look' && (request.method === 'PUT' || request.method === 'DELETE')) {
      const login = await whoIs(request);
      if (!login) return json({ error: 'Connexion Twitch expirée, reconnecte-toi.' }, 401);
      const all = await readAll(env);
      if (request.method === 'DELETE') {
        delete all[login];
      } else {
        let body = null;
        try { body = await request.json(); } catch (e) {}
        const look = clean(body);
        if (!look) return json({ error: 'Look invalide.' }, 400);
        all[login] = look;
      }
      await env.LOOKS.put('all', JSON.stringify(all));
      return json({ ok: true, login, look: all[login] || null });
    }
    return json({ error: 'Introuvable' }, 404);
  },
};
