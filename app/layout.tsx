import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
}) {
  return (
    <html lang="en">
      <Home/>
      <body className={inter.className}>k</body>
    </html>
  )
}
