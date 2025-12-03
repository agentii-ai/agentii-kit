import Link from 'next/link'

export const metadata = {
  title: 'Agentii Blog & Documentation',
  description: 'Insights on AI-powered financial analysis, product updates, and comprehensive developer documentation for Agentii platforms.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary">Agentii</span>
              </span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/docs" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-white/10 px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase px-4 py-1 rounded-full mb-6">
              Welcome to Agentii Resources
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Blog & Documentation
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Insights on AI-powered financial analysis, product announcements, and comprehensive developer documentation for the Agentii platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 text-center"
              >
                Read Our Blog →
              </Link>
              <Link
                href="/docs"
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-colors duration-300 text-center"
              >
                Explore Docs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-white/10 px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What You'll Find Here</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card */}
            <div className="group border border-white/10 rounded-lg p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Latest Blog Posts
              </h3>
              <p className="text-white/70 mb-6">
                Insights on AI-powered financial analysis, product announcements, and industry trends from our expert team.
              </p>
              <Link href="/blog" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Read Articles →
              </Link>
            </div>

            {/* Documentation Card */}
            <div className="group border border-white/10 rounded-lg p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Comprehensive Docs
              </h3>
              <p className="text-white/70 mb-6">
                Complete documentation for Intelligence Hub, Agent Workbench, and API integration with step-by-step guides.
              </p>
              <Link href="/docs" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Explore Docs →
              </Link>
            </div>

            {/* Community Card */}
            <div className="group border border-white/10 rounded-lg p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Community & Support
              </h3>
              <p className="text-white/70 mb-6">
                Join our community, ask questions, and get help from the Agentii team and fellow users.
              </p>
              <a href="https://agentii.ai" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="border-b border-white/10 px-6 py-20 md:py-32 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Content</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Latest Blog */}
            <div className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white/20 text-6xl font-bold">
                📰
              </div>
              <div className="p-8">
                <p className="text-white/60 text-sm mb-2">Latest Blog Post</p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Introducing Matrix 2.0: The Future of AI-Driven Analysis
                </h3>
                <p className="text-white/70 mb-6">
                  Discover how Matrix 2.0 transforms complex financial data into actionable insights with advanced agent orchestration.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Full Article
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Getting Started */}
            <div className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white/20 text-6xl font-bold">
                🚀
              </div>
              <div className="p-8">
                <p className="text-white/60 text-sm mb-2">Quick Start Guide</p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Getting Started with Agentii
                </h3>
                <p className="text-white/70 mb-6">
                  Set up Agentii and create your first financial analysis workflow in just a few minutes with our quick start guide.
                </p>
                <Link href="/docs" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  View Guide
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Explore our comprehensive documentation or dive into the latest insights from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/getting-started"
              className="px-10 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Start Learning Today
            </Link>
            <Link
              href="/blog"
              className="px-10 py-3 border border-primary/50 text-white font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Read Latest Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>&copy; 2025 Agentii AI. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-6 text-white/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
