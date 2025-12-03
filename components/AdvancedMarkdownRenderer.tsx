import React, { useEffect } from 'react'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface AdvancedMarkdownRendererProps {
  content: string
  className?: string
}

/**
 * Advanced Markdown Renderer with Mermaid Support
 * Renders markdown with special handling for Mermaid diagrams
 */
export default function AdvancedMarkdownRenderer({ content, className = '' }: AdvancedMarkdownRendererProps) {
  useEffect(() => {
    // Load Mermaid dynamically when component mounts
    const loadMermaid = async () => {
      try {
        const mermaid = await import('mermaid')
        mermaid.default.initialize({
          startOnLoad: true,
          theme: 'default',
          themeVariables: {
            primaryColor: '#3B82F6',
            primaryTextColor: '#1F2937',
            primaryBorderColor: '#1E3A8A',
            lineColor: '#6B7280',
            secondaryColor: '#EFF6FF',
            tertiaryColor: '#F3F4F6',
            background: '#FFFFFF',
            mainBkg: '#FFFFFF',
            secondBkg: '#F8FAFC',
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true
          },
          sequence: {
            useMaxWidth: true,
            wrap: true
          }
        })

        // Find and render all mermaid diagrams
        const mermaidElements = document.querySelectorAll('.mermaid')
        mermaidElements.forEach((element, index) => {
          const id = `mermaid-${Date.now()}-${index}`
          element.id = id
        })

        if (mermaidElements.length > 0) {
          mermaid.default.run()
        }
      } catch (error) {
        console.log('Mermaid not available, rendering as code blocks')
      }
    }

    loadMermaid()
  }, [content])

  // Process content to handle Mermaid diagrams
  const processedContent = content.replace(
    /```mermaid\n([\s\S]*?)```/g,
    (match, diagram) => {
      // Create a mermaid container
      return `<div class="mermaid-container my-8 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="mermaid text-center">
${diagram.trim()}
        </div>
      </div>`
    }
  )

  return <MarkdownRenderer content={processedContent} className={className} />
}