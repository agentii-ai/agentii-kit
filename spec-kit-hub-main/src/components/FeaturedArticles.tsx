import { ArrowRight, Copy, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Article, mockArticles } from "@/data/mockArticles";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link to={`/blog/${article.slug}`}>
      <article className="group bg-card border border-border rounded-lg overflow-hidden card-hover hover:border-primary/40">
        {/* Gradient header */}
        <div className={`h-44 bg-gradient-to-br ${article.gradient}`} />
        
        {/* Content */}
        <div className="p-5">
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

const FeaturedArticles = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="text-foreground">Latest </span>
            <span className="text-primary">Articles</span>
          </h2>
          <Link to="/blog" className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-text-secondary hover:text-foreground hover:border-primary/40 transition-colors">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-text-secondary mb-8">
          Fresh insights and lessons from our recent explorations.
        </p>
        
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
  );
};

export default FeaturedArticles;
