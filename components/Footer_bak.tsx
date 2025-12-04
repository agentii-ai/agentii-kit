import Link from 'next/link'

/**
 * Footer Component - Pixel-perfect reproduction from frontend Footer.tsx
 * Used in blog and documentation pages
 * Three-zone layout: CTA Area, Contact & Links, Legal & Copyright
 */
const Footer = () => {
  return (
    <footer className="w-full bg-[#2a2a2a]">
      {/* ZONE 1: Main CTA Area */}
      <div className="w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200px]">
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-center items-start p-10 md:p-12 lg:px-16 lg:py-12 border-b md:border-b-0 md:border-r border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-[800px] tracking-tight">
              <span className="block mb-2">Redefine your investment research edge</span>
              <span className="block">Start your agentic transformation</span>
            </h2>
          </div>

          {/* Right Column - Subheading & CTA */}
          <div className="flex flex-col justify-center items-start p-10 md:p-12 lg:px-16 lg:py-12">
            <p className="text-sm md:text-base text-[#d0d0d0] leading-relaxed max-w-[400px] mb-4">
              See market shifts before they happen — act faster with agentic AI-powered research.
            </p>
            <a
              href="https://agentii.ai/request"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#6366f1] hover:bg-[#5555e0] text-white text-sm md:text-base font-bold uppercase px-6 py-3 tracking-wider transition-colors duration-300 rounded-md no-underline"
            >
              REQUEST DETAILS
            </a>
          </div>
        </div>
      </div>

      {/* ZONE 2: Contact & Links & Social Links */}
      <div className="w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[150px]">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between items-start p-8 md:p-10 lg:px-16 border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white">agentii</div>
            <div className="text-sm text-white">© Copyright 2025 Agentii, Inc. All rights reserved.</div>
          </div>

          {/* Right Column - Links & Social Links */}
          <div className="flex flex-row gap-20 justify-start items-start p-8 md:p-10 lg:px-16">
            {/* Left Group - Docs to Blog */}
            <div className="flex flex-col justify-start items-start">
              <Link href="/docs" className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline">
                Docs
              </Link>
              <a
                href="https://agentii.ai/ideas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline"
              >
                Investing Ideas
              </a>
              <a
                href="https://agentii.ai/insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline"
              >
                Insights
              </a>
              <a
                href="https://agentii.ai/company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline"
              >
                Company
              </a>
              <Link href="/blog" className="text-sm text-white hover:text-[#cccccc] transition-colors no-underline">
                Blog
              </Link>
            </div>
            {/* Right Group - Social Links */}
            <div className="flex flex-col justify-start items-start">
              <a href="#" className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline">
                X
              </a>
              <a href="#" className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-white hover:text-[#cccccc] transition-colors mb-3 no-underline">
                Instagram
              </a>
              <a href="#" className="text-sm text-white hover:text-[#cccccc] transition-colors no-underline">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE 3: Legal & Copyright */}
      <div className="w-full bg-[#1f1f1f]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-8 md:px-10 lg:px-16 py-5">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs">
            <a href="#" className="text-[#999999] hover:text-white transition-colors no-underline">
              Terms of Service
            </a>
            <a href="#" className="text-[#999999] hover:text-white transition-colors no-underline">
              Acceptable Use Policy
            </a>
            <a href="#" className="text-[#999999] hover:text-white transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-[#999999] hover:text-white transition-colors no-underline">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

