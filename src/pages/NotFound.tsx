import { ErrorShell } from "../components/ErrorShell"

export default function NotFound() {
  return (
    <ErrorShell
      code="404"
      emoji="🧺"
      title="Ce linge n'existe pas."
      body="La page que vous cherchez a été égarée entre deux machines à laver. Vérifiez l'adresse ou retournez à l'accueil."
    />
  )
}
