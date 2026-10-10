import { motion, useReducedMotion } from "framer-motion"

export function AuroraBackground({
  className = "",
  tone = "dark",
}: {
  className?: string
  tone?: "dark" | "light"
}) {
  const prefersReducedMotion = useReducedMotion()
  const base = tone === "dark" ? "var(--color-bamboo-950)" : "var(--color-stone-100)"
  const wash =
    tone === "dark"
      ? "conic-gradient(from 0deg, var(--color-bamboo-900), var(--color-bamboo-700), var(--color-bronze-600), var(--color-bamboo-900))"
      : "conic-gradient(from 0deg, var(--color-stone-100), var(--color-bamboo-100), var(--color-bronze-300), var(--color-stone-100))"

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ backgroundColor: base }}>
      <motion.div
        className="absolute -inset-[35%] opacity-[0.35] blur-[90px]"
        style={{ background: wash }}
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />
      <div className="grain absolute inset-0" />
    </div>
  )
}
