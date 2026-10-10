---
# gstack: design-md-format=spec
name: BanToo
description: A premium, cinematic laundry-concierge service for Abidjan — deep bamboo green, confident grotesk type, rare bronze accents, scroll-driven storytelling.
colors:
  primary: "#1F4E22"
  primary-bright: "#2F7D2D"
  on-primary: "#F3F0E6"
  surface: "#EDE8DD"
  surface-dark: "#0F1A12"
  text: "#16211A"
  text-on-dark: "#F3F0E6"
  text-muted: "#5C6B5F"
  accent: "#9C6B3E"
  success: "#2F7D2D"
  warning: "#B8863B"
  error: "#A8402F"
typography:
  display:
    fontFamily: "Clash Grotesk"
    fontWeight: 600
    fontSize: "clamp(2.75rem, 6vw, 6rem)"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "General Sans"
    fontSize: 1rem
    lineHeight: 1.6
  label:
    fontFamily: "General Sans"
    fontSize: 0.75rem
    letterSpacing: 0.08em
  mono:
    fontFamily: "JetBrains Mono"
    fontFeature: tnum
rounded:
  sm: 6px
  md: 14px
  lg: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  button-primary-hover:
    backgroundColor: "#255C28"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.text}"
---

# BanToo

## Overview

**Creative North Star:** Botanical Modernism — a five-star concierge laundry service, not a utility app: deep bamboo green owns the page, grounded by a confident grotesk voice and rare precious-metal accents.

**Product context:** On-demand laundry/dry-cleaning pickup-and-delivery marketing site for Abidjan, Côte d'Ivoire. Three audiences: customers (persuade), couriers and pressing partners (recruit). Mobile Money payment ecosystem (Wave, Orange Money, MTN MoMo, Moov Money).

**Mode per surface:** Hero/narrative sections = Experience (cinematic, scroll-driven). Feature bento grid / steps = Persuade. App-screen showcase = Operate (shows the real product). FAQ/legal = Read.

**Reference sites:** Stripe.dev and Scout Motors (cinematic scrollytelling, Awwwards 2026 Sites of the Day); 2026 trend research: Glassmorphism 2.0 (multi-layer depth), bento grids (6-9 tiles) as the default feature-section pattern, grain texture as a tactile trust signal, Aurora UI soft gradients for premium positioning.

**Key characteristics:**
- Deep bamboo green dominates — it is not a thin accent on a white page
- Confident oversized Clash Grotesk headlines, no italic, no gradient text as emphasis
- Grain/film texture overlay signals tactile quality throughout
- Frosted glass is reserved for the sticky nav only — never a default card surface
- Motion is scroll-driven and cinematic, not bouncy or playful

## Colors

**Strategy:** Committed — bamboo green owns the page; stone and near-black are its two neutral registers (content sections vs. cinematic/dark sections), bronze is a rare accent, never a base color.

**Light or dark:** Mixed by scene — content/read sections sit on the warm stone surface (`#EDE8DD`) for daylight legibility; hero and narrative/Experience sections sit on near-black green (`#0F1A12`) for cinematic contrast. This is not a toggle; it is which scene the user is in.

