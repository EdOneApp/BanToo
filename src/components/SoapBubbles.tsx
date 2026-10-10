import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function SoapBubbles({
  count = 10,
  className = "",
  tone = "light",
}: {
  count?: number
  className?: string
  tone?: "light" | "dark"
}) {
  const prefersReducedMotion = useReducedMotion()

  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 4 + Math.random() * 92,
        size: 6 + Math.random() * 20,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 60,
      })),
    [count],
  )

  const ring = tone === "light" ? "bg-white/30 ring-white/50" : "bg-bamboo-300/20 ring-bamboo-200/40"

  if (prefersReducedMotion) return null

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          className={`absolute rounded-full ring-1 backdrop-blur-[1px] ${ring}`}
          style={{ left: `${b.left}%`, width: b.size, height: b.size, bottom: -24 }}
          animate={{
            y: [0, -420],
            x: [0, b.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.1, 0.85, 1],
          }}
        />
      ))}
    </div>
  )
}
