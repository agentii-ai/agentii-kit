/**
 * Utility functions for date and string formatting
 */

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
  })
}

export function formatTime(minutes: number): string {
  if (minutes < 1) return '< 1 min read'
  if (minutes === 1) return '1 min read'
  return `${minutes} min read`
}

export function formatReadingTime(minutes: number): string {
  return formatTime(minutes)
}

export function getReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / 200)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