Interaction states use `primary-bright` (#2F7D2D) for hover/active, never a hue shift to blue or neutral gray — keeps the whole interactive language inside the bamboo family. Bronze (`#9C6B3E`) marks precious/rare moments only: a label, a thin divider rule, an icon stroke — never a button fill or a large surface. Dark-surface hierarchy comes from opacity steps on `text-on-dark` (100/70/50/30%), not from lightening the green itself.

## Typography

**Clash Grotesk** (Fontshare, ITF Free Font License, free commercial use) — display only. A geometric grotesk with real character, used at 600/700 weight, oversized (up to 6rem), tight tracking (-0.02em). Source world: confident, architectural, modern African design studios — not a SaaS-starter face. Never set italic.

**General Sans** (Fontshare, ITF Free Font License) — body and UI. Warm, highly legible rationalist sans, weights 400-600. Carries all paragraph text, buttons, nav links.

**JetBrains Mono** (Google Fonts, OFL license) — order numbers, tracking codes, prices, timestamps. Tabular figures (`font-feature-settings: "tnum"`). Signals operational precision without resorting to a generic mono.

Loading: Fontshare API (`https://api.fontshare.com/v2/css?f[]=clash-grotesk@600,700&f[]=general-sans@400,500,600&display=swap`) + Google Fonts for JetBrains Mono.

## Layout

Max width 1280px for marketing sections, full-bleed for cinematic hero/narrative sections. Hybrid grid: asymmetric bento (6-9 tiles, 2-3 size classes) for the feature section instead of uniform 3-column cards; strict 12-column grid for the app-screen showcase and FAQ. Generous large-scale spacing rhythm (xl/2xl) between sections; tight spacing (xs/sm) inside components. Deliberate grid breaks: the hero headline and the washing-cycle narrative visual both bleed past the content max-width.

## Elevation & Depth

Shadows use a warm dark offset (never pure black): `0 20px 60px -20px rgba(15,26,18,0.35)`. Depth comes from offset + soft blur + a subtle warm tint, never a zero-offset glow. Frosted glass (`backdrop-filter: blur`) is reserved for the sticky nav bar only — it is the one surface in the whole system allowed to be translucent.

## Shapes

Radius hierarchy: sm (6px) for inputs/tags, md (14px) for buttons/small cards, lg (28px) for hero panels and the app-showcase frame, full (pill) for buttons only. Nested elements use outer radius minus the padding gap, never the same radius as their parent.

## Components

**Button (primary):** bamboo green fill, pill radius, `on-primary` text. Hover: `primary-bright` fill + 2px lift (no scale-bounce). Focus-visible: 2px bronze ring offset 2px. Active: no lift, slightly darker fill. Disabled: 40% opacity, no hover.

**Bento tile:** stone surface, lg radius, soft warm shadow. Hover: shadow deepens, no color change. Varies in size (1x1, 2x1, 1x2, 2x2) across the grid — never uniform.

**Nav bar:** frosted glass, appears on scroll only, thin 1px bottom hairline at 10% bronze opacity.

**App-screen showcase card:** near-black surface, lg radius, horizontal scroll-snap; each screen shows real UI density (map, list rows, status timeline) rather than a simplified placeholder.

## Do's and Don'ts

- Do: let bamboo green dominate large surfaces, not just buttons and links.
- Do: keep bronze rare — if more than one element per viewport uses it, cut one.
- Do: use grain texture at low opacity (3-5%) as a blended layer, never a visible filter.
- Do: give every scroll-driven section a clear start and end state, not an infinite loop.
- Don't: use emoji as a design element (icon, bullet, or decoration).
- Don't: add a second display face — Clash Grotesk carries every headline.
- Don't: apply frosted glass to any surface other than the sticky nav.
- Don't: fall back to numbered pill badges ("01", "02") for steps — let typography and position carry sequence.
- Don't: center every heading — asymmetry is part of the bento/editorial language.

## Motion

- **Approach:** expressive — scroll-driven, parallax layers, cinematic transitions, but every animation has a functional reason (reveal, sequence, state change).
- **Easing:** enter `cubic-bezier(0.16,1,0.3,1)`, exit `cubic-bezier(0.7,0,0.84,0)`, move `cubic-bezier(0.45,0,0.55,1)`.
- **Duration:** micro 80ms, short 200ms, medium 350ms, long 600-900ms (narrative/pinned sections only).
- **The one authored moment:** the pinned "wash cycle" scroll section — background, central visual and copy all evolve together as one continuous scroll-driven sequence, the site's signature.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-10 | Initial design system created | /design-consultation: v1 ("Woudy-style" flat landing page) rejected by user as too basic. Research-grounded (2026 trend search) premium direction approved: Botanical Modernism, deep bamboo green dominant, Clash Grotesk + General Sans + JetBrains Mono, scrollytelling + asymmetric bento grid, grain/aurora over CSS blobs, frosted glass nav-only. AI mockup preview skipped (no OpenAI key configured) — implementation proceeds directly to code. |
