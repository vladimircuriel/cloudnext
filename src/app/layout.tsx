import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/src/styles/globals.css'
import { Providers } from './providers'

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
      <body className={`${onest.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <header></header>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
