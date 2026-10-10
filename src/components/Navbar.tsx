import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { BRAND } from "../lib/content"

const LINKS = [
  { href: "#avantages", label: "Avantages" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#rejoindre", label: "Rejoindre BanToo" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-bamboo-950/5" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-bamboo-600 font-display text-sm font-bold text-white">
            Bt
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-bamboo-900/80 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-bamboo-700">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#telecharger"
          className="rounded-full bg-bamboo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-bamboo-600/30 transition-transform hover:scale-105 active:scale-95"
        >
          Télécharger l'app
        </a>
      </div>
    </motion.header>
  )
}
