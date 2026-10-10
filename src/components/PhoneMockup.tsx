import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function PhoneMockup({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={`animate-float relative mx-auto w-[260px] rounded-[2.5rem] border-[8px] border-bamboo-950 bg-bamboo-950 shadow-2xl shadow-bamboo-900/30 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-bamboo-950" />
      <div className="relative h-[540px] overflow-hidden rounded-[2rem] bg-paper-50">{children}</div>
    </motion.div>
  )
}

export function TrackingScreen() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="flex h-full flex-col bg-paper-50 text-bamboo-950">
      <div className="flex items-center justify-between px-4 pb-1 pt-3 text-[10px] font-medium">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-bamboo-950" />
          <span>100%</span>
        </span>
      </div>

      <div className="relative mx-3 mt-2 h-44 overflow-hidden rounded-2xl bg-bamboo-100">
        <svg viewBox="0 0 260 180" className="h-full w-full opacity-70">
          <motion.path
            d="M10 150 C 60 120, 80 90, 130 80 S 200 40, 250 20"
            fill="none"
            stroke="var(--color-bamboo-500)"
            strokeWidth="4"
            strokeDasharray="2 10"
            strokeLinecap="round"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -24] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <motion.div
          className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bamboo-700 text-[10px] shadow-md"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  left: ["4%", "27%", "50%", "73%", "96%"],
                  top: ["83%", "66%", "50%", "33%", "11%"],
                }
          }
          transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        >
          🛵
        </motion.div>
        <div className="absolute left-3 top-3 rounded-full bg-paper-50 px-2 py-1 text-[9px] font-semibold text-bamboo-700 shadow">
          Collecte en cours
        </div>
        <span className="absolute right-6 top-4 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-bamboo-500" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-bamboo-600" />
        </span>
        <div className="absolute bottom-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-bamboo-950 text-paper-50 shadow">
          🧺
        </div>
      </div>

      <div className="mx-3 mt-3 rounded-2xl bg-white p-3 shadow-sm">
        <p className="text-[11px] font-semibold text-bamboo-700">Il arrive !</p>
        <p className="font-display text-sm font-semibold">Sac de linge collecté 🧺</p>
        <div className="mt-2 flex items-center justify-between text-[10px] text-bamboo-900/60">
          <span>Confirmée</span>
          <span className="text-bamboo-600">Collectée</span>
          <span>En lavage</span>
          <span>Livrée</span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-bamboo-100">
          <div className="h-full w-2/5 rounded-full bg-bamboo-500" />
        </div>
      </div>

      <div className="mx-3 mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bamboo-200 text-sm font-semibold text-bamboo-800">
          A
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold">Awa K.</p>
          <p className="text-[10px] text-bamboo-900/50">Coursière BanToo · 4,9</p>
        </div>
        <div className="rounded-full bg-bamboo-600 px-2 py-1 text-[10px] font-semibold text-white">Wave</div>
      </div>

      <div className="mx-3 mt-2 rounded-2xl bg-bamboo-950 p-3 text-paper-100">
        <p className="text-[10px] opacity-70">Sac scellé et étiqueté</p>
        <p className="font-display text-xs font-semibold">Nettoyage en cours</p>
      </div>
    </div>
  )
}

export function OrderScreen() {
  return (
    <div className="flex h-full flex-col bg-paper-50 px-4 pb-4 pt-6 text-bamboo-950">
      <div className="flex items-center justify-between text-[10px] font-medium">
        <span>9:41</span>
        <span>100%</span>
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-wide text-bamboo-600">Collecter à</p>
      <p className="text-sm font-semibold">Riviera 2, Abidjan</p>

      <div className="mt-4 rounded-2xl bg-bamboo-950 p-4 text-paper-100">
        <p className="font-display text-base font-semibold">Linge sale ?</p>
        <p className="text-sm text-paper-200">On s'en occupe.</p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-medium">
        {["🧺 Lavage", "👔 Pressing", "🛏️ Maison"].map((s) => (
          <div key={s} className="rounded-xl bg-white py-3 shadow-sm">
            {s}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold text-bamboo-900">Pressings populaires</p>
      <div className="mt-2 space-y-2">
        {[
          ["🧺", "Clean&Go Riviera", "Lavage express", "4,8 · 24h · dès 2 000 F"],
          ["👔", "Pressing Étoile", "Nettoyage à sec", "4,7 · 48h · dès 3 500 F"],
        ].map(([icon, name, type, meta]) => (
          <div key={name} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bamboo-100 text-base">{icon}</div>
            <div className="flex-1">
              <p className="text-xs font-semibold leading-tight">{name}</p>
              <p className="text-[10px] text-bamboo-900/50 leading-tight">{type}</p>
            </div>
            <p className="text-[9px] font-medium text-bamboo-700">{meta}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
