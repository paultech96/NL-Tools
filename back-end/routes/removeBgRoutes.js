const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const { removerFundo } = require('../controllers/removeBgController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/remove-bg', upload.single('image'), async (req, res) => {
  const inputPath = req.file.path;
  const tempPngPath = inputPath + '.png';
  const outputPath = path.join('converted', `${Date.now()}-nobg.png`);

  try {
    // Converte qualquer formato para PNG
    await sharp(inputPath).toFormat('png').toFile(tempPngPath);

    // Remove fundo do PNG temporário
    await removerFundo(tempPngPath, outputPath);

    // Limpa arquivos temporários
    fs.unlinkSync(tempPngPath);
    fs.unlinkSync(inputPath);

    // Envia imagem convertida
    res.sendFile(path.resolve(outputPath));
  } catch (err) {
    console.error('Erro ao processar imagem:', err);
    res.status(500).json({ error: 'Falha ao remover fundo.' });
  }
});

module.exports = router;