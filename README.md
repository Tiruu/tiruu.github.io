# Tiruu Portfolio — refonte V2

Refonte complète du portfolio de Lino Thebault avec **React + TypeScript + Vite**.

## Objectif

Le portfolio précédent était centré sur l'identité « Indie Game Developer ». La V2 repositionne
le site autour de :

- Développeur web junior
- Technicien informatique junior
- Projets professionnels
- Game development comme spécialisation créative

Le site garde une identité sombre et créative inspirée de l'ancien univers graphique, mais avec
une présentation plus professionnelle.

## Contenu intégré

- Projet React / TypeScript / Vite / Supabase / MapLibre
- Application VandB en HTML / CSS / JavaScript / PHP / SQL / XAMPP
- Projet UDSP 89
- Projet EXODE
- Jeux et projets de game development
- Compétences
- Parcours
- Contact
- CV téléchargeable

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Le dossier `dist/` est généré par Vite.

## GitHub Pages

Le workflow `.github/workflows/deploy.yml` déploie automatiquement le dossier `dist` sur GitHub Pages
à chaque push sur `main`.

Dans GitHub :

1. Settings
2. Pages
3. Source : GitHub Actions

## À faire avant publication

1. Remplacer les SVG de démonstration par les vrais visuels du portfolio.
2. Ajouter le PDF actuel dans `public/downloadable/resume.pdf`.
3. Remplacer le lien GitHub générique du projet React par le lien exact du repo du projet.
4. Vérifier les liens ArtStation / Itch.io / LinkedIn.
5. Ajouter une vraie capture de l'application VandB si elle peut être montrée publiquement.
6. Tester mobile et clavier.

## Pourquoi React ?

Cette version sert aussi de projet d'apprentissage : la structure est volontairement simple :

- `src/App.tsx` : structure de la page et interactions
- `src/data.ts` : contenu des projets et compétences
- `src/styles.css` : design et responsive
- `public/assets/` : ressources statiques

L'objectif est que tu puisses comprendre progressivement chaque partie au lieu d'avoir une
architecture inutilement complexe.
