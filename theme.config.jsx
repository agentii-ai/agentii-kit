const VERCEL_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://agentii.ai'

export default {
  logo: (
    <span>
      <span className="font-bold">agentii-kit</span> Blog
    </span>
  ),
  project: {
    link: 'https://github.com/agentii-kit/agentii-kit',
  },
  chat: {
    link: 'https://github.com/agentii-kit/agentii-kit/discussions', // GitHub Discussions for community
  },
  docsRepositoryBase: 'https://github.com/agentii-kit/agentii-kit/tree/main',

  // Blog theme configuration
  blog: {
    readMore: 'Continue Reading →',
  },

  // Navigation
  navbar: {
    extraContent: (
      <a href="https://agentii.ai" className="text-primary hover:text-primary/80">
        Back to Main Site →
      </a>
    ),
  },

  // Footer
  footer: {
    text: (
      <span>
        © 2025 agentii-kit. Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>
        . Open source under MIT License.
      </span>
    ),
  },

  // Head configuration
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="agentii-kit Blog" />
      <meta name="twitter:site" content="@agentii_ai" />
      <meta name="description" content="Insights and guides for building AI agents with agentii-kit specification templates." />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Analytics - Plausible */}
      <script defer data-domain="agentii.ai" src="https://plausible.io/js/script.js"></script>

      {/* Vercel Web Analytics */}
      <script defer src="https://cdn.vercel-analytics.com/v1/web.js"></script>
    </>
  ),

  // Dark mode
  primaryHue: 200, // Blue - matches agentii-kit primary color (217 91% 60%)
  primarySaturation: 100,

  // Theme colors
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System',
      }
    },
  },

  // Search (Pagefind)
  search: {
    placeholder: 'Search articles...',
  },

  // Sidebar navigation
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  // TOC (Table of Contents)
  toc: {
    float: true,
    backToTop: true,
  },

  // Edit link for content authors
  editLink: {
    text: 'Edit this page on GitHub →',
  },

  // Feedback
  feedback: {
    content: 'Help us improve this page',
    labels: 'feedback',
  },
}
