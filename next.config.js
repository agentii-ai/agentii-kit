import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  output: 'export',
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-darwin-arm64',
        'node_modules/@swc/core-linux-x64',
        'node_modules/@swc/core-win32-x64',
      ],
    },
  },
})
