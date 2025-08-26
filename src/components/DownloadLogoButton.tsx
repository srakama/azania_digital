import React, { useState } from 'react';
import LogoDownloader from './LogoDownloader';

const DownloadLogoButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 700,
          letterSpacing: '0.02em',
          boxShadow: '0 10px 20px rgba(14,165,233,0.25)',
        }}
      >
        Download Logo
      </button>

      <LogoDownloader isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DownloadLogoButton;

