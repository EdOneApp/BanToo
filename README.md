# BanToo

Site vitrine de **BanToo**, service de pressing et blanchisserie à domicile pour Abidjan
(collecte, lavage, repassage et livraison en 24h). React + TypeScript + Vite + Tailwind CSS v4
+ Framer Motion.

Déployé sur GitHub Pages : **https://bantoo.myoctogone.com**

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
  components/   UI + animations (Navbar, Hero, Showcase, WashingMachine, DeliveryCard,
                SoapBubbles, AuroraBackground, MagneticButton, Steps, Faq,
                WhatsAppWidget, ErrorShell, ErrorBoundary...)
  pages/        Home, NotFound (404), ServerError (500), Offline, Maintenance,
                MentionsLegales, Confidentialite, Cgu
  lib/content.ts  Tout le contenu éditorial (textes, zones, FAQ, apps) centralisé
public/
  favicon.svg, apple-touch-icon.png, og-image.jpg, site.webmanifest,
  robots.txt, sitemap.xml, CNAME, 404.html
```

## Déploiement

- **GitHub Pages** (actuel) : `.github/workflows/deploy.yml` build et déploie
  automatiquement à chaque push sur `main`. Domaine personnalisé configuré via
  `public/CNAME` (→ `bantoo.myoctogone.com`) + réglage côté GitHub Pages (Settings →
  Pages). Nécessite un enregistrement DNS `CNAME` chez le registrar de
  `myoctogone.com` pointant `bantoo` vers `edoneapp.github.io`.
- `vercel.json` / `netlify.toml` / `public/_redirects` sont aussi fournis si le site
  est un jour déployé ailleurs (rewrites SPA pour ces plateformes).
- `public/404.html` + le script de décodage dans `index.html` permettent aux routes
  profondes (`/mentions-legales`, etc.) de survivre à un rafraîchissement direct sur
  GitHub Pages, qui ne fait pas de rewrites serveur.

## Avant mise en production

- Remplacer les coordonnées placeholder dans `src/lib/content.ts` (`BRAND`) :
  numéro WhatsApp, téléphone, email, Instagram — tous actuellement fictifs.
- Remplacer `public/og-image.jpg` et `public/apple-touch-icon.png` par de vrais
  visuels de marque (générés par script Python en placeholder pour l'instant).
- Brancher les vrais liens App Store / Google Play quand les apps sont publiées.
- Les routes `/500`, `/offline`, `/maintenance` sont des pages statiques prêtes à être
  servies par votre couche d'hébergement/CDN sur les codes d'erreur correspondants.

## Design & motion

- Couleurs : vert bambou (`--color-bamboo-*`), fond papier crème (`--color-paper-*`),
  accent doré bambou (`--color-gold-*`) — tokens définis dans `src/index.css`.
- Polices : Bricolage Grotesque (titres) + Instrument Sans (texte).
- Animations : Framer Motion (`whileInView`, stagger, `AnimatePresence`), blobs liquides
  animés en CSS, marquee infini, compteurs animés, effet shimmer sur le texte.
- Pièces signature : machine à laver SVG animée (tambour qui tourne, vibration),
  carte de livraison avec statuts progressifs + confettis à l'arrivée, bulles de
  savon flottantes, fond "aurora" aux couleurs changeantes, boutons magnétiques
  (suivent le curseur), parallaxe souris sur les blobs du hero, coursier animé le
  long du trajet sur la carte de suivi.
- Respecte `prefers-reduced-motion` partout (CSS globalement + chaque composant à
  boucle infinie coupe son animation via `useReducedMotion()`).
