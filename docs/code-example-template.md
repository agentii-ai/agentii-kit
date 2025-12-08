# Code Example Template

Use this template when adding code blocks to blog posts or docs.

## 1. Basic Structure

```md
```ts
// Language tag on the first line
// 1. Short, descriptive comment
// 2. Complete, copy-pastable example
// 3. Expected output or effect
const result = doSomething()
console.log(result)
```
```

## 2. Required Elements

- **Language tag**: `ts`, `js`, `bash`, `md`, etc.
- **Descriptive comment** above the example explaining what it shows.
- **Complete example** that a reader can run without guessing missing pieces.
- **Expected output**:
  - Either as a code comment, or
  - As a short paragraph directly after the block.

## 3. Repository References

When referencing repositories:

- Use this format in text:
  - `github.com/agentii-ai/pmf-kit`
  - `github.com/agentii-ai/blog-tech-kit`
  - `github.com/agentii-ai/twitter-init-kit`
- When pointing to a file, include path and branch if relevant:
  - `pmf-kit/specs/example-product/spec.md` on `main`.

## 4. Testing Approach

Before publishing a code example:

1. Run it in a **clean environment** (fresh clone or new project directory).
2. Document required dependencies:
   - Node/TypeScript version.
   - Packages and versions (e.g., `npm install next@14`).
3. Confirm that commands and file paths match the public repo.
4. If the example is partial, clearly label it as a **snippet**.

## 5. Accessibility & Copy-Paste

- Avoid hard line wraps inside long commands; let the editor wrap.
- For multi-line shell commands, use `\` continuation only if required.
- Do not include terminal prompts (`$`) inside copy-paste blocks.
- Use spaces, not tabs, for indentation.

## 6. Example Patterns

### Shell Commands (Install + Run)

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

### TypeScript Function

```ts
// Calculate estimated reading time for a blog post
// Assumes an average of 200 words per minute.
export function estimateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / 200)
}

// Expected output: for ~1,000 words, this returns 5.
```

Use this template as a checklist before merging any new code examples.
