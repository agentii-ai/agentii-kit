const useCases = [
  {
    abbr: "DK",
    title: "Developer Kits",
    description: "Structured specifications for building robust AI agents with clear architecture patterns and best practices.",
    color: "bg-primary/20 text-primary",
  },
  {
    abbr: "PM",
    title: "Product Management",
    description: "Comprehensive frameworks for scoping AI features, defining requirements, and managing stakeholder expectations.",
    color: "bg-accent-coral/20 text-accent-coral",
  },
  {
    abbr: "LG",
    title: "Legal & Compliance",
    description: "Templates and checklists for AI governance, data privacy, and regulatory compliance across jurisdictions.",
    color: "bg-status-warning/20 text-status-warning",
  },
  {
    abbr: "MK",
    title: "Marketing Kits",
    description: "Playbooks for positioning AI products, crafting messaging, and building go-to-market strategies.",
    color: "bg-status-success/20 text-status-success",
  },
  {
    abbr: "DS",
    title: "Design Systems",
    description: "UI/UX patterns and interaction guidelines for creating intuitive AI-powered interfaces.",
    color: "bg-primary/20 text-primary",
  },
  {
    abbr: "OP",
    title: "Operations",
    description: "Deployment checklists, monitoring frameworks, and incident response playbooks for AI systems.",
    color: "bg-accent-coral/20 text-accent-coral",
  },
];

const keyMetrics = [
  { value: "50+", label: "Spec Kits" },
  { value: "12K+", label: "GitHub Stars" },
  { value: "500+", label: "Contributors" },
  { value: "98%", label: "Satisfaction" },
];

const UseCases = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {metric.value}
              </p>
              <p className="text-text-muted text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Use Cases Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-foreground">Use Cases</h2>
        </div>
        
        <p className="text-text-secondary max-w-2xl mb-8">
          From development to deployment, agentii-kit provides{" "}
          <span className="text-foreground font-medium">structured specifications</span>{" "}
          for every stage of building AI agents. Whether you're a developer, PM, or legal team.
        </p>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${useCase.color} flex items-center justify-center font-mono font-semibold text-sm`}>
                  {useCase.abbr}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
