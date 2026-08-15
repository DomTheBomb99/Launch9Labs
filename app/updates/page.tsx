import { createClient } from '@/lib/supabase/server'

export const revalidate = 0

export default async function Updates(){
  const supabase = await createClient()
  const { data: updates } = await supabase.from('updates').select('*').eq('published', true).order('published_at', { ascending: false }).order('created_at', { ascending: false })
  return <main className="shell page"><a className="brand" href="/">LAUNCH9<span>LABS</span></a><header className="pageHeader"><span className="sectionNumber">03 // UPDATES</span><h1>What we're<br/><em>up to.</em></h1></header><div className="list feedPage">{updates?.map(u=><article className="listCard" key={u.id}><time>{new Date(u.published_at || u.created_at).toLocaleDateString('en-US',{month:'short',year:'numeric'}).toUpperCase()}</time><p>{u.body}</p><span>↗</span></article>)}{(!updates || updates.length===0) && <p>No updates published yet.</p>}</div><a className="back" href="/">← Back home</a></main>
}
