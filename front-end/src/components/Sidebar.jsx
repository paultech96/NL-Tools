import { useState } from 'react';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import {
  ImageIcon,
  VideoIcon,
  EraserIcon,
  HomeIcon,
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
<Logo expandido={expandido}/>

        {menu.map((item) => (
<Link
  key={item.path}
  to={item.path}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: expandido ? '1rem' : '0',
    justifyContent: expandido ? 'flex-start' : 'center',
    textDecoration: 'none',
    color: 'white',
    padding: '0.8rem 1rem',
    margin: '0.2rem 0.5rem',
    borderRadius: '8px',
    backgroundColor: location.pathname === item.path ? '#0056b3' : 'transparent',
    transition: 'background 0.2s, transform 0.2s',
    fontWeight: '500',
    cursor: 'pointer'
  }}
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = location.pathname === item.path ? '#0056b3' : '#0069d9';
    e.currentTarget.style.transform = 'scale(1.03)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = location.pathname === item.path ? '#0056b3' : 'transparent';
    e.currentTarget.style.transform = 'scale(1)';
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