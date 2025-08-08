'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TITLES: Record<string, string> = {
  water: 'Water',
  filter: 'Filter',
  pump: 'Pump',
  structure: 'Structure',
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/')
    const title = TITLES[seg] ?? seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { href, title, isLast: i === segments.length - 1 }
  })

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600 dark:text-slate-300">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="underline-offset-2 hover:underline">Home</Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.href} className="flex items-center gap-2">
            <span className="text-slate-400">/</span>
            {c.isLast ? (
              <span aria-current="page">{c.title}</span>
            ) : (
              <Link href={c.href} className="underline-offset-2 hover:underline">{c.title}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

