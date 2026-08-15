import type { Metadata } from 'next'
import './globals.css'
import './experience.css'
import './scroll.css'
import './intro.css'
import './studio-effects.css'
import ScrollExperience from '@/components/scroll-experience'
import SmoothScroll from '@/components/SmoothScroll'
import Intro from '@/components/intro'
import StudioEffects from '@/components/StudioEffects'
export const metadata: Metadata={title:'Launch9 Labs',description:'An independent software studio building useful digital products.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Intro/><StudioEffects/><SmoothScroll/><ScrollExperience/>{children}</body></html>}
