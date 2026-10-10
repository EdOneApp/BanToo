export function MarqueeStrip({
  items,
  tone = "dark",
  reverse = false,
}: {
  items: string[]
  tone?: "dark" | "light"
  reverse?: boolean
}) {
  const loop = [...items, ...items]
  const bg = tone === "dark" ? "bg-bamboo-950 text-paper-100" : "bg-bamboo-500 text-white"

  return (
    <div className={`overflow-hidden py-3 ${bg}`}>
      <div className={`flex w-max gap-8 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            {item}
            <span className="text-base opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
