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
| `lurkers=1` | Fait aussi entrer les viewers silencieux (arrivent avec du retard, côté Twitch) |
| `ignore=bot1,bot2` | Pseudos à ignorer (par défaut : les bots courants) |
| `reset=1` | Vide la tribune mémorisée (le public est gardé 6 h entre les scènes) |
