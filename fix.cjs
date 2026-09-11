const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Remove "Tailwind CSS" and replace with generic terms
  content = content.replace(/czystym Tailwind CSS/gi, 'nowoczesnej technologii');
  content = content.replace(/kod w Tailwind CSS/gi, 'nowoczesny, bezpieczny kod');
  content = content.replace(/czysty kod Tailwind CSS/gi, 'nowoczesny, dedykowany kod');
  content = content.replace(/czysty Tailwind CSS/gi, 'nowoczesne wykonanie');
  content = content.replace(/w Tailwind CSS/gi, 'dla Twojej firmy');
  content = content.replace(/Tailwind CSS/gi, 'Strony dla firm');
  content = content.replace(/Tailwind/gi, 'Nowoczesna Strona');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('dist')) {
        walk(fullPath);
      }
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html') || fullPath.endsWith('.json')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walk('./src');
walk('./index.html');
walk('./metadata.json');
