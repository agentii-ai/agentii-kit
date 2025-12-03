'use client'

import React, { useEffect, useRef, useState } from 'react'

interface MermaidDiagramProps {
  chart: string
  id: string
}

/**
 * Client-side Mermaid Diagram Renderer
 * Dynamically loads and renders Mermaid diagrams
 */
export default function MermaidDiagram({ chart, id }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const renderDiagram = async () => {
      try {
        // Dynamically import Mermaid from installed package
        const mermaid = await import('mermaid')

        if (!mounted) return

        // Initialize Mermaid with theme
        const isDark = document.documentElement.classList.contains('dark')

        mermaid.default.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          themeVariables: {
            primaryColor: '#3B82F6',
            primaryTextColor: isDark ? '#F3F4F6' : '#1F2937',
            primaryBorderColor: '#1E3A8A',
            lineColor: '#6B7280',
            secondaryColor: '#EFF6FF',
            tertiaryColor: '#F3F4F6',
            background: isDark ? '#1F2937' : '#FFFFFF',
            mainBkg: isDark ? '#1F2937' : '#FFFFFF',
            secondBkg: isDark ? '#374151' : '#F8FAFC',
            fontSize: '16px'
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          sequence: {
            useMaxWidth: true,
            wrap: true
          },
          gantt: {
            useMaxWidth: true
          }
        })

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.default.render(`mermaid-${id}`, chart)

        if (mounted) {
          setSvg(renderedSvg)
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram')
          setLoading(false)
        }
        console.error('Mermaid rendering error:', err)
      }
    }

    renderDiagram()

    return () => {
      mounted = false
    }
  }, [chart, id])

  if (loading) {
    return (
      <div className="mermaid-loading my-8 p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Rendering Mermaid diagram...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mermaid-error my-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <div className="text-red-600 dark:text-red-400 font-medium mb-2">Failed to render diagram</div>
        <div className="text-sm text-red-500 dark:text-red-300 mb-4">{error}</div>
        <details className="mt-4">
          <summary className="text-sm text-red-600 dark:text-red-400 cursor-pointer hover:text-red-800 dark:hover:text-red-200 font-medium">
            View Source
          </summary>
          <pre className="mt-2 text-left text-xs bg-white dark:bg-gray-800 p-3 rounded border overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">{chart}</code>
          </pre>
        </details>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="mermaid-diagram my-8 -mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-x-auto"
    >
      <div
        className="mermaid-rendered w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:block"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  )
}