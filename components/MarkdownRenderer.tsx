'use client'

import React, { useMemo, useEffect, useRef } from 'react'
import MermaidDiagram from './MermaidDiagram'

interface MarkdownRendererProps {
  content: string
  processedContent?: string // Pre-processed HTML with syntax highlighting
  className?: string
}

interface MermaidBlock {
  id: string
  chart: string
}

/**
 * Enhanced Markdown Renderer Component
 * Converts markdown text to HTML with proper formatting for headings, lists, code blocks, tables, and Mermaid diagrams
 * If processedContent is provided, uses that instead of processing markdown
 */
export default function MarkdownRenderer({ content, processedContent, className = '' }: MarkdownRendererProps) {
  // Extract and process markdown with Mermaid diagrams
  const { htmlContent, mermaidBlocks } = useMemo(() => {
    // If processedContent is provided, use it directly (already has syntax highlighting)
    if (processedContent) {
      // Still need to extract Mermaid diagrams from processed HTML
      const blocks: MermaidBlock[] = []
      let mermaidIndex = 0
      let html = processedContent

      // Extract Mermaid diagrams from processed HTML
      // They should be in placeholder divs with data-mermaid-content attributes
      html = html.replace(/<div class="mermaid-placeholder"[^>]*data-mermaid-id="([^"]*)"[^>]*data-mermaid-content="([^"]*)"[^>]*><\/div>/g, (match, id, encodedContent) => {
        try {
          // Use browser-compatible base64 decoding
          const diagramContent = atob(encodedContent)
          blocks.push({
            id,
            chart: diagramContent
          })
          return `<div class="mermaid-placeholder" data-mermaid-id="${id}"></div>`
        } catch (error) {
          console.error('Error decoding Mermaid diagram:', error)
          return match
        }
      })
      
      // Also handle legacy format (if any Mermaid blocks weren't converted)
      html = html.replace(/<pre><code[^>]*class="[^"]*language-mermaid[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/g, (match, diagram) => {
        const id = `mermaid-${Date.now()}-${mermaidIndex}`
        blocks.push({
          id,
          chart: diagram.trim()
        })
        mermaidIndex++
        return `<div class="mermaid-placeholder" data-mermaid-id="${id}"></div>`
      })

      return {
        htmlContent: html,
        mermaidBlocks: blocks
      }
    }

    // Otherwise, process markdown manually (fallback)
    const blocks: MermaidBlock[] = []
    let mermaidIndex = 0

    // Enhanced markdown to HTML converter with Mermaid support
    const convertMarkdownToHtml = (markdown: string): string => {
      let html = markdown

      // Handle Mermaid diagrams first - replace with placeholder divs
      html = html.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
        const id = `mermaid-${Date.now()}-${mermaidIndex}`
        blocks.push({
          id,
          chart: diagram.trim()
        })
        mermaidIndex++
        // Create a placeholder div with unique class for positioning
        return `<div class="mermaid-placeholder" data-mermaid-id="${id}"></div>`
      })

      // Headers (### ### ## #)
      html = html.replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">$1</h3>')
      html = html.replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6 border-b-2 border-gray-300 dark:border-gray-600 pb-3">$1</h2>')
      html = html.replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-8 border-b-2 border-gray-400 dark:border-gray-500 pb-4">$1</h1>')

      // Bold text
      html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')

      // Italic text
      html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

      // Inline code (e.g. `specification.md`) - render as a subtle light pill
      html = html.replace(
        /`([^`]+)`/g,
        '<code class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded text-sm font-mono border border-gray-200/70 dark:border-gray-700/70">$1</code>'
      )

      // Code blocks (``` language)
      html = html.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, language, code) => {
        if (language === 'mermaid') {
          return match // Already handled above
        }
        const lang = language || 'text'
        return `<div class="my-6">
        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-300">${lang}</span>
            <button class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" onclick="navigator.clipboard.writeText(this.closest('div').nextElementSibling.querySelector('code').textContent)">
              📋 Copy
            </button>
          </div>
          <div class="relative">
            <pre class="p-4 overflow-x-auto"><code class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre">${code.trim()}</code></pre>
          </div>
        </div>
      </div>`
      })

      // Tables (enhanced support)
      const tableRegex = /\|(.+)\|\n\|[\s\-:|]+\|\n((?:\|.+\|\n?)*)/gm
      html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
        const headers = headerRow.split('|').map((h: string) => h.trim()).filter((h: string) => h)
        const rows = bodyRows.trim().split('\n').map((row: string) =>
          row.split('|').map((cell: string) => cell.trim()).filter((cell: string) => cell)
        )

        const headerHtml = headers.map((h: string) => `<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-600">${h}</th>`).join('')

        const bodyHtml = rows.map((row: string[]) => {
          const cellsHtml = row.map((cell: string) => `<td class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">${cell}</td>`).join('')
          return `<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">${cellsHtml}</tr>`
        }).join('')

        return `<div class="overflow-x-auto my-6 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg">
        <table class="min-w-full bg-white dark:bg-gray-900">
          <thead>
            <tr>${headerHtml}</tr>
          </thead>
          <tbody>${bodyHtml}</tbody>
        </table>
      </div>`
      })

      // Unordered lists - fix spacing issue on first bullet
      html = html.replace(/^(\s*)- (.*$)/gm, (match, indent, text) => {
        const level = Math.min(Math.floor(indent.length / 2), 4) // Cap at level 4
        // Use margin-left for nesting instead of padding to avoid extra space on first bullet
        const indentClasses = ['', 'ml-4', 'ml-8', 'ml-12', 'ml-16']
        return `<li class="mb-2 ${indentClasses[level] || ''}" data-level="${level}">${text}</li>`
      })

      // Wrap list items in proper ul tags
      // Use list-outside and ml-6 pl-0 to prevent extra spacing on first bullet
      // list-outside puts bullets outside content box, pl-0 removes padding that causes extra space
      html = html.replace(/(<li[^>]*>.*?<\/li>\s*)+/gs, (match) => {
        return `<ul class="list-disc list-outside mb-6 space-y-2 text-gray-700 dark:text-gray-300 ml-6 pl-0">${match}</ul>`
      })

      // Ordered lists
      html = html.replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>')
      // Use list-outside and pl-0 to prevent extra spacing on first bullet
      html = html.replace(/(<li class="mb-2">.*<\/li>\s*)+/g, '<ol class="list-decimal list-outside mb-6 space-y-2 text-gray-700 dark:text-gray-300 ml-6 pl-0">$&</ol>')

      // Enhanced links with external link detection
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
        const hostname = typeof window !== 'undefined' ? window.location?.hostname : 'agentii.ai'
        const isExternal = url.startsWith('http') && !url.includes(hostname)
        const externalAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
        const externalIcon = isExternal ? ' <span class="inline-block text-xs">↗</span>' : ''

        return `<a href="${url}" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline decoration-2 underline-offset-2 transition-colors"${externalAttrs}>${text}${externalIcon}</a>`
      })

      // Blockquotes
      html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 dark:border-blue-400 pl-4 my-4 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 py-2">$1</blockquote>')

      // Horizontal rules
      html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-300 dark:border-gray-600" />')

      // Process paragraphs (improved logic)
      const lines = html.split('\n')
      let inCodeBlock = false
      let inTable = false
      let inList = false

      const processedLines = lines.map((line: string) => {
        const trimmedLine = line.trim()

        // Track code blocks and diagrams
        if (trimmedLine.includes('<div class="my-6">') || trimmedLine.includes('<div class="mermaid-placeholder')) {
          inCodeBlock = true
          return line
        }
        if (trimmedLine.includes('</div>') && inCodeBlock) {
          inCodeBlock = false
          return line
        }

        // Track tables
        if (trimmedLine.includes('<table')) {
          inTable = true
          return line
        }
        if (trimmedLine.includes('</table>')) {
          inTable = false
          return line
        }

        // Track lists
        if (trimmedLine.includes('<ul>') || trimmedLine.includes('<ol>')) {
          inList = true
          return line
        }
        if (trimmedLine.includes('</ul>') || trimmedLine.includes('</ol>')) {
          inList = false
          return line
        }

        // Don't wrap special elements
        if (inCodeBlock || inTable || inList ||
            trimmedLine.includes('<h1') || trimmedLine.includes('<h2') || trimmedLine.includes('<h3') ||
            trimmedLine.includes('<li>') || trimmedLine.includes('<tr>') ||
            trimmedLine.includes('<blockquote') || trimmedLine.includes('<hr') ||
            trimmedLine === '' ||
            trimmedLine.includes('<div') || trimmedLine.includes('</div>')) {
          return line
        }

        // Regular text lines - wrap in paragraphs with better styling
        if (trimmedLine.length > 0) {
          return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg w-full max-w-none">${trimmedLine}</p>`
        }

        return line
      })

      return processedLines.join('\n')
    }

    const html = convertMarkdownToHtml(content)

    return {
      htmlContent: html,
      mermaidBlocks: blocks
    }
  }, [content])

  // Split HTML by mermaid placeholders and interleave with MermaidDiagram components
  const renderContent = () => {
    if (mermaidBlocks.length === 0) {
      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    // Split HTML by mermaid placeholder divs
    const parts: (string | JSX.Element)[] = []
    let currentHtml = htmlContent

    mermaidBlocks.forEach((block, index) => {
      const placeholderPattern = `<div class="mermaid-placeholder" data-mermaid-id="${block.id}"></div>`
      const splitIndex = currentHtml.indexOf(placeholderPattern)

      if (splitIndex !== -1) {
        // Add HTML before placeholder
        if (splitIndex > 0) {
          parts.push(
            <div
              key={`html-${index}`}
              dangerouslySetInnerHTML={{ __html: currentHtml.substring(0, splitIndex) }}
            />
          )
        }

        // Add MermaidDiagram component
        parts.push(
          <MermaidDiagram key={block.id} id={block.id} chart={block.chart} />
        )

        // Continue with rest of HTML
        currentHtml = currentHtml.substring(splitIndex + placeholderPattern.length)
      }
    })

    // Add remaining HTML
    if (currentHtml.trim()) {
      parts.push(
        <div
          key="html-final"
          dangerouslySetInnerHTML={{ __html: currentHtml }}
        />
      )
    }

    return <>{parts}</>
  }

  // Attach copy buttons to code blocks after render
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const pres = Array.from(container.querySelectorAll('pre'))
    pres.forEach((pre) => {
      // Avoid adding multiple buttons
      if (pre.querySelector('[data-copy-code-button]')) return

      pre.classList.add('code-block-with-copy')

      const button = document.createElement('button')
      button.type = 'button'
      button.setAttribute('data-copy-code-button', 'true')
      button.className = 'code-copy-button'
      button.textContent = 'Copy'

      button.addEventListener('click', () => {
        const code = pre.querySelector('code')
        if (!code) return
        const text = code.textContent || ''
        if (!navigator.clipboard) {
          return
        }
        navigator.clipboard.writeText(text).then(() => {
          const original = button.textContent
          button.textContent = 'Copied!'
          window.setTimeout(() => {
            button.textContent = original || 'Copy'
          }, 1200)
        }).catch(() => {
          // noop on failure
        })
      })

      pre.appendChild(button)
    })
  }, [htmlContent])

  return (
    <div ref={containerRef} className={`markdown-content w-full ${className}`}>
      {renderContent()}
    </div>
  )
}
