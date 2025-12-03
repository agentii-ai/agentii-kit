'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

/**
 * Navigation Component
 * Shared navigation header for blog and documentation sections
 * Responsive design with mobile menu support and theme toggle
 *
 * Props:
 * - currentPage: Current page identifier ('blog' or 'docs' or 'home')
 * - variant: Style variant ('blog' or 'docs')
 */

interface NavigationProps {
  currentPage?: 'blog' | 'docs' | 'home'
  variant?: 'blog' | 'docs'
}

export function Navigation({
  currentPage = 'home',
  variant = 'blog',
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (page: string) => {
    return currentPage === page
      ? 'text-primary'
      : 'text-gray-700 dark:text-white/70 hover:text-primary'
  }

  return (
    <nav className="border-b border-white/10 bg-hero-gradient-start/95 backdrop-blur-md sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-semibold tracking-tight text-white">
                agentii
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <a
              href="https://agentii.ai/request"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-primary hover:bg-white/90 font-medium rounded-lg transition-colors duration-300"
            >
              REQUEST DETAILS
            </a>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/docs"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <a
                href="https://agentii.ai/request"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-primary hover:bg-white/90 font-medium rounded-lg transition-colors duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REQUEST DETAILS
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

/**
 * Breadcrumbs Component
 * Navigation helper showing current page hierarchy
 */

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-600 dark:text-white/60 mb-8">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-white">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="text-gray-400 dark:text-white/30">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Navigation
