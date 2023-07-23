import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
})

export const metadata: Metadata = {
  title: 'Mina Amini | Artist based in Germany',
  description: 'Artist Based in Germany',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`px-12 ${roboto.className}`}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
