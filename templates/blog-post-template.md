---
title: Blog Post Title (10-120 characters)
description: >-
  Brief description of the post for search results and social sharing
  (50-160 characters, optimal SEO length)
date: 2025-11-23
author: Author Name
tags:
  - tag-one
  - tag-two
  - tag-three
draft: false
featured: false
slug: optional-custom-slug
cover: /images/cover-image.jpg
cover_alt: Description of the cover image
excerpt: Custom excerpt (optional, defaults to description)
canonical: https://original-source.com/post (if republishing)
updated_at: 2025-11-24
keywords:
  - keyword1
  - keyword2
og_image: /images/og-image.jpg
twitter_handle: '@agentiiai'
category: technical
series: Series Name (optional)
series_index: 1
---

# Blog Post Title

Brief introduction paragraph that hooks the reader and establishes the topic.
This should be compelling and give readers a reason to continue reading.

## Getting Started

Main content section with clear headings and subheadings.
Use hierarchical heading structure (H1, H2, H3) for better organization.

### Key Point 1

Detailed explanation of the first key point with examples and context.

### Key Point 2

Detailed explanation of the second key point with examples and context.

## Code Examples

When including code examples, always specify the language:

```python
# Example: Python code with syntax highlighting
def analyze_financial_data(data):
    """Analyze financial dataset"""
    return sum(data) / len(data)

average = analyze_financial_data([100, 200, 300])
```

```typescript
// Example: TypeScript code
interface FinancialMetrics {
  revenue: number
  profit: number
  margin: number
}

const calculateMargin = (metrics: FinancialMetrics): number => {
  return (metrics.profit / metrics.revenue) * 100
}
```

## Tables for Data

Tables work great for presenting financial data or comparisons:

| Metric | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 |
|--------|---------|---------|---------|---------|
| Revenue | $100M | $120M | $150M | $180M |
| Profit | $20M | $24M | $30M | $36M |
| Growth | 10% | 20% | 25% | 20% |

## Blockquotes and Callouts

> This is a blockquote. Use it for important quotes or highlighted information
> that stands out from the main text.

**Note:** You can also use bold text or formatting to highlight important information.

## Lists

### Ordered Lists

1. First item in numbered list
2. Second item with more detail
3. Third item to complete the sequence

### Unordered Lists

- Bullet point one
- Bullet point two
- Bullet point three
  - Nested point
  - Another nested point

## Images

Include images to break up text and illustrate concepts:

![Alt text describing the image](/images/example-image.jpg)

Always include descriptive alt text for accessibility.

## Deep Dive Section

Provide more technical depth here for readers who want to understand the topic
at a deeper level. This might include implementation details, edge cases,
or advanced concepts.

### Implementation Details

Explain how to actually implement or use the concept discussed.

### Common Pitfalls

Document common mistakes or misunderstandings:

- Pitfall 1: Description of what to avoid
- Pitfall 2: Common misunderstanding and correction
- Pitfall 3: Edge case to watch out for

## Best Practices

Consolidate learnings into actionable best practices:

1. **Practice 1:** Brief description of the recommendation
2. **Practice 2:** Why this approach is beneficial
3. **Practice 3:** How to implement it in your workflow

## Conclusion

Summarize the key takeaways and wrap up the post with a clear conclusion.
End with a call-to-action if appropriate (e.g., "Try it in your next project"
or "Share your experience in the comments").

## Related Resources

