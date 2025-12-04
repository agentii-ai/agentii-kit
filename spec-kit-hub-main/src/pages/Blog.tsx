import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import { Article, mockArticles } from "@/data/mockArticles";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link to={`/blog/${article.slug}`}>
      <article className="group bg-card border border-border rounded-lg overflow-hidden card-hover hover:border-primary/40">
        {/* Gradient header */}
        <div className={`h-44 bg-gradient-to-br ${article.gradient}`} />
        
        {/* Content */}
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.map((tag) => (
              <span key={tag} className="tag-pill text-xs">{tag}</span>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-sm text-text-secondary mb-4 line-clamp-3">
            {article.description}
          </p>
          
          {/* Meta row */}
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>{article.date}</span>
            <span className="font-mono">{article.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <BlogHero />
        
        {/* All Articles Section */}
        <section id="articles" className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">
                <span className="text-foreground">All </span>
                <span className="text-primary">Articles</span>
              </h2>
            </div>
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>
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

export default Blog;
