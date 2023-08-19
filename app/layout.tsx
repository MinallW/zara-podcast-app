'use client'

import './globals.css'
import { Providers } from "@/redux/provider";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/NavBar'
import '@fontsource/inter';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
