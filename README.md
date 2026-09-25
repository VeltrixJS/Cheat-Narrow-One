# VELTRIXJS

Mod menu tout-en-un pour [Narrow One](https://narrow.one).

## Aperçu

<img width="1916" height="991" alt="Capture d&#39;écran 2026-09-16 225204" src="https://github.com/user-attachments/assets/ea87d596-bb20-44fc-b8b1-ee147e9cc726" />


## Fonctionnalités

**Combat**
- Vitesse (2 versions)
- Hauteur de saut (2 versions)
- Bunny Hop (saut automatique)
- Fly
- No Clip (2 versions)
- Wallhack : ESP Box3 + Wireframe
- Zoom clic droit

**Triggerbot**
- Activation ON/OFF
- Ciblage automatique quand le crosshair est sur un ennemi (détection par boîte englobante)
- 3 modes équipe : Auto-détection / FFA / Team
- Line of Sight (anti-mur) — ne tire pas à travers les obstacles
- Portée configurable (10 - 1500 m)
- Tolérance de visée (0 - 40 px) — précision de la boîte
- Charge progressive selon la distance :
  - Charge base (20 - 500 ms)
  - Charge par mètre (0 - 25 ms/m) — bander plus longtemps pour tirer plus loin
  - Charge maximale (200 - 3000 ms)
- Délai anti-spam configurable (50 - 1000 ms)
- Statut en temps réel (nombre de tirs, mode détecté, cible actuelle)

**Visual**
- FOV caméra personnalisé (30-140°)
- Sky mod (arc-en-ciel ou couleur custom)
- X-Ray
- ESP Infos : distance, pseudo, vie, ping, arme actuelle, porte-drapeau
- Overlays ESP : info cible, liste des joueurs, alerte drapeau
- ESP Filtres : équipe + distance max
- Tracers avec origine configurable
- Radar déplaçable
- Couleurs allié / ennemi personnalisables

**Autre**
- Viseur custom (croix, point, cercle, boîte)
- Crosshair dynamique (change de couleur quand ennemi dans FOV)
- Rainbow crosshair
- Barre de vie affichable / cachable
- Anti-AFK

**Aimbot**
- 3 modes de ciblage (plus proche, plus proche du viseur, moins de vie)
- 6 zones de visée (tête, poitrine, corps, jambes, pieds, custom)
- Lissage (0-95%)
- Humanisation
- Délai de réaction (0-500ms)
- FOV avec cercle visuel
- Bind personnalisable
- Compatible modes par équipes et Free For All

**Paramètres**
- Sauvegarder / Charger / Réinitialiser la config
- Couleur de l'interface
- Tous les raccourcis reconfigurables
- Watermark, liste des binds, debug overlay

**Bonus (toujours actif)**
- Skip des publicités
- Chat d'escouade forcé visible

## Installation

1. Installe [Tampermonkey](https://www.tampermonkey.net/)
2. Clique ici : **[Installer VELTRIXJS](https://raw.githubusercontent.com/VeltrixJS/Cheat-Narrow-One/main/VELTRIXJS.user.js)**
3. Confirme l'installation dans Tampermonkey
4. Va sur [narrow.one](https://narrow.one) — le menu apparaît en haut à gauche

## Raccourcis par défaut

| Touche | Action |
|--------|--------|
| Insert | Ouvrir / Fermer le menu |
| F | Toggle Aimbot |
| E | Toggle ESP |
| X | No Clip V2 (maintenu) |
| T | Chat |
| Clic droit | Aimbot (maintenu) |

Tous reconfigurables dans l'onglet **Params**.

> **Triggerbot** : tout se configure directement dans l'onglet **TriggerBot** du menu (aucun raccourci clavier à mémoriser).

## Configuration

La config est sauvegardée automatiquement dans le `localStorage` du navigateur. Tu peux aussi sauvegarder/charger un fichier JSON depuis l'onglet **Params**.

## Avertissement

Ce script est fourni à titre éducatif uniquement. L'utilisation de mods ou cheats sur Narrow One peut entraîner un bannissement définitif. Utilise-le à tes propres risques, les auteurs ne sont pas responsables des conséquences.

## Licence

MIT

## Crédits

- **VeltrixJS** — Créateur et développeur principal
- **DeepSeek** — Assistant IA
