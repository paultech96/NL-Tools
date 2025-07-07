import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ImageIcon,
  VideoIcon,
  EraserIcon,
  HomeIcon,
  WrenchIcon,
  InfoIcon
} from 'lucide-react';

function Sidebar() {
  const [expandido, setExpandido] = useState(false);
  const location = useLocation();

  const menu = [
    { path: '/', label: 'Início', icon: <HomeIcon size={18} /> },
    { path: '/video-converter', label: 'Conversor de Vídeo', icon: <VideoIcon size={18} /> },
    { path: '/remove-bg', label: 'Removedor de Fundo', icon: <EraserIcon size={18} /> },
    { path: '/img-converter', label: 'Conversor de Imagem', icon: <ImageIcon size={18} /> }
  ];

  return (
    <div
      style={{
        width: expandido ? '240px' : '60px',
        height: '100vh',
        background: '#007bff',
        color: 'white',
        transition: 'width 0.3s',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between' // para empurrar o "Sobre" pro final
      }}
      onMouseEnter={() => setExpandido(true)}
      onMouseLeave={() => setExpandido(false)}
    >
      {/* TOPO */}
      <div>
        <div
          style={{
            padding: '1rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {expandido ? (
            <>
              <WrenchIcon size={18} style={{ marginRight: '0.5rem' }} />
              NL Tools
            </>
          ) : (
            <WrenchIcon size={24} />
          )}
        </div>

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              textDecoration: 'none',
              color: 'white',
              padding: '0.8rem 1rem',
              background: location.pathname === item.path ? '#0056b3' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: expandido ? '1rem' : '0',
              justifyContent: expandido ? 'flex-start' : 'center'
            }}
          >
            {item.icon}
            {expandido && <span>{item.label}</span>}
          </Link>
        ))}
      </div>

      {/* RODAPÉ - SOBRE */}
      <div>
        <Link
          to="/sobre"
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '0.8rem 1rem',
            background: location.pathname === '/sobre' ? '#0056b3' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: expandido ? '1rem' : '0',
            justifyContent: expandido ? 'flex-start' : 'center',
            marginBottom: '1rem'
          }}
        >
          <InfoIcon size={18} />
          {expandido && <span>Sobre</span>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;