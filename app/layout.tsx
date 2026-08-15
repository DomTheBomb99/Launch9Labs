import type { Metadata } from 'next'
import './globals.css'
import './experience.css'
import './scroll.css'
import Experience from '@/components/experience'
import ScrollExperience from '@/components/scroll-experience'
export const metadata: Metadata={title:'Launch9 Labs',description:'An independent software studio building useful digital products.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Experience/><ScrollExperience/>{children}</body></html>}
