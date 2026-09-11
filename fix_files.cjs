const fs = require('fs');
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/czystym Tailwind CSS/gi, 'nowoczesnej technologii');
  content = content.replace(/kod w Tailwind CSS/gi, 'nowoczesny, bezpieczny kod');
  content = content.replace(/czysty kod Tailwind CSS/gi, 'nowoczesny, dedykowany kod');
  content = content.replace(/czysty Tailwind CSS/gi, 'nowoczesne wykonanie');
  content = content.replace(/w Tailwind CSS/gi, 'dla Twojej firmy');
  content = content.replace(/Tailwind CSS/gi, 'Strony dla firm');
  content = content.replace(/Tailwind/gi, 'Nowoczesna Strona');
  if (content !== original) { fs.writeFileSync(filePath, content); }
}
replaceInFile('./index.html');
replaceInFile('./metadata.json');
