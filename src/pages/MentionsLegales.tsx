import { LegalLayout } from "../components/LegalLayout"
import { BRAND } from "../lib/content"

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="10 octobre 2026">
      <p>
        Le site et l'application {BRAND.name} sont édités par BanToo SARL, société de droit ivoirien, dont le
        siège social est situé à {BRAND.city}.
      </p>

      <h2>Éditeur</h2>
      <p>
        BanToo SARL — Service de pressing et blanchisserie à domicile.
        <br />
        Contact : {BRAND.email}
        <br />
        Téléphone : {BRAND.phoneDisplay}
      </p>

      <h2>Directeur de publication</h2>
      <p>Le représentant légal de BanToo SARL.</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par un prestataire d'infrastructure cloud. Les coordonnées complètes de
        l'hébergeur sont disponibles sur simple demande auprès de {BRAND.email}.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, visuels, logo, interface) est la propriété de
        BanToo SARL, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à ces mentions légales, écrivez-nous à {BRAND.email} ou sur WhatsApp au{" "}
        {BRAND.whatsappDisplay}.
      </p>
    </LegalLayout>
  )
}
