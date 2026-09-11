const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/W Pageneer działamy w modelu Service-as-a-Product:/gi, 'W Pageneer działamy błyskawicznie i na jasnych zasadach:');
  content = content.replace(/>\s*Service-as-a-Product\s*</gi, '>Jasne zasady<'); // For Navbar
  content = content.replace(/Service-as-a-Product dla biznesu/gi, 'Gotowe rozwiązania dla biznesu');
  content = content.replace(/Stworzyliśmy model Service-as-a-Product, który/gi, 'Stworzyliśmy autorski model współpracy, który');
  content = content.replace(/Nowoczesna agencja typu <strong>Service-as-a-Product<\/strong>\./gi, 'Nowoczesna agencja internetowa.');
  content = content.replace(/Nowoczesna agencja Service-as-a-Product\./gi, 'Nowoczesna agencja internetowa.');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
}

const files = [
  './src/data/content.ts',
  './src/components/Navbar.tsx',
  './src/components/Hero.tsx',
  './src/components/WhyUsSection.tsx',
  './src/components/Footer.tsx',
  './index.html',
  './metadata.json'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        replaceInFile(file);
    }
});
