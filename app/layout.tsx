import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'

export const metadata: Metadata = {
  title: 'TDH - The Designnovation Hub',
  description: 'Empowering innovation through design and technology. Join TDH and be part of a community that bridges creativity and technology to solve real-world problems.',
  generator: 'TDH Web Team',
  icons: {
    icon: '/tdh-logo.png',
    shortcut: '/tdh-logo.png',
    apple: '/tdh-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