- [Related Blog Post](/blog/posts/related-post)
- [Documentation Guide](/docs/guide)
- [External Resource](https://example.com)

---

# Markdown Authoring Guide for Agentii Blog

## Frontmatter Requirements

All blog posts MUST include YAML frontmatter at the top with these fields:

### Required Fields

- **title** (10-120 characters): Post title, SEO-optimized
- **description** (50-160 characters): Meta description for search results
- **date** (YYYY-MM-DD format): Publication date, cannot be in future
- **author** (string): Author name (2+ characters)
- **tags** (array): 1-8 lowercase tags separated by hyphens

### Recommended Optional Fields

- **featured** (boolean): Highlight on homepage (`true` or `false`)
- **slug** (string): Custom URL slug (auto-generated if omitted)
- **cover** (string): Path to cover image (e.g., `/images/cover.jpg`)
- **cover_alt** (string): Alt text for cover image
- **keywords** (array): 1-10 SEO keywords

### Content Metadata

- **draft** (boolean): Set to `true` to prevent publication (default: `false`)
- **updated_at** (YYYY-MM-DD): Last update date if modified post
- **canonical** (URL): Original source URL if republishing
- **category** (string): Content category (blog, announcement, tutorial, etc.)
- **series** (string): Series name if multi-part
- **series_index** (number): Position in series (1, 2, 3...)

## Content Structure Best Practices

### Heading Hierarchy

```
# H1: Main post title (should match frontmatter title)
## H2: Major section headers
### H3: Subsection headers
#### H4: Only if deeply nested (avoid where possible)
```

**Rule:** Always start with H1 and maintain proper hierarchy. Avoid skipping levels.

### Paragraph Structure

- Keep paragraphs 3-5 sentences for readability
- Use short paragraphs (2-3 sentences) for key concepts
- Break up long content with headers, lists, and images

### Code Blocks

Always specify the language for proper syntax highlighting:

````markdown
```python
# Good: Language specified
def hello():
    print("Hello, World!")
```

```
# Bad: No language specified
echo "This won't be highlighted"
```
````

Supported languages: `python`, `typescript`, `javascript`, `jsx`, `tsx`, `bash`, `shell`, `yaml`, `json`, `sql`, `html`, `css`, `go`, `rust`, `java`, `c`, `cpp`.

### Links

```markdown
# Internal links
[Link text](/blog/posts/other-post)
[Documentation](/docs/section)

# External links
[External site](https://example.com)

# Best practice: Meaningful link text
# Bad: [Click here](https://example.com)
# Good: [Learn more about Agentii](https://agentii.ai)
```

### Images

```markdown
![Alt text describing the image](/images/path/to/image.jpg)

# Rules for images:
# 1. Always include descriptive alt text (50-160 characters)
# 2. Use relative paths starting with /images/
# 3. Supported formats: JPG, PNG, WebP, GIF
# 4. Recommended size: 800x600 or larger (will be optimized)
```

### Lists

```markdown
# Ordered lists - use for sequential steps
1. First step
2. Second step
   1. Nested step
   2. Another nested step
3. Final step

# Unordered lists - use for non-sequential items
- Item one
- Item two
- Item three
  - Nested item
  - Another nested item
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

# Tables render nicely for data presentation
# Use for financial tables, comparisons, specifications
```

### Blockquotes

```markdown
> Single-line blockquote for important statements

> Multi-line blockquote
> for extended quotes
> or important information
```

## SEO Best Practices

1. **Title**: Include primary keyword, 10-120 characters
2. **Description**: Natural language with keyword, 50-160 characters
3. **Headers**: Use keywords naturally in H2/H3 headers
4. **Images**: Descriptive alt text (includes keywords where natural)
5. **Links**: Use descriptive anchor text, not "click here"
6. **Content Length**: 800-2000 words for comprehensive posts

## Validation

Before publishing, ensure:

- ✅ All required frontmatter fields present and valid
- ✅ No future publication dates
- ✅ All images exist and have alt text
- ✅ No broken internal links
- ✅ Code blocks have language specified
- ✅ Proper markdown syntax (no orphaned formatting)
- ✅ Tags are lowercase and hyphenated
- ✅ Title is 10-120 characters
- ✅ Description is 50-160 characters

## Publishing Workflow

1. Create markdown file in `content/blog/YYYY-MM-DD-slug.md`
2. Add frontmatter with all required fields
3. Write content following markdown guidelines
4. Run validation: `npm run validate:content`
5. Preview locally: `npm run dev`
6. Commit and push to trigger automatic publication
7. Verify on blog.agentii.ai (live within 5 minutes)

## Troubleshooting

**Post not appearing on blog?**
- Check `draft: false` in frontmatter
- Verify publication date is not in future
- Ensure markdown syntax is valid

**Images not loading?**
- Verify path starts with `/images/`
- Check file exists in `public/images/`
- Use supported format (JPG, PNG, WebP, GIF)

**Content validation errors?**
- Review error message for specific field
- Check frontmatter format matches YAML spec
- Ensure required fields are present

---

**Last Updated:** 2025-11-23
**Version:** 1.0
