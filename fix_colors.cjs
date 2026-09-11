const fs = require('fs');
const path = require('path');

function replaceColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/#111417/gi, '#0f172a'); // slate-900
  content = content.replace(/#0e1114/gi, '#020617'); // slate-950
  
  content = content.replace(/#15201a/gi, '#1e293b'); // slate-800
  content = content.replace(/#111915/gi, '#0f172a'); // slate-900
  content = content.replace(/#18261e/gi, '#1e293b'); // slate-800
  content = content.replace(/#111613/gi, '#1e293b'); // slate-800
  content = content.replace(/#16271e/gi, '#1e293b'); // slate-800
  content = content.replace(/#121c16/gi, '#0f172a'); // slate-900

  content = content.replace(/#00f59b/gi, '#3b82f6'); // blue-500
  
  content = content.replace(/emerald-500/gi, 'blue-500');
  content = content.replace(/emerald-400/gi, 'blue-400');
  content = content.replace(/emerald-600/gi, 'blue-600');
  
  content = content.replace(/#10b981/gi, '#2563eb'); // blue-600
  content = content.replace(/#059669/gi, '#1d4ed8'); // blue-700

  if (content !== original) {
    fs.writeFileSync(filePath, content);
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
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
        replaceColors(fullPath);
      }
    }
  }
}

walk('./src');
replaceColors('./index.html');
