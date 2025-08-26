import React from 'react';

const swatch = (color: string, label: string) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <div style={{ width: 36, height: 36, borderRadius: 8, background: color, border: '1px solid rgba(255,255,255,0.15)' }} />
    <div style={{ color: '#E2E8F0' }}>{label}</div>
  </div>
);

const BrandGuide: React.FC = () => {
  return (
    <section style={{
      padding: '4rem 1.25rem',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      minHeight: '70vh'
    }}>
      <div className="container" style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Brand Guide
          </h1>
          <p style={{ color: '#94A3B8', marginTop: '0.75rem' }}>
            Key brand elements: logo usage, color palette, and spacing guidelines.
          </p>
        </header>

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '1.25rem'
          }}>
            <h2 style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '0.75rem' }}>Logo Usage</h2>
            <ul style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              <li>Use the vector SVG for print and high-resolution displays.</li>
              <li>Maintain clear space equal to the height of the “A” around the logo.</li>
              <li>Do not alter colors, aspect ratio, or add effects to the logo.</li>
              <li>Use transparent PNGs for overlays on photos; light/dark PNGs for solid backgrounds.</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '1.25rem'
          }}>
            <h2 style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '0.75rem' }}>Color Palette</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              {swatch('#0EA5E9', 'Primary Blue — #0EA5E9')}
              {swatch('#3B82F6', 'Azure — #3B82F6')}
              {swatch('#6366F1', 'Indigo — #6366F1')}
              {swatch('#8B5CF6', 'Violet — #8B5CF6')}
              {swatch('#06FFA5', 'Accent Lime — #06FFA5')}
              {swatch('#06B6D4', 'Accent Cyan — #06B6D4')}
              {swatch('#1E293B', 'Dark — #1E293B')}
              {swatch('#FFFFFF', 'White — #FFFFFF')}
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '1.25rem'
          }}>
            <h2 style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '0.75rem' }}>Usage & Spacing</h2>
            <ul style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              <li>Minimum logo width for digital: 120px; for print: 25mm.</li>
              <li>Preferred favicon: use the circular “A” mark (SVG) at 512x512 PNG.</li>
              <li>When placing on backgrounds, ensure contrast ratio AA or better.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGuide;

