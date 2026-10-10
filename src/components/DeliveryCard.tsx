import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const STATUSES = ["Commande reçue", "Linge collecté", "En lavage", "Repassage", "Livré 🎉"]

export function DeliveryCard({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const [step, setStep] = useState(STATUSES.length - 1)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => {
      setStep((s) => (s + 1) % STATUSES.length)
    }, 1900)
    return () => clearInterval(id)
  }, [prefersReducedMotion])

  const isDone = step === STATUSES.length - 1

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -24, scale: 0.92 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
      className={`relative w-full max-w-xs overflow-visible rounded-3xl bg-white p-6 shadow-xl shadow-bamboo-950/10 ring-1 ring-bamboo-950/5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-bamboo-600">Commande #BT-2461</p>
          <p className="font-display text-lg font-bold text-bamboo-950">Carte de livraison</p>
        </div>
        <motion.span
          animate={isDone && !prefersReducedMotion ? { rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] } : undefined}
          transition={{ duration: 0.6 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-bamboo-100 text-lg"
        >
          🧺
        </motion.span>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-bamboo-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-bamboo-400 to-bamboo-600"
          animate={{ width: `${((step + 1) / STATUSES.length) * 100}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <ul className="mt-4 space-y-2">
        {STATUSES.map((label, i) => (
          <li key={label} className="flex items-center gap-2 text-sm">
            <motion.span
              animate={{
                backgroundColor: i <= step ? "var(--color-bamboo-500)" : "var(--color-bamboo-100)",
                scale: i === step ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 0.4 }}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-white"
            >
              {i <= step ? "✓" : ""}
            </motion.span>
            <span className={i <= step ? "text-bamboo-950" : "text-bamboo-900/40"}>{label}</span>
          </li>
        ))}
      </ul>

      <AnimatePresence>{isDone && !prefersReducedMotion && <ConfettiBurst />}</AnimatePresence>
    </motion.div>
  )
}

function ConfettiBurst() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 240,
        y: -(Math.random() * 170 + 50),
        rotate: Math.random() * 360,
        color: ["var(--color-bamboo-400)", "var(--color-gold-400)", "var(--color-bamboo-600)"][i % 3],
      })),
    [],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{ opacity: 0, x: p.x, y: p.y, rotate: p.rotate }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/3 h-2 w-2 rounded-sm"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}
