import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Shubhalok Ghosh | Fractional CMO & CX Leader',
    template: '%s | Shubhalok Ghosh',
  },
  description:
    'Former TCS Chief Experience Officer. Fractional CMO, CX strategist, podcast host, and executive coach helping businesses grow through human-centered marketing.',
  keywords: [
    'Fractional CMO',
    'Customer Experience',
    'MarTech',
    'Marketing Strategy',
    'HUMANity in the Age of AI',
    'Executive Coaching',
    'B2B Marketing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubhalokghosh.com',
    siteName: 'Shubhalok Ghosh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
