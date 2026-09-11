# Illi School — site web

Site statique (HTML/CSS/JS, aucune dépendance à installer) pour Illi School,
crèche & jardin d'enfants à Casablanca. Trois langues : français (par défaut),
anglais, arabe (avec bascule RTL automatique).

## Fichiers
```
index.html   → la page (une seule page, ancres de navigation)
style.css    → tous les styles
script.js    → traductions FR/EN/AR + menu mobile + WhatsApp flottant
images/      → photos réelles de la crèche, compressées pour le web
```

## Modifier le contenu
- Textes FR/EN/AR : dans `script.js`, objet `translations`.
- Horaires, adresse, téléphone : directement dans `index.html` (section `#infos` et le pied de page).
- Photos : remplacez les fichiers dans `images/` en gardant les mêmes noms, ou changez les `src=""` dans `index.html`.

## Tester en local
Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur :
```
python3 -m http.server 8000
```
puis ouvrez `http://localhost:8000`.

Voir le message de Claude dans la conversation pour les étapes de déploiement sur GitHub Pages via Termux.
