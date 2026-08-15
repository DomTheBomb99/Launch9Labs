import type { Metadata } from 'next'
import './globals.css'
import './experience.css'
import Experience from '@/components/experience'
export const metadata: Metadata={title:'Launch9 Labs',description:'An independent software studio building useful digital products.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Experience/>{children}</body></html>}
