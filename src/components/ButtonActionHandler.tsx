import React, { useState, useEffect } from 'react';

interface ButtonAction {
  type: 'modal' | 'redirect' | 'download' | 'contact' | 'info' | 'external';
  title: string;
  content: string | React.ReactNode;
  url?: string;
  downloadUrl?: string;
  fileName?: string;
}

interface ButtonActionHandlerProps {
  children: React.ReactNode;
}

// Button actions configuration
export const buttonActions: { [key: string]: ButtonAction } = {
  'web-dev-guide': {
    type: 'modal',
    title: 'Web Development Guide',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#0EA5E9', marginBottom: '1rem' }}>Complete Web Development Guide</h3>
        <p><strong>What you'll learn:</strong></p>
        <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
          <li>Modern web development fundamentals</li>
          <li>React, Next.js, and TypeScript best practices</li>
          <li>Responsive design principles</li>
          <li>SEO optimization techniques</li>
          <li>Performance optimization strategies</li>
          <li>Security best practices</li>
        </ul>
        <p><strong>Format:</strong> 50-page PDF guide with code examples</p>
        <p><strong>Value:</strong> R500 - <span style={{ color: '#10B981' }}>FREE for you!</span></p>
        <div style={{ 
          background: 'rgba(14, 165, 233, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          border: '1px solid rgba(14, 165, 233, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            📧 Enter your email below to receive the guide instantly!
          </p>
        </div>
      </div>
    )
  },
  'seo-checklist': {
    type: 'modal',
    title: 'SEO Optimization Checklist',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#10B981', marginBottom: '1rem' }}>Complete SEO Checklist</h3>
        <p><strong>Includes:</strong></p>
        <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
          <li>✅ On-page SEO optimization (25 items)</li>
          <li>✅ Technical SEO checklist (20 items)</li>
          <li>✅ Content optimization guide (15 items)</li>
          <li>✅ Local SEO strategies (10 items)</li>
          <li>✅ Link building tactics (12 items)</li>
          <li>✅ Performance optimization (8 items)</li>
        </ul>
        <p><strong>Bonus:</strong> Google Analytics setup guide</p>
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            🎯 This checklist has helped 500+ websites rank higher on Google!
          </p>
        </div>
      </div>
    )
  },
  'design-templates': {
    type: 'modal',
    title: 'Professional Design Templates',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#8B5CF6', marginBottom: '1rem' }}>Premium Design Template Pack</h3>
        <p><strong>What's included:</strong></p>
        <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
          <li>🎨 10 Modern website templates</li>
          <li>📱 Mobile-first responsive designs</li>
          <li>⚡ Optimized for performance</li>
          <li>🎯 Conversion-focused layouts</li>
          <li>🔧 Easy to customize</li>
          <li>📋 Documentation included</li>
        </ul>
        <p><strong>File formats:</strong> Figma, Sketch, Adobe XD, HTML/CSS</p>
        <div style={{ 
          background: 'rgba(139, 92, 246, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            💎 Worth R2,000 - Get it FREE with any website project!
          </p>
        </div>
      </div>
    )
  },
  'portfolio-showcase': {
    type: 'modal',
    title: 'Our Portfolio Showcase',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#F59E0B', marginBottom: '1rem' }}>Recent Projects</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ color: '#0EA5E9', margin: '0 0 0.5rem 0' }}>🏪 E-commerce Store - Fashion Boutique</h4>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Modern online store with payment integration</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94A3B8' }}>Technologies: React, Node.js, Stripe, MongoDB</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ color: '#10B981', margin: '0 0 0.5rem 0' }}>🏢 Corporate Website - Tech Solutions</h4>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Professional business website with CMS</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94A3B8' }}>Technologies: Next.js, TypeScript, Sanity CMS</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ color: '#8B5CF6', margin: '0 0 0.5rem 0' }}>📱 Mobile App - Restaurant Orders</h4>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Cross-platform ordering app with real-time tracking</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94A3B8' }}>Technologies: React Native, Firebase, PayFast</p>
          </div>
        </div>
        <div style={{ 
          background: 'rgba(245, 158, 11, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          border: '1px solid rgba(245, 158, 11, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            🎯 Want to see more? Contact us for a detailed portfolio presentation!
          </p>
        </div>
      </div>
    )
  },
  'free-consultation': {
    type: 'modal',
    title: 'Free Consultation Booking',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#0EA5E9', marginBottom: '1rem' }}>Book Your Free Consultation</h3>
        <p><strong>What we'll discuss:</strong></p>
        <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
          <li>🎯 Your business goals and challenges</li>
          <li>💡 Custom solution recommendations</li>
          <li>📊 Project timeline and milestones</li>
          <li>💰 Transparent pricing breakdown</li>
          <li>🚀 Next steps to get started</li>
        </ul>
        <div style={{ 
          background: 'rgba(14, 165, 233, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginBottom: '1rem',
          border: '1px solid rgba(14, 165, 233, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            ⏰ <strong>Duration:</strong> 30-45 minutes<br/>
            📅 <strong>Available:</strong> Monday-Friday, 9AM-5PM<br/>
            💻 <strong>Format:</strong> Video call or phone
          </p>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#10B981' }}>
          <strong>100% Free - No obligation - No sales pressure</strong>
        </p>
      </div>
    )
  },
  'pricing-calculator': {
    type: 'info',
    title: 'Interactive Pricing Calculator',
    content: 'Our pricing calculator helps you get an instant estimate for your project. Simply select your requirements and get a detailed breakdown of costs. All estimates are transparent with no hidden fees.'
  },
  'whatsapp-chat': {
    type: 'external',
    title: 'WhatsApp Chat',
    content: 'Chat with us directly on WhatsApp for instant support and quick questions.',
    url: 'https://wa.me/27786511482'
  },
  'call-now': {
    type: 'external',
    title: 'Call Now',
    content: 'Speak directly with our team for immediate assistance.',
    url: 'tel:+27786511482'
  },
  'email-contact': {
    type: 'external',
    title: 'Email Us',
    content: 'Send us an email and we\'ll respond within 24 hours.',
    url: 'mailto:hello@azaniadigital.co.za'
  },
  'start-project': {
    type: 'modal',
    title: 'Start Your Project Today',
    content: (
      <div style={{ color: '#E2E8F0', lineHeight: '1.6' }}>
        <h3 style={{ color: '#0EA5E9', marginBottom: '1rem' }}>Ready to Transform Your Business?</h3>
        <p><strong>Let's bring your vision to life!</strong></p>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#10B981', marginBottom: '0.5rem' }}>Our Process:</h4>
          <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
            <li>📋 <strong>Discovery Call</strong> - Understand your goals and requirements</li>
            <li>💡 <strong>Strategy Session</strong> - Plan the perfect solution for your needs</li>
            <li>🎨 <strong>Design & Development</strong> - Create your custom solution</li>
            <li>🚀 <strong>Launch & Support</strong> - Go live with ongoing maintenance</li>
          </ul>
        </div>
        <div style={{
          background: 'rgba(14, 165, 233, 0.1)',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          border: '1px solid rgba(14, 165, 233, 0.3)'
        }}>
          <h4 style={{ color: '#0EA5E9', margin: '0 0 0.5rem 0' }}>What You Get:</h4>
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            <li>✅ Free consultation & project planning</li>
            <li>✅ Custom solution tailored to your business</li>
            <li>✅ Professional design & development</li>
            <li>✅ SEO optimization & performance tuning</li>
            <li>✅ Mobile-responsive design</li>
            <li>✅ 30-day post-launch support</li>
          </ul>
        </div>
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            🎯 <strong>Ready to get started?</strong> Book your free consultation now and let's discuss your project!
          </p>
        </div>
      </div>
    )
  }
};

const ButtonActionHandler: React.FC<ButtonActionHandlerProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  // Listen for modal open events
  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setActiveModal(event.detail);
    };

    window.addEventListener('openModal', handleOpenModal as EventListener);
    return () => {
      window.removeEventListener('openModal', handleOpenModal as EventListener);
    };
  }, []);

  const handleAction = (actionKey: string) => {
    const action = buttonActions[actionKey];
    if (!action) return;

    switch (action.type) {
      case 'modal':
        setActiveModal(actionKey);
        break;
      case 'external':
        if (action.url) {
          window.open(action.url, '_blank');
        }
        break;
      case 'redirect':
        if (action.url) {
          window.location.href = action.url;
        }
        break;
      case 'download':
        if (action.downloadUrl) {
          const link = document.createElement('a');
          link.href = action.downloadUrl;
          link.download = action.fileName || 'download';
          link.click();
        }
        break;
      case 'info':
        alert(action.content as string);
        break;
    }
  };

  const handleEmailSubmit = (actionKey: string) => {
    if (!emailInput.trim()) {
      alert('Please enter your email address');
      return;
    }

    // Simulate email submission
    alert(`Thank you! We've sent the ${buttonActions[actionKey].title} to ${emailInput}. Check your inbox!`);
    setEmailInput('');
    setActiveModal(null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setEmailInput('');
  };

  return (
    <div>
      {children}
      
      {/* Modal */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                margin: 0,
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                {buttonActions[activeModal].title}
              </h2>
              <button
                onClick={closeModal}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              {buttonActions[activeModal].content}
            </div>

            {/* Email input for downloadable content */}
            {['web-dev-guide', 'seo-checklist', 'design-templates'].includes(activeModal) && (
              <div style={{ marginTop: '1.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => handleEmailSubmit(activeModal)}
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    📧 Send Me This Resource
                  </button>
                  <button
                    onClick={closeModal}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            )}

            {/* Action buttons for other modals */}
            {['portfolio-showcase', 'free-consultation', 'start-project'].includes(activeModal) && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button
                  onClick={() => {
                    closeModal();
                    window.location.href = '/contact';
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    flex: 1
                  }}
                >
                  {activeModal === 'free-consultation' ? '📅 Book Now' :
                   activeModal === 'start-project' ? '🚀 Start My Project' : '💬 Contact Us'}
                </button>
                <button
                  onClick={() => window.open('https://wa.me/27786511482', '_blank')}
                  style={{
                    background: 'rgba(37, 211, 102, 0.2)',
                    color: '#25D366',
                    border: '1px solid #25D366',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  💬 WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonActionHandler;
