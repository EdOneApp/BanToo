import type { SVGProps } from "react"

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function IconBasket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10h16l-1.5 9.2a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 10Z" />
      <path d="M8 10 9.5 4h5L16 10" />
      <path d="M9 14v3M12 14v3M15 14v3" />
    </svg>
  )
}

export function IconShirt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4 5 6.5 3 9l3 2V20h12V11l3-2-2-2.5L16 4a4 4 0 0 1-8 0Z" />
    </svg>
  )
}

export function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  )
}

export function IconMapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}

export function IconCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2.4" />
      <path d="M3 10h18" />
      <path d="M7 14.5h4" />
    </svg>
  )
}

export function IconScooter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M6 18h6l2-7h3" />
      <path d="M12 11h3.5L19 9" />
      <path d="M8 6h3" />
    </svg>
  )
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  )
}

export function IconGear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.8 6.2l-1.7 1.7M7.9 16.1l-1.7 1.7M17.8 17.8l-1.7-1.7M7.9 7.9 6.2 6.2" />
    </svg>
  )
}

export function IconSignalOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l18 18" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M5.5 13.5a9.2 9.2 0 0 1 3-2.1M18.5 13.5a9.2 9.2 0 0 0-3.7-2.4" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  )
}

export function IconArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}
