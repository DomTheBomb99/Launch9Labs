const projects = [
  { name: 'SnapRefine', type: 'Product', description: 'A focused screenshot editor for turning ordinary captures into polished, presentation-ready visuals.', status: 'In development', href: '/projects' },
  { name: 'Launch9 Labs', type: 'Studio', description: 'The home for experiments, products, and software built under the Launch9 Labs umbrella.', status: 'Active', href: '/about' },
]

const updates = [
  { date: 'AUG 2026', text: 'Launch9 Labs website foundation is live.' },
  { date: 'AUG 2026', text: 'SnapRefine is being rebuilt around a cleaner product foundation.' },
]

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="/">LAUNCH9<span>LABS</span></a>
        <div className="navLinks">
          <a href="/projects">Projects</a>
          <a href="/products">Products</a>
          <a href="/updates">Updates</a>
          <a href="/about">About</a>
        </div>
        <a className="navCta" href="/contact">Contact <span>↗</span></a>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span className="dot" /> INDEPENDENT SOFTWARE STUDIO</div>
        <h1>We build<br /><em>software</em> with intent.</h1>
        <div className="heroBottom">
          <p>Launch9 Labs creates focused digital products, experiments, and tools designed to be genuinely useful.</p>
          <div className="heroActions"><a className="button primary" href="/projects">Explore projects <span>↗</span></a><a className="button" href="/about">About the studio</a></div>
        </div>
      </section>

      <section className="marquee"><div>PRODUCTS <span>✦</span> EXPERIMENTS <span>✦</span> SOFTWARE <span>✦</span> PRODUCTS <span>✦</span> EXPERIMENTS <span>✦</span> SOFTWARE <span>✦</span></div></section>

      <section className="section shell" id="projects">
        <div className="sectionHead"><div><span className="sectionNumber">01</span><h2>Selected work</h2></div><a href="/projects">View all ↗</a></div>
        <div className="projectGrid">
          {projects.map((project, i) => <a className="projectCard" href={project.href} key={project.name}><div className="cardTop"><span>0{i + 1}</span><span>{project.status}</span></div><div className="projectVisual"><div className="visualWindow"><div className="windowBar"><i /><i /><i /></div><div className="visualLines"><b /><b /><b /></div></div></div><div className="cardInfo"><div><small>{project.type}</small><h3>{project.name}</h3><p>{project.description}</p></div><span className="arrow">↗</span></div></a>)}
        </div>
      </section>

      <section className="section shell splitSection">
        <div className="sectionLabel"><span className="sectionNumber">02</span><span>Latest updates</span></div>
        <div className="feed"><div className="feedTitle">LIVE FEED <span>//</span> LAUNCHPAD</div>{updates.map(update => <article className="feedItem" key={update.text}><time>{update.date}</time><p>{update.text}</p><span>↗</span></article>)}<a className="textLink" href="/updates">All updates ↗</a></div>
      </section>

      <section className="statement shell"><span className="sectionNumber">03</span><h2>Small team.<br /><em>Serious software.</em></h2><p>We care about useful ideas, thoughtful interfaces, and products that earn their place in your workflow.</p></section>

      <footer className="footer shell"><div><a className="brand" href="/">LAUNCH9<span>LABS</span></a><p>Independent software studio.</p></div><div className="footerLinks"><a href="/projects">Projects</a><a href="/products">Products</a><a href="/updates">Updates</a><a href="/about">About</a><a href="/contact">Contact</a></div><small>© 2026 Launch9 Labs</small></footer>
    </main>
  )
}
