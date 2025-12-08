# Code Example Template

Use this template when adding code or config examples to blog posts.

## 1. General Rules

- Always use **language-tagged** fenced blocks:
  - ```ts
    // TypeScript example
    ```
  - ```js
    // JavaScript example
    ```
  - ```bash
    # Bash example
    ```
  - ```yaml
    # Config example
    ```
- Prefer **complete, runnable snippets** over fragments.
- Include **setup/dependencies** if they’re not obvious.
- Show or describe **expected output**.
- Test code in a clean environment before publishing.

## 2. Template: TypeScript / JavaScript

```ts
// Purpose: Short description of what this example does.
// Context: Where in the workflow this fits (e.g., loading specs, calling an agent).

import { something } from 'some-library'

async function runExample() {
  // 1. Setup
  const config = {
    // ... minimal config needed for this example
  }

  // 2. Call into library / kit
  const result = await something(config)

  // 3. Show / describe output
  console.log(result)
}

runExample().catch((err) => {
  console.error('Example failed:', err)
})
```

## 3. Template: Bash / CLI

```bash
# Purpose: e.g., run the blog dev server or generate a spec.

# Step 1: Install dependencies
npm install

# Step 2: Start dev server
npm run dev

# Expected:
# - Server starts on http://localhost:3000
# - Visiting /blog shows the list of posts.
```

## 4. Template: Markdown / Frontmatter

```markdown
---
# Minimal example frontmatter snippet for a blog post

# title, description, date, author, tags, keywords, cover, etc.
---

# Post Title

Intro text here.
```

## 5. Best Practices Checklist

- [ ] Code block has a language tag.
- [ ] Example is **copy‑pastable** and runnable with minimal setup.
- [ ] Comments explain **why** as well as **what**.
- [ ] Any external resources (repos, docs) linked below the snippet.
- [ ] Long examples are broken into logical chunks with explanation between.
