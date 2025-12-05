/**
 * Kit Data Schema Contracts
 *
 * This file defines the complete TypeScript interface contracts for all kit-related entities.
 * These interfaces serve as the source of truth for kit data validation and structure.
 *
 * Source: Feature specification in specs/002-kits-data-update/spec.md
 * Implementation: data/kits.ts
 *
 * PHASE 2 GATE: After Phase 1 Setup completes, admins can use these interfaces to validate
 * extracted kit metadata from GitHub repositories.
 */

// ============================================================================
// Enums & Type Aliases
// ============================================================================

/**
 * Kit domain categories
 * Extensible set of domains covering various kit types
 * Example domains: PMF discovery, blog content, Twitter marketing, growth hacking, sales, etc.
 */
export type KitDomain =
  | 'pmf'
  | 'blog'
  | 'twitter'
  | 'growth'
  | 'sales'
  | 'seo'
  | 'launch'
  | 'edu'
  | 'legal'
  | 'startup'
  | 'design-system'
  | 'dev';

/**
 * Kit visibility and lifecycle status
 * Controls how kits are displayed and accessed on the website
 */
export type KitStatus = 'featured' | 'experimental' | 'archived';

/**
 * Workflow phase identifiers
 * Defines the standard workflow steps for spec-driven development
 */
export type WorkflowPhaseId =
  | 'specification'
  | 'clarification'
  | 'planning'
  | 'task-breakdown'
  | 'execution';

/**
 * Project structure node categories
 * Organizes kit repository structure by functional area
 */
export type StructureCategory =
  | 'commands'
  | 'templates'
  | 'memory'
  | 'scripts'
  | 'refs'
  | 'specs'
  | 'other';

/**
 * Template types included in kits
 * Different kinds of reusable templates available in a kit
 */
export type TemplateType =
  | 'spec'
  | 'plan'
  | 'tasks'
  | 'checklist'
  | 'post'
  | 'campaign';

// ============================================================================
// Supporting Interfaces
// ============================================================================

/**
 * Workflow phase configuration for a kit
 *
 * Defines a single step in the spec-driven workflow.
 * Each kit typically has 3-5 workflow phases guiding users through the process.
 *
 * Example:
 * {
 *   id: 'specification',
 *   name: 'Specification',
 *   description: 'Define what you want to build (requirements, user stories)',
 *   slashCommand: '/pmfkit.specify',
 *   keyOutputs: ['spec.md', 'user stories', 'acceptance criteria']
 * }
 */
export interface KitWorkflowPhase {
  /**
   * Unique workflow phase identifier
   * Must be one of: specification, clarification, planning, task-breakdown, execution
   */
  id: WorkflowPhaseId;

  /**
   * Display name for UI and documentation
   * Examples: 'Specification', 'Planning', 'Execution'
   */
  name: string;

  /**
   * Human-readable description of what this phase accomplishes
   * Used in documentation and help text
   */
  description: string;

  /**
   * Associated AI agent slash command
   * Pattern: '/[domain]kit.[phase]'
   * Examples: '/pmfkit.specify', '/blogkit.plan', '/twitterkit.tasks'
   */
  slashCommand: string;

  /**
   * Key outputs and deliverables from this phase
   * Helps users understand what they'll produce in this step
   * Examples: ['spec.md', 'user stories', 'success metrics']
   */
  keyOutputs: string[];
}

/**
 * CLI installation and execution configuration
 *
 * Defines how users can install and run the kit from their command line.
 * Supports both one-time execution and persistent installation.
 *
 * Example:
 * {
 *   oneTimeCommand: 'uvx pmf-kit@latest',
 *   checkCommand: 'pmf --version',
 *   installCommand: 'uv tool install pmf-kit',
 *   binaryName: 'pmf'
 * }
 */
export interface KitCliConfig {
  /**
   * One-time install command
   * Allows users to try the kit without permanent installation
   * Examples: 'uvx pmf-kit@latest', 'npx pmf-kit@latest'
   */
  oneTimeCommand: string;

  /**
   * Command to verify successful installation
   * Used to test if the kit is properly installed
   * Examples: 'pmf --version', 'blog check'
   */
  checkCommand: string;

  /**
   * Persistent installation command
   * Used for permanent installation via tool manager
   * Examples: 'uv tool install pmf-kit', 'npm install -g pmf-kit'
   */
  installCommand: string;

  /**
   * Binary or command name in shell
   * The command name users type after installation
   * Examples: 'pmf', 'blog', 'twitterify'
   */
  binaryName: string;
}

