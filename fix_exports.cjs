const fs = require('fs');
let ps = fs.readFileSync('./src/components/PricingSection.tsx', 'utf8');
ps = ps.replace('const PricingSection', 'export const PricingSection');
fs.writeFileSync('./src/components/PricingSection.tsx', ps);
