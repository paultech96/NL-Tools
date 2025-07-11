const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();

const ignoredPaths = ['node_modules', '.git', 'uploads', 'converted'];

const watcher = chokidar.watch('.', {
  ignored: (filePath) => {
    return ignoredPaths.some((ignore) => filePath.includes(ignore));
  },
  ignoreInitial: true,
});

let pendingFiles = new Set();
let timeoutId = null;

function scheduleCommit(filePath) {
  pendingFiles.add(filePath);

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(async () => {
    const files = Array.from(pendingFiles);
    pendingFiles.clear();

    try {
      await git.add('.');
      await git.commit(`📝 auto-commit: ${files.map(f => path.relative('.', f)).join(', ')}`);
      await git.push();
      console.log(`✅ Commit feito: ${files.length} arquivo(s) alterado(s).`);
    } catch (err) {
      console.error('Erro ao fazer commit:', err);
    }
  }, 1000);
}

watcher.on('change', scheduleCommit);
watcher.on('add', scheduleCommit);