import { ErrorShell } from "../components/ErrorShell"
import { IconSignalOff } from "../components/icons"

export default function Offline() {
  return (
    <ErrorShell
      code="Hors ligne"
      icon={IconSignalOff}
      title="Pas de connexion."
      body="Impossible de joindre BanToo pour le moment. Vérifiez votre connexion internet, votre commande reste enregistrée."
    />
  )
}
