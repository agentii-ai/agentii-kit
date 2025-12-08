/**
 * Unified Kit interface for agentii-kit data model
 * Aligns with Spec-Driven Development (SDD) specification
 * See: specs/002-kits-data-update/spec.md
 */

// ============================================================================
// Type Definitions
// ============================================================================

/** Kit domain categories */
export type KitDomain = 'pmf' | 'blog' | 'twitter' | 'growth' | 'sales' | 'seo' | 'launch' | 'edu' | 'legal' | 'startup' | 'design-system' | 'dev';

/** Kit visibility and lifecycle status */
export type KitStatus = 'featured' | 'experimental' | 'archived';

/** Workflow phase identifiers */
export type WorkflowPhaseId = 'specification' | 'clarification' | 'planning' | 'task-breakdown' | 'execution';

/** Project structure node categories */
export type StructureCategory = 'commands' | 'templates' | 'memory' | 'scripts' | 'refs' | 'specs' | 'other';

/** Template types */
export type TemplateType = 'spec' | 'plan' | 'tasks' | 'checklist' | 'post' | 'campaign';

// Legacy enums for backward compatibility with existing code
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

// ============================================================================
// Unified Kit Interface & Supporting Types
// ============================================================================

/**
 * Workflow phase configuration for a kit
 * Defines the steps users take when using an AI agent with this kit
 */
export interface KitWorkflowPhase {
  /** Unique workflow phase identifier */
  id: WorkflowPhaseId;

  /** Display name (e.g., "Specification", "Planning") */
  name: string;

  /** Description of what this phase accomplishes */
  description: string;

  /** Associated agent slash command (e.g., "/pmfkit.pmf") */
  slashCommand: string;

  /** Key outputs and deliverables from this phase */
  keyOutputs: string[];
}

/**
 * CLI installation and execution configuration
 * Defines how users install and run the kit locally
 */
export interface KitCliConfig {
  /** One-time install command (e.g., "uvx pmf-kit@latest") */
  oneTimeCommand: string;

  /** Command to verify successful installation */
  checkCommand: string;

  /** Persistent installation command (e.g., "uv tool install pmf-kit") */
  installCommand: string;

  /** Binary/command name in shell (e.g., "pmf", "blog") */
  binaryName: string;
}

/**
 * Project structure node for kit template organization
 * Describes key directories and files in the kit
 */
export interface KitProjectStructureNode {
  /** File or directory path (e.g., "/.claude/commands", "/specs") */
  path: string;

  /** Display label for documentation */
  label: string;

  /** Category for organization and filtering */
  category: StructureCategory;
}

/**
 * Reusable template metadata
 * References templates available in the kit
 */
export interface KitTemplate {
  /** Template identifier (e.g., "spec-template", "tasks-checklist") */
  id: string;

  /** Path to template file in kit repo */
  path: string;

  /** Type of template for categorization */
  type: TemplateType;

  /** Brief description of template purpose */
  description: string;
}

/**
 * Constitution/principles configuration for kit
 * Defines the kit's core guidelines and constraints
 */
export interface KitConstitution {
  /** Path to constitution.md or guidelines file */
  path: string;

  /** Core principles defined in the constitution */
  principles: string[];
}

/**
 * Unified Kit data structure
 * Represents a complete specification kit used with AI agents
 *
 * Example Kit ID: 'pmf-kit', 'blog-tech-kit', 'twitter-init-kit'
 *
 * NOTE: During transition phase (Phase 2), new fields are optional to support mock data.
 * After Phase 3, all new fields will be required for real kit data.
 */
export interface Kit {
  // ========================================================================
  // Core Identity Fields
  // ========================================================================

  /**
   * Unique kit identifier (lowercase, hyphen-separated)
   * Examples: 'pmf-kit', 'blog-tech-kit', 'twitter-init-kit'
   * Constraint: Must be globally unique, no spaces
   */
  id: string;

  /**
   * Display name for UI rendering
   * Examples: 'PMF Kit', 'Blog-Tech-Kit', 'Twitter-Init-Kit'
   */
  name: string;

