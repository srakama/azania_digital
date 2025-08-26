import React, { useState, useEffect } from 'react';
import { AccessibleButton, FocusTrap } from './AccessibilityEnhancements';
import { useAnalytics } from './Analytics';

interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  icon: string;
}

const leadMagnets: LeadMagnet[] = [
  {
    id: 'web-dev-checklist',
    title: 'Website Development Checklist',
    description: 'Complete 50-point checklist for launching a successful website',
    downloadUrl: '/downloads/website-development-checklist.pdf',
    icon: '✅'
  },
  {
    id: 'seo-guide',
    title: 'SEO Optimization Guide',
    description: 'Step-by-step guide to improve your website\'s search rankings',
    downloadUrl: '/downloads/seo-optimization-guide.pdf',
    icon: '📈'
  },
  {
    id: 'performance-audit',
    title: 'Free Website Performance Audit',
    description: 'Get a detailed analysis of your website\'s performance and recommendations',
    downloadUrl: '/contact?service=audit',
    icon: '🔍'
  }
];

const LeadGenerationPopup: React.FC = () => {
  const { trackEvent, trackFormSubmission } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet>(leadMagnets[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup should be shown
    const hasSeenPopup = localStorage.getItem('lead_popup_seen');
    const hasSubscribed = localStorage.getItem('lead_popup_subscribed');
    
    if (hasSeenPopup || hasSubscribed) return;

    // Show popup based on user behavior
    const triggers = {
      timeOnSite: 30000, // 30 seconds
      scrollDepth: 50, // 50% scroll
      exitIntent: true
    };

    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    // Time-based trigger
    timeoutId = setTimeout(() => {
      if (!hasTriggered) {
        showPopup();
        hasTriggered = true;
      }
    }, triggers.timeOnSite);

    // Scroll-based trigger
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= triggers.scrollDepth && !hasTriggered) {
        showPopup();
        hasTriggered = true;
      }
    };

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        showPopup();
        hasTriggered = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const showPopup = () => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    trackEvent({
      action: 'popup_shown',
      category: 'lead_generation',
      label: 'exit_intent'
    });
  };

  const hidePopup = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    localStorage.setItem('lead_popup_seen', 'true');
    trackEvent({
      action: 'popup_closed',
      category: 'lead_generation',
      label: 'user_action'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.consent) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      localStorage.setItem('lead_popup_subscribed', 'true');
      
      trackFormSubmission('lead_magnet', true);
      trackEvent({
        action: 'lead_generated',
        category: 'conversion',
        label: selectedMagnet.id,
        value: 1
      });

      // Auto-close after success
      setTimeout(() => {
        hidePopup();
      }, 3000);

    } catch (error) {
      trackFormSubmission('lead_magnet', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backdropFilter: 'blur(5px)'
      }}
      onClick={hidePopup}
    >
      <FocusTrap isActive={isVisible}>
        <div
          style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            borderRadius: '20px',
            padding: '3rem',
            maxWidth: '500px',
            width: '100%',
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={hidePopup}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
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
            aria-label="Close popup"
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  🎁
                </div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  marginBottom: '0.5rem'
                }}>
                  Free Resource for You!
                </h2>
                <p style={{
                  color: '#CBD5E1',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  Get exclusive access to our professional web development resources
                </p>
              </div>

              {/* Lead Magnet Selection */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  color: '#E2E8F0',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Choose your free resource:
                </label>
                <div style={{
                  display: 'grid',
                  gap: '0.75rem'
                }}>
                  {leadMagnets.map((magnet) => (
                    <label
                      key={magnet.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: selectedMagnet.id === magnet.id 
                          ? 'rgba(14, 165, 233, 0.1)' 
                          : 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        border: selectedMagnet.id === magnet.id 
                          ? '2px solid #0EA5E9' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <input
                        type="radio"
                        name="leadMagnet"
                        value={magnet.id}
                        checked={selectedMagnet.id === magnet.id}
                        onChange={() => setSelectedMagnet(magnet)}
                        style={{ display: 'none' }}
                      />
                      <span style={{ fontSize: '1.5rem' }}>{magnet.icon}</span>
                      <div>
                        <div style={{
                          color: '#FFFFFF',
                          fontWeight: '600',
                          fontSize: '0.875rem',
                          marginBottom: '0.25rem'
                        }}>
                          {magnet.title}
                        </div>
                        <div style={{
                          color: '#94A3B8',
                          fontSize: '0.75rem',
                          lineHeight: '1.4'
                        }}>
                          {magnet.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#E2E8F0',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#E2E8F0',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#E2E8F0',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Consent Checkbox */}
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    style={{
                      marginTop: '0.25rem',
                      accentColor: '#0EA5E9'
                    }}
                  />
                  <span style={{
                    color: '#CBD5E1',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    I agree to receive emails with web development tips and updates. 
                    You can unsubscribe at any time. *
                  </span>
                </label>

                {/* Submit Button */}
                <AccessibleButton
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting || !formData.consent}
                  style={{
                    width: '100%',
                    marginBottom: '1rem'
                  }}
                >
                  {isSubmitting ? 'Getting Your Resource...' : `Get ${selectedMagnet.title}`}
                </AccessibleButton>

                <p style={{
                  textAlign: 'center',
                  color: '#64748B',
                  fontSize: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  We respect your privacy. No spam, ever. 
                  <br />
                  Unsubscribe with one click.
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                ✅
              </div>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#10B981',
                marginBottom: '1rem'
              }}>
                Success!
              </h2>
              <p style={{
                color: '#CBD5E1',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                Check your email for "{selectedMagnet.title}". 
                We've also added you to our newsletter for more valuable insights.
              </p>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '2rem'
              }}>
                <p style={{
                  color: '#10B981',
                  fontSize: '0.875rem',
                  margin: 0
                }}>
                  💡 Pro tip: Add our email to your contacts to ensure you receive all our valuable content!
                </p>
              </div>
              <AccessibleButton
                onClick={hidePopup}
                variant="outline"
                size="medium"
              >
                Continue Browsing
              </AccessibleButton>
            </div>
          )}
        </div>
      </FocusTrap>
    </div>
  );
};

export default LeadGenerationPopup;
