export enum KitCategory {
  DEV = "DEV-KIT",
  PM = "PM-KIT",
  MARKETING = "MARKETING-KIT",
  LEGAL = "LEGAL-KIT",
  FINANCE = "FINANCE-KIT",
  DESIGN = "DESIGN-KIT",
  OPS = "OPS-KIT",
}

export enum CategoryColor {
  DEV = "blue",
  PM = "purple",
  MARKETING = "pink",
  LEGAL = "amber",
  FINANCE = "green",
  DESIGN = "violet",
  OPS = "orange",
}

export interface Kit {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: KitCategory;
  tags: string[];
  stars: number;
  lastUpdated: string; // ISO date string
  github?: string;
  author: {
    name: string;
    avatar?: string;
  };
  featured?: boolean;
}

export const categoryMetadata: Record<
  KitCategory,
  { color: CategoryColor; description: string; icon: string }
> = {
  [KitCategory.DEV]: {
    color: CategoryColor.DEV,
    description: "Developer tools and engineering workflows",
    icon: "code",
  },
  [KitCategory.PM]: {
    color: CategoryColor.PM,
    description: "Product management and planning",
    icon: "layout",
  },
  [KitCategory.MARKETING]: {
    color: CategoryColor.MARKETING,
    description: "Marketing campaigns and content",
    icon: "megaphone",
  },
  [KitCategory.LEGAL]: {
    color: CategoryColor.LEGAL,
    description: "Legal documents and compliance",
    icon: "scale",
  },
  [KitCategory.FINANCE]: {
    color: CategoryColor.FINANCE,
    description: "Financial analysis and reporting",
    icon: "dollar-sign",
  },
  [KitCategory.DESIGN]: {
    color: CategoryColor.DESIGN,
    description: "Design systems and UI/UX",
    icon: "palette",
  },
  [KitCategory.OPS]: {
    color: CategoryColor.OPS,
    description: "Operations and infrastructure",
    icon: "settings",
  },
};

