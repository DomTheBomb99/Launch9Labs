'use client'

import { FormEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else window.location.href = '/admin'
    setLoading(false)
  }

  return <main className="shell page"><a className="brand" href="/">LAUNCH9<span>LABS</span></a><div className="adminLogin"><span className="sectionNumber">ADMIN // AUTHENTICATION</span><h1>Welcome<br/><em>back.</em></h1><form onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>{error && <p className="formError">{error}</p>}<button className="button primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign in ↗'}</button></form></div></main>
}
