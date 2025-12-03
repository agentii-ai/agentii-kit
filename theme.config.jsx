const VERCEL_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://agentii.ai'

export default {
  logo: (
    <span>
      <span className="font-bold">Agentii</span> Blog & Docs
    </span>
  ),
  project: {
    link: 'https://github.com/agentii/agentii',
  },
  chat: {
    link: 'https://discord.gg/agentii', // Placeholder - update with actual Discord
  },
  docsRepositoryBase: 'https://github.com/agentii/agentii/tree/main/frontend-blog',

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
        © 2025 Agentii AI. Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>
      </span>
    ),
  },

  // Head configuration
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Agentii Blog & Docs" />
      <meta name="twitter:site" content="@agentiiai" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Analytics - Plausible */}
      <script defer data-domain="blog.agentii.ai" src="https://plausible.io/js/script.js"></script>

      {/* Vercel Web Analytics */}
      <script defer src="https://cdn.vercel-analytics.com/v1/web.js"></script>
    </>
  ),

  // Dark mode
  primaryHue: 200, // Blue - matches Agentii primary color
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
