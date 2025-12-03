import React, { ReactNode } from 'react'
import Link from 'next/link'
import { getDocsStructure, type DocSection } from '@/lib/docs-structure'
import Footer from '@/components/Footer'
import {
  BookOpen,
  Rocket,
  Layers,
  Database,
  FileText,
  LayoutDashboard,
  Folder,
  Workflow,
  Code,
  Terminal,
  Zap,
  Cpu,
  Brain,
  TrendingUp,
  CheckCircle,
  Shield,
  Users,
  Settings,
  BarChart,
  Search,
  Lightbulb,
  Target,
  Lock,
  BookMarked,
  FileCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

/**
 * Documentation Layout Component
 * Professional documentation site with sidebar navigation and main content area
 * Light mode by default - matches Agentii web design principles
 * Tailored for Agentii product documentation
 */

interface DocLayoutProps {
  children: ReactNode
}

// Icon mapping for document sections
const sectionIcons: Record<string, LucideIcon> = {
  'Getting Started': Rocket,
  'Data & Sources': Database,
  'Intelligence Hub': LayoutDashboard,
  'Agent Workbench': Terminal,
  'Agent Types & Methodologies': Brain,
  'Best Practices': CheckCircle,
  'Quick Start': Rocket,
}

// Icon mapping for individual documents based on keywords in title/slug
function getDocumentIcon(title: string, slug: string, sectionTitle: string): LucideIcon {
  const lowerTitle = title.toLowerCase()
  const lowerSlug = slug.toLowerCase()

  // Getting Started section
  if (lowerTitle.includes('what is') || lowerSlug.includes('what-is')) return BookOpen
  if (lowerTitle.includes('core concept') || lowerSlug.includes('core-concept')) return Layers
  if (lowerTitle.includes('architecture') || lowerSlug.includes('architecture')) return LayoutDashboard
  if (lowerTitle.includes('getting started') || lowerSlug.includes('getting-started')) return Rocket

  // Data & Sources section
  if (lowerTitle.includes('data overview') || lowerSlug.includes('data-overview')) return Database
  if (lowerTitle.includes('data quality') || lowerSlug.includes('data-quality')) return FileCheck
  if (lowerTitle.includes('taxonomy') || lowerSlug.includes('taxonomy')) return BookMarked
  if (lowerTitle.includes('institutional') || lowerSlug.includes('institutional')) return Shield

  // Intelligence Hub section
  if (lowerTitle.includes('fundamental') || lowerSlug.includes('fundamental')) return Lightbulb
  if (lowerTitle.includes('project') || lowerSlug.includes('project')) return Folder
  if (lowerTitle.includes('task') || lowerSlug.includes('task')) return Target
  if (lowerTitle.includes('snapshot') || lowerSlug.includes('snapshot')) return FileText
  if (lowerTitle.includes('agent') && lowerTitle.includes('config') || lowerSlug.includes('agent') && lowerSlug.includes('config')) return Settings
  if (lowerTitle.includes('execution') || lowerSlug.includes('execution')) return Zap
  if (lowerTitle.includes('result') || lowerSlug.includes('result')) return BarChart
  if (lowerTitle.includes('workflow') || lowerSlug.includes('workflow')) return Workflow

  // Agent Workbench section
  if (lowerTitle.includes('workbench') && lowerTitle.includes('fundamental') || lowerSlug.includes('workbench') && lowerSlug.includes('fundamental')) return Terminal
  if (lowerTitle.includes('query') || lowerSlug.includes('query')) return Search
  if (lowerTitle.includes('invocation') || lowerSlug.includes('invocation')) return Sparkles
  if (lowerTitle.includes('orchestration') || lowerSlug.includes('orchestration')) return Workflow
  if (lowerTitle.includes('interpretation') || lowerSlug.includes('interpretation')) return BarChart
  if (lowerTitle.includes('session') || lowerSlug.includes('session')) return FileText
  if (lowerTitle.includes('advanced') || lowerSlug.includes('advanced')) return Zap
  if (lowerTitle.includes('vs') || lowerSlug.includes('vs')) return Layers

  // Agent Types section
  if (lowerTitle.includes('overview') || lowerSlug.includes('overview')) return BookOpen
  if (lowerTitle.includes('retrieval') || lowerSlug.includes('retrieval')) return Search
  if (lowerTitle.includes('valuation') || lowerSlug.includes('valuation')) return TrendingUp
  if (lowerTitle.includes('risk') || lowerSlug.includes('risk')) return Shield
  if (lowerTitle.includes('dashboard') || lowerSlug.includes('dashboard')) return LayoutDashboard
  if (lowerTitle.includes('confidence') || lowerSlug.includes('confidence')) return CheckCircle

  // Best Practices section
  if (lowerTitle.includes('consensus') || lowerSlug.includes('consensus')) return Users
  if (lowerTitle.includes('compliance') || lowerSlug.includes('compliance')) return Shield
  if (lowerTitle.includes('design') || lowerSlug.includes('design')) return Lightbulb
  if (lowerTitle.includes('management') || lowerSlug.includes('management')) return Settings
  if (lowerTitle.includes('collaboration') || lowerSlug.includes('collaboration')) return Users
  if (lowerTitle.includes('tool') || lowerSlug.includes('tool')) return Settings

  // Default icons by section
  const sectionIcon = sectionIcons[sectionTitle]
  return sectionIcon || FileText
}

export default function DocLayout({ children }: DocLayoutProps) {
  const docSections = getDocsStructure().map(section => ({
    title: section.title,
    href: section.href,
    items: section.items.map(item => ({
      title: item.title,
      href: item.href,
      slug: item.slug || item.href.split('/').pop() || '',
      icon: getDocumentIcon(item.title, item.slug || item.href.split('/').pop() || '', section.title),
    })),
  }))

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header - Classic Wall Street Theme */}
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
                DOCS
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

      <div className="flex flex-1">
        {/* Sidebar Navigation - Light Mode */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto">
          <div className="sticky top-20 px-6 py-8">
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase text-gray-500 mb-4 tracking-wide">Documentation</h3>
              <nav className="space-y-1">
                {docSections.map((section) => (
                  <div key={section.href} className="mb-6">
                    <Link
                      href={section.href}
                      className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors block mb-3"
                    >
                      {section.title}
                    </Link>
                    <ul className="space-y-2 ml-0 list-none">
                      {section.items.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <li key={item.href} className="list-none">
                            <Link
                              href={item.href}
                              className="text-xs text-gray-600 hover:text-primary transition-colors block py-1 flex items-center gap-2"
                            >
                              <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Search */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <input
                type="search"
                placeholder="Search docs..."
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <article className="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-blue-700 prose-code:text-amber-700 prose-pre:bg-gray-100">
              {children}
            </article>
          </div>
        </main>
      </div>

      {/* Footer - Pixel-perfect match with frontend landing page */}
      <Footer />
    </div>
  )
}
