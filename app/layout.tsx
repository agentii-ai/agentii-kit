import '../styles/globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  metadataBase: new URL('https://agentii.ai'),
  title: {
    default: 'Agentii Blog & Docs',
    template: '%s – Agentii',
  },
  description:
    'Insights on AI-powered financial analysis, product updates, and comprehensive developer documentation for Agentii platforms.',
  keywords: [
    'AI',
    'Financial Analysis',
    'Agentii',
    'Documentation',
    'Blog',
    'Agent Technology',
  ],
  authors: [{ name: 'Agentii Team', url: 'https://agentii.ai' }],
  creator: 'Agentii',
  publisher: 'Agentii',
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
    url: 'https://agentii.ai',
    siteName: 'Agentii Blog & Docs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentii Blog & Docs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentii Blog & Docs',
    description:
      'Insights on AI-powered financial analysis, product updates, and developer documentation.',
    images: ['/og-image.png'],
    creator: '@agentiiai',
  },
  alternates: {
    canonical: 'https://agentii.ai',
    types: {
      'application/rss+xml': 'https://agentii.ai/feed.xml',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Agentii',
  },
  verification: {
    google: 'google_verification_code', // Add actual verification code
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
        <meta name="apple-mobile-web-app-title" content="Agentii" />
      </head>
      <body className="bg-white text-gray-900 transition-colors duration-200">
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
