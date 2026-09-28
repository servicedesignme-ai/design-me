import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Design Me</h2>
      <div className={styles.legal}>
        <p>Tous droits réservés. © Design-Me</p>
        <nav className={styles.links} aria-label="Informations légales">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          <a href="/cgv-design-me.pdf" target="_blank" rel="noopener noreferrer">
            CGV
          </a>
          <Link href="/politique-de-confidentialite#cookies">Gestion des cookies</Link>
          <span>Services exclusivement destinés aux professionnels</span>
        </nav>
      </div>
    </footer>
  )
}
