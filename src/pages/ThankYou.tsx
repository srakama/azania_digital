import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);

    // Create floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    // Auto-redirect to home page after 15 seconds
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      paddingTop: '80px',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: 0.1,
        animation: 'gradientShift 8s ease-in-out infinite'
      }} />

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '4px',
            height: '4px',
            background: 'linear-gradient(45deg, #0EA5E9, #6366F1)',
            borderRadius: '50%',
            animation: `float 6s ease-in-out infinite ${particle.delay}s`,
            opacity: 0.6
          }}
        />
      ))}

      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="card" style={{
              padding: '4rem 3rem',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Success Icon with Pulse Effect */}
              <div style={{
                position: 'relative',
                display: 'inline-block',
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: '5rem',
                  animation: 'successPulse 2s ease-in-out',
                  filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.3))'
                }}>
                  ✅
                </div>
                {/* Ripple Effect */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100px',
                  height: '100px',
                  border: '2px solid #10B981',
                  borderRadius: '50%',
                  animation: 'ripple 2s ease-out infinite',
                  opacity: 0.3
                }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100px',
                  height: '100px',
                  border: '2px solid #10B981',
                  borderRadius: '50%',
                  animation: 'ripple 2s ease-out infinite 0.5s',
                  opacity: 0.2
                }} />
              </div>
              
              {/* Animated Title */}
              <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'slideInFromTop 1s ease-out 0.3s both'
              }}>
                Thank You! 🎉
              </h1>

              {/* Main Message */}
              <div style={{
                background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '16px',
                marginBottom: '2rem',
                animation: 'slideInFromLeft 1s ease-out 0.6s both',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Sparkle Effect */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  fontSize: '1.5rem',
                  animation: 'sparkle 2s ease-in-out infinite'
                }}>✨</div>
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '25px',
                  fontSize: '1rem',
                  animation: 'sparkle 2s ease-in-out infinite 1s'
                }}>⭐</div>

                <p style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  margin: 0,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Thank you for contacting us at AzaniaDigital. Our team will be with you soonest.
                </p>
              </div>

              <p style={{
                fontSize: '1.2rem',
                color: '#64748B',
                lineHeight: '1.8',
                marginBottom: '3rem',
                animation: 'slideInFromRight 1s ease-out 0.9s both'
              }}>
                We've received your message and will get back to you within 24 hours.
                Your inquiry is important to us and we're excited to help transform your digital presence! 🚀
              </p>

              {/* Progress Indicator */}
              <div style={{
                background: '#F1F5F9',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '3rem',
                animation: 'slideInFromBottom 1s ease-out 1.2s both'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1E293B',
                  marginBottom: '1rem'
                }}>
                  What happens next?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>✓</div>
                    <span style={{ color: '#64748B' }}>Message received and logged</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}>2</div>
                    <span style={{ color: '#64748B' }}>Our team reviews your requirements</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: '#E2E8F0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748B',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>3</div>
                    <span style={{ color: '#64748B' }}>We'll contact you within 24 hours</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '3rem',
                animation: 'slideInFromBottom 1s ease-out 1.5s both'
              }}>
                <Link
                  to="/"
                  className="btn btn-primary"
                  style={{
                    transform: 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(14, 165, 233, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(14, 165, 233, 0.3)';
                  }}
                >
                  🏠 Back to Home
                </Link>
                <Link
                  to="/services"
                  className="btn btn-accent"
                  style={{
                    transform: 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  🛠️ View Services
                </Link>
              </div>

              {/* Contact Section */}
              <div style={{
                paddingTop: '2rem',
                borderTop: '1px solid #E2E8F0',
                animation: 'slideInFromBottom 1s ease-out 1.8s both'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>⚡</span>
                  Need Immediate Assistance?
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  <ContactButton
                    href="https://wa.me/27786511482"
                    icon="💬"
                    label="WhatsApp"
                    color="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                    delay="0s"
                  />
                  <ContactButton
                    href="mailto:hello@azaniadigital.co.za"
                    icon="📧"
                    label="Email"
                    color="linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)"
                    delay="0.1s"
                  />
                  <ContactButton
                    href="tel:+27786511482"
                    icon="📞"
                    label="Call"
                    color="linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)"
                    delay="0.2s"
                  />
                </div>
              </div>
              
              {/* Enhanced Countdown Timer */}
              <EnhancedCountdownTimer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Button Component
interface ContactButtonProps {
  href: string;
  icon: string;
  label: string;
  color: string;
  delay: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, icon, label, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1.5rem 1rem',
        background: color,
        color: 'white',
        textDecoration: 'none',
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '0.9rem',
        transform: isHovered ? 'scale(1.05) translateY(-3px)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isHovered
          ? '0 15px 35px rgba(0, 0, 0, 0.2)'
          : '0 8px 20px rgba(0, 0, 0, 0.1)',
        animation: `slideInFromBottom 1s ease-out ${delay} both`,
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shine Effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
        transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
        transition: 'transform 0.6s ease'
      }} />

      <span style={{ fontSize: '1.8rem', zIndex: 1 }}>{icon}</span>
      <span style={{ zIndex: 1 }}>{label}</span>
    </a>
  );
};

// Enhanced Countdown Timer Component
const EnhancedCountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState(15);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '12px',
      fontSize: '0.9rem',
      fontWeight: '600',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      animation: 'slideInFromRight 1s ease-out 2s both',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      zIndex: 1000
    }}>
      {/* Animated Clock Icon */}
      <div style={{
        width: '24px',
        height: '24px',
        border: '2px solid #0EA5E9',
        borderRadius: '50%',
        position: 'relative',
        animation: 'spin 2s linear infinite'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '2px',
          height: '8px',
          background: '#0EA5E9',
          transformOrigin: 'bottom',
          transform: 'translate(-50%, -100%)',
          borderRadius: '1px'
        }} />
      </div>

      <div>
        <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Auto-redirect in</div>
        <div style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: countdown <= 5 ? '#EF4444' : '#0EA5E9'
        }}>
          {countdown}s
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
