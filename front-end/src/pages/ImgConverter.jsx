import { useState } from 'react';
import axios from 'axios';

function ImgConverter() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [outputFormat, setOutputFormat] = useState('png');
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

const [inputFormat, setInputFormat] = useState(null); // novo estado

const handleFileChange = (e) => {
  const selected = e.target.files[0];
  if (selected && selected.type.startsWith('image/')) {
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setConvertedUrl(null);

    // Detecta extensão original
    const originalExt = selected.name.split('.').pop().toLowerCase();
    setInputFormat(originalExt);
  } else {
    alert('Por favor, selecione uma imagem válida.');
  }
};

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange({ target: { files: e.dataTransfer.files } });
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleConvert = async () => {
  if (!file) return alert('Selecione uma imagem primeiro.');

  if (inputFormat === outputFormat) {
    return alert(`A imagem já está no formato .${outputFormat}`);
  }

  const formData = new FormData();
  formData.append('image', file);
  formData.append('formato', outputFormat);

  try {
    setLoading(true);
    const res = await axios.post('http://localhost:3001/api/convert-image', formData);
    setConvertedUrl(res.data.url);
  } catch (err) {
    alert('Erro ao converter imagem.');
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Conversor de Imagem</h2>
      <p>Selecione ou arraste uma imagem e escolha o formato desejado.</p>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #007bff',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9'
        }}
      >
        <p>Arraste uma imagem aqui ou</p>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {previewUrl && (
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '6px' }}
          />
          {inputFormat && (
  <p style={{ textAlign: 'center', color: '#555' }}>
    Formato original: <strong>.{inputFormat}</strong>
  </p>
)}

        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <label>Formato de saída: </label>
<select
  value={outputFormat}
  onChange={(e) => setOutputFormat(e.target.value)}
  style={{ padding: '0.4rem', marginLeft: '0.5rem' }}
>
  <option value="png">.png</option>
  <option value="jpeg">.jpeg</option>
  <option value="webp">.webp</option>
  <option value="avif">.avif</option>
  <option value="tiff">.tiff</option>
  <option value="bmp">.bmp</option>
  <option value="heif">.heif</option>
</select>
      </div>

      <button
        onClick={handleConvert}
        disabled={loading}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        {loading ? 'Convertendo...' : 'Converter'}
      </button>

      {convertedUrl && (
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a
            href={convertedUrl}
            download
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Baixar imagem convertida
          </a>
        </div>
      )}
    </div>
  );
}

export default ImgConverter;
