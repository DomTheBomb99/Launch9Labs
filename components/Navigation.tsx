'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Launch9Logo from './Launch9Logo'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/products', label: 'Products' },
  { href: '/updates', label: 'Updates' },
  { href: '/about', label: 'About' },
]

export default function Navigation({ siteName = 'LAUNCH9 LABS' }: { siteName?: string }) {
  const pathname = usePathname()
  if (pathname.startsWith('/admin')) return null

  return (
    <header className="siteNav shell" data-public-chrome>
      <Link className="brand" href="/" aria-label={`${siteName} home`}>
        <Launch9Logo className="brandLogo" />
        <span>{siteName}</span>
      </Link>
      <nav className="navLinks" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="navCta" href="/contact">
        Start a conversation <span aria-hidden="true">↗</span>
      </Link>
    </header>
  )
}
