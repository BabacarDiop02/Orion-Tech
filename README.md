# Orion Tech

Site vitrine premium pour **Orion Tech**, agence sénégalaise de création de
solutions digitales sur mesure (web, mobile, logiciels, plateformes,
e-commerce, automatisation, UI/UX, IA).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide](https://lucide.dev) pour les icônes

## Structure

```
src/
  app/            routes, metadata, sitemap, robots
  components/
    layout/       Navbar, Footer
    sections/     Hero, Services, Process, Projects, Contact, ...
    ui/           Reveal, Constellation, CustomCursor, SectionLabel
  lib/             contenu et données du site (data.ts)
```

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