export const mockKits: Kit[] = [
  // DEV-KIT
  {
    id: "1",
    name: "React Component Generator",
    slug: "react-component-generator",
    description:
      "Generate production-ready React components with TypeScript, tests, and Storybook stories. Includes best practices for hooks, props validation, and accessibility.",
    category: KitCategory.DEV,
    tags: ["react", "typescript", "testing", "storybook"],
    stars: 1243,
    lastUpdated: "2025-01-15T10:30:00Z",
    github: "https://github.com/agentii-kit/react-component-gen",
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    featured: true,
  },
  {
    id: "2",
    name: "API Documentation Writer",
    slug: "api-documentation-writer",
    description:
      "Automatically generate comprehensive API documentation from your code. Supports OpenAPI, REST, GraphQL, and gRPC with interactive examples.",
    category: KitCategory.DEV,
    tags: ["documentation", "api", "openapi", "graphql"],
    stars: 892,
    lastUpdated: "2025-01-10T14:20:00Z",
    github: "https://github.com/agentii-kit/api-doc-writer",
    author: {
      name: "Alex Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
  },
  {
    id: "3",
    name: "Database Schema Designer",
    slug: "database-schema-designer",
    description:
      "Design and optimize database schemas with AI assistance. Generate migrations, validate relationships, and suggest indexes for PostgreSQL, MySQL, and MongoDB.",
    category: KitCategory.DEV,
    tags: ["database", "sql", "migrations", "postgresql"],
    stars: 756,
    lastUpdated: "2024-12-28T09:15:00Z",
    author: {
      name: "Jordan Lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
    featured: true,
  },

  // PM-KIT
  {
    id: "4",
    name: "Product Spec Generator",
    slug: "product-spec-generator",
    description:
      "Create detailed product specifications from ideas. Includes user stories, acceptance criteria, technical requirements, and success metrics.",
    category: KitCategory.PM,
    tags: ["specs", "requirements", "user-stories", "roadmap"],
    stars: 1567,
    lastUpdated: "2025-01-12T11:45:00Z",
    github: "https://github.com/agentii-kit/product-spec-gen",
    author: {
      name: "Maya Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    },
    featured: true,
  },
  {
    id: "5",
    name: "Sprint Planning Assistant",
    slug: "sprint-planning-assistant",
    description:
      "Plan and organize sprints efficiently. Break down epics, estimate story points, balance team capacity, and generate sprint goals.",
    category: KitCategory.PM,
    tags: ["agile", "scrum", "sprint", "jira"],
    stars: 634,
    lastUpdated: "2025-01-08T16:00:00Z",
    author: {
      name: "Chris Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    },
  },
  {
    id: "6",
    name: "Roadmap Builder",
    slug: "roadmap-builder",
    description:
      "Build strategic product roadmaps with timeline visualization. Prioritize features, align with business goals, and communicate plans to stakeholders.",
    category: KitCategory.PM,
    tags: ["roadmap", "strategy", "planning", "okr"],
    stars: 823,
    lastUpdated: "2024-12-20T13:30:00Z",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  },
  {
    id: "18",
    name: "PMF Kit",
    slug: "pmf-kit",
    description:
      "Spec-driven toolkit for discovering and validating product-market fit for AI SaaS products. Includes PMF workflows, templates, and AI agent commands.",
    category: KitCategory.PM,
    tags: ["pmf", "product-market-fit", "research", "ai-saas"],
    stars: 2100,
    lastUpdated: "2025-02-05T09:00:00Z",
    github: "https://github.com/agentii-ai/pmf-kit",
    author: {
      name: "agentii-ai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PMF",
    },
    featured: true,
  },

  // MARKETING-KIT
  {
    id: "7",
    name: "SEO Content Optimizer",
    slug: "seo-content-optimizer",
    description:
      "Optimize content for search engines with AI-powered keyword analysis, meta descriptions, and content structure recommendations.",
    category: KitCategory.MARKETING,
    tags: ["seo", "content", "keywords", "analytics"],
    stars: 1891,
    lastUpdated: "2025-01-14T08:45:00Z",
    github: "https://github.com/agentii-kit/seo-optimizer",
    author: {
      name: "Marcus Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    featured: true,
  },
  {
    id: "8",
    name: "Social Media Campaign Manager",
    slug: "social-media-campaign-manager",
    description:
      "Plan and execute social media campaigns across platforms. Generate post variations, schedule content, and track engagement metrics.",
    category: KitCategory.MARKETING,
    tags: ["social-media", "campaigns", "engagement", "analytics"],
    stars: 1245,
    lastUpdated: "2025-01-11T15:20:00Z",
    author: {
      name: "Lisa Wang",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
  },
  {
    id: "9",
    name: "Email Marketing Assistant",
    slug: "email-marketing-assistant",
    description:
      "Create compelling email campaigns with A/B testing suggestions, subject line optimization, and personalization strategies.",
    category: KitCategory.MARKETING,
    tags: ["email", "campaigns", "ab-testing", "personalization"],
    stars: 678,
    lastUpdated: "2025-01-05T10:00:00Z",
    author: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  },
  {
    id: "19",
    name: "Blog-Tech-Kit",
    slug: "blog-tech-kit",
    description:
      "Spec-driven toolkit for building authority and product blogs with AI agents. Define content strategy, editorial workflows, and production tasks.",
    category: KitCategory.MARKETING,
    tags: ["blog", "content", "authority", "spec-kit"],
    stars: 1950,
    lastUpdated: "2025-02-04T18:30:00Z",
    github: "https://github.com/agentii-ai/blog-tech-kit",
    author: {
      name: "agentii-ai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blog",
    },
    featured: true,
  },
  {
    id: "20",
    name: "Twitter-Init-Kit",
    slug: "twitter-init-kit",
    description:
      "Spec-driven Twitter marketing toolkit for AI SaaS launches. Includes CLI and AI agent workflows for campaigns, growth loops, and founder-led content.",
    category: KitCategory.MARKETING,
    tags: ["twitter", "launch", "campaigns", "growth"],
    stars: 1875,
    lastUpdated: "2025-02-03T20:15:00Z",
    github: "https://github.com/agentii-ai/twitter-init-kit",
    author: {
      name: "agentii-ai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Twitter",
    },
    featured: true,
  },

  // LEGAL-KIT
  {
    id: "10",
    name: "Contract Template Generator",
    slug: "contract-template-generator",
    description:
      "Generate customizable legal contract templates for various business needs. Includes NDAs, employment agreements, and service contracts.",
    category: KitCategory.LEGAL,
    tags: ["contracts", "templates", "nda", "legal"],
    stars: 543,
    lastUpdated: "2024-12-15T09:30:00Z",
    author: {
      name: "Jennifer Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
    },
  },
  {
    id: "11",
    name: "Privacy Policy Builder",
    slug: "privacy-policy-builder",
    description:
      "Create GDPR and CCPA compliant privacy policies tailored to your business. Covers data collection, cookies, user rights, and more.",
    category: KitCategory.LEGAL,
    tags: ["privacy", "gdpr", "ccpa", "compliance"],
    stars: 789,
    lastUpdated: "2025-01-09T14:15:00Z",
    github: "https://github.com/agentii-kit/privacy-policy-builder",
    author: {
      name: "Robert Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    },
    featured: true,
  },

  // FINANCE-KIT
  {
    id: "12",
    name: "Financial Model Builder",
    slug: "financial-model-builder",
    description:
      "Build comprehensive financial models with revenue projections, cost analysis, and scenario planning. Export to Excel or Google Sheets.",
    category: KitCategory.FINANCE,
    tags: ["finance", "modeling", "forecasting", "analysis"],
    stars: 1123,
    lastUpdated: "2025-01-13T11:00:00Z",
    author: {
      name: "Amanda Foster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    },
  },
  {
    id: "13",
    name: "Budget Planning Assistant",
    slug: "budget-planning-assistant",
    description:
      "Create and manage department budgets with variance analysis, approval workflows, and real-time tracking against actuals.",
    category: KitCategory.FINANCE,
    tags: ["budget", "planning", "tracking", "reporting"],
    stars: 467,
    lastUpdated: "2024-12-30T10:45:00Z",
    author: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
  },

  // DESIGN-KIT
  {
    id: "14",
    name: "Design System Generator",
    slug: "design-system-generator",
    description:
      "Generate complete design systems with color palettes, typography scales, component libraries, and documentation.",
    category: KitCategory.DESIGN,
    tags: ["design-system", "tokens", "components", "documentation"],
    stars: 2134,
    lastUpdated: "2025-01-16T09:20:00Z",
    github: "https://github.com/agentii-kit/design-system-gen",
    author: {
      name: "Sophia Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    },
    featured: true,
  },
  {
    id: "15",
    name: "UI Copy Writer",
    slug: "ui-copy-writer",
    description:
      "Generate user-friendly microcopy for UI elements. Includes button labels, error messages, empty states, and tooltips.",
    category: KitCategory.DESIGN,
    tags: ["ux-writing", "microcopy", "content", "ui"],
    stars: 891,
    lastUpdated: "2025-01-07T13:30:00Z",
    author: {
      name: "Daniel Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    },
  },

  // OPS-KIT
  {
    id: "16",
    name: "Incident Response Playbook",
    slug: "incident-response-playbook",
    description:
      "Create and manage incident response procedures. Includes runbooks, escalation paths, and post-mortem templates.",
    category: KitCategory.OPS,
    tags: ["incidents", "sre", "devops", "runbooks"],
    stars: 978,
    lastUpdated: "2025-01-12T16:45:00Z",
    author: {
      name: "Kevin O'Brien",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
    },
  },
  {
    id: "17",
    name: "Kubernetes Config Generator",
    slug: "kubernetes-config-generator",
    description:
      "Generate Kubernetes manifests, Helm charts, and CI/CD pipelines with best practices for security, scaling, and monitoring.",
    category: KitCategory.OPS,
    tags: ["kubernetes", "k8s", "devops", "infrastructure"],
    stars: 1456,
    lastUpdated: "2025-01-10T12:00:00Z",
    github: "https://github.com/agentii-kit/k8s-config-gen",
    author: {
      name: "Rachel Green",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel",
    },
    featured: true,
  },
];

// Helper functions

export function getKitsByCategory(category: KitCategory): Kit[] {
  return mockKits.filter((kit) => kit.category === category);
}

export function searchKits(query: string): Kit[] {
  const lowercaseQuery = query.toLowerCase();
  return mockKits.filter(
    (kit) =>
      kit.name.toLowerCase().includes(lowercaseQuery) ||
      kit.description.toLowerCase().includes(lowercaseQuery) ||
      kit.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function sortKitsByStars(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) =>
    ascending ? a.stars - b.stars : b.stars - a.stars
  );
}

export function sortKitsByDate(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) => {
    const dateA = new Date(a.lastUpdated).getTime();
    const dateB = new Date(b.lastUpdated).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

export function getFeaturedKits(): Kit[] {
  return mockKits.filter((kit) => kit.featured);
}

export function getKitBySlug(slug: string): Kit | undefined {
  return mockKits.find((kit) => kit.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  mockKits.forEach((kit) => kit.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
