import './globals.css'
import type { Metadata } from 'next'
import { TopNav } from '@/components/TopNav'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Pool Dashboard • Proline Atlantis 15'×30'",
  description: 'Home dashboard for a Proline Atlantis 15×30 oval above-ground pool',
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TopNav />
        <main className="container-padded py-6 md:py-8">
          <Breadcrumbs />
          <div className="mt-3">{children}</div>
        </main>
      </body>
    </html>
  )
}
