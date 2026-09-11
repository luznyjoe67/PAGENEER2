const fs = require('fs');

let types = fs.readFileSync('./src/types.ts', 'utf8');
types = types.replace(/PackageId = 'start' | 'biznes' | 'dedykowany'/, "PackageId = 'complete'");
fs.writeFileSync('./src/types.ts', types);
