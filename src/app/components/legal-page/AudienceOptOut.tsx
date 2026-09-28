'use client'

import { useEffect, useState } from 'react'

const KEY = 'umami.disabled'

export default function AudienceOptOut() {
  const [disabled, setDisabled] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      setDisabled(window.localStorage.getItem(KEY) === '1')
    } catch {
      setDisabled(false)
    }
  }, [])

  const toggle = () => {
    try {
      if (disabled) {
        window.localStorage.removeItem(KEY)
        setDisabled(false)
      } else {
        window.localStorage.setItem(KEY, '1')
        setDisabled(true)
      }
    } catch {
      // stockage indisponible : on ne fait rien
    }
  }

  if (disabled === null) return null

  return (
    <p>
      Statut actuel :{' '}
      <strong>{disabled ? 'mesure d’audience désactivée' : 'mesure d’audience active'}</strong>.{' '}
      <button
        type="button"
        onClick={toggle}
        style={{
          all: 'unset',
          cursor: 'pointer',
          textDecoration: 'underline',
          color: '#fff',
          fontWeight: 700,
        }}
      >
        {disabled ? 'Réactiver la mesure d’audience' : 'Désactiver la mesure d’audience'}
      </button>
    </p>
  )
}
