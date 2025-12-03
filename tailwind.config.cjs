/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/nextra-theme-blog/**/*.{js,ts,jsx,tsx}',
    './node_modules/nextra-theme-docs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Wall Street Classic Color Palette
        'ws-navy': '#1A1A33',        // Primary text, authority
        'ws-blue': '#003366',        // Primary blue, trust, CTAs
        'ws-blue-light': '#E8EEF7',  // Light blue backgrounds
        'ws-blue-medium': '#0066CC', // Secondary CTAs, links
        'ws-green': '#007A33',       // Financial green, gains
        'ws-green-light': '#B2E0D4', // Success backgrounds
        'ws-red': '#C60C30',         // Financial red, losses
        'ws-red-light': '#FFE8EC',   // Alert backgrounds
        'ws-gold': '#D4AF37',        // Premium/wealth accent
        'ws-gold-light': '#F5E6D3',  // Gold subtle backgrounds
        'ws-off-white': '#F9F9F9',   // Primary background
        'ws-gray-light': '#E8E8E8',  // Borders, dividers
        'ws-gray': '#666666',        // Secondary text
        'ws-gray-dark': '#333333',   // Tertiary text
        'ws-white': '#FFFFFF',       // Card surfaces

        // Primary color - Wall Street Navy (updated from Agentii blue)
        primary: {
          50: '#f0f4f9',
          100: '#e0e8f3',
          200: '#c1d1e7',
          300: '#a2badb',
          400: '#83a3cf',
          500: '#003366', // Wall Street navy
          600: '#002952',
          700: '#001f3d',
          800: '#001528',
          900: '#000b13',
          DEFAULT: '#003366',
          foreground: '#ffffff',
        },
        // Background and foreground colors with light/dark support
        background: {
          DEFAULT: '#ffffff', // Light mode
          secondary: '#f9fafb',
        },
        foreground: {
          DEFAULT: '#1f2937', // Dark text for light mode
        },
        // Muted colors for both light and dark
        muted: {
          DEFAULT: 'rgba(31, 41, 55, 0.1)', // Light mode
          foreground: 'rgba(31, 41, 55, 0.6)',
        },
        // Card backgrounds
        card: {
          DEFAULT: '#ffffff', // Light mode
          foreground: '#1f2937',
        },
        // Text colors for different weight
        text: {
          primary: '#1f2937', // Light mode
          secondary: '#6b7280',
          tertiary: '#9ca3af',
        },
        // Border colors
        border: {
          light: '#e5e7eb', // Light mode borders
          DEFAULT: '#f3f4f6',
        },
        // Gradient backgrounds for featured posts
        gradient: {
          slate: 'linear-gradient(to bottom right, #e2e8f0, #f8fafc)',
          blue: 'linear-gradient(to bottom right, #dbeafe, #f0f9ff)',
          emerald: 'linear-gradient(to bottom right, #dcfce7, #f0fdf4)',
        },
        // Hero gradient colors (matching frontend design system)
        'hero-gradient-start': 'hsl(250, 75%, 65%)',
        'hero-gradient-end': 'hsl(260, 80%, 60%)',
      },
      typography: {
        DEFAULT: {
          css: {
            // Wall Street Light mode typography (default)
            '--tw-prose-body': '#1A1A33',        // ws-navy
            '--tw-prose-headings': '#1A1A33',    // ws-navy
            '--tw-prose-links': '#003366',       // ws-blue
            '--tw-prose-bold': '#1A1A33',        // ws-navy
            '--tw-prose-counters': '#003366',    // ws-blue
            '--tw-prose-bullets': '#E8E8E8',     // ws-gray-light
            '--tw-prose-hr': '#E8E8E8',          // ws-gray-light
            '--tw-prose-quotes': '#666666',      // ws-gray
            '--tw-prose-quote-borders': '#003366', // ws-blue
            '--tw-prose-captions': '#666666',    // ws-gray
            '--tw-prose-code': '#C60C30',        // ws-red for code emphasis
            '--tw-prose-pre-bg': '#F9F9F9',      // ws-off-white
            '--tw-prose-pre-code': '#1A1A33',    // ws-navy
            '--tw-prose-th-borders': '#E8E8E8',  // ws-gray-light
            '--tw-prose-td-borders': '#E8E8E8',  // ws-gray-light
          },
        },
        invert: {
          css: {
            // Dark mode typography
            '--tw-prose-body': '#f3f4f6',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#3B82F6',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#3B82F6',
            '--tw-prose-bullets': 'rgba(255, 255, 255, 0.5)',
            '--tw-prose-hr': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-quotes': 'rgba(255, 255, 255, 0.7)',
            '--tw-prose-quote-borders': '#3B82F6',
            '--tw-prose-captions': 'rgba(255, 255, 255, 0.6)',
            '--tw-prose-code': '#fbbf24',
            '--tw-prose-pre-bg': '#0f172a',
            '--tw-prose-pre-code': 'white',
            '--tw-prose-th-borders': 'rgba(255, 255, 255, 0.2)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      fontFamily: {
        // Serif fonts for headings (Wall Street classic)
        serif: [
          'Georgia',
          'Garamond',
          'Times New Roman',
          'serif',
        ],
        // Sans-serif for body and UI (Wall Street professional)
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Arial',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        // Monospace for code
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'Courier',
          'monospace',
        ],
      },
      spacing: {
        gutter: '1.5rem',
      },
      maxWidth: {
        prose: '65ch',
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        elevated: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