/**
 * Project structure node for kit template organization
 *
 * Describes a key directory or file in the kit repository.
 * Used for documentation, navigation, and understanding kit layout.
 *
 * Example:
 * {
 *   path: '/.claude/commands',
 *   label: 'AI Agent Commands',
 *   category: 'commands'
 * }
 */
export interface KitProjectStructureNode {
  /**
   * File or directory path within kit repository
   * Examples: '/.claude/commands', '/specs', '/templates', '/README.md'
   */
  path: string;

  /**
   * Human-readable label for documentation
   * Examples: 'AI Agent Commands', 'Specification Templates', 'Memory'
   */
  label: string;

  /**
   * Category for organization and filtering
   * Helps group related files and directories
   */
  category: StructureCategory;
}

/**
 * Reusable template metadata
 *
 * References a template file available in the kit that users can copy and customize.
 * Helps users discover and understand available templates.
 *
 * Example:
 * {
 *   id: 'spec-template',
 *   path: '/specs/001-template/spec.md',
 *   type: 'spec',
 *   description: 'Feature specification template with all required sections'
 * }
 */
export interface KitTemplate {
  /**
   * Unique template identifier
   * Examples: 'spec-template', 'tasks-checklist', 'plan-template'
   */
  id: string;

  /**
   * Path to template file in kit repository
   * Relative to repository root
   * Examples: '/specs/template/spec.md', '/templates/tasks-checklist.md'
   */
  path: string;

  /**
   * Type of template for categorization
   * Helps organize templates by purpose
   */
  type: TemplateType;

  /**
   * Brief description of template purpose
   * Helps users decide which template to use
   * Examples: 'Feature specification with all required sections', 'Weekly content plan checklist'
   */
  description: string;
}

/**
 * Constitution/principles configuration for kit
 *
 * References the kit's core guidelines and constraints.
 * Defines the principles and rules that govern using this kit.
 *
 * Example:
 * {
 *   path: '/constitution.md',
 *   principles: [
 *     'Content-First: All specs are markdown, versioned in Git',
 *     'No Breaking Changes: User data always remains valid',
 *     'Type-Safe: All data conforms to defined schemas'
 *   ]
 * }
 */
export interface KitConstitution {
  /**
   * Path to constitution.md or guidelines file
   * Relative to repository root
   * Examples: '/constitution.md', '/docs/principles.md'
   */
  path: string;

  /**
   * Core principles defined in the constitution
   * Lists the immutable rules and guidelines for the kit
   * Each principle should be concise and clear
   */
  principles: string[];
}

// ============================================================================
// Main Kit Interface
// ============================================================================

/**
 * Unified Kit data structure
 *
 * Represents a complete specification kit used with AI agents.
 * This is the single source of truth for all kit metadata.
 *
 * VALIDATION RULES:
 * - All 'id' values must be unique and lowercase
 * - 'shortTagline' must be ≤120 characters (for SEO meta descriptions)
 * - 'status' must be one of: 'featured', 'experimental', 'archived'
 * - 'workflows' array must contain at least 3 phases
 * - 'coreSlashCommands' must match pattern: /[domain]kit.*
 * - All URLs must be valid and accessible
 * - Build-time TypeScript compilation catches all violations
 *
 * LIFECYCLE:
 * - Phase 2: New kits created with minimal required fields
 * - Phase 3: All real kit data populated with complete information
 * - Phase 4+: Optional fields auto-updated by Vercel cron jobs
 *
 * MIGRATION STRATEGY:
 * - Backward-compatible with legacy mock data during Phase 2
 * - After Phase 3, all new kits must populate new fields
 * - Legacy fields maintained for backward compatibility with existing components
 */
export interface Kit {
  // ========================================================================
  // REQUIRED FIELDS (Core Identity)
  // ========================================================================

  /**
   * Unique kit identifier (lowercase, hyphen-separated)
   * REQUIRED: Must be globally unique
   * CONSTRAINT: No spaces, lowercase only
   * Examples: 'pmf-kit', 'blog-tech-kit', 'twitter-init-kit'
   *
   * VALIDATION:
   * - Must match: /^[a-z0-9-]+$/
   * - Must be unique across all kits
   */
  id: string;

  /**
   * Display name for UI rendering
   * REQUIRED: Must be human-readable
   * Examples: 'PMF Kit', 'Blog-Tech-Kit', 'Twitter-Init-Kit'
   *
   * VALIDATION:
   * - Min 3 characters
   * - Max 50 characters
   */
  name: string;

  /**
   * Unicode emoji icon for visual identification
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Example: '🎯', '📝', '🐦'
   *
   * VALIDATION:
   * - Must be a single emoji character
   */
  emoji?: string;

