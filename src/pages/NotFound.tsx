import { ErrorShell } from "../components/ErrorShell"
import { IconBasket } from "../components/icons"

export default function NotFound() {
  return (
    <ErrorShell
      code="404"
      icon={IconBasket}
      title="Ce linge n'existe pas."
      body="La page que vous cherchez a été égarée entre deux machines à laver. Vérifiez l'adresse ou retournez à l'accueil."
    />
  )
}
