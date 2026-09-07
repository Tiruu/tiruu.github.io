# Tiruu — Portfolio (V3)

Portfolio personnel de Lino Thebault (alias Tiruu), construit avec React, TypeScript et Vite.

Ce dépôt contient la version 3 du site portfolio : orientation professionnelle pour les projets web/IT, avec des sections séparées pour les jeux et la création 3D qui renvoient respectivement vers itch.io et ArtStation.

---

## Démo

Le site est publié via GitHub Pages pour ce dépôt. En local, lancez le serveur de développement (voir ci-dessous) pour prévisualiser.

https://tiruu.github.io/

---

## Tech

- React
- TypeScript
- Vite
- CSS (styles personnalisés)

---

## Prérequis

- Node.js (16+ recommandé)
- npm ou yarn

---

## Lancer en local

Ouvrez un terminal puis :

```bash
npm install
npm run dev
```

Le site sera disponible à l'adresse indiquée par Vite (par défaut http://localhost:5173).

---

## Build

Pour construire les fichiers de production :

```bash
npm run build
```

Le build génère le répertoire `dist/` prêt à être servi.

---

## Déploiement

Un workflow GitHub Actions s'occupe de construire `dist/` et de publier sur GitHub Pages automatiquement lorsqu'il est déclenché (push sur la branche par défaut). Si vous modifiez la configuration du workflow, vérifiez la branche par défaut du dépôt et les secrets nécessaires.

---

## Contenu & images

Les visuels SVG actuellement inclus sont des placeholders à des fins de direction artistique. Ils peuvent être remplacés par des captures d'écran ou images finales sans modifier la structure React. Remplacez simplement les fichiers correspondants dans le dossier des assets (par exemple `src/assets/` ou `public/` selon l'organisation du projet).

---

## Personnalisation rapide

- Mettez à jour votre nom, bio et les liens de réseaux dans les composants de header/footer.
- Pour ajouter un projet : créez une nouvelle entrée dans la liste des projets (fichier de données ou composant) et ajoutez les visuels associés dans le dossier des assets.

---

## Contribution

Ce dépôt est principalement une vitrine personnelle. Pour des contributions externes : ouvrez une issue pour proposer une modification, et je considérerai les PRs selon la nature du changement.

---

## Licence

Ce portfolio est fourni tel quel. Ajouter ici la licence si vous souhaitez en choisir une (MIT, CC-BY, etc.).

---

## Contact

- Profil GitHub : https://github.com/Tiruu
- Mail/profil professionnel : voir la section contact du site

---

Bonne visite — et n'hésitez pas à demander si vous voulez que j'adapte le README (ajout d'exemples, badges CI, instructions spécifiques de déploiement, etc.).
