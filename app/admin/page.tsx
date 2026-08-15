import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const revalidate = 0

export default async function Admin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')
  const { data: admin } = await supabase.from('admin_profiles').select('role').eq('user_id', user.id).maybeSingle()
  if (!admin) redirect('/admin/login?error=not-authorized')

  const [{ data: projects }, { data: products }, { data: updates }, { data: homepage }] = await Promise.all([
    supabase.from('projects').select('*').order('sort_order'),
    supabase.from('products').select('*').order('sort_order'),
    supabase.from('updates').select('*').order('created_at', { ascending: false }),
    supabase.from('homepage_content').select('*').limit(1).maybeSingle(),
  ])

  return <main className="shell page adminPage"><header className="adminHeader"><div><a className="brand" href="/">LAUNCH9<span>LABS</span></a><p>Admin workspace</p></div><a href="/">View site ↗</a></header><div className="pageHeader"><span className="sectionNumber">CONTROL CENTER</span><h1>Manage<br/><em>everything.</em></h1></div><section className="adminGrid"><article><span>HOME</span><h2>{homepage?.headline || 'Not configured'}</h2><p>Edit homepage messaging, calls to action, and featured content.</p><a href="/admin/home">Edit homepage ↗</a></article><article><span>PROJECTS</span><h2>{projects?.length || 0}</h2><p>Add, edit, reorder, feature, or archive projects.</p><a href="/admin/projects">Manage projects ↗</a></article><article><span>PRODUCTS</span><h2>{products?.length || 0}</h2><p>Manage products, descriptions, pricing, links, and status.</p><a href="/admin/products">Manage products ↗</a></article><article><span>UPDATES</span><h2>{updates?.length || 0}</h2><p>Publish short studio updates and announcements.</p><a href="/admin/updates">Manage updates ↗</a></article></section></main>
}
