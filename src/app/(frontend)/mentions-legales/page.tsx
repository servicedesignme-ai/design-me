import Link from 'next/link'
import styles from '@/app/components/legal-page/legal-page.module.css'

export const metadata = {
  title: 'Mentions légales | Agence Design-me',
  description: 'Mentions légales du site de l’agence web DESIGN-ME.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONT_URL}/mentions-legales`,
  },
}

export default function MentionsLegalesPage() {
  return (
    <article className={styles.legalPage}>
      <h1>
        Mentions <span>légales</span>
      </h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>DESIGN-ME, SAS au capital de 1 000 €</p>
        <p>Siège social : 14 rue Léo Lagrange, 35131 Chartres-de-Bretagne</p>
        <p>RCS Rennes 981 591 183, SIRET 981 591 183 00042</p>
        <p>N° TVA intracommunautaire : FR31981591183</p>
        <p>
          Téléphone : <a href="tel:+33629377972">06 29 37 79 72</a> ou{' '}
          <a href="tel:+33767750253">07 67 75 02 53</a>
        </p>
        <p>
          E-mail : <a href="mailto:contact@agence-designme.com">contact@agence-designme.com</a>
        </p>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>Edern Quere, Président</p>
      </section>

      <section>
        <h2>Hébergeur</h2>
        <p>OVH SAS</p>
        <p>2 rue Kellermann, 59100 Roubaix</p>
        <p>Téléphone : 1007</p>
        <p>
          <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">
            www.ovhcloud.com
          </a>
        </p>
      </section>

      <section>
        <h2>Clientèle</h2>
        <p>
          Les services proposés sur ce site sont exclusivement destinés aux professionnels
          (entreprises, artisans, commerçants, professions libérales) agissant dans le cadre de leur
          activité. Nos conditions générales de vente sont consultables{' '}
          <a href="/cgv-design-me.pdf" target="_blank" rel="noopener noreferrer">
            ici
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus du site (textes, visuels, logos, réalisations présentées) est la
          propriété de DESIGN-ME ou de ses clients, qui en ont autorisé la diffusion. Toute
          reproduction sans autorisation préalable est interdite.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Voir notre <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
        </p>
      </section>
    </article>
  )
}
