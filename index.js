const resolveConfig = require('tailwindcss/resolveConfig');

const fullConfig = resolveConfig('./tailwind.config.js');
console.log(fullConfig.theme.colors.blue);
