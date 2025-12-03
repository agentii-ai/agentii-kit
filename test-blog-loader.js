import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, 'content', 'blog');

console.log('Content directory:', contentDir);
console.log('Directory exists:', fs.existsSync(contentDir));

if (fs.existsSync(contentDir)) {
  const files = fs.readdirSync(contentDir);
  console.log('\nAll files:', files);
  
  const validFiles = files.filter(filename => {
    return filename.endsWith('.md') && /^\d{4}-\d{2}-\d{2}-/.test(filename);
  });
  
  console.log('\nValid blog files:', validFiles);
  
  for (const file of validFiles) {
    try {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      console.log(`\n=== ${file} ===`);
      console.log('Title:', data.title);
      console.log('Date:', data.date);
      console.log('Draft:', data.draft);
      console.log('Tags:', data.tags);
      console.log('Description length:', data.description?.length);
      
      // Check date validation
      if (data.date) {
        const date = new Date(data.date);
        const now = new Date();
        console.log('Date is future?', date > now);
      }
    } catch (error) {
      console.error(`Error reading ${file}:`, error.message);
    }
  }
}