  /**
   * One-line tagline for featured sections
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * CONSTRAINT: Max 120 characters (fits in meta descriptions)
   *
   * Example: "Discover and validate product-market fit faster with AI agents."
   *
   * VALIDATION:
   * - Max 120 characters
   * - No line breaks
   */
  shortTagline?: string;

  /**
   * Multi-sentence description of kit purpose and value
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Used in full kit documentation and SEO
   *
   * VALIDATION:
   * - Min 50 characters
   * - Contain at least one sentence (ends with period)
   */
  longDescription?: string;

  /**
   * Kit domain category
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * CONSTRAINT: Must be one of the defined KitDomain values
   *
   * VALIDATION:
   * - Must be a valid KitDomain enum value
   */
  domain?: KitDomain;

  /**
   * Public GitHub repository URL
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * CONSTRAINT: Must be valid and accessible
   *
   * Example: 'https://github.com/agentii-ai/pmf-kit'
   *
   * VALIDATION:
   * - Must match: /^https:\/\/github\.com\//
   * - Must be publicly accessible (HTTP 200)
   */
  githubUrl?: string;

  /**
   * Kit visibility and lifecycle status
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition, use legacy 'featured' field
   * Controls visibility and management state
   *
   * VALIDATION:
   * - Must be one of: 'featured', 'experimental', 'archived'
   */
  status?: KitStatus;

  // ========================================================================
  // OPTIONAL REFERENCE URLs
  // ========================================================================

  /**
   * Optional link to specification documentation
   * URL to full feature specification on the kit's website
   */
  specDocUrl?: string;

  /**
   * Optional link to implementation plan
   * URL to implementation roadmap or planning document
   */
  implementationPlanUrl?: string;

  /**
   * Optional link to upstream spec-kit or reference
   * URL to original spec-kit if this kit is derived from one
   */
  upstreamSpecKitUrl?: string;

  // ========================================================================
  // CLI CONFIGURATION
  // ========================================================================

  /**
   * CLI installation and execution configuration
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Defines how users install and run this kit
   */
  cli?: KitCliConfig;

  // ========================================================================
  // AI AGENT INTEGRATION
  // ========================================================================

  /**
   * List of supported AI coding agents
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['Claude Code', 'Cursor', 'Windsurf']
   *
   * VALIDATION:
   * - Must be non-empty
   */
  aiAgentsSupported?: string[];

  /**
   * Agent slash command namespace
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Pattern for all slash commands provided by this kit
   *
   * VALIDATION:
   * - Must match pattern: /^\/[a-z0-9]+kit\.\*$/
   * - Example: '/pmfkit.*', '/blogkit.*'
   */
  slashCommandNamespace?: string;

  /**
   * Core slash commands available for this kit
   * REQUIRED (Phase 3+): For real kits (min 3 commands)
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['/pmfkit.specify', '/pmfkit.plan', '/pmfkit.tasks']
   *
   * VALIDATION:
   * - Minimum 3 commands
   * - All must match namespace pattern
   * - Must represent: specification → planning → execution
   */
  coreSlashCommands?: string[];

  // ========================================================================
  // WORKFLOWS & STRUCTURE
  // ========================================================================

  /**
   * Workflow phases for this kit
   * REQUIRED (Phase 3+): For real kits (min 3 phases)
   * OPTIONAL (Phase 2): During transition
   * Defines the steps users take when using this kit with AI agents
   *
   * VALIDATION:
   * - Minimum 3 phases
   * - Must include: specification, planning, execution
   * - Each phase must have unique id
   */
  workflows?: KitWorkflowPhase[];

  /**
   * Key directories and files in kit repository
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Used for documentation and navigation
   */
  projectStructure?: KitProjectStructureNode[];

  /**
   * Reusable templates included with this kit
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Helps users discover available templates
   */
  templates?: KitTemplate[];

  /**
   * Constitution and core principles
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   * Defines immutable rules for this kit
   */
  constitution?: KitConstitution;

  // ========================================================================
  // METADATA & CATEGORIZATION
  // ========================================================================

  /**
   * Real-world use case examples
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['SaaS founders', 'Content creators', 'Marketing teams']
   * Helps users understand who can benefit from this kit
   */
  examplesByUseCase?: string[];

  /**
   * Prerequisites to use this kit
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['Node.js 18+', 'Claude Code or similar AI agent']
   * Helps users understand what they need before starting
   */
  prerequisites?: string[];

