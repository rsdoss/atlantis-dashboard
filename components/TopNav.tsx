'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon } from './icons'

export function TopNav() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])
  return (
    <header className="border-b border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="container-padded h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Pool Dashboard</Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-slate-600 dark:text-slate-300">Proline Atlantis 15×30</span>
          <button
            aria-label="Toggle dark mode"
            className="btn-outline"
            onClick={() => {
              const next = !document.documentElement.classList.contains('dark')
              document.documentElement.classList.toggle('dark', next)
              setDark(next)
            }}
          >
            <Moon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
