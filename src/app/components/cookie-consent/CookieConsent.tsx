'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import styles from './cookie-consent.module.css'

const GA_ID = 'G-J7HPY78EJL'
const STORAGE_KEY = 'dm-cookie-consent'
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182 // ~6 mois (recommandation CNIL)

type ConsentValue = 'granted' | 'denied'

function readStoredConsent(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { value: ConsentValue; date: number }
    if (!parsed.value || !parsed.date) return null
    if (Date.now() - parsed.date > CONSENT_MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed.value
  } catch {
    return null
  }
}

function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: Date.now() }))
  } catch {
    // stockage indisponible : le bandeau réapparaîtra à la prochaine visite
  }
}

function clearGaCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (name === '_ga' || name.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`
      document.cookie = `${name}=; Max-Age=0; path=/`
    }
  })
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = readStoredConsent()
    setConsent(stored)
    setShowBanner(stored === null)

    const reopen = () => setShowBanner(true)
    window.addEventListener('dm-open-cookie-settings', reopen)
    return () => window.removeEventListener('dm-open-cookie-settings', reopen)
  }, [])

  const accept = () => {
    storeConsent('granted')
    setConsent('granted')
    setShowBanner(false)
  }

  const deny = () => {
    storeConsent('denied')
    setConsent('denied')
    setShowBanner(false)
    clearGaCookies()
  }

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Gestion des cookies">
          <div className={styles.text}>
            <p className={styles.title}>Votre vie privée nous importe 🍪</p>
            <p>
              Nous utilisons Google Analytics pour mesurer l’audience du site. Ces cookies ne sont
              déposés qu’avec votre accord, que vous pouvez retirer à tout moment.{' '}
              <Link href="/politique-de-confidentialite#cookies">En savoir plus</Link>
            </p>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={deny}>
              Refuser
            </button>
            <button type="button" className={styles.button} onClick={accept}>
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  )
}