  /**
   * Unicode emoji icon for visual identification
   * Example: '🎯', '📝', '🐦'
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  emoji?: string;

  /**
   * One-line tagline for featured sections
   * Constraint: Max 120 characters (fits in meta descriptions)
   * Example: "Discover and validate product-market fit faster with AI agents."
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  shortTagline?: string;

  /**
   * Multi-sentence description of kit purpose and value
   * Used in full kit documentation and SEO
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  longDescription?: string;

  /**
   * Kit domain category
   * Constraint: Must be one of the defined KitDomain values
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  domain?: KitDomain;

  /**
   * Public GitHub repository URL
   * Constraint: Must be valid and accessible
   * Example: 'https://github.com/agentii-ai/pmf-kit'
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  githubUrl?: string;

  /**
   * Kit visibility and lifecycle status
   * 'featured': Shown prominently on website
   * 'experimental': Development/beta state
   * 'archived': No longer maintained
   * NOTE: Optional during transition, use legacy 'featured' field, required for real kits (Phase 3+)
   */
  status?: KitStatus;

  // ========================================================================
  // Optional Reference URLs
  // ========================================================================

  /** Optional link to specification documentation */
  specDocUrl?: string;

  /** Optional link to implementation plan */
  implementationPlanUrl?: string;

  /** Optional link to upstream spec-kit or reference */
  upstreamSpecKitUrl?: string;

  // ========================================================================
  // CLI Configuration
  // ========================================================================

  /**
   * CLI installation and execution configuration
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  cli?: KitCliConfig;

  // ========================================================================
  // AI Agent Integration
  // ========================================================================

  /**
   * List of supported AI coding agents
   * Examples: ['Claude Code', 'Cursor', 'Windsurf']
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  aiAgentsSupported?: string[];

  /**
   * Agent slash command namespace
   * Pattern: '/[domain]kit.*'
   * Example: '/pmfkit.*', '/blogkit.*'
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  slashCommandNamespace?: string;

  /**
   * Core slash commands available for this kit
   * Examples: ['/pmfkit.pmf', '/pmfkit.plan', '/pmfkit.tasks']
   * Constraint: Must be at least 3 core commands (specification, planning, execution)
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  coreSlashCommands?: string[];

  // ========================================================================
  // Workflows & Structure
  // ========================================================================

  /**
   * Workflow phases for this kit
   * Constraint: Must contain at least 3 phases (specification, planning, execution)
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  workflows?: KitWorkflowPhase[];

  /**
   * Key directories and files in kit repository
   * Used for documentation and navigation
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  projectStructure?: KitProjectStructureNode[];

  /**
   * Reusable templates included with this kit
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  templates?: KitTemplate[];

  /**
   * Constitution and core principles
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  constitution?: KitConstitution;

  // ========================================================================
  // Metadata & Categorization
  // ========================================================================

  /**
   * Real-world use case examples
   * Examples: ['SaaS founders', 'Content creators', 'Marketing teams']
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  examplesByUseCase?: string[];

  /**
   * Prerequisites to use this kit
   * Examples: ['Node.js 18+', 'Claude Code or similar AI agent']
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  prerequisites?: string[];

  /**
   * Target audience for this kit
   * Examples: ['Founders', 'Product Managers', 'Content Teams']
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  targetUsers?: string[];

  /**
   * Key value propositions and benefits
   * Examples: ['Move from vibe coding to predictable outcomes', 'Enable cross-functional collaboration']
   * NOTE: Optional during transition, required for real kits (Phase 3+)
   */
  benefits?: string[];

  // ========================================================================
  // Backward Compatibility (Legacy Fields)
  // ========================================================================

  /**
   * Slug for URL routing (derived from id with dashes)
   * Required for backward compatibility with existing routes
   */
  slug: string;

  /**
   * Legacy category field
   * Required for backward compatibility with existing components
   */
  category: KitCategory;

  /**
   * Tags for search and filtering
   * Required for backward compatibility
   */
  tags: string[];

  /**
   * GitHub repository URL (legacy field name)
   * Maintained for backward compatibility with existing components
   * Maps to githubUrl for new code
   */
  github?: string;

  /**
   * Legacy description field (use longDescription for new code)
   * Optional for new kits, used by existing components
   */
  description?: string;

  /**
   * GitHub star count (can be auto-updated by future cron jobs)
   * Maintained for backward compatibility
   */
  stars: number;

  /**
   * Last updated timestamp (ISO date string)
   * Can be auto-updated by future cron jobs
   * Maintained for backward compatibility
   */
  lastUpdated: string;

  /**
   * Author information
   * Maintained for backward compatibility
   */
  author: {
    name: string;
    avatar?: string;
  };

