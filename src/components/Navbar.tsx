import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { BRAND } from "../lib/content"

const LINKS = [
  { href: "#avantages", label: "Avantages" },
  { href: "#cycle", label: "Le cycle" },
  { href: "#rejoindre", label: "Rejoindre BanToo" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [scrolled, setScrolled] = useState(variant === "solid")

  useEffect(() => {
    if (variant === "solid") return
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-stone-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass-dark shadow-lg shadow-bamboo-950/20" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-bronze-400/40 font-display text-sm font-semibold">
            B
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-50/75 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-stone-50">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#telecharger"
          className="rounded-full bg-bamboo-600 px-4 py-2 text-sm font-semibold text-stone-50 shadow-sm shadow-bamboo-950/30 transition-transform hover:scale-105 hover:bg-bamboo-500 active:scale-95"
        >
          Télécharger l'app
        </a>
      </div>
    </motion.header>
  )
}
