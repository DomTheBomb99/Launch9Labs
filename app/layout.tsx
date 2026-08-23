import type { Metadata } from 'next'
import './globals.css'
import './experience.css'
import './scroll.css'
import './intro.css'
import './studio-effects.css'
import './logo.css'
import { createClient } from '@/lib/supabase/server'
import ScrollExperience from '@/components/scroll-experience'
import SmoothScroll from '@/components/SmoothScroll'
import Intro from '@/components/intro'
import StudioEffects from '@/components/StudioEffects'
import PublicChrome from '@/components/PublicChrome'

export const metadata: Metadata = {
  title: 'Launch9 Labs',
  description: 'An independent software studio building useful digital products.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: settings } = await supabase.from('site_settings').select('site_name, tagline, socials').limit(1).maybeSingle()

  return (
    <html lang="en">
      <body>
        <Intro />
        <StudioEffects />
        <SmoothScroll />
        <ScrollExperience />
        <PublicChrome
          siteName={settings?.site_name || 'LAUNCH9 LABS'}
          tagline={settings?.tagline || 'Independent software studio.'}
          socials={(settings?.socials as Record<string, string> | null) || null}
        >
          {children}
        </PublicChrome>
      </body>
    </html>
  )
}
