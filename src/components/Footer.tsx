import { useMemo } from "react"
import { Link } from "react-router-dom"
import { MagneticButton } from "./MagneticButton"
import { BRAND } from "../lib/content"

const COLUMNS = [
  {
    title: "Application",
    links: [
      { label: "App Store", href: "#telecharger" },
      { label: "Google Play", href: "#telecharger" },
      { label: "Le cycle", href: "#cycle" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Rejoindre BanToo",
    links: [
      { label: "Devenir coursier", href: "#rejoindre" },
      { label: "Inscrire mon pressing", href: "#rejoindre" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: BRAND.whatsappDisplay, href: `https://wa.me/${BRAND.whatsapp.replace("+", "")}` },
      { label: BRAND.email, href: `mailto:${BRAND.email}` },
    ],
  },
  {
    title: "Suivez-nous",
    links: [{ label: `@${BRAND.instagram}`, href: `https://instagram.com/${BRAND.instagram}` }],
  },
]

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="relative bg-bamboo-950 pt-20 pb-10 text-stone-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-stone-50/10 pb-12 sm:flex-row sm:items-end">
          <p className="max-w-md text-balance font-display text-3xl font-semibold sm:text-4xl">
            Une tache ? <span className="text-bronze-400">Une app.</span>
          </p>
          <div className="flex gap-3">
            <MagneticButton href="#telecharger" className="rounded-full bg-stone-50 px-5 py-2.5 text-sm font-semibold text-bamboo-950">
              App Store
            </MagneticButton>
            <MagneticButton href="#telecharger" className="rounded-full border border-stone-50/25 px-5 py-2.5 text-sm font-semibold text-stone-50">
              Google Play
            </MagneticButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono-tnum text-[11px] tracking-widest text-stone-50/40">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-stone-50/70 transition-colors hover:text-stone-50">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-50/10 pt-6 text-xs text-stone-50/40 sm:flex-row">
          <p>
            © {year} BanToo. {BRAND.city}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-stone-50">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-stone-50">
              Confidentialité
            </Link>
            <Link to="/cgu" className="hover:text-stone-50">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
