'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer_bak'

/**
 * Blog Layout Component
 * Provides professional blog page structure with header, navigation, and footer
 * Styled with Agentii design system (light mode primary content, black footer)
 */

interface BlogLayoutProps {
  children: ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Blog Header - Fixed Navigation - Classic Wall Street Theme */}
      <header className="border-b border-gray-200 sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
            <Link
                href="https://agentii.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold tracking-tight text-[#003366] hover:opacity-80 transition-opacity no-underline"
            >
                agentii
              </Link>
              <span className="text-xl font-semibold tracking-tight text-[#666666] ml-3">
                BLOG
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/blog" className="text-sm font-semibold text-[#1A1A33] hover:text-[#0066CC] transition-colors no-underline">
                Blog
              </Link>
              <Link href="/docs" className="text-sm font-semibold text-[#1A1A33] hover:text-[#0066CC] transition-colors no-underline">
                Documentation
              </Link>
              <a
                href="https://agentii.ai/request"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#003366] text-white hover:bg-[#0052A3] font-semibold rounded transition-colors duration-300 no-underline"
              >
                REQUEST DETAILS
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-6 h-6 text-[#333333]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12">
        <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
          {children}
        </div>
      </main>

      {/* Footer - Pixel-perfect match with frontend landing page */}
      <Footer />
    </div>
  )
}

