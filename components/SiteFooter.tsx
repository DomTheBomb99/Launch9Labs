import Link from 'next/link'
import Launch9Logo from './Launch9Logo'

type Props = {
  siteName?: string
  tagline?: string
  socials?: Record<string, string> | null
}

export default function SiteFooter({ siteName = 'Launch9 Labs', tagline = 'Independent software studio.', socials = {} }: Props) {
  return (
    <footer className="siteFooter shell" data-public-chrome>
      <div>
        <Link className="brand" href="/" aria-label={`${siteName} home`}>
          <Launch9Logo className="brandLogo" />
          <span>{siteName}</span>
        </Link>
        <p>{tagline}</p>
      </div>
      <nav className="footerLinks" aria-label="Footer navigation">
        <Link href="/projects">Projects</Link>
        <Link href="/products">Products</Link>
        <Link href="/updates">Updates</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {socials?.github && <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
        {socials?.x && <a href={socials.x} target="_blank" rel="noreferrer">X ↗</a>}
        {socials?.instagram && <a href={socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}
      </nav>
      <small>© 2026 {siteName}</small>
    </footer>
  )
}
