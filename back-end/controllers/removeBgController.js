const { spawn } = require('child_process');
const path = require('path');

async function removerFundo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['-m', 'rembg', 'i', inputPath, outputPath]);

    python.stdout.on('data', (data) => {
      console.log(`[rembg] ${data}`);
    });

    python.stderr.on('data', (data) => {
      console.error(`[rembg ERROR] ${data}`);
    });

    python.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`rembg exited with code ${code}`));
      }
    });
  });
}

module.exports = { removerFundo };