import { ErrorShell } from "../components/ErrorShell"

export default function Offline() {
  return (
    <ErrorShell
      code="Hors ligne"
      emoji="📡"
      title="Pas de connexion."
      body="Impossible de joindre BanToo pour le moment. Vérifiez votre connexion internet, votre commande reste enregistrée."
    />
  )
}
