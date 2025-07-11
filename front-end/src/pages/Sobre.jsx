function Sobre() {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ color: '#007bff', marginBottom: '1rem' }}>Sobre o NL Tools</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        O <strong>NL Tools</strong> é um projeto MVP focado em oferecer ferramentas online úteis
        para o dia a dia de trabalho, como conversores de imagem, vídeo e removedor de fundo com IA.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Desenvolvido com <strong>React + Vite</strong>, o projeto contará em breve com autenticação via Google
        e planos pagos para liberar funcionalidades como múltiplos uploads e remoção de marca d'água.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
        Idealizado e desenvolvido por <strong>Paulo R. A. Junior</strong> com apoio técnico do ChatGPT para a realização do Front-end.
      </p>
    </div>
  );
}

export default Sobre;
