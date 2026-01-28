import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Karol Abreu | Psicóloga Clínica e Esportiva',
  description: 'Psicoterapia com acolhimento, clareza e presença. Atendimento humanizado para ansiedade, autoconfiança, relacionamentos e performance esportiva. Agende sua sessão.',
  keywords: ['psicóloga', 'psicoterapia', 'psicologia esportiva', 'ansiedade', 'terapia online', 'psicóloga clínica'],
  openGraph: {
    title: 'Karol Abreu | Psicóloga Clínica e Esportiva',
    description: 'Psicoterapia com acolhimento, clareza e presença. Agende sua sessão.',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