  /**
   * Legacy featured flag
   * Maintained for backward compatibility (use status field instead)
   */
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

// ============================================================================
// Types exported for consumers (defined above)
// ============================================================================

// All types are exported via their inline definitions above

// ============================================================================
// Real Kit Data (Phase 2: Real kits populated from featured_kits.md extraction)
// ============================================================================

export const realKits: Kit[] = [
  // PMF Kit
  {
    id: "pmf-kit",
    name: "PMF Kit",
    emoji: "🎯",
    shortTagline: "Discover and validate product-market fit faster with AI agents.",
    longDescription: "A spec-driven toolkit for systematic PMF discovery and validation of AI SaaS products, built on the foundations of spec-kit.",
    domain: "pmf",
    githubUrl: "https://github.com/agentii-ai/pmf-kit",
    upstreamSpecKitUrl: "https://github.com/github/spec-kit",
    status: "featured",
    cli: {
      oneTimeCommand: "uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf init my-product",
      checkCommand: "uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf check",
      installCommand: "uv tool install pmf-cli --from git+https://github.com/agentii-ai/pmf-kit.git",
      binaryName: "pmf",
    },
    aiAgentsSupported: ["Claude Code", "Cursor", "Windsurf"],
    slashCommandNamespace: "/pmfkit.*",
    coreSlashCommands: [
      "/pmfkit.constitution",
      "/pmfkit.pmf",
      "/pmfkit.clarify",
      "/pmfkit.plan",
      "/pmfkit.tasks",
      "/pmfkit.implement",
    ],
    workflows: [
      {
        id: "specification",
        name: "Specification",
        description: "Define what you're trying to learn and why.",
        slashCommand: "/pmfkit.pmf",
        keyOutputs: ["Target personas", "Jobs-to-be-done", "Hero workflows", "Success metrics", "Constraints & risks"],
      },
      {
        id: "clarification",
        name: "Clarification",
        description: "Resolve ambiguities before running discovery.",
        slashCommand: "/pmfkit.clarify",
        keyOutputs: ["Sharpened personas", "Clarified hypotheses", "Precise metrics"],
      },
      {
        id: "planning",
        name: "Planning",
        description: "Design the research execution plan.",
        slashCommand: "/pmfkit.plan",
        keyOutputs: ["Research methodology", "Sample sizes", "Evidence instruments", "Analysis approach"],
      },
      {
        id: "task-breakdown",
        name: "Task Breakdown",
        description: "Generate actionable research tasks.",
        slashCommand: "/pmfkit.tasks",
        keyOutputs: ["Recruitment tasks", "Research tasks", "Analysis tasks", "Validation tasks"],
      },
      {
        id: "execution",
        name: "Execution",
        description: "Execute PMF discovery systematically with AI assistance.",
        slashCommand: "/pmfkit.implement",
        keyOutputs: ["Customer evidence", "PMF signals", "Go/no-go decisions", "Documented learnings"],
      },
    ],
    projectStructure: [
      { path: ".claude/commands/", label: "AI Agent Commands", category: "commands" },
      { path: "memory/", label: "PMF-Kit Principles", category: "memory" },
      { path: "templates/", label: "Reusable Templates", category: "templates" },
      { path: "scripts/", label: "Workflow Scripts", category: "scripts" },
      { path: "refs/", label: "Reference Documentation", category: "refs" },
      { path: "specs/", label: "Feature Specifications", category: "specs" },
    ],
    templates: [
      { id: "spec-template", path: "templates/spec-template.md", type: "spec", description: "PMF specification template" },
      { id: "plan-template", path: "templates/plan-template.md", type: "plan", description: "PMF research plan template" },
      { id: "tasks-template", path: "templates/tasks-template.md", type: "tasks", description: "Task breakdown template" },
    ],
    constitution: {
      path: "memory/constitution.md",
      principles: [
        "Specification-first approach",
        "Customer-evidence-driven",
        "Iterative validation",
        "Cross-functional integration",
      ],
    },
    examplesByUseCase: [
      "Developer tools (Cursor, Claude Code, Devin)",
      "Creative tools (Runway, Pika, HeyGen)",
      "Vertical AI tools (Harvey, Writer)",
    ],
    prerequisites: ["Linux/macOS/Windows", "AI coding agent", "uv", "Python 3.11+", "Git"],
    targetUsers: ["Founders", "Product Managers"],
    benefits: [
      "Structured PMF discovery workflow",
      "Reusable templates and commands",
      "Agent-native workflows in Claude/Cursor/Windsurf",
    ],
    // Backward compatibility
    slug: "pmf-kit",
    category: KitCategory.PM,
    tags: ["pmf", "product-market-fit", "research", "ai-saas"],
    stars: 3,
    lastUpdated: "2025-02-05T09:00:00Z",
    author: { name: "agentii-ai" },
    featured: true,
  },

  // Blog-Tech-Kit
  {
    id: "blog-tech-kit",
    name: "Blog-Tech-Kit",
    emoji: "📝",
    shortTagline: "Build authority blogs faster with AI agents.",
    longDescription: "A spec-driven toolkit for systematic blog content strategy and execution, built on the foundations of spec-kit.",
    domain: "blog",
    githubUrl: "https://github.com/agentii-ai/blog-tech-kit",
    specDocUrl: "https://github.com/agentii-ai/blog-tech-kit/blob/main/specs/000-blog-tech-kit-foundation/spec.md",
    implementationPlanUrl: "https://github.com/agentii-ai/blog-tech-kit/blob/main/specs/000-blog-tech-kit-foundation/plan.md",
    upstreamSpecKitUrl: "https://github.com/github/spec-kit",
    status: "featured",
    cli: {
      oneTimeCommand: "uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog init my-blog",
      checkCommand: "uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog check",
      installCommand: "uv tool install blog-cli --from git+https://github.com/agentii-ai/blog-tech-kit.git",
      binaryName: "blog",
    },
    aiAgentsSupported: ["Claude Code", "Cursor", "Windsurf"],
    slashCommandNamespace: "/blogkit.*",
    coreSlashCommands: [
      "/blogkit.constitution",
      "/blogkit.specify",
      "/blogkit.clarify",
      "/blogkit.plan",
      "/blogkit.tasks",
      "/blogkit.implement",
    ],
    workflows: [
      {
        id: "specification",
        name: "Specification",
        description: "Define what kind of blog you're building and why.",
        slashCommand: "/blogkit.specify",
        keyOutputs: ["Blog type", "Target audience", "Content pillars", "Publishing cadence", "Success criteria"],
      },
      {
        id: "clarification",
        name: "Clarification",
        description: "Clarify strategy and assumptions before execution.",
        slashCommand: "/blogkit.clarify",
        keyOutputs: ["Sharpened audience", "Clarified pillars", "Precise metrics"],
      },
      {
        id: "planning",
        name: "Planning",
        description: "Design editorial and technical plan.",
        slashCommand: "/blogkit.plan",
        keyOutputs: ["Editorial process", "Tech stack", "Tools & integrations", "AI discoverability plan"],
      },
      {
        id: "task-breakdown",
        name: "Task Breakdown",
        description: "Generate concrete content production tasks.",
        slashCommand: "/blogkit.tasks",
        keyOutputs: ["Platform setup tasks", "Foundation posts", "Validation checkpoints"],
      },
      {
        id: "execution",
        name: "Execution",
        description: "Execute content strategy with AI assistance.",
        slashCommand: "/blogkit.implement",
        keyOutputs: ["Published posts", "Quality-checked content", "Analytics-informed iterations"],
      },
    ],
    projectStructure: [
      { path: ".claude/commands/", label: "AI Agent Commands", category: "commands" },
      { path: ".blogkit/memory/", label: "Blog-Tech-Kit Principles", category: "memory" },
      { path: ".blogkit/templates/", label: "Reusable Templates", category: "templates" },
      { path: "refs/", label: "Reference Documentation", category: "refs" },
      { path: "specs/", label: "Feature Specifications", category: "specs" },
    ],
    templates: [
      { id: "spec-template", path: ".blogkit/templates/spec-template.md", type: "spec", description: "Blog specification template" },
      { id: "plan-template", path: ".blogkit/templates/plan-template.md", type: "plan", description: "Editorial plan template" },
      { id: "tasks-template", path: ".blogkit/templates/tasks-template.md", type: "tasks", description: "Content task breakdown" },
      { id: "blog-post-template", path: ".blogkit/templates/blog-post-template.md", type: "post", description: "Blog post structure" },
    ],
    constitution: {
      path: ".blogkit/memory/constitution.md",
      principles: [
        "Content-first approach",
        "AI-native distribution",
        "Simplicity & focus",
        "Evidence-driven optimization",
      ],
    },
    examplesByUseCase: [
      "Authority blog (Anthropic, LangChain style)",
      "Product blog (Cursor, Vercel style)",
      "Thought leadership blog (a16z style)",
    ],
    prerequisites: ["Linux/macOS/Windows", "AI coding agent", "uv", "Python 3.11+", "Git"],
    targetUsers: ["Founders", "Content teams"],
    benefits: [
      "Structured content strategy and execution",
      "Agent-native editorial workflows",
      "Templates for specs, plans, tasks, and posts",
    ],
    // Backward compatibility
    slug: "blog-tech-kit",
    category: KitCategory.MARKETING,
    tags: ["blog", "content", "authority", "spec-kit"],
    stars: 4,
    lastUpdated: "2025-02-04T18:30:00Z",
    author: { name: "agentii-ai" },
    featured: true,
  },

  // Twitter-Init-Kit
  {
    id: "twitter-init-kit",
    name: "Twitter-Init-Kit",
    emoji: "🐦",
    shortTagline: "Launch your AI product on Twitter with spec-driven marketing workflows.",
    longDescription: "A spec-driven toolkit for systematic Twitter marketing of AI SaaS products, built on the foundations of spec-kit.",
    domain: "twitter",
    githubUrl: "https://github.com/agentii-ai/twitter-init-kit",
    specDocUrl: "https://github.com/agentii-ai/twitter-init-kit/blob/main/specs/000-twitter-init-kit-foundation/spec.md",
    implementationPlanUrl: "https://github.com/agentii-ai/twitter-init-kit/blob/main/specs/000-twitter-init-kit-foundation/plan.md",
    upstreamSpecKitUrl: "https://github.com/github/spec-kit",
    status: "featured",
    cli: {
      oneTimeCommand: "uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify init my-campaign",
      checkCommand: "uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify check",
      installCommand: "uv tool install twitterify-cli --from git+https://github.com/agentii-ai/twitter-init-kit.git",
      binaryName: "twitterify",
    },
    aiAgentsSupported: ["Claude Code", "Cursor", "Windsurf"],
    slashCommandNamespace: "/twitterkit.*",
    coreSlashCommands: [
      "/twitterkit.constitution",
      "/twitterkit.specify",
      "/twitterkit.clarify",
      "/twitterkit.plan",
      "/twitterkit.tasks",
      "/twitterkit.implement",
    ],
    workflows: [
      {
        id: "specification",
        name: "Specification",
        description: "Define what you're launching and who you're targeting on Twitter.",
        slashCommand: "/twitterkit.specify",
        keyOutputs: ["Target personas", "Campaign objectives", "Success metrics", "Growth loop hypotheses"],
      },
      {
        id: "clarification",
        name: "Clarification",
        description: "Clarify campaign strategy before execution.",
        slashCommand: "/twitterkit.clarify",
        keyOutputs: ["Sharpened personas", "Clarified objectives", "Precise metrics"],
      },
      {
        id: "planning",
        name: "Planning",
        description: "Design Twitter campaign plan and experiments.",
        slashCommand: "/twitterkit.plan",
        keyOutputs: ["Twitter sprint cycles", "Phased launch plan", "Growth loops", "Validation checkpoints"],
      },
      {
        id: "task-breakdown",
        name: "Task Breakdown",
        description: "Turn campaign plan into actionable tasks.",
        slashCommand: "/twitterkit.tasks",
        keyOutputs: ["Setup & foundation tasks", "Alpha tasks", "Launch tasks", "Scale tasks"],
      },
      {
        id: "execution",
        name: "Execution",
        description: "Execute Twitter campaigns with AI assistance.",
        slashCommand: "/twitterkit.implement",
        keyOutputs: ["Content created", "Engagement metrics", "Growth experiments", "Strategy iterations"],
      },
    ],
    projectStructure: [
      { path: ".claude/commands/", label: "AI Agent Commands", category: "commands" },
      { path: ".twitterkit/memory/", label: "Twitter-Init Principles", category: "memory" },
      { path: ".twitterkit/templates/", label: "Reusable Templates", category: "templates" },
      { path: "refs/", label: "Reference Documentation", category: "refs" },
      { path: "specs/", label: "Feature Specifications", category: "specs" },
    ],
    templates: [
      { id: "spec-template", path: ".twitterkit/templates/spec-template.md", type: "spec", description: "Campaign spec template" },
      { id: "plan-template", path: ".twitterkit/templates/plan-template.md", type: "plan", description: "Campaign plan template" },
      { id: "tasks-template", path: ".twitterkit/templates/tasks-template.md", type: "tasks", description: "Marketing tasks template" },
      { id: "checklist-template", path: ".twitterkit/templates/checklist-template.md", type: "checklist", description: "Quality checklist" },
    ],
    constitution: {
      path: ".twitterkit/memory/constitution.md",
      principles: [
        "Specification-first approach",
        "Demo-driven growth",
        "Iterative validation",
        "Founder-led authenticity",
      ],
    },
    examplesByUseCase: [
      "Developer tools (Cursor, Claude Code, Devin)",
      "Creative tools (Runway, Pika, HeyGen)",
      "Vertical AI tools (Harvey, Writer)",
    ],
    prerequisites: ["Linux/macOS/Windows", "AI coding agent", "uv", "Python 3.11+", "Git"],
    targetUsers: ["Founders", "Growth leads"],
    benefits: [
      "Structured Twitter launch playbook",
      "Growth loop design baked-in",
      "Agent-native execution workflows",
    ],
    // Backward compatibility
    slug: "twitter-init-kit",
    category: KitCategory.MARKETING,
    tags: ["twitter", "launch", "campaigns", "growth"],
    stars: 3,
    lastUpdated: "2025-02-03T20:15:00Z",
    author: { name: "agentii-ai" },
    featured: true,
  },
];

// ============================================================================
// Mock Data (Deprecated - Phase 2 cleanup)
// ============================================================================

/**
 * @deprecated Mock data has been replaced with real kit data in Phase 2.
 * Archive kept below for reference only. DO NOT USE IN PRODUCTION.
 * All kits should be accessed via allKits export which now uses realKits.
 */
// Mock kits removed - see git history for archived mock data

// ============================================================================
// Data Export (Phase 2: Will be populated with real kit data)
// ============================================================================

/**
 * Unified export of all kits in the system
 * Phase 2: Populated with real kit data (pmf-kit, blog-tech-kit, twitter-init-kit)
 * Mock data preserved below for backward compatibility only
 */
export const allKits: Kit[] = realKits;

// ============================================================================
// Helper Functions (Backward Compatibility)
// ============================================================================

/**
 * Get all kits by category
 * @deprecated Use domain-based filtering from new Kit interface instead
 */
export function getKitsByCategory(category: KitCategory): Kit[] {
  return allKits.filter((kit) => kit.category === category);
}

/**
 * Search kits by name, description, or tags
 */
export function searchKits(query: string): Kit[] {
  const lowercaseQuery = query.toLowerCase();
  return allKits.filter(
    (kit) =>
      kit.name.toLowerCase().includes(lowercaseQuery) ||
      (kit.longDescription || '').toLowerCase().includes(lowercaseQuery) ||
      (kit.shortTagline || '').toLowerCase().includes(lowercaseQuery) ||
      kit.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Sort kits by star count
 */
export function sortKitsByStars(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) => {
    const starsA = a.stars ?? 0;
    const starsB = b.stars ?? 0;
    return ascending ? starsA - starsB : starsB - starsA;
  });
}

/**
 * Sort kits by last updated date
 */
export function sortKitsByDate(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) => {
    const dateA = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0;
    const dateB = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0;
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Get featured kits
 * Returns kits with status='featured' or legacy featured=true flag
 */
export function getFeaturedKits(): Kit[] {
  return allKits.filter((kit) => kit.status === 'featured' || kit.featured);
}

/**
 * Get kit by slug
 * @deprecated Use getKitById instead
 */
export function getKitBySlug(slug: string): Kit | undefined {
  return allKits.find((kit) => kit.slug === slug);
}

/**
 * Get kit by id
 */
export function getKitById(id: string): Kit | undefined {
  return allKits.find((kit) => kit.id === id);
}

/**
 * Get all kits by domain (new interface)
 */
export function getKitsByDomain(domain: KitDomain | undefined): Kit[] {
  if (!domain) return [];
  return allKits.filter((kit) => kit.domain === domain);
}

/**
 * Get all kits by status
 */
export function getKitsByStatus(status: KitStatus): Kit[] {
  return allKits.filter((kit) => kit.status === status);
}

/**
 * Get all unique tags from all kits
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  allKits.forEach((kit) => {
    if (kit.tags) {
      kit.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Get all unique domains from kits
 */
export function getAllDomains(): KitDomain[] {
  const domains = new Set<KitDomain>();
  allKits.forEach((kit) => {
    if (kit.domain) {
      domains.add(kit.domain);
    }
  });
  return Array.from(domains).sort();
}
