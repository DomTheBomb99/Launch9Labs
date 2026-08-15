import { createClient } from '@/lib/supabase/server'

export const revalidate = 0

export default async function Home() {
  const supabase = await createClient()
  const [{ data: settings }, { data: homepage }, { data: projects }, { data: updates }] = await Promise.all([
    supabase.from('site_settings').select('*').limit(1).maybeSingle(),
    supabase.from('homepage_content').select('*').limit(1).maybeSingle(),
    supabase.from('projects').select('*').eq('featured', true).order('sort_order').limit(6),
    supabase.from('updates').select('*').eq('published', true).order('published_at', { ascending: false }).order('created_at', { ascending: false }).limit(4),
  ])

  const headline = homepage?.headline || 'We build software.'
  const subtitle = homepage?.subtitle || settings?.description || 'Launch9 Labs creates focused digital products, experiments, and tools designed to be genuinely useful.'

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="/">LAUNCH9<span>LABS</span></a>
        <div className="navLinks"><a href="/projects">Projects</a><a href="/products">Products</a><a href="/updates">Updates</a><a href="/about">About</a></div>
        <a className="navCta" href="/contact">Contact <span>↗</span></a>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span className="dot" /> INDEPENDENT SOFTWARE STUDIO</div>
        <h1>{headline.includes('software') ? <>We build<br /><em>software</em> with intent.</> : headline}</h1>
        <div className="heroBottom">
          <p>{subtitle}</p>
          <div className="heroActions"><a className="button primary" href={homepage?.primary_cta_url || '/projects'}>{homepage?.primary_cta_label || 'Explore projects'} <span>↗</span></a><a className="button" href={homepage?.secondary_cta_url || '/about'}>{homepage?.secondary_cta_label || 'About the studio'}</a></div>
        </div>
      </section>

      <section className="marquee"><div>PRODUCTS <span>✦</span> EXPERIMENTS <span>✦</span> SOFTWARE <span>✦</span> PRODUCTS <span>✦</span> EXPERIMENTS <span>✦</span> SOFTWARE <span>✦</span></div></section>

      <section className="section shell" id="projects">
        <div className="sectionHead"><div><span className="sectionNumber">01</span><h2>Selected work</h2></div><a href="/projects">View all ↗</a></div>
        <div className="projectGrid">
          {(projects || []).map((project, i) => <a className="projectCard" href={project.url || `/projects/${project.slug}`} key={project.id}><div className="cardTop"><span>0{i + 1}</span><span>{project.status.replace('_', ' ')}</span></div><div className="projectVisual">{project.image_url ? <img src={project.image_url} alt="" /> : <div className="visualWindow"><div className="windowBar"><i /><i /><i /></div><div className="visualLines"><b /><b /><b /></div></div>}</div><div className="cardInfo"><div><small>{project.tags?.[0] || 'Project'}</small><h3>{project.name}</h3><p>{project.description}</p></div><span className="arrow">↗</span></div></a>)}
          {(!projects || projects.length === 0) && <div className="emptyState">Projects are being prepared. Check back soon.</div>}
        </div>
      </section>

      <section className="section shell splitSection">
        <div className="sectionLabel"><span className="sectionNumber">02</span><span>Latest updates</span></div>
        <div className="feed"><div className="feedTitle">LIVE FEED <span>//</span> LAUNCHPAD</div>{(updates || []).map(update => <article className="feedItem" key={update.id}><time>{new Date(update.published_at || update.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</time><p>{update.body}</p><span>↗</span></article>)}{(!updates || updates.length === 0) && <div className="feedItem"><p>No updates published yet.</p></div>}<a className="textLink" href="/updates">All updates ↗</a></div>
      </section>

      <section className="statement shell"><span className="sectionNumber">03</span><h2>Small team.<br /><em>Serious software.</em></h2><p>We care about useful ideas, thoughtful interfaces, and products that earn their place in your workflow.</p></section>

      <footer className="footer shell"><div><a className="brand" href="/">LAUNCH9<span>LABS</span></a><p>{settings?.tagline || 'Independent software studio.'}</p></div><div className="footerLinks"><a href="/projects">Projects</a><a href="/products">Products</a><a href="/updates">Updates</a><a href="/about">About</a><a href="/contact">Contact</a></div><small>© 2026 Launch9 Labs</small></footer>
    </main>
  )
}
