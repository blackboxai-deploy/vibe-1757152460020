import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'For Rhydem ❤️ - Created by Kartik',
  description: 'A beautiful message created with love by Kartik for the amazing Rhydem',
  openGraph: {
    title: 'For Rhydem ❤️ - Created by Kartik',
    description: 'A romantic web experience crafted with love',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}