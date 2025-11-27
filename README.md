# Nova - Projet Next.js avec Tailwind CSS

Ce projet est une application Next.js moderne avec Tailwind CSS configuré.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linter pour la qualité du code

## 📦 Installation

Installez les dépendances :

```bash
npm install
```

## 🏃 Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🏗️ Build de production

Créez une version optimisée pour la production :

```bash
npm run build
```

Lancez le serveur de production :

```bash
npm start
```

## 📁 Structure du projet

```
nova/
├── app/                 # Dossier App Router de Next.js
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux avec Tailwind
├── public/             # Fichiers statiques
├── package.json        # Dépendances et scripts
├── tsconfig.json       # Configuration TypeScript
├── tailwind.config.ts  # Configuration Tailwind CSS
└── next.config.js      # Configuration Next.js
```

## 🎨 Personnalisation Tailwind

Les styles Tailwind sont configurés dans `app/globals.css` et la configuration se trouve dans `tailwind.config.ts`.

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une build de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Exécute ESLint

## 🔧 Configuration

Le projet est configuré avec :
- TypeScript strict mode activé
- ESLint avec les règles Next.js
- Tailwind CSS avec support du mode sombre
- App Router de Next.js 14


