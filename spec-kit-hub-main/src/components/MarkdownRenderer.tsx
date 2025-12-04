import React from "react";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const renderMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;
    let listItems: string[] = [];
    let inBlockquote = false;
    let blockquoteLines: string[] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLanguage = '';

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${i}`} className="list-disc list-inside space-y-2 mb-6 text-text-secondary">
            {listItems.map((item, idx) => (
              <li key={idx}>{renderInline(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushBlockquote = () => {
      if (blockquoteLines.length > 0) {
        elements.push(
          <blockquote key={`bq-${i}`} className="border-l-4 border-primary/50 pl-4 py-2 my-6 bg-card/50 rounded-r-lg">
            {blockquoteLines.map((line, idx) => {
              if (line === '---') {
                return <hr key={idx} className="border-border my-4" />;
              }
              if (line === '...') {
                return <p key={idx} className="text-text-muted">...</p>;
              }
              return <p key={idx} className="text-text-secondary italic">{renderInline(line)}</p>;
            })}
          </blockquote>
        );
        blockquoteLines = [];
        inBlockquote = false;
      }
    };

    const flushCodeBlock = () => {
      if (codeLines.length > 0) {
        elements.push(
          <pre key={`code-${i}`} className="bg-card border border-border rounded-lg p-4 my-6 overflow-x-auto">
            <code className="text-sm font-mono text-text-secondary">
              {codeLines.join('\n')}
            </code>
          </pre>
        );
        codeLines = [];
        codeLanguage = '';
        inCodeBlock = false;
      }
    };

    while (i < lines.length) {
      const line = lines[i];

      // Code block
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          flushList();
          flushBlockquote();
          inCodeBlock = true;
          codeLanguage = line.slice(3);
        }
        i++;
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        i++;
        continue;
      }

      // Blockquote
      if (line.startsWith('>')) {
        flushList();
        inBlockquote = true;
        const content = line.slice(1).trim();
        if (content) {
          blockquoteLines.push(content);
        }
        i++;
        continue;
      } else if (inBlockquote && line.trim() === '') {
        flushBlockquote();
        i++;
        continue;
      }

      // Headers
      if (line.startsWith('### ')) {
        flushList();
        flushBlockquote();
        elements.push(
          <h3 key={`h3-${i}`} className="text-lg font-semibold text-foreground mt-8 mb-4">
            {renderInline(line.slice(4))}
          </h3>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        flushList();
        flushBlockquote();
        elements.push(
          <h2 key={`h2-${i}`} className="text-xl font-semibold text-foreground mt-10 mb-4">
            {renderInline(line.slice(3))}
          </h2>
        );
        i++;
        continue;
      }

      // Numbered list
      const numberedMatch = line.match(/^\d+\.\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
      if (numberedMatch) {
        flushList();
        flushBlockquote();
        elements.push(
          <div key={`num-${i}`} className="flex gap-2 mb-3">
            <span className="text-primary font-semibold">{line.match(/^\d+/)?.[0]}.</span>
            <span className="text-text-secondary">
              <strong className="text-foreground">{numberedMatch[1]}</strong> — {numberedMatch[2]}
            </span>
          </div>
        );
        i++;
        continue;
      }

      // Bullet list
      if (line.startsWith('- ')) {
        flushBlockquote();
        listItems.push(line.slice(2));
        i++;
        continue;
      }

      // Empty line
      if (line.trim() === '') {
        flushList();
        i++;
        continue;
      }

      // Regular paragraph
      flushList();
      flushBlockquote();
      elements.push(
        <p key={`p-${i}`} className="text-text-secondary mb-4 leading-relaxed">
          {renderInline(line)}
        </p>
      );
      i++;
    }

    flushList();
    flushBlockquote();
    flushCodeBlock();

    return elements;
  };

  const renderInline = (text: string): React.ReactNode => {
    // Handle bold, italic, links, and inline code
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Inline code
      const codeMatch = remaining.match(/`([^`]+)`/);
      // Bold
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
      // Italic
      const italicMatch = remaining.match(/\*([^*]+)\*/);
      // Link
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

      const matches = [
        { match: codeMatch, type: 'code' },
        { match: boldMatch, type: 'bold' },
        { match: italicMatch, type: 'italic' },
        { match: linkMatch, type: 'link' },
      ].filter(m => m.match !== null)
        .sort((a, b) => (a.match?.index ?? Infinity) - (b.match?.index ?? Infinity));

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0];
      const match = first.match!;
      const index = match.index!;

      if (index > 0) {
        parts.push(remaining.slice(0, index));
      }

      switch (first.type) {
        case 'code':
          parts.push(
            <code key={key++} className="px-1.5 py-0.5 bg-card border border-border rounded text-sm font-mono text-primary">
              {match[1]}
            </code>
          );
          remaining = remaining.slice(index + match[0].length);
          break;
        case 'bold':
          parts.push(
            <strong key={key++} className="text-foreground font-semibold">
              {match[1]}
            </strong>
          );
          remaining = remaining.slice(index + match[0].length);
          break;
        case 'italic':
          parts.push(
            <em key={key++} className="italic">
              {match[1]}
            </em>
          );
          remaining = remaining.slice(index + match[0].length);
          break;
        case 'link':
          parts.push(
            <a 
              key={key++} 
              href={match[2]} 
              className="text-primary hover:underline"
              target={match[2].startsWith('http') ? '_blank' : undefined}
              rel={match[2].startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {match[1]}
            </a>
          );
          remaining = remaining.slice(index + match[0].length);
          break;
      }
    }

    return parts;
  };

  return <div className="prose-custom">{renderMarkdown(content)}</div>;
};

export default MarkdownRenderer;
