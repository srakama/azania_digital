import React, { useRef } from 'react';

interface LogoDownloaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoDownloader: React.FC<LogoDownloaderProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createLogo = (size: number, format: 'png' | 'svg', variant: 'light' | 'dark' | 'transparent') => {
    if (format === 'svg') {
      return createSVGLogo(size, variant);
    } else {
      return createPNGLogo(size, variant);
    }
  };

  const createSVGLogo = (size: number, variant: 'light' | 'dark' | 'transparent') => {
    const bgColor = variant === 'light' ? '#FFFFFF' : variant === 'dark' ? '#1E293B' : 'transparent';
    const textColor = variant === 'light' ? '#1E293B' : '#FFFFFF';
    
    const svgContent = `
      <svg width="${size}" height="${size * 0.4}" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00D4FF" />
            <stop offset="25%" stop-color="#0EA5E9" />
            <stop offset="50%" stop-color="#3B82F6" />
            <stop offset="75%" stop-color="#6366F1" />
            <stop offset="100%" stop-color="#8B5CF6" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06FFA5" />
            <stop offset="50%" stop-color="#06B6D4" />
            <stop offset="100%" stop-color="#0EA5E9" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0EA5E9" stop-opacity="0.8"/>
            <stop offset="70%" stop-color="#3B82F6" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0"/>
          </radialGradient>
        </defs>
        
        ${variant !== 'transparent' ? `<rect width="200" height="80" fill="${bgColor}" rx="8"/>` : ''}
        
        <!-- Logo Icon -->
        <g transform="translate(20, 40)">
          <!-- Outer glow ring -->
          <circle cx="0" cy="0" r="18" fill="url(#glowGradient)" opacity="0.6"/>
          
          <!-- Main circular background -->
          <circle cx="0" cy="0" r="16" fill="url(#mainGradient)" stroke="url(#accentGradient)" stroke-width="1.5" opacity="0.95"/>
          
          <!-- Inner geometric pattern -->
          <g opacity="0.3">
            <polygon points="0,-8 8,0 0,8 -8,0" fill="none" stroke="url(#accentGradient)" stroke-width="1"/>
            <polygon points="0,-4 4,0 0,4 -4,0" fill="none" stroke="url(#accentGradient)" stroke-width="0.8"/>
          </g>
          
          <!-- Stylized "A" for Azania -->
          <path d="M-6,-8 L0,-8 L6,8 L3,8 L1.5,4 L-1.5,4 L-3,8 L-6,8 Z M-1,0 L1,0 L0,-3 Z"
                fill="url(#accentGradient)" stroke="white" stroke-width="0.5"/>
          
          <!-- Digital accent dots -->
          <circle cx="-8" cy="-2" r="1" fill="url(#accentGradient)" opacity="0.8"/>
          <circle cx="8" cy="-2" r="1" fill="url(#accentGradient)" opacity="0.8"/>
          <circle cx="-8" cy="2" r="1" fill="url(#accentGradient)" opacity="0.6"/>
          <circle cx="8" cy="2" r="1" fill="url(#accentGradient)" opacity="0.6"/>
          
          <!-- Connecting lines -->
          <line x1="-7" y1="-2" x2="-6" y2="-4" stroke="url(#accentGradient)" stroke-width="0.8" opacity="0.5"/>
          <line x1="7" y1="-2" x2="6" y2="-4" stroke="url(#accentGradient)" stroke-width="0.8" opacity="0.5"/>
        </g>
        
        <!-- Logo Text -->
        <g transform="translate(60, 40)">
          <text x="0" y="-8" font-family="Inter, sans-serif" font-size="20" font-weight="900" 
                fill="url(#mainGradient)" letter-spacing="-0.5px">AZANIA</text>
          <text x="0" y="8" font-family="Inter, sans-serif" font-size="14" font-weight="700" 
                fill="url(#accentGradient)" letter-spacing="2px">DIGITAL</text>
        </g>
      </svg>
    `;

    return svgContent;
  };

  const createPNGLogo = (size: number, variant: 'light' | 'dark' | 'transparent') => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const width = size;
    const height = size * 0.4;
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Background
    if (variant !== 'transparent') {
      ctx.fillStyle = variant === 'light' ? '#FFFFFF' : '#1E293B';
      ctx.fillRect(0, 0, width, height);
    }

    // Create gradient for logo
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#00D4FF');
    gradient.addColorStop(0.25, '#0EA5E9');
    gradient.addColorStop(0.5, '#3B82F6');
    gradient.addColorStop(0.75, '#6366F1');
    gradient.addColorStop(1, '#8B5CF6');

    // Draw logo icon (simplified for canvas)
    const centerX = height / 2;
    const centerY = height / 2;
    const radius = height * 0.3;

    // Main circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw "A" shape (simplified)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${radius}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('A', centerX, centerY);

    // Draw text
    const textX = height + 20;
    const textY = height / 2;

    // "AZANIA" text
    ctx.fillStyle = gradient;
    ctx.font = `900 ${height * 0.25}px Inter, sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('AZANIA', textX, textY - height * 0.1);

    // "DIGITAL" text
    const accentGradient = ctx.createLinearGradient(textX, 0, textX + 100, 0);
    accentGradient.addColorStop(0, '#06FFA5');
    accentGradient.addColorStop(0.5, '#06B6D4');
    accentGradient.addColorStop(1, '#0EA5E9');

    ctx.fillStyle = accentGradient;
    ctx.font = `700 ${height * 0.18}px Inter, sans-serif`;
    ctx.fillText('DIGITAL', textX, textY + height * 0.15);

    return canvas.toDataURL('image/png');
  };

  const downloadLogo = (size: number, format: 'png' | 'svg', variant: 'light' | 'dark' | 'transparent') => {
    const logoData = createLogo(size, format, variant);
    
    if (!logoData) return;

    const link = document.createElement('a');
    const filename = `azania-digital-logo-${variant}-${size}x${Math.round(size * 0.4)}.${format}`;

    if (format === 'svg') {
      const blob = new Blob([logoData], { type: 'image/svg+xml' });
      link.href = URL.createObjectURL(blob);
    } else {
      link.href = logoData;
    }

    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '700',
            margin: 0
          }}>
            Download AzaniaDigital Logo
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            ✕
          </button>
        </div>

        <p style={{
          color: '#94A3B8',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Download your AzaniaDigital logo in various formats and sizes for social media, business cards, and other marketing materials.
        </p>

        <div style={{
          display: 'grid',
          gap: '1.5rem'
        }}>
          {/* Social Media Sizes */}
          <div>
            <h3 style={{ color: '#0EA5E9', fontSize: '1.2rem', marginBottom: '1rem' }}>
              📱 Social Media Formats
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button
                onClick={() => downloadLogo(400, 'png', 'transparent')}
                style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <strong>Instagram/Facebook</strong><br />
                400x160px PNG (Transparent)
              </button>
              <button
                onClick={() => downloadLogo(500, 'png', 'light')}
                style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <strong>LinkedIn</strong><br />
                500x200px PNG (Light)
              </button>
              <button
                onClick={() => downloadLogo(1200, 'png', 'transparent')}
                style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <strong>Twitter/X Header</strong><br />
                1200x480px PNG (Transparent)
              </button>
            </div>
          </div>

          {/* Print Formats */}
          <div>
            <h3 style={{ color: '#10B981', fontSize: '1.2rem', marginBottom: '1rem' }}>
              🖨️ Print & Business
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button
                onClick={() => downloadLogo(1000, 'svg', 'transparent')}
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <strong>Vector (SVG)</strong><br />
                Scalable for Print
              </button>
              <button
                onClick={() => downloadLogo(2000, 'png', 'light')}
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <strong>High-Res Light</strong><br />
                2000x800px PNG
              </button>
              <button
                onClick={() => downloadLogo(2000, 'png', 'dark')}
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <strong>High-Res Dark</strong><br />
                2000x800px PNG
              </button>
            </div>
          </div>

          {/* Custom Sizes */}
          <div>
            <h3 style={{ color: '#8B5CF6', fontSize: '1.2rem', marginBottom: '1rem' }}>
              ⚙️ Custom Sizes
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              {[300, 600, 800, 1500].map(size => (
                <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ color: '#94A3B8', fontSize: '0.9rem', textAlign: 'center' }}>
                    {size}x{Math.round(size * 0.4)}px
                  </span>
                  <button
                    onClick={() => downloadLogo(size, 'png', 'transparent')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '6px',
                      padding: '0.5rem',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    PNG
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default LogoDownloader;
