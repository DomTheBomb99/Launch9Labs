import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', background: '#050505', color: '#F5F5F2', display: 'grid', placeItems: 'center', padding: '32px' }}>
      <section style={{ width: '100%', maxWidth: '720px' }}>
        <p style={{ margin: 0, color: '#92959A', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase' }}>404 / Not found</p>
        <h1 style={{ margin: '28px 0 16px', fontSize: 'clamp(48px, 8vw, 88px)', lineHeight: .95, letterSpacing: '-.055em' }}>Wrong direction.</h1>
        <p style={{ maxWidth: '520px', margin: 0, color: '#92959A', fontSize: '16px', lineHeight: 1.7 }}>That page doesn't exist or has moved. Head back to Launch9 Labs and keep exploring.</p>
        <Link href="/" style={{ display: 'inline-flex', marginTop: '36px', color: '#F5F5F2', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,.35)', paddingBottom: '8px' }}>Return home →</Link>
      </section>
    </main>
  )
}
