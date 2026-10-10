type LiquidBlobProps = {
  className?: string
  tone?: "bamboo" | "gold" | "paper"
  reverse?: boolean
}

const TONES: Record<NonNullable<LiquidBlobProps["tone"]>, string> = {
  bamboo: "radial-gradient(circle at 30% 30%, var(--color-bamboo-400), var(--color-bamboo-700) 70%)",
  gold: "radial-gradient(circle at 35% 35%, var(--color-gold-400), var(--color-bamboo-600) 75%)",
  paper: "radial-gradient(circle at 35% 35%, var(--color-paper-50), var(--color-bamboo-200) 80%)",
}

export function LiquidBlob({ className = "", tone = "bamboo", reverse = false }: LiquidBlobProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute blur-3xl opacity-60 ${reverse ? "animate-blob-slow" : "animate-blob"} ${className}`}
      style={{ background: TONES[tone] }}
    />
  )
}
