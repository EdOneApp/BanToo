import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { IconBasket, IconCard, IconCheck, IconChat, IconHome, IconScooter, IconShirt } from "./icons"

export function PhoneMockup({
  children,
  className = "",
  delay = 0,
  float = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  float?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={`${float ? "animate-float" : ""} relative mx-auto w-[260px] rounded-[2.5rem] border-[8px] border-bamboo-950 bg-bamboo-950 shadow-2xl shadow-bamboo-950/50 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-bamboo-950" />
      <div className="relative h-[540px] overflow-hidden rounded-[2rem] bg-stone-50">{children}</div>
    </motion.div>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pb-1 pt-3 font-mono-tnum text-[10px] text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        <span>100%</span>
      </span>
    </div>
  )
}

export function TrackingScreen() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="flex h-full flex-col bg-stone-50 text-ink">
      <StatusBar />

      <div className="relative mx-3 mt-2 h-44 overflow-hidden rounded-2xl bg-bamboo-100">
        <svg viewBox="0 0 260 180" className="h-full w-full opacity-80">
          <motion.path
            d="M10 150 C 60 120, 80 90, 130 80 S 200 40, 250 20"
            fill="none"
            stroke="var(--color-bamboo-600)"
            strokeWidth="3"
            strokeDasharray="2 9"
            strokeLinecap="round"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -22] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <motion.div
          className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bamboo-950 text-stone-50 shadow-md"
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
          <IconScooter className="h-4 w-4" />
        </motion.div>
        <div className="absolute left-3 top-3 rounded-full bg-stone-50 px-2.5 py-1 font-mono-tnum text-[9px] font-medium tracking-wide text-bamboo-700 shadow">
          COLLECTE EN COURS
        </div>
        <span className="absolute right-6 top-4 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-bamboo-600" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-bamboo-700" />
        </span>
      </div>

      <div className="mx-3 mt-3 rounded-2xl bg-white p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">Sac de linge collecté</p>
          <IconBasket className="h-4 w-4 text-bamboo-600" />
        </div>
        <div className="mt-2.5 grid grid-cols-4 gap-1 font-mono-tnum text-[8px] text-ink-muted">
          <span className="text-bamboo-700">Confirmée</span>
          <span className="text-center text-bamboo-700">Collectée</span>
          <span className="text-center">Lavage</span>
          <span className="text-right">Livrée</span>
        </div>
        <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-stone-200">
          <div className="h-full w-2/5 rounded-full bg-bamboo-600" />
        </div>
      </div>

      <div className="mx-3 mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bamboo-100 text-sm font-semibold text-bamboo-800">
          A
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold">Awa K.</p>
          <p className="font-mono-tnum text-[10px] text-ink-muted">Coursière · 4,9</p>
        </div>
        <div className="rounded-full bg-bamboo-700 px-2.5 py-1 font-mono-tnum text-[9px] font-semibold text-stone-50">
          WAVE
        </div>
      </div>

      <div className="mx-3 mt-2 rounded-2xl bg-bamboo-950 p-3 text-stone-50/90">
        <p className="font-mono-tnum text-[9px] tracking-wide opacity-60">SAC #BT-2461 · SCELLÉ</p>
        <p className="mt-0.5 text-xs font-semibold">Nettoyage en cours</p>
      </div>
    </div>
  )
}

export function OrderScreen() {
  return (
    <div className="flex h-full flex-col bg-stone-50 px-4 pb-4 pt-6 text-ink">
      <div className="flex items-center justify-between font-mono-tnum text-[10px]">
        <span>9:41</span>
        <span>100%</span>
      </div>
      <p className="mt-3 font-mono-tnum text-[10px] tracking-wide text-bamboo-700">COLLECTER À</p>
      <p className="text-sm font-semibold">Riviera 2, Abidjan</p>

      <div className="mt-4 rounded-2xl bg-bamboo-950 p-4 text-stone-50">
        <p className="font-display text-lg font-semibold leading-tight">Linge sale ?</p>
        <p className="text-sm text-stone-50/70">On s'en occupe.</p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-medium">
        {[
          { icon: IconBasket, label: "Lavage" },
          { icon: IconShirt, label: "Pressing" },
          { icon: IconHome, label: "Maison" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white py-3 shadow-sm">
            <Icon className="h-4 w-4 text-bamboo-700" />
            {label}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold text-ink">Pressings populaires</p>
      <div className="mt-2 space-y-2">
        {[
          [IconBasket, "Clean&Go Riviera", "Lavage express", "4,8 · 24h · dès 2 000 F"],
          [IconShirt, "Pressing Étoile", "Nettoyage à sec", "4,7 · 48h · dès 3 500 F"],
        ].map(([Icon, name, type, meta]) => {
          const IconComp = Icon as typeof IconBasket
          return (
            <div key={name as string} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bamboo-100">
                <IconComp className="h-4 w-4 text-bamboo-700" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold leading-tight">{name as string}</p>
                <p className="text-[10px] leading-tight text-ink-muted">{type as string}</p>
              </div>
              <p className="font-mono-tnum text-[9px] text-bamboo-700">{meta as string}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-stone-50 text-ink">
      <StatusBar />
      <div className="mt-2 flex items-center gap-2.5 border-b border-stone-200 px-4 pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bamboo-100 text-xs font-semibold text-bamboo-800">
          A
        </div>
        <div>
          <p className="text-xs font-semibold">Awa, coursière</p>
          <p className="text-[10px] text-bamboo-600">En ligne</p>
        </div>
        <IconChat className="ml-auto h-4 w-4 text-ink-muted" />
      </div>

      <div className="flex-1 space-y-2.5 overflow-hidden px-4 py-3">
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs shadow-sm">
          Bonjour ! Je suis en route, j'arrive dans 6 minutes.
        </div>
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-bamboo-700 px-3 py-2 text-xs text-stone-50 shadow-sm">
          Parfait, je laisse le sac devant la porte 🙂
        </div>
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs shadow-sm">
          Reçu, à tout de suite.
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-ink-muted">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bamboo-500" />
          Awa écrit…
        </div>
      </div>

      <div className="border-t border-stone-200 px-4 py-3">
        <div className="rounded-full bg-white px-4 py-2.5 text-[11px] text-ink-muted shadow-sm">Écrire un message…</div>
      </div>
    </div>
  )
}

export function PaymentScreen() {
  return (
    <div className="flex h-full flex-col bg-stone-50 px-4 pb-4 pt-6 text-ink">
      <div className="flex items-center justify-between font-mono-tnum text-[10px]">
        <span>9:41</span>
        <span>100%</span>
      </div>
      <p className="mt-4 font-mono-tnum text-[10px] tracking-wide text-bamboo-700">RÉCAPITULATIF</p>

      <div className="mt-2 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink-muted">Lavage &amp; pliage (4 kg)</span>
          <span className="font-mono-tnum">4 000 F</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-ink-muted">Repassage (3 pièces)</span>
          <span className="font-mono-tnum">1 500 F</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-ink-muted">Collecte &amp; livraison</span>
          <span className="font-mono-tnum">Incluses</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-stone-200 pt-3 text-sm font-semibold">
          <span>Total</span>
          <span className="font-mono-tnum text-bamboo-700">5 500 F</span>
        </div>
      </div>

      <p className="mt-5 font-mono-tnum text-[10px] tracking-wide text-bamboo-700">PAYER AVEC</p>
      <div className="mt-2 flex items-center gap-2.5 rounded-xl bg-bamboo-950 p-3 text-stone-50">
        <IconCard className="h-5 w-5" />
        <div className="flex-1">
          <p className="text-xs font-semibold">Wave</p>
          <p className="font-mono-tnum text-[10px] opacity-60">•••• 42</p>
        </div>
        <IconCheck className="h-4 w-4 text-bamboo-400" />
      </div>

      <button className="mt-5 w-full rounded-full bg-bamboo-700 py-3 text-xs font-semibold text-stone-50">
        Confirmer le paiement
      </button>
    </div>
  )
}
