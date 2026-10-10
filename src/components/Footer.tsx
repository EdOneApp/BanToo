import { useMemo } from "react"
import { Link } from "react-router-dom"
import { BRAND } from "../lib/content"

const COLUMNS = [
  {
    title: "Application",
    links: [
      { label: "App Store", href: "#telecharger" },
      { label: "Google Play", href: "#telecharger" },
      { label: "Comment ça marche", href: "#comment" },
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
    <footer className="relative overflow-hidden bg-bamboo-950 pt-20 text-paper-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl font-bold sm:text-3xl">Une tache ?</p>
            <p className="font-display text-2xl font-bold text-bamboo-400 sm:text-3xl">Une app.</p>
          </div>
          <div className="flex gap-3">
            <a href="#telecharger" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-bamboo-950">
              Bientôt sur l'App Store
            </a>
            <a href="#telecharger" className="rounded-full bg-bamboo-600 px-5 py-2.5 text-sm font-semibold text-white">
              Disponible sur Google Play
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-paper-100/40">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-paper-100/70 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-paper-100/40 sm:flex-row">
          <p>
            © {year} BanToo. {BRAND.city}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-white">
              Confidentialité
            </Link>
            <Link to="/cgu" className="hover:text-white">
              CGU
            </Link>
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-6 w-full text-bamboo-500/20"
      >
        <path
          d="M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20 T 500 20 T 600 20 T 700 20 T 800 20 T 900 20 T 1000 20 T 1100 20 T 1200 20 V40 H0 Z"
          fill="currentColor"
        />
      </svg>
    </footer>
  )
}
