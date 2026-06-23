const fs = require('fs');
const path = require('path');

const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist', 'out', 'coverage']);
const TEXT_EXTS = new Set(['.ts', '.js', '.html', '.scss', '.css', '.json', '.md']);
const ALL_EXTS = new Set(['.ts', '.js', '.html', '.scss', '.css', '.json', '.md', '.png', '.jpg', '.jpeg', '.svg', '.woff', '.woff2']);

function walk(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (IGNORED_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walk(full));
    } else if (ALL_EXTS.has(path.extname(e.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function isText(file) {
  return TEXT_EXTS.has(path.extname(file).toLowerCase());
}

function readText(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (e) {
    return '';
  }
}

function main() {
  const root = process.cwd();
  console.error('Scanning from', root);
  const files = walk(root).map(f => path.relative(root, f));

  const textFiles = files.filter(f => isText(f));
  const textContents = {};
  for (const f of textFiles) textContents[f] = readText(path.join(root, f));

  const candidates = [];

  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    // skip config files which may be referenced externally
    if (['angular.json', 'package.json', 'tsconfig.json', 'README.md'].includes(path.basename(f))) continue;

    const base = path.basename(f, ext);
    let used = false;
    for (const tf of textFiles) {
      if (tf === f) continue;
      const content = textContents[tf];
      if (!content) continue;
      // simple checks: exact filename, basename usage, and relative import path
      if (content.includes(path.basename(f)) ) { used = true; break; }
      const rel = path.relative(path.dirname(tf), f).replace(/\\/g, '/');
      const relNoExt = rel.replace(/\.[^/.]+$/, '');
      if (content.includes(relNoExt) || content.includes('./' + relNoExt) || content.includes('.' + relNoExt)) { used = true; break; }
      const wordRegex = new RegExp("\\b" + base.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&') + "\\b");
      if (wordRegex.test(content)) { used = true; break; }
    }
    if (!used) candidates.push(f);
  }

  // Folders: consider a folder unused if all its files are candidates
  const folders = new Set(files.map(f => path.dirname(f)));
  const unusedFolders = [];
  for (const folder of folders) {
    const folderFiles = files.filter(f => f.startsWith(folder + path.posix.sep) || f === folder || path.dirname(f) === folder);
    if (folderFiles.length === 0) continue;
    const allUnused = folderFiles.every(ff => candidates.includes(ff));
    if (allUnused) unusedFolders.push(folder);
  }

  const out = { candidates, unusedFolders };
  console.log(JSON.stringify(out, null, 2));
}

main();
