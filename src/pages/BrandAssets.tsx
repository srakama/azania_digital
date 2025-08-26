import React, { useState } from 'react';
import DownloadLogoButton from '../components/DownloadLogoButton';
import LogoDownloader from '../components/LogoDownloader';

const BrandAssets: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section style={{
      padding: '4rem 1.25rem',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      minHeight: '70vh'
    }}>
      <div className="container" style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Brand Assets
          </h1>
          <p style={{ color: '#94A3B8', marginTop: '0.75rem' }}>
            Download the AzaniaDigital logo in vector (SVG) and generate PNGs for social and print.
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '1.25rem'
          }}>
            <h2 style={{ color: '#E2E8F0', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Vector Logo</h2>
            <p style={{ color: '#94A3B8', marginBottom: '0.75rem' }}>Best for print and crisp scaling.</p>
            <a
              href="/assets/azania-digital-logo.svg"
              download
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: 10,
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '0.02em',
                boxShadow: '0 10px 20px rgba(14,165,233,0.25)'
              }}
            >
              Download SVG
            </a>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '1.25rem'
          }}>
            <h2 style={{ color: '#E2E8F0', fontSize: '1.1rem', marginBottom: '0.75rem' }}>PNG Generator</h2>
            <p style={{ color: '#94A3B8', marginBottom: '0.75rem' }}>Create PNGs for social media and web.</p>
            <button
              onClick={() => setOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: 10,
                cursor: 'pointer',
                fontWeight: 700,
                letterSpacing: '0.02em',
                boxShadow: '0 10px 20px rgba(16,185,129,0.25)'
              }}
            >
              Open Logo Downloader
            </button>
          </div>
        </div>

        <div style={{ marginTop: '2rem', color: '#94A3B8', fontSize: '0.95rem' }}>
          <p>
            Need alternate colors or file formats (PDF, EPS)? Let us know and we’ll add them here.
          </p>
        </div>
      </div>

      <LogoDownloader isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default BrandAssets;

