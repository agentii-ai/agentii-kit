/**
 * Markdown Processor
 * Processes markdown content with syntax highlighting using remark/rehype
 */

import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

/**
 * Process markdown content to HTML with syntax highlighting
 * Preserves Mermaid diagrams by replacing them with placeholders before processing
 */
export async function processMarkdown(markdown: string): Promise<string> {
  // Extract Mermaid diagrams and replace with placeholders
  const mermaidPlaceholders: Array<{ placeholder: string; content: string }> = []
  let processedMarkdown = markdown
  let mermaidIndex = 0

  // Replace Mermaid code blocks with placeholders
  processedMarkdown = processedMarkdown.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
    const placeholder = `MERMAID_PLACEHOLDER_${mermaidIndex}`
    mermaidPlaceholders.push({
      placeholder,
      content: diagram.trim()
    })
    mermaidIndex++
    // Return a markdown code block that will be preserved
    return `\`\`\`mermaid\n${diagram}\n\`\`\``
  })

  // Process markdown with remark/rehype
  let html = String(await remark()
    .use(remarkGfm) // GitHub Flavored Markdown support
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
    .use(rehypeHighlight, {
      // Configure highlight.js
      // This will automatically detect language from code blocks
      detect: true,
      ignoreMissing: true,
      // Languages to support (highlight.js supports 190+ languages)
      subset: [
        'python',
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'json',
        'bash',
        'shell',
        'sql',
        'yaml',
        'yml',
        'markdown',
        'md',
        'html',
        'css',
        'scss',
        'java',
        'go',
        'rust',
        'cpp',
        'c',
        'csharp',
        'php',
        'ruby',
        'swift',
        'kotlin',
        'dart',
        'r',
        'matlab',
        'scala',
        'clojure',
        'lua',
        'perl',
        'powershell',
        'dockerfile',
        'nginx',
        'apache',
        'xml',
        'diff',
        'plaintext',
        'text',
      ],
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processedMarkdown))

  // Replace Mermaid code blocks in HTML with placeholder divs that include the diagram content
  // rehype-highlight might have processed them, so we need to find and replace
  html = html.replace(/<pre><code[^>]*class="[^"]*language-mermaid[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/g, (match, diagram) => {
    // Find the matching placeholder
    const diagramContent = diagram.trim()
    const placeholder = mermaidPlaceholders.find(p => p.content === diagramContent)
    if (placeholder) {
      // Store the diagram content in a data attribute (base64 encoded to avoid HTML issues)
      const encodedContent = Buffer.from(diagramContent).toString('base64')
      return `<div class="mermaid-placeholder" data-mermaid-id="${placeholder.placeholder}" data-mermaid-content="${encodedContent}"></div>`
    }
    // If no match found, create a new placeholder with the diagram content
    const id = `mermaid-${Date.now()}-${mermaidIndex}`
    const encodedContent = Buffer.from(diagramContent).toString('base64')
    mermaidIndex++
    return `<div class="mermaid-placeholder" data-mermaid-id="${id}" data-mermaid-content="${encodedContent}"></div>`
  })

  return html
}

