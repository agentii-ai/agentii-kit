import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Code, Briefcase, Scale, Megaphone, Palette, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockArticles } from "@/data/mockArticles";

const categories = [
  { label: "Development", icon: Code, tag: "dev-kit" },
  { label: "Product", icon: Briefcase, tag: "pm-kit" },
  { label: "Marketing", icon: Megaphone, tag: "marketing-kit" },
  { label: "Design", icon: Palette, tag: "design-kit" },
  { label: "Legal", icon: Scale, tag: "legal-kit" },
  { label: "Operations", icon: Settings, tag: "ops-kit" },
];

const BlogHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredArticles = mockArticles.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const currentArticle = featuredArticles[activeIndex];

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Main Hero Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              <span className="text-foreground">Insights for </span>
              <span className="text-primary">every agent.</span>
            </h1>
            
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Guides, case studies, and troubleshooting tips for autonomous AI agents. 
              Learn how to build and deploy spec-kits with Claude Code, Cursor, and modern vibe coding tools.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="#articles">Browse articles</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">View all kits</Link>
              </Button>
            </div>
          </div>
          
          {/* Right: Featured Article Card Carousel */}
          <div className="relative">
            <Link 
              to={`/blog/${currentArticle.slug}`}
              className="block bg-card border border-border rounded-xl p-6 card-hover hover:border-primary/40 transition-all duration-300"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="tag-pill text-xs">
                  {currentArticle.tags[0]}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {currentArticle.title}
              </h3>
              
              {/* Description */}
              <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                {currentArticle.description}
              </p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {Math.floor(Math.random() * 500) + 100}
                </span>
                <span className="font-mono">{currentArticle.author}</span>
              </div>
            </Link>
            
            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {featuredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`View article ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Browse by Topic Section */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Browse by topic
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.label}
                className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-foreground transition-colors">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
