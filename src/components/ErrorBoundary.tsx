import { Component, type ErrorInfo, type ReactNode } from "react"
import { ErrorShell } from "./ErrorShell"
import { IconGear } from "./icons"
import { BRAND } from "../lib/content"

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("BanToo render error:", error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorShell
          code="500"
          icon={IconGear}
          title="Petit accroc dans la machine."
          body="Une erreur inattendue s'est produite. Notre équipe technique a été prévenue. Rechargez la page ou revenez à l'accueil."
        >
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
          >
            Signaler le problème
          </a>
        </ErrorShell>
      )
    }
    return this.props.children
  }
}
