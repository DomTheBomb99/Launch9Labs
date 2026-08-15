import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Launch9 Labs',
  description: 'An independent software studio building useful digital products.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
