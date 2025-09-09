import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Providers } from './providers'
import '@/src/styles/globals.css'

import Background from '@components/background/Background'
import Footer from '@components/navigation/footer/Footer'
import Navbar from '@components/navigation/navbar/Navbar'

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-onest',
})

export const metadata: Metadata = {
  title: 'CloudNext',
  description: 'CloudNext is a cloud storage solution for everyone.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased min-h-screen overflow-x-hidden`}>
        <Background>
          <Providers>
            <div className="flex flex-col">
              <header>
                <Navbar />
              </header>
              <main className="flex-1">{children}</main>
              <footer>
                <Footer />
              </footer>
            </div>
          </Providers>
        </Background>
      </body>
    </html>
  )
}
