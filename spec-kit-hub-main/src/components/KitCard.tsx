import { Star, Github, Clock, ExternalLink } from "lucide-react";

export interface Kit {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: "dev" | "pm" | "marketing" | "legal" | "finance" | "design" | "ops";
  repo: string;
  stars: number;
  lastUpdated: string;
}

interface KitCardProps {
  kit: Kit;
}

const categoryStyles: Record<string, string> = {
  dev: "bg-primary/10 text-primary border-primary/20",
  pm: "bg-warning/10 text-warning border-warning/20",
  marketing: "bg-error/10 text-error border-error/20",
  legal: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  finance: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  ops: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const KitCard = ({ kit }: KitCardProps) => {
  return (
    <article className="group bg-card border border-border rounded-lg p-5 card-hover hover:border-primary/40">
      {/* Category badge */}
      <div className="mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium uppercase tracking-wider border ${
            categoryStyles[kit.categoryColor] || categoryStyles.dev
          }`}
        >
          {kit.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {kit.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
        {kit.description}
      </p>

      {/* Meta row */}
      <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
        <div className="flex items-center gap-1.5">
          <Github className="w-3.5 h-3.5" />
          <span className="font-mono truncate max-w-[120px]">{kit.repo}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-warning" />
          <span>{kit.stars}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{kit.lastUpdated}</span>
        </div>
      </div>

      {/* Actions - visible on hover */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
          View Spec
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
        <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-surface hover:bg-surface-hover border border-border rounded-md text-sm text-text-secondary hover:text-foreground transition-colors">
          <Github className="w-3.5 h-3.5" />
          GitHub
        </button>
      </div>
    </article>
  );
};

export default KitCard;
