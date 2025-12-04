# API Contracts

**Feature**: Primary Frontend Redesign with Secondary Frontend Design
**Branch**: `001-redesign-primary-frontend`
**Date**: 2025-12-04

---

## Overview

This feature **does not require API contracts** because it is a **static site** with no backend API.

---

## Why No API Contracts?

1. **Static Site Architecture**
   - The website is built as a Nextra static site (SSG) using Next.js 14
   - All pages are pre-rendered at build time (`npm run build` → `.next/out/` static HTML)
   - No server-side API endpoints or backend services

2. **Data Sources**
   - **Kit data**: Static TypeScript files (`data/kits.ts`) imported directly in components
   - **Blog articles**: MDX files (`content/blog/*.mdx`) managed by Nextra's content loader
   - **No external APIs**: No third-party API integrations required for this redesign

3. **Client-Side Operations**
   - **Filtering**: Performed client-side in `FilterSidebar` and `KitsGrid` components using React state
   - **Pagination**: Implemented client-side with array slicing
   - **Search**: Client-side string matching on kit titles/descriptions
   - **No backend needed**: All data processing happens in the browser

4. **Constitution Compliance**
   - Constitution explicitly prohibits "Backend API server" for this project
   - Static Site Generation (Principle III) mandates "No server-side API endpoints"

---

## Alternative: Component Interfaces

While there are no HTTP API contracts, **component interfaces** define the data contracts between components. These are documented in:

- **[component-interfaces.md](./component-interfaces.md)** - TypeScript interfaces for component props
- **[data-model.md](../data-model.md)** - Data structures for Kit, Article, Category entities

---

## Future Considerations

If future enhancements require backend APIs (e.g., dynamic kit data from GitHub API, user authentication), contracts will be added here following **OpenAPI 3.0 specification**.

**Example scenarios that would require API contracts:**
- Fetching real-time GitHub stars/contributors for kits
- User-submitted kit suggestions (would require backend validation)
- Comment system integration (would require backend persistence)
- Analytics dashboard (would require backend data aggregation)

**Contract format** (if needed in future):
- OpenAPI 3.0 YAML files in this directory
- One file per API domain (e.g., `kits-api.yaml`, `users-api.yaml`)
- Generated TypeScript types using `openapi-typescript` or similar tools

---

## Related Documentation

- [data-model.md](../data-model.md) - Data structures and validation rules
- [component-interfaces.md](./component-interfaces.md) - Component prop interfaces
- [quickstart.md](../quickstart.md) - Local development setup
- [research.md](../research.md) - Technical decisions and alternatives
