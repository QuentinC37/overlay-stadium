# Overlay Stadium

Overlay Twitch pour OBS : une tribune de stade qui se remplit avec les personnes qui écrivent dans le chat.

## Utilisation dans OBS

Source navigateur, 1920×1080, URL :

```
https://quentinc37.github.io/overlay-stadium/?channel=TACHAINE
```

## Paramètres

| Paramètre | Effet |
|---|---|
| `channel=xxx` | Chaîne Twitch à écouter (chat anonyme, aucun compte requis) |
| `title=Texte` | Titre en haut (`title=0` pour le masquer) |
| `bg=0` | Fond transparent (seule la tribune reste) |
| `demo=1` | Simule des supporters (sans `channel`, la démo est active par défaut) |
| `hud=1` | Affiche les boutons de test |
| `messages=0` | Ne pas afficher les messages du chat dans des bulles |
| `lurkers=0` | Par défaut, les viewers présents dans le chat montent en tribune sans écrire (en silencieux, plus sombres, jusqu'à leur premier message). `lurkers=0` pour ne garder que ceux qui écrivent. Liste encore plus fiable : connect.html |
| `ignore=bot1,bot2` | Pseudos à ignorer (par défaut : les bots courants) |
| `reset=1` | Vide la tribune mémorisée (le public est gardé 6 h entre les scènes) |
| `theme=tv` | Style : `tv` (Broadcast, par défaut), `pop`, `neon`, `arcade`, `arena` |
| `client_id=…` + `#token=…` | Affiche les viewers silencieux via l'API Twitch (URL générée par `connect.html`) |
| `avatars=joueur` | Avatars : `joueur` (défaut, armure réaliste), `pilote` (ancien), `ultra`, `carte`, `neon`, `robot`, `civils` |
| `fx=0` | Coupe la bataille spatiale en fond (style Broadcast) |
| `entree=pop` | Arrivée sur place au lieu de la marche latérale |
| `map=lunar` | Fond de map flouté : `lunar` (défaut), `coliseum`, `ceres`, `helios`, `bastion`, `artefact`, `atlantis`, `silva`, `rock`, `cliff`, `neige`, `random`, ou `0` pour le ciel étoilé |
| `scene=end` | Écran de fin : « Merci d'être venus » et les 5 MVP du live au premier rang |
| `scene=cam` | Full cam verticale : fond transparent, cadre caméra 9:16 au centre (656,0 · 608×1080), tribune de chaque côté (aucun siège derrière la cam), compteur et événements en haut à droite |
| `scene=ecran` | Partage d'écran + cam verticale + tribune : écran à 32,90 (1440×810), cam 9:16 à 1504,90 (384×683), tribune en bandeau en bas. Ni compteur ni chat, les alertes restent. Place tes sources OBS exactement à ces positions, sous l'overlay |
| `names=talk` | Pseudos affichés seulement quand le viewer parle |
| `bulles=3` | Nombre maximum de bulles de chat affichées en même temps |
| `chat=bulles` | Revenir aux grandes bulles au-dessus des avatars (par défaut : petite bulle vide + fil de chat sous le titre) |
| `cam=droite` / `cam=gauche` | Réserve un tiers de l'écran pour ta caméra (place ta source caméra au-dessus de l'overlay, dans le cadre orange) |
| `cam=portrait` | Raccourci : caméra verticale à droite (équivaut à `cam=droite&camformat=portrait`) |
| `max=100` | Nombre maximum de places à l'écran (100 par défaut) ; au-delà, le supporter le moins actif cède sa place |
| `sieges=fixe` | Liserés de sièges en couleurs fixes au lieu du cycle RGB (par défaut) |
| `rgb=1` | Étend le cycle RGB lent au fond et à l'accent (vert sinon) (un tour en 90 s ; `rgb=40` pour un tour en 40 s) |
| `theme=frag` | Style par défaut : « cartes à collectionner » : panneaux anthracite à coins coupés, accent néon, jauge de remplissage de la tribune |
| `accent=vert` | Couleur d'accent du style frag : `vert` (défaut), `orange`, `bleu`, `violet`, `or` ou un code hexa (`accent=f26b1d`) |
| `badges=1` | Réafficher les badges Twitch (sub, modo, VIP) sur les avatars, masqués par défaut |
| `camformat=portrait` | Cadre caméra vertical sur toute la hauteur (par défaut : paysage 16:9, avec le fil de chat dessous) |
| `ola=3` | Nombre de viewers qui doivent écrire la même chose pour lancer une ola |
| `away=20` | Minutes sans message avant qu'un viewer quitte la tribune |
| `raidmax=24` | Nombre maximum de supporters ajoutés lors d'un raid |
| `zoom=0` | Désactive le zoom progressif (stade entier visible dès le début) |
| `rangees=1.32` | Écart vertical entre les rangées (1 = serré, 1.8 = très aéré) |
| `remplissage=75` | % de places occupées avant de dézoomer au palier suivant |
| `paliers=10,20,30,40,50,75` | Paliers de places visibles avant le plafond `max` (100) |
| `disposition=coins` | Placement du titre, du compteur et du fil : `coins` (titre en haut à gauche, compteur et fil en haut à droite, par défaut), `centre`, `cote`, `bas`. Le haut et le bas restent libres pour les barres Twitch qui apparaissent au survol |
| `zones=1` | Affiche en rouge les zones couvertes par les barres Twitch au survol (pour vérifier une mise en page) |
| `accent=b6ff00` | Couleur d'accent de tout l'overlay : code sans # (vert-jaune `b6ff00` par défaut), un nom (`vert`, `menthe`, `neon`, `cyan`, `bleu`, `violet`, `rose`, `rouge`, `orange`, `or`, `blanc`) ou `rgb` pour un arc-en-ciel qui défile (`rgb=30` règle la vitesse en secondes) |
| `defi=` | Défi points de chaîne « Changer la couleur du stade » : crée sur Twitch une récompense avec « Le spectateur doit saisir du texte » ; le viewer écrit une couleur (nom, `rgb` ou numéro 1 à 13) et tout l'overlay change, scènes comprises, pendant 2 min (`defi_duree=120`, en secondes), puis revient à la couleur de base. `defi=ID` limite à une récompense précise, `defi=0` désactive |
| `alertes=vaisseau` | Revient à l'ancienne alerte (vaisseau qui tire une banderole) au lieu de la carte d'alerte |
| `chat=fil` | Remet les messages du chat dans le fil en haut à droite (par défaut, la scène tribune n'y montre que les événements ; une petite bulle signale qui parle) |
