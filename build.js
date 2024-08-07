import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = process.env.NODE_ENV;
const base = mode === 'production' ? '/p14converted/' : '/';
const indexPath = path.resolve(__dirname, 'dist/index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace('/src/main.tsx', `${base}assets/main.js`);

  fs.writeFile(indexPath, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
