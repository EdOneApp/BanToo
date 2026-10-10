import { useRef, type MouseEvent, type ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

export function MagneticButton({
  href,
  className = "",
  children,
  strength = 16,
  target,
  rel,
}: {
  href: string
  className?: string
  children: ReactNode
  strength?: number
  target?: string
  rel?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength)
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: sx, y: sy }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}
