import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Copy, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getArticleBySlug } from "@/data/mockArticles";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      email: `mailto:?subject=${text}&body=${url}`,
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          
          {/* Article Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Accent line */}
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            
            {/* Meta */}
            <div className="text-sm text-text-muted mb-2">{article.date}</div>
            <div className="text-sm text-text-secondary font-mono">{article.author}</div>
          </header>
          
          {/* Tags and Share row */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs border border-border rounded-md text-text-secondary hover:border-primary/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={handleCopy}
                className="p-2 text-text-muted hover:text-foreground transition-colors"
                title="Copy link"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="p-2 text-text-muted hover:text-foreground transition-colors"
                title="Share on X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="p-2 text-text-muted hover:text-foreground transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button 
                onClick={() => handleShare('email')}
                className="p-2 text-text-muted hover:text-foreground transition-colors"
                title="Share via email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose-custom">
            <MarkdownRenderer content={article.content} />
          </div>
        </article>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="font-mono font-semibold text-primary-foreground text-xs">AK</span>
              </div>
              <span className="text-sm text-text-secondary">
                agentii-kit — Open source spec-kits for AI agents
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
