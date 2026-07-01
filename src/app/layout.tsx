import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollToTop from '../components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jiyu Li | Automation Portfolio',
  description: 'Senior Electrical & Automation Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
