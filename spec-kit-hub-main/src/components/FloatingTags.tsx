interface FloatingTagsProps {
  direction: "left" | "right";
  speed: "normal" | "slow";
  variant?: "default" | "alt";
}

const FloatingTags = ({ direction, speed, variant = "default" }: FloatingTagsProps) => {
  const defaultTags = [
    "openai", "anthropic", "agent", "ai", "prompt-engineering",
    "troubleshooting", "devops", "coding-cli", "how-it-works",
    "transformer", "feature-engineering", "evaluation", "vibe-coding",
    "time-series", "llm", "rag", "memory", "security"
  ];

  const altTags = [
    "web3", "sampling", "text-generation", "vector-database", "ocr",
    "document-conversion", "vision-model", "in-context-learning",
    "hallucination", "fine-tuning", "knowledge-graph", "embeddings",
    "retrieval", "tokenization", "multi-agent", "workflow", "reasoning"
  ];

  const tags = variant === "default" ? defaultTags : altTags;
  const duplicatedTags = [...tags, ...tags]; // Duplicate for seamless loop

  const animationClass = speed === "normal" 
    ? (direction === "left" ? "animate-scroll-left" : "animate-scroll-right")
    : (direction === "left" ? "animate-scroll-left-slow" : "animate-scroll-right-slow");

  return (
    <div className="tag-row relative overflow-hidden fade-edges">
      <div className={`flex gap-3 ${animationClass}`}>
        {duplicatedTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="tag-pill cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FloatingTags;
