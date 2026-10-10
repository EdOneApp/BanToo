# BanToo

Site vitrine de **BanToo**, service de pressing et blanchisserie à domicile pour Abidjan
(collecte, lavage, repassage et livraison en 24h). React + TypeScript + Vite + Tailwind CSS v4
+ Framer Motion.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
npm run lint      # oxlint
```

## Structure

```
src/
  components/   UI + animations (Navbar, Hero, Steps, Faq, WhatsAppWidget, ErrorShell...)
  pages/        Home, NotFound (404), ServerError (500), Offline, Maintenance,
                MentionsLegales, Confidentialite, Cgu
  lib/content.ts  Tout le contenu éditorial (textes, zones, FAQ, apps) centralisé
public/
  favicon.svg, apple-touch-icon.png, og-image.jpg, site.webmanifest,
  robots.txt, sitemap.xml
```

## Avant mise en production

- Remplacer les coordonnées placeholder dans `src/lib/content.ts` (`BRAND`) :
  numéro WhatsApp, téléphone, email, Instagram — tous actuellement fictifs.
- Remplacer `https://bantoo.app` par le vrai domaine dans `index.html`,
  `public/robots.txt` et `public/sitemap.xml`.
- Remplacer `public/og-image.jpg` et `public/apple-touch-icon.png` par de vrais
  visuels de marque (générés par script Python en placeholder pour l'instant).
- Brancher les vrais liens App Store / Google Play quand les apps sont publiées.
- Les routes `/500`, `/offline`, `/maintenance` sont des pages statiques prêtes à être
  servies par votre couche d'hébergement/CDN sur les codes d'erreur correspondants.

## Design

- Couleurs : vert bambou (`--color-bamboo-*`), fond papier crème (`--color-paper-*`),
  accent doré bambou (`--color-gold-*`) — tokens définis dans `src/index.css`.
- Polices : Bricolage Grotesque (titres) + Instrument Sans (texte).
- Animations : Framer Motion (`whileInView`, stagger, `AnimatePresence`), blobs liquides
  animés en CSS, marquee infini, compteurs animés, effet shimmer sur le texte.
- Respecte `prefers-reduced-motion`.
