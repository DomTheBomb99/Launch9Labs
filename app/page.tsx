export default function Home() {
  return (
    <main>
      <header style={{ borderBottom: '1px solid var(--line)', padding: '20px 28px' }}>
        <strong>Launch9 Labs</strong>
      </header>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '140px 28px 100px' }}>
        <p style={{ color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', fontSize: 12 }}>Independent software studio</p>
        <h1 style={{ fontSize: 'clamp(56px, 9vw, 120px)', lineHeight: .92, letterSpacing: '-.065em', maxWidth: 950, margin: '24px 0' }}>
          We build software with intent.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 20, lineHeight: 1.5, maxWidth: 620 }}>
          Launch9 Labs creates focused digital products, experiments, and tools designed to be genuinely useful.
        </p>
      </section>
    </main>
  )
}
