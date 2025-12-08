import '../styles/globals.css'
import '../styles/prose-override.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { FooterKit } from '@/components/FooterKit'

export const metadata: Metadata = {
  metadataBase: new URL('https://kits.agentii.ai'),
  title: {
    default: 'agentii-kit - Power Your AI Agents',
    template: '%s – agentii-kit',
  },
  description:
    'Curated spec-kits for Claude Code, Cursor, and modern dev tools. Production-ready workflows for developers, PMs, designers, and more.',
  keywords: [
    'AI',
    'Claude Code',
    'Cursor',
    'Windsurf',
    'Spec Kits',
    'AI Agents',
    'Development Tools',
    'agentii-kit',
  ],
  authors: [{ name: 'agentii-kit Team', url: 'https://kits.agentii.ai' }],
  creator: 'agentii-kit',
  publisher: 'agentii-kit',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kits.agentii.ai',
    siteName: 'agentii-kit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'agentii-kit - Power Your AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'agentii-kit - Power Your AI Agents',
    description:
      'Curated spec-kits for Claude Code, Cursor, and modern dev tools.',
    images: ['/og-image.png'],
    creator: '@agentii_ai',
  },
  alternates: {
    canonical: 'https://kits.agentii.ai',
    types: {
      'application/rss+xml': 'https://kits.agentii.ai/feed.xml',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'agentii-kit',
  },
  verification: {
    google: '1dKMqmPn7zSIqYq8EubqDD3Z0Lw7woU9a1s8tk3IDBI',
    yandex: 'yandex_verification_code',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Canonical and alternate links */}
        <link rel="canonical" href="https://agentii.ai" />

        {/* Mobile web app */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="agentii-kit" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-200">
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <FooterKit />
        </ThemeProvider>
      </body>
    </html>
  )
}
