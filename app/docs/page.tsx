import React from 'react'
import Link from 'next/link'
import { getDocsStructure, type DocSection } from '@/lib/docs-structure'

/**
 * Documentation Index Page
 * Gateway to Agentii documentation with product feature guides
 */

export const metadata = {
  title: 'Documentation',
  description: 'Complete documentation for Agentii products including Intelligence Hub, Agent Workbench, and API reference.',
}

// Icon mapping for different documentation sections
const sectionIcons: Record<string, string> = {
  '00-introduction': '🚀',
  '01-data-and-sources': '📊',
  '02-intelligence-hub': '🧠',
  '03-agent-workbench': '⚙️',
  '04-agent-types': '🤖',
  '05-best-practices': '📚',
  '10-quick-start': '⚡',
}

// Description mapping for sections
const sectionDescriptions: Record<string, string> = {
  '00-introduction': 'Get started with Agentii and learn the fundamentals of the platform',
  '01-data-and-sources': 'Understand data sources, quality, and taxonomy for financial analysis',
  '02-intelligence-hub': 'Central intelligence platform for financial data analysis and agent orchestration',
  '03-agent-workbench': 'Interactive interface for creating and testing financial workflows',
  '04-agent-types': 'Learn about different agent types and their specialized capabilities',
  '05-best-practices': 'Step-by-step guides, best practices, and proven patterns',
  '10-quick-start': 'Quick start guides to get you up and running fast',
}

function getDocCategories(): Array<{
  icon: string
  title: string
  description: string
  href: string
  items: Array<{ title: string; href: string }>
}> {
  try {
    const sections = getDocsStructure()
    
    return sections.map(section => ({
      icon: sectionIcons[section.slug] || '📄',
      title: section.title,
      description: sectionDescriptions[section.slug] || `Documentation for ${section.title}`,
      href: section.items.length > 0 ? section.items[0].href : section.href, // Link to first doc in section
      items: section.items.slice(0, 5).map(item => ({
        title: item.title,
        href: item.href,
      })), // Show first 5 items with their links
    }))
  } catch (error) {
    console.error('Error loading docs structure:', error)
    // Return empty array on error
    return []
  }
}

export default function DocsIndex() {
  const docCategories = getDocCategories()
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="border-b border-gray-200 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase px-4 py-1 rounded-full mb-4">
                Complete Documentation
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Agentii Documentation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Comprehensive guides for Intelligence Hub, Agent Workbench, and API integration. Learn how to leverage AI-powered financial analysis for your organization.
              </p>
            </div>

            {/* Quick Search */}
            <div className="pt-8">
              <input
                type="search"
                placeholder="Search documentation..."
                className="w-full md:w-96 px-6 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories Grid */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <div key={category.href} className="group h-full bg-white border border-gray-200 rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                <Link href={category.href} className="block">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors cursor-pointer">
                    {category.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{category.description}</p>

                {/* Sub-items */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.href} className="text-xs text-gray-600 flex items-center gap-2">
                      <Link 
                        href={item.href}
                        className="hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="text-primary">→</span>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={category.href}>
                  <div className="mt-6 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Product Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Intelligence Hub Feature */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Intelligence Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Centralized platform for managing financial analysis agents, monitoring performance, and extracting insights from complex financial documents.
              </p>
              <ul className="space-y-2 pt-4">
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Real-time agent monitoring
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Advanced financial data analysis
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Multi-document processing
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Workflow automation
                </li>
              </ul>
            </div>

            {/* Agent Workbench Feature */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Agent Workbench</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive development environment for creating, testing, and deploying financial analysis agents with prompt engineering and workflow visualization.
              </p>
              <ul className="space-y-2 pt-4">
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Visual workflow builder
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Prompt engineering tools
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> Testing & debugging
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="text-primary font-semibold">✓</span> One-click deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow our quick start guide to set up Agentii and create your first financial analysis workflow in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://agentii.ai/request"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#003366] hover:bg-[#0052A3] font-semibold rounded transition-colors duration-300 text-center no-underline"
              style={{ color: '#FCFCFC' }}
            >
              REQUEST DETAILS
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-300 rounded-lg"
            >
              View API Reference →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
