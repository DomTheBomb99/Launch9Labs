import { createClient } from '@/lib/supabase/server'

export const revalidate = 0

export default async function Projects() {
  const supabase = await createClient()
  const { data: projects } = await supabase.from('projects').select('*').order('sort_order').order('created_at', { ascending: false })
  return <main className="shell page"><a className="brand" href="/">LAUNCH9<span>LABS</span></a><header className="pageHeader"><span className="sectionNumber">01 // PROJECTS</span><h1>Things we're<br/><em>building.</em></h1></header><div className="list">{projects?.map((p,i)=><article className="listCard" key={p.id}><span>0{i+1}</span><div><small>{p.tags?.[0] || 'Project'} · {p.status.replace('_',' ')}</small><h2>{p.name}</h2><p>{p.description}</p><div className="tags">{p.tags?.map((t:string)=><b key={t}>{t}</b>)}</div></div><span>↗</span></article>)}{(!projects || projects.length===0) && <p>Projects are being prepared.</p>}</div><a className="back" href="/">← Back home</a></main>}
