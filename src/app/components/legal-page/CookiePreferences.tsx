'use client'

import { useEffect, useState } from 'react'

const KEY = 'dm-cookie-consent'

export default function CookiePreferences() {
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY)
      const value = raw ? (JSON.parse(raw) as { value?: string }).value : null
      setStatus(value ?? 'none')
    } catch {
      setStatus('none')
    }
  }, [])

  const openBanner = () => {
    window.dispatchEvent(new Event('dm-open-cookie-settings'))
  }

  if (status === null) return null

  return (
    <p>
      Statut actuel :{' '}
      <strong>
        {status === 'granted'
          ? 'cookies de mesure d’audience acceptés'
          : status === 'denied'
            ? 'cookies de mesure d’audience refusés'
            : 'aucun choix enregistré'}
      </strong>
      .{' '}
      <button
        type="button"
        onClick={openBanner}
        style={{
          all: 'unset',
          cursor: 'pointer',
          textDecoration: 'underline',
          color: '#fff',
          fontWeight: 700,
        }}
      >
        Modifier mon choix
      </button>
    </p>
  )
}
