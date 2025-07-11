import { useState } from 'react';
import axios from 'axios';

function RemoveBg() {
  const [file, setFile] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.startsWith('image/')) {
      setFile(selected);
      setOriginalUrl(URL.createObjectURL(selected));
      setResultUrl(null);
    } else {
      alert('Por favor, selecione uma imagem válida.');
    }
  };

  const handleRemoveBg = async () => {
    if (!file) return alert('Selecione uma imagem primeiro.');

    const formData = new FormData();
    formData.append('image', file);

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3001/api/remove-bg', formData, {
        responseType: 'blob'
      });

      const url = URL.createObjectURL(res.data);
      setResultUrl(url);
    } catch (err) {
      console.error('Erro ao remover fundo:', err.response || err.message || err);
      alert('Erro ao remover fundo da imagem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2>Removedor de Fundo</h2>
      <p>Envie uma imagem e remova o fundo com inteligência artificial local.</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {originalUrl && (
        <div style={{ marginTop: '1.5rem' }}>
          <h4>Imagem original:</h4>
          <img
            src={originalUrl}
            alt="Original"
            style={{ maxWidth: '100%', borderRadius: '6px' }}
          />
        </div>
      )}

      <button
        onClick={handleRemoveBg}
        disabled={loading}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        {loading ? 'Removendo fundo...' : 'Remover Fundo'}
      </button>

      {resultUrl && (
        <div style={{ marginTop: '1.5rem' }}>
          <h4>Resultado:</h4>
          <img
            src={resultUrl}
            alt="Sem fundo"
            style={{ maxWidth: '100%', borderRadius: '6px' }}
          />
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a
              href={resultUrl}
              download="sem-fundo.png"
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                textDecoration: 'none'
              }}
            >
              Baixar imagem sem fundo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default RemoveBg;