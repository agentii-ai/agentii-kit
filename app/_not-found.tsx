'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h2>
          <p className="text-text-secondary text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/kits">
              Browse Kits
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
