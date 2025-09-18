const sass = require('sass');
const fs = require('fs');
const path = require('path');

// File SCSS nguồn
const scssFile = path.join(__dirname, 'src', 'resources', 'scss', 'app.scss');

// File CSS đích
const cssOutFile = path.join(__dirname, 'src', 'public', 'css', 'app.css');

// Compile SCSS -> CSS
const result = sass.compile(scssFile, { style: "expanded" });

// Ghi ra file CSS
fs.writeFileSync(cssOutFile, result.css);

console.log("✅ SCSS compiled to CSS:", cssOutFile);
