import React, { useState, useEffect } from 'react';
import InteractiveContactForm from '../components/InteractiveContactForm';
import EnhancedContactForm from '../components/EnhancedContactForm';
import WorkingContactForm from '../components/WorkingContactForm';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let form submit to iframe
    setIsSubmitting(true);

    console.log('Form submitting to FormSubmit via iframe...');
    console.log('Form data:', formData);

    // Show custom success message after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      console.log('Custom success message shown - email sent via iframe');

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 5000);
    }, 1500);

    // Form will submit to hidden iframe, sending email but not redirecting user
  };

  // Alternative form submission handler
  const handleAlternativeSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);

    // Show success message after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 5000);
    }, 2000);

    // Let the form submit normally
  };

  // Countdown Indicator Component
  const CountdownIndicator: React.FC = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    if (countdown === 0) {
      return <span>Closing...</span>;
    }

    return <span>Auto-close in {countdown}s</span>;
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 7s ease-in-out infinite'
        }}></div>

        {/* Communication Pattern */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: '0.4'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Contact Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              marginBottom: '2rem',
              color: '#A78BFA',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <span style={{ fontSize: '1rem' }}>💬</span>
              Let's Connect
            </div>

            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 25%, #6366F1 50%, #3B82F6 75%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(99, 102, 241, 0.3)'
            }}>
              Start Your <br />
              <span style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Digital Journey
              </span>
            </h1>

            {/* Contact Methods */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'Free Consultation', icon: '💡' },
                { name: 'Quick Response', icon: '⚡' },
                { name: 'Expert Advice', icon: '🎯' },
                { name: '24/7 Support', icon: '🛡️' }
              ].map((method, index) => (
                <span key={method.name} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: '#E2E8F0',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>{method.icon}</span>
                  {method.name}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: '1.375rem',
              color: '#94A3B8',
              marginBottom: '3rem',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              Ready to grow your business online? Let's chat about your
              <span style={{ color: '#A78BFA', fontWeight: '600' }}> goals and budget</span> and create a
              <span style={{ color: '#38BDF8', fontWeight: '600' }}> website that works for you</span> and brings in
              <span style={{ color: '#34D399', fontWeight: '600' }}>more customers</span>.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a href="#contact-form" className="btn btn-primary btn-lg" style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                border: 'none',
                textDecoration: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>📝</span>
                Send Message
              </a>
              <a href="https://wa.me/27786511482" className="btn btn-secondary btn-lg" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#E2E8F0',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>📱</span>
                WhatsApp Direct
              </a>
            </div>

            {/* Contact Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '2rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {[
                { number: '<24h', label: 'Response Time', color: '#A78BFA' },
                { number: '100%', label: 'Free Consultation', color: '#38BDF8' },
                { number: '50+', label: 'Happy Clients', color: '#34D399' },
                { number: '24/7', label: 'Support Available', color: '#F59E0B' }
              ].map((stat, index) => (
                <div key={stat.label} style={{
                  textAlign: 'center',
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`
                }}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: '900',
                    color: stat.color,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#94A3B8',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div className="card" style={{ padding: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Get Your Free Quote
              </h2>

              {/* Enhanced Success Message */}
              {isSubmitted && (
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
                  zIndex: 9999,
                  animation: 'fadeIn 0.5s ease-in-out'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)',
                    color: 'white',
                    padding: '4rem 3rem',
                    borderRadius: '24px',
                    textAlign: 'center',
                    maxWidth: '600px',
                    width: '90%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(16, 185, 129, 0.3)',
                    animation: 'successSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {/* Floating Particles */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '30px',
                      fontSize: '1.5rem',
                      animation: 'float 3s ease-in-out infinite'
                    }}>✨</div>
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      right: '40px',
                      fontSize: '1.2rem',
                      animation: 'float 3s ease-in-out infinite 1s'
                    }}>🎉</div>
                    <div style={{
                      position: 'absolute',
                      bottom: '30px',
                      left: '50px',
                      fontSize: '1rem',
                      animation: 'float 3s ease-in-out infinite 2s'
                    }}>⭐</div>
                    <div style={{
                      position: 'absolute',
                      bottom: '50px',
                      right: '30px',
                      fontSize: '1.3rem',
                      animation: 'float 3s ease-in-out infinite 0.5s'
                    }}>🚀</div>

                    {/* Success Icon with Pulse */}
                    <div style={{
                      position: 'relative',
                      display: 'inline-block',
                      marginBottom: '2rem'
                    }}>
                      <div style={{
                        fontSize: '5rem',
                        animation: 'successBounce 1.5s ease-out',
                        filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))'
                      }}>
                        ✅
                      </div>
                      {/* Ripple Effects */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                        border: '3px solid rgba(255, 255, 255, 0.6)',
                        borderRadius: '50%',
                        animation: 'rippleEffect 2s ease-out infinite'
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                        border: '3px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '50%',
                        animation: 'rippleEffect 2s ease-out infinite 0.7s'
                      }} />
                    </div>

                    {/* Main Title */}
                    <h2 style={{
                      fontSize: '3rem',
                      fontWeight: '900',
                      marginBottom: '1.5rem',
                      color: 'white',
                      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      animation: 'titleSlideUp 1s ease-out 0.3s both',
                      letterSpacing: '-0.02em'
                    }}>
                      Thank You! 🎉
                    </h2>

                    {/* Subtitle */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '2rem',
                      borderRadius: '16px',
                      marginBottom: '2rem',
                      animation: 'contentFadeIn 1s ease-out 0.6s both',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <p style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                      }}>
                        Thank you for contacting us at AzaniaDigital!
                      </p>
                      <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Our team will be with you soonest. We're excited to help bring your digital vision to life! 🚀
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      marginBottom: '2rem',
                      animation: 'contentFadeIn 1s ease-out 0.9s both'
                    }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'white'
                      }}>
                        What happens next?
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#10B981',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            animation: 'checkmarkPop 0.5s ease-out 1.2s both'
                          }}>✓</div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>
                            Message received and logged
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            animation: 'pulse 2s ease-in-out infinite 1.5s'
                          }}>2</div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>
                            Our team reviews your requirements
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '0.9rem',
                            fontWeight: '700'
                          }}>3</div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>
                            We'll contact you within 24 hours
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      animation: 'contentFadeIn 1s ease-out 1.2s both'
                    }}>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          color: '#10B981',
                          border: 'none',
                          padding: '1rem 2rem',
                          borderRadius: '12px',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
                        }}
                      >
                        ✨ Continue Browsing
                      </button>
                      <a
                        href="https://wa.me/27786511482"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          color: 'white',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          padding: '1rem 2rem',
                          borderRadius: '12px',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          textDecoration: 'none',
                          display: 'inline-block',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        💬 WhatsApp Us
                      </a>
                    </div>

                    {/* Auto-close indicator */}
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '20px',
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      animation: 'contentFadeIn 1s ease-out 2s both'
                    }}>
                      <CountdownIndicator />
                    </div>
                  </div>
                </div>
              )}



              {/* Hidden iframe for form submission */}
              <iframe
                name="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={() => {
                  console.log('Form submitted successfully via iframe');
                }}
              />

              <WorkingContactForm />

            </div>

            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#1E293B'
                }}>
                  Contact Information
                </h3>


                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      📧
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1E293B' }}>Email</h4>
                      <a href="mailto:hello@azaniadigital.co.za" style={{
                        color: '#0EA5E9',
                        textDecoration: 'none',
                        fontSize: '1.1rem'
                      }}>
                        hello@azaniadigital.co.za
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      📱
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1E293B' }}>Phone</h4>
                      <a href="tel:+27786511482" style={{
                        color: '#10B981',
                        textDecoration: 'none',
                        fontSize: '1.1rem'
                      }}>
                        +27 78 651 1482
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      📍
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1E293B' }}>Location</h4>
                      <p style={{ color: '#64748B', fontSize: '1.1rem', margin: 0 }}>
                        Cape Town, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="card" style={{ marginTop: 'auto' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#1E293B'
                }}>
                  Quick Contact
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href="https://wa.me/27786511482"
                    className="btn btn-accent"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    💬 WhatsApp Us
                  </a>

                  <a
                    href="mailto:hello@azaniadigital.co.za?subject=Project Inquiry"
                    className="btn btn-secondary"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    📧 Send Email
                  </a>

                  <a
                    href="tel:+27786511482"
                    className="btn btn-primary"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our services and process.
          </p>

          <div className="grid grid-cols-2">
            <div className="card">
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', color: '#1E293B' }}>
                How long does a website take to build?
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Most websites take 2-4 weeks to complete, depending on complexity.
                E-commerce sites may take 4-6 weeks. We'll provide a detailed timeline during consultation.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', color: '#1E293B' }}>
                Do you provide ongoing support?
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Yes! We offer comprehensive maintenance packages starting from R1,200/month,
                including updates, security monitoring, and technical support.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', color: '#1E293B' }}>
                What's included in the price?
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Our packages include design, development, SEO optimization, mobile responsiveness,
                and basic training. Hosting and domain are separate.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', color: '#1E293B' }}>
                Can you help with existing websites?
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Absolutely! We can redesign, optimize, or add new features to existing websites.
                We also provide migration services from other platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
