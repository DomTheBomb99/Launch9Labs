'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import SiteFooter from './SiteFooter'
import PageShell from './PageShell'

type Props = {
  children: ReactNode
  siteName?: string
  tagline?: string
  socials?: Record<string, string> | null
}

export default function PublicChrome({ children, siteName, tagline, socials }: Props) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) return <>{children}</>

  return (
    <>
      <Navigation siteName={siteName} />
      <PageShell>{children}</PageShell>
      <SiteFooter siteName={siteName} tagline={tagline} socials={socials} />
    </>
  )
}