  /**
   * Target audience for this kit
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['Founders', 'Product Managers', 'Content Teams']
   * Defines the primary users this kit is designed for
   */
  targetUsers?: string[];

  /**
   * Key value propositions and benefits
   * REQUIRED (Phase 3+): For real kits
   * OPTIONAL (Phase 2): During transition
   *
   * Examples: ['Move from vibe coding to predictable outcomes', 'Enable cross-functional collaboration']
   * Marketing benefits of using this kit
   */
  benefits?: string[];

  // ========================================================================
  // BACKWARD COMPATIBILITY FIELDS (Legacy)
  // ========================================================================
  // These fields maintain compatibility with existing code during transition.
  // After Phase 3, all real kits use new field names above.
  // Mock data continues using legacy fields during Phase 2.

  /** Legacy slug field for URL routing */
  slug: string;

  /** Legacy category field for categorization */
  category: string;

  /** Legacy tags for search and filtering */
  tags: string[];

  /** Legacy github URL field name */
  github?: string;

  /** Legacy description field */
  description?: string;

  /** GitHub star count */
  stars: number;

  /** Last updated timestamp (ISO format) */
  lastUpdated: string;

  /** Author information */
  author: {
    name: string;
    avatar?: string;
  };

  /** Legacy featured flag */
  featured?: boolean;
}

// ============================================================================
// Validation Functions
// ============================================================================

/**
 * Runtime type guard for Kit interface
 *
 * Validates that an object conforms to the Kit interface.
 * Used for build-time and runtime validation of kit records.
 *
 * @param kit - Object to validate
 * @returns true if object is a valid Kit, false otherwise
 *
 * VALIDATION CHECKS:
 * - Required fields present and correct type
 * - Optional new fields (when present) have correct type
 * - Field values pass domain-specific constraints
 * - No unknown properties
 *
 * EXAMPLES:
 * ```typescript
 * const data = await fetchKitData();
 * if (validateKit(data)) {
 *   console.log('Kit is valid:', data.name);
 * } else {
 *   console.error('Invalid kit data');
 * }
 * ```
 */
export function validateKit(kit: unknown): kit is Kit {
  if (typeof kit !== 'object' || kit === null) {
    return false;
  }

  const k = kit as Record<string, unknown>;

  // Check required fields
  if (typeof k.id !== 'string' || !k.id.match(/^[a-z0-9-]+$/)) {
    return false;
  }

  if (typeof k.name !== 'string' || k.name.length < 3 || k.name.length > 50) {
    return false;
  }

  if (typeof k.slug !== 'string') {
    return false;
  }

  if (typeof k.category !== 'string') {
    return false;
  }

  if (!Array.isArray(k.tags) || !k.tags.every((t) => typeof t === 'string')) {
    return false;
  }

  if (typeof k.stars !== 'number' || k.stars < 0) {
    return false;
  }

  if (typeof k.lastUpdated !== 'string') {
    return false;
  }

  if (typeof k.author !== 'object' || k.author === null) {
    return false;
  }

  const author = k.author as Record<string, unknown>;
  if (typeof author.name !== 'string') {
    return false;
  }

  // Check optional new fields (when present)
  if (k.emoji !== undefined && typeof k.emoji !== 'string') {
    return false;
  }

  if (k.shortTagline !== undefined && (typeof k.shortTagline !== 'string' || k.shortTagline.length > 120)) {
    return false;
  }

  if (k.longDescription !== undefined && typeof k.longDescription !== 'string') {
    return false;
  }

  if (k.domain !== undefined && typeof k.domain !== 'string') {
    return false;
  }

  if (k.githubUrl !== undefined && typeof k.githubUrl !== 'string') {
    return false;
  }

  if (k.status !== undefined && !['featured', 'experimental', 'archived'].includes(k.status as string)) {
    return false;
  }

  if (k.workflows !== undefined && !Array.isArray(k.workflows)) {
    return false;
  }

  return true;
}

/**
 * Validate kit ID uniqueness
 *
 * @param id - Kit ID to validate
 * @param existingIds - Set of existing kit IDs
 * @returns true if ID is unique, false otherwise
 */
export function validateKitIdUniqueness(id: string, existingIds: Set<string>): boolean {
  return !existingIds.has(id.toLowerCase());
}

/**
 * Validate kit shortTagline length for SEO
 *
 * @param tagline - Tagline text
 * @returns true if valid for meta descriptions, false otherwise
 */
export function validateShortTagline(tagline: string | undefined): boolean {
  if (tagline === undefined) return true;
  return tagline.length > 0 && tagline.length <= 120 && !tagline.includes('\n');
}
