const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

exports.converterImagem = async (req, res) => {
  const file = req.file;
  const formato = req.body.formato; // png, jpeg, webp

  if (!file) {
    return res.status(400).json({ erro: 'Nenhum arquivo enviado.' });
  }

  const nomeSemExt = path.parse(file.filename).name;
  const outputPath = path.join('converted', `${nomeSemExt}.${formato}`);

  try {
    await sharp(file.path)
      .toFormat(formato)
      .toFile(outputPath);

    // Remove o arquivo original (uploads)
    fs.unlinkSync(file.path);

    return res.json({ url: `http://localhost:3001/${outputPath}` });
  } catch (err) {
    console.error('Erro ao converter imagem:', err);
    return res.status(500).json({ erro: 'Erro na conversão.' });
  }
};
