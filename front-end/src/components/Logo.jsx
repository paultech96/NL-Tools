import { WrenchIcon } from 'lucide-react';

export default function Logo({ expandido }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: 'white',
      padding: '1rem'
    }}>
      <WrenchIcon size={20} style={{ marginRight: expandido ? '0.5rem' : 0 }} />
      {expandido && 'NL Tools'}
    </div>
  );
}
