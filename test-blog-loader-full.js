import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { validateBlogPostFrontmatter, typedFrontmatter } from './lib/schemas/blog-post.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, 'content', 'blog');

function isValidBlogFile(filename) {
  return filename.endsWith('.md') && /^\d{4}-\d{2}-\d{2}-/.test(filename);
}

const files = fs.readdirSync(contentDir);
const validFiles = files.filter(isValidBlogFile);

console.log(`Found ${validFiles.length} valid blog files\n`);

const posts = [];

for (const file of validFiles) {
  try {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const validation = validateBlogPostFrontmatter(data);
    if (!validation.isValid) {
      console.error(`\n❌ ${file} - Validation failed:`);
      validation.errors.forEach(err => {
        console.error(`   - ${err.field}: ${err.message}`);
      });
      continue;
    }
    
    const frontmatter = typedFrontmatter(data);
    
    if (frontmatter.draft) {
      console.log(`⏸️  ${file} - Skipped (draft)`);
      continue;
    }
    
    posts.push({
      slug: file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
      title: frontmatter.title,
      date: frontmatter.date,
    });
    
    console.log(`✅ ${file} - Valid`);
  } catch (error) {
    console.error(`\n❌ ${file} - Error:`, error.message);
  }
}

console.log(`\n\nTotal published posts: ${posts.length}`);
posts.forEach(post => {
  console.log(`  - ${post.title} (${post.date})`);
});

