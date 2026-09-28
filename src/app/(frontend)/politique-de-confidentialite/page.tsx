import styles from '@/app/components/legal-page/legal-page.module.css'
import AudienceOptOut from '@/app/components/legal-page/AudienceOptOut'

export const metadata = {
  title: 'Politique de confidentialité | Agence Design-me',
  description: 'Politique de confidentialité et gestion des cookies du site DESIGN-ME.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONT_URL}/politique-de-confidentialite`,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article className={styles.legalPage}>
      <h1>
        Politique de <span>confidentialité</span>
      </h1>

      <section>
        <h2>Responsable du traitement</h2>
        <p>DESIGN-ME SAS, 14 rue Léo Lagrange, 35131 Chartres-de-Bretagne.</p>
        <p>
          Contact : <a href="mailto:contact@agence-designme.com">contact@agence-designme.com</a>
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Via le formulaire de demande de devis : nom, adresse e-mail, numéro de téléphone et
          contenu du message.
        </p>
      </section>

      <section>
        <h2>Finalités et base légale</h2>
        <p>
          Ces données servent uniquement à répondre à votre demande de devis et à assurer le suivi
          de la relation commerciale. Le traitement repose sur l’exécution de mesures
          précontractuelles prises à votre demande.
        </p>
      </section>

      <section>
        <h2>Destinataires</h2>
        <p>
          Les données sont destinées aux seuls services de DESIGN-ME. Le site est hébergé par OVH
          SAS (2 rue Kellermann, 59100 Roubaix). Les demandes envoyées via le formulaire sont
          transmises par e-mail à notre messagerie, hébergée par o2switch en France. Vos données ne
          sont jamais vendues ni cédées à des tiers.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les données sont conservées 3 ans à compter du dernier contact si aucun contrat n’est
          conclu, puis supprimées. Si un contrat est conclu, elles sont conservées pendant toute la
          durée de la relation commerciale, puis pendant les durées de conservation imposées par la
          loi.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation,
          d’opposition et de portabilité de vos données. Pour exercer ces droits, écrivez à{' '}
          <a href="mailto:contact@agence-designme.com">contact@agence-designme.com</a> ou à
          l’adresse du siège social. Vous pouvez également introduire une réclamation auprès de la
          CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>
          ).
        </p>
      </section>

      <section id="cookies">
        <h2>Cookies et mesure d’audience</h2>
        <p>
          Le site n’utilise aucun cookie publicitaire ni de suivi. Seuls des éléments strictement
          nécessaires à son fonctionnement peuvent être utilisés ; ils ne nécessitent pas votre
          consentement.
        </p>
        <p>
          Pour mesurer l’audience du site et en améliorer le contenu, nous utilisons Umami, un outil
          de statistiques installé sur notre propre serveur. Umami ne dépose aucun cookie, ne
          collecte que des statistiques anonymes (pages vues, provenance, type d’appareil) et ne
          permet pas de suivre votre navigation sur d’autres sites. Ces données ne sont partagées
          avec aucun tiers.
        </p>
        <p>Vous pouvez à tout moment vous opposer à cette mesure d’audience sur ce navigateur :</p>
        <AudienceOptOut />
      </section>
    </article>
  )
}
