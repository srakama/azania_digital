import React from 'react';
import { Link } from 'react-router-dom';
import TypingAnimation from '../components/TypingAnimation';
import InteractiveParticles from '../components/InteractiveParticles';
import FloatingElements from '../components/FloatingElements';
import { ScrollAnimation, AnimatedCounter } from '../components/ScrollAnimations';
import InteractivePortfolio from '../components/InteractivePortfolio';
import SEOHead from '../components/SEOHead';
import EnhancedSEO from '../components/EnhancedSEO';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudies from '../components/CaseStudies';
import { useButtonActions } from '../hooks/useButtonActions';

const Home: React.FC = () => {
  const { handleAction } = useButtonActions();
  return (
    <div style={{ paddingTop: '80px' }}>
      <SEOHead
        title="AzaniaDigital - Professional Web Development & Digital Solutions in South Africa"
        description="Transform your business with AzaniaDigital's expert web development, e-commerce solutions, and digital marketing services. Based in South Africa, serving clients worldwide."
        keywords="web development, digital marketing, e-commerce, South Africa, website design, SEO, mobile apps, digital transformation, online business, Cape Town, Johannesburg"
        url="https://azaniadigital.co.za"
        image="https://azaniadigital.co.za/images/azaniadigital-og-image.jpg"
      />

      <EnhancedSEO
        title="AzaniaDigital - Professional Web Development & Digital Solutions in South Africa"
        description="Transform your business with AzaniaDigital's expert web development, e-commerce solutions, and digital marketing services. Based in South Africa, serving clients worldwide."
        keywords="web development, digital marketing, e-commerce, South Africa, website design, SEO, mobile apps, digital transformation, online business, Cape Town, Johannesburg, React development, TypeScript, Next.js, custom websites, responsive design, performance optimization"
        url="https://azaniadigital.co.za"
        image="https://azaniadigital.co.za/images/azaniadigital-og-image.jpg"
        type="website"
      />

      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Interactive Particle Background */}
        <InteractiveParticles
          particleCount={60}
          colors={['#0EA5E9', '#3B82F6', '#6366F1', '#8B5CF6', '#10B981']}
          maxSize={6}
          speed={1}
          interactive={true}
        />

        {/* Floating Interactive Elements */}
        <FloatingElements
          elements={['💻', '🚀', '⚡', '🎯', '💡', '🔧', '📱', '🌟']}
          count={12}
          colors={['#0EA5E9', '#3B82F6', '#6366F1', '#8B5CF6', '#10B981']}
          interactive={true}
        />
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}></div>

        {/* Code Pattern Overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: '0.3'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Tech Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              marginBottom: '2rem',
              color: '#38BDF8',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <span style={{ fontSize: '1rem' }}>⚡</span>
              Modern Tech Stack
            </div>

            <h1 className="holographic" style={{
              fontSize: 'clamp(1.75rem, 6vw, 4.5rem)',
              fontWeight: '900',
              marginBottom: 'clamp(1rem, 4vw, 2rem)',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(14, 165, 233, 0.3)',
              position: 'relative',
              zIndex: 10,
              padding: '0 1rem'
            }}>
              Transform Your Business <br />
              <TypingAnimation
                texts={[
                  'Online.',
                  'Today.',
                  'Successfully.',
                  'Affordably.',
                  'Professionally.'
                ]}
                speed={150}
                deleteSpeed={100}
                pauseTime={2000}
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              />
            </h1>

            {/* Tech Stack Display */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Python'].map((tech, index) => (
                <span key={tech} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: '#E2E8F0',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.375rem)',
              color: '#94A3B8',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              padding: '0 1rem'
            }}>
              We create <span style={{ color: '#38BDF8', fontWeight: '600' }}>stunning websites that attract customers</span> and
              <span style={{ color: '#10B981', fontWeight: '600' }}> drive sales</span>. From simple business websites to
              <span style={{ color: '#6366F1', fontWeight: '600' }}> powerful online stores</span>,
              we help your business succeed online.
            </p>

            <div style={{
              display: 'flex',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              padding: '0 1rem'
            }}>
              <button
                onClick={() => handleAction('portfolio-showcase')}
                className="btn btn-secondary btn-lg magnetic-btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: '#E2E8F0',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                <span style={{ marginRight: '0.5rem' }}>💼</span>
                View Our Portfolio
              </button>
            </div>

            {/* Code Snippet Preview */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'left',
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.875rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                <span style={{ color: '#64748B', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
                  AzaniaDigital.tsx
                </span>
              </div>
              <div style={{ color: '#64748B' }}>
                <span style={{ color: '#F472B6' }}>const</span>{' '}
                <span style={{ color: '#38BDF8' }}>solution</span>{' '}
                <span style={{ color: '#64748B' }}>=</span>{' '}
                <span style={{ color: '#10B981' }}>await</span>{' '}
                <span style={{ color: '#38BDF8' }}>buildApp</span>
                <span style={{ color: '#64748B' }}>({`{`}</span>
                <br />
                <span style={{ marginLeft: '1rem', color: '#F472B6' }}>framework</span>
                <span style={{ color: '#64748B' }}>:</span>{' '}
                <span style={{ color: '#A3E635' }}>'React'</span>
                <span style={{ color: '#64748B' }}>,</span>
                <br />
                <span style={{ marginLeft: '1rem', color: '#F472B6' }}>language</span>
                <span style={{ color: '#64748B' }}>:</span>{' '}
                <span style={{ color: '#A3E635' }}>'TypeScript'</span>
                <span style={{ color: '#64748B' }}>,</span>
                <br />
                <span style={{ marginLeft: '1rem', color: '#F472B6' }}>performance</span>
                <span style={{ color: '#64748B' }}>:</span>{' '}
                <span style={{ color: '#A3E635' }}>'blazing-fast'</span>
                <br />
                <span style={{ color: '#64748B' }}>{`}`});</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `
        }}></div>

        {/* Dynamic Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}></div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'techFloat 8s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'techFloat 10s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 25%, #3B82F6 50%, #8B5CF6 75%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            textShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
            Tech Stack & Solutions
          </h2>
          <p style={{
            fontSize: '1.375rem',
            color: '#E2E8F0',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.7',
            fontWeight: '500',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            <span style={{ color: '#0EA5E9', fontWeight: '700' }}>Cutting-edge technologies</span> and
            <span style={{ color: '#10B981', fontWeight: '700' }}> frameworks</span> powering
            <span style={{ color: '#8B5CF6', fontWeight: '700' }}>modern web applications</span>.
          </p>

          <div className="grid grid-cols-3" style={{ gap: '2.5rem' }}>
            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(14, 165, 233, 0.3)',
              boxShadow: '0 8px 32px rgba(14, 165, 233, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #0EA5E9 0%, #3B82F6 100%)',
                animation: 'shimmer 2s ease-in-out infinite'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#0EA5E9',
                textShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 0 40px rgba(14, 165, 233, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(14, 165, 233, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(14, 165, 233, 0.3)'
              }}>⚛️</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>React & TypeScript</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Build <span style={{ color: '#0EA5E9', fontWeight: '700' }}>scalable, type-safe applications</span> with
                <span style={{ color: '#3B82F6', fontWeight: '700' }}> React 18</span>,
                <span style={{ color: '#6366F1', fontWeight: '700' }}>TypeScript</span>, and modern hooks.
                Component-based architecture for maintainable code.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  color: '#38BDF8',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>React 18</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60A5FA',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>TypeScript</span>
                <span style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#818CF8',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Hooks</span>
              </div>
              <Link to="/services" style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                transition: 'all 0.3s ease'
              }}>Explore React</Link>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #10B981 0%, #06B6D4 100%)',
                animation: 'shimmer 2s ease-in-out infinite 0.5s'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#10B981',
                textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(16, 185, 129, 0.3)'
              }}>🚀</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Fast & Powerful Websites</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#10B981', fontWeight: '700' }}>Lightning-fast websites</span> that
                <span style={{ color: '#06B6D4', fontWeight: '700' }}> rank high on Google</span> and
                <span style={{ color: '#0EA5E9', fontWeight: '700' }}>convert visitors into customers</span>.
                Built for speed and results.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34D399',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Next.js 14</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22D3EE',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Node.js</span>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  color: '#38BDF8',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>SSR</span>
              </div>
              <Link to="/services" style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease'
              }}>Explore Next.js</Link>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #8B5CF6 0%, #A855F7 100%)',
                animation: 'shimmer 2s ease-in-out infinite 1s'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#8B5CF6',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(139, 92, 246, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(139, 92, 246, 0.3)'
              }}>🤖</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>AI & Cloud Solutions</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Integrate <span style={{ color: '#8B5CF6', fontWeight: '700' }}>AI capabilities</span>,
                <span style={{ color: '#A855F7', fontWeight: '700' }}> cloud infrastructure</span>, and
                <span style={{ color: '#6366F1', fontWeight: '700' }}>modern DevOps practices</span>.
                Scalable, secure, and future-ready applications.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: '#A78BFA',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>OpenAI</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#C084FC',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>AWS</span>
                <span style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#818CF8',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Docker</span>
              </div>
              <Link to="/services" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}>Explore AI</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 30%, #334155 60%, #475569 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 0'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite'
        }} />

        {/* Floating Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(99, 102, 241, 0.1))',
          borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite',
          filter: 'blur(1px)'
        }} />

        <div style={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1))',
          borderRadius: '20px',
          animation: 'float 18s ease-in-out infinite reverse',
          filter: 'blur(1px)'
        }} />

        <div style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(225deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1))',
          borderRadius: '30px',
          animation: 'float 12s ease-in-out infinite',
          filter: 'blur(1px)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Enhanced Section Header */}
          <ScrollAnimation>
            <div style={{
              textAlign: 'center',
              marginBottom: '5rem',
              position: 'relative'
            }}>
              {/* Decorative Line */}
              <div style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #0EA5E9, #6366F1)',
                margin: '0 auto 2rem',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: 'linear-gradient(90deg, #0EA5E9, #6366F1)',
                  borderRadius: '4px',
                  filter: 'blur(4px)',
                  opacity: 0.5
                }} />
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                position: 'relative'
              }}>
                Our Success Stories
                {/* Glowing Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'blur(20px)',
                  opacity: 0.3,
                  zIndex: -1
                }}>
                  Our Success Stories
                </div>
              </h2>

              <p style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                color: '#CBD5E1',
                maxWidth: '700px',
                margin: '0 auto 3rem',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Discover how we've transformed businesses across South Africa with cutting-edge digital solutions that drive real results
              </p>

              {/* Stats Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
                marginBottom: '3rem'
              }}>
                {[
                  { number: '50+', label: 'Projects Delivered', icon: '🚀' },
                  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
                  { number: '3x', label: 'Average ROI', icon: '📈' },
                  { number: '24/7', label: 'Support Available', icon: '💬' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      color: '#0EA5E9',
                      marginBottom: '0.25rem'
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
          </ScrollAnimation>

          {/* Enhanced Portfolio Grid - Temporarily disabled for demo */}
          {/* <ScrollAnimation>
            <InteractivePortfolio showTitle={false} />
          </ScrollAnimation> */}
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Us Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Tech Grid Background */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: '0.3'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Technical Excellence</h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>
            Advanced development practices and cutting-edge technologies that set us apart.
          </p>

          <div className="grid grid-cols-2">
            <div className="card glow-effect" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}>
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                fontSize: '1.5rem'
              }}>
                ⚡
              </div>
              <h3 className="card-title" style={{ color: '#38BDF8' }}>Performance Optimization</h3>
              <p className="card-text" style={{ color: '#CBD5E1' }}>
                Code splitting, lazy loading, and advanced caching strategies.
                Lighthouse scores of 95+ guaranteed with sub-second load times.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  color: '#38BDF8',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Webpack</span>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34D399',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Vite</span>
              </div>
            </div>

            <div className="card glow-effect" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}>
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                fontSize: '1.5rem'
              }}>
                🧪
              </div>
              <h3 className="card-title" style={{ color: '#34D399' }}>Testing & Quality</h3>
              <p className="card-text" style={{ color: '#CBD5E1' }}>
                Comprehensive testing with Jest, Cypress, and TypeScript.
                CI/CD pipelines ensure bug-free deployments every time.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34D399',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Jest</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22D3EE',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Cypress</span>
              </div>
            </div>

            <div className="card glow-effect" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}>
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
                fontSize: '1.5rem'
              }}>
                🔐
              </div>
              <h3 className="card-title" style={{ color: '#A78BFA' }}>Security First</h3>
              <p className="card-text" style={{ color: '#CBD5E1' }}>
                OWASP compliance, secure authentication, and encrypted data transmission.
                Regular security audits and vulnerability assessments.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: '#A78BFA',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>OAuth</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#C084FC',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>JWT</span>
              </div>
            </div>

            <div className="card glow-effect" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}>
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
                fontSize: '1.5rem'
              }}>
                📊
              </div>
              <h3 className="card-title" style={{ color: '#FBBF24' }}>Analytics & Monitoring</h3>
              <p className="card-text" style={{ color: '#CBD5E1' }}>
                Real-time performance monitoring, error tracking, and user analytics.
                Data-driven insights to optimize your application continuously.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(245, 158, 11, 0.2)',
                  color: '#FBBF24',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Sentry</span>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#F87171',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Tech Insights Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Latest Tech Insights</h2>
            <p className="section-subtitle">
              Stay ahead with cutting-edge development practices, frameworks, and industry trends.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {/* Featured Blog Post 1 */}
            <article className="card" style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(14, 165, 233, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚛️</div>
                <span style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  React 18 Deep Dive
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  color: '#0EA5E9',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  Advanced React
                </span>
                <span style={{
                  color: '#64748B',
                  fontSize: '0.875rem',
                  marginLeft: '1rem'
                }}>
                  12 min read
                </span>
              </div>

              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#1E293B',
                lineHeight: '1.4'
              }}>
                Mastering React 18: Concurrent Features & Performance Optimization
              </h3>

              <p style={{
                color: '#64748B',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>
                Explore React 18's revolutionary concurrent features, automatic batching, and Suspense improvements.
                Learn how to implement startTransition, useDeferredValue, and optimize your app's performance.
              </p>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  color: '#0EA5E9',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Concurrent Mode</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3B82F6',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Suspense</span>
                <span style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  color: '#6366F1',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Performance</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(14, 165, 233, 0.1)'
              }}>
                <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                  March 20, 2024
                </span>
                <button
                  onClick={() => window.open('/blog', '_blank')}
                  style={{
                    color: '#0EA5E9',
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Read Full Guide →
                </button>
              </div>
            </article>

            {/* Featured Blog Post 2 */}
            <article className="card" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <span style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Next.js 14 Guide
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  Full-Stack
                </span>
                <span style={{
                  color: '#64748B',
                  fontSize: '0.875rem',
                  marginLeft: '1rem'
                }}>
                  15 min read
                </span>
              </div>

              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#1E293B',
                lineHeight: '1.4'
              }}>
                Next.js 14 App Router: Building Production-Ready Applications
              </h3>

              <p style={{
                color: '#64748B',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>
                Complete guide to Next.js 14's App Router, Server Components, and streaming.
                Build scalable applications with TypeScript, Tailwind CSS, and modern deployment strategies.
              </p>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>App Router</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.1)',
                  color: '#06B6D4',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Server Components</span>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  color: '#0EA5E9',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>TypeScript</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(16, 185, 129, 0.1)'
              }}>
                <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                  March 18, 2024
                </span>
                <button
                  onClick={() => window.open('/blog', '_blank')}
                  style={{
                    color: '#10B981',
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Read Full Guide →
                </button>
              </div>
            </article>

            {/* Featured Blog Post 3 */}
            <article className="card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤖</div>
                <span style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  AI Integration
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#8B5CF6',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  AI Development
                </span>
                <span style={{
                  color: '#64748B',
                  fontSize: '0.875rem',
                  marginLeft: '1rem'
                }}>
                  10 min read
                </span>
              </div>

              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#1E293B',
                lineHeight: '1.4'
              }}>
                Integrating AI APIs: OpenAI, Claude & Custom Models in React
              </h3>

              <p style={{
                color: '#64748B',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>
                Learn to integrate AI capabilities into your React applications.
                From OpenAI GPT-4 to Claude API, build intelligent features with proper error handling and streaming.
              </p>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#8B5CF6',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>OpenAI</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  color: '#A855F7',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Claude API</span>
                <span style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  color: '#6366F1',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>Streaming</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(139, 92, 246, 0.1)'
              }}>
                <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                  March 15, 2024
                </span>
                <button
                  onClick={() => window.open('/blog', '_blank')}
                  style={{
                    color: '#8B5CF6',
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Read Full Guide →
                </button>
              </div>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/blog" className="btn btn-primary btn-lg" style={{
              background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
              boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📚</span>
              View All Tech Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        padding: '6rem 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              What Our Customers Say
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Don't just take our word for it - hear from businesses we've helped grow online
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                name: "Sarah Johnson",
                business: "Johnson's Boutique",
                text: "AzaniaDigital transformed our small boutique into a thriving online business. Sales increased by 300% in just 3 months!",
                rating: 5
              },
              {
                name: "Mike Chen",
                business: "Chen's Restaurant",
                text: "The team made ordering online so easy for our customers. We now get 50+ online orders daily. Highly recommend!",
                rating: 5
              },
              {
                name: "Lisa Williams",
                business: "Williams Law Firm",
                text: "Professional, fast, and affordable. Our new website brings in 10 new clients every month. Worth every penny!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollAnimation
                key={index}
                animation="slideInUp"
                delay={index * 0.2}
                duration={0.8}
              >
                <div className="card" style={{
                  padding: '2rem',
                  textAlign: 'left'
                }}>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#F59E0B', fontSize: '1.25rem' }}>⭐</span>
                  ))}
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#64748B'
                  }}>
                    {testimonial.business}
                  </div>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Trust Badges */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1E293B',
              marginBottom: '1.5rem'
            }}>
              Trusted by 50+ South African Businesses
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { icon: '🛡️', text: 'SSL Secured' },
                { icon: '⚡', text: 'Fast Loading' },
                { icon: '📱', text: 'Mobile Ready' },
                { icon: '🎯', text: 'SEO Optimized' },
                { icon: '💬', text: '24/7 Support' }
              ].map((badge, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(14, 165, 233, 0.1)',
                  borderRadius: '8px',
                  color: '#0EA5E9',
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  <span>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Ready to Grow Your Business?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Join hundreds of satisfied customers who've transformed their business online.
              Get your free consultation and personalized quote today - no obligations!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  // Create beautiful interactive modal
                  const modalContainer = document.createElement('div');
                  modalContainer.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(15px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                  `;

                  // Create modal content
                  const modalContent = document.createElement('div');
                  modalContent.style.cssText = `
                    background: linear-gradient(145deg, #1E293B 0%, #334155 50%, #475569 100%);
                    border-radius: 24px;
                    padding: clamp(1.5rem, 4vw, 2.5rem);
                    max-width: 550px;
                    width: clamp(90%, 95vw, 90%);
                    margin: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
                    transform: scale(0.8) translateY(30px);
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: relative;
                    overflow: hidden;
                    max-height: 90vh;
                    overflow-y: auto;
                  `;

                  // Add animated background
                  const animatedBg = document.createElement('div');
                  animatedBg.style.cssText = `
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(from 0deg, transparent, rgba(14, 165, 233, 0.1), transparent, rgba(99, 102, 241, 0.1), transparent);
                    animation: rotate 8s linear infinite;
                    pointer-events: none;
                  `;
                  modalContent.appendChild(animatedBg);

                  // Add content
                  const contentDiv = document.createElement('div');
                  contentDiv.style.cssText = 'position: relative; z-index: 2;';
                  contentDiv.innerHTML = `
                    <div style="text-align: center; margin-bottom: 2rem;">
                      <div style="font-size: 3rem; margin-bottom: 1rem; animation: bounce 2s infinite;">🚀</div>
                      <h2 style="
                        color: #0EA5E9;
                        margin: 0 0 0.5rem 0;
                        font-size: 1.75rem;
                        font-weight: 800;
                        background: linear-gradient(135deg, #0EA5E9, #6366F1);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                      ">Ready to Start Your Project?</h2>
                      <p style="color: #CBD5E1; margin: 0; font-size: 1rem; line-height: 1.6;">
                        Let's bring your vision to life! Choose how you'd like to get started:
                      </p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                      <button id="whatsapp-btn" style="
                        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                        color: white;
                        border: none;
                        border-radius: 16px;
                        padding: clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem);
                        font-size: clamp(1rem, 2.5vw, 1.1rem);
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
                        min-height: 44px;
                        width: 100%;
                      ">
                        <span style="font-size: 1.3rem;">💬</span>
                        <span>Chat on WhatsApp (Instant Response)</span>
                      </button>

                      <button id="contact-btn" style="
                        background: linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%);
                        color: white;
                        border: none;
                        border-radius: 16px;
                        padding: clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem);
                        font-size: clamp(1rem, 2.5vw, 1.1rem);
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        box-shadow: 0 8px 25px rgba(14, 165, 233, 0.3);
                        min-height: 44px;
                        width: 100%;
                      ">
                        <span style="font-size: 1.3rem;">📋</span>
                        <span>Fill Detailed Project Brief</span>
                      </button>

                      <button id="call-btn" style="
                        background: rgba(255, 255, 255, 0.08);
                        color: #E2E8F0;
                        border: 2px solid rgba(255, 255, 255, 0.15);
                        border-radius: 16px;
                        padding: clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem);
                        font-size: clamp(1rem, 2.5vw, 1.1rem);
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        min-height: 44px;
                        width: 100%;
                      ">
                        <span style="font-size: 1.3rem;">📞</span>
                        <span>Call Now (+27 78 651 1482)</span>
                      </button>
                    </div>

                    <div style="
                      text-align: center;
                      padding: 1rem;
                      background: rgba(14, 165, 233, 0.1);
                      border-radius: 12px;
                      border: 1px solid rgba(14, 165, 233, 0.2);
                    ">
                      <div style="color: #0EA5E9; font-weight: 700; margin-bottom: 0.5rem;">
                        ⚡ Free Consultation Included
                      </div>
                      <div style="color: #94A3B8; font-size: 0.9rem;">
                        Get expert advice and project roadmap at no cost
                      </div>
                    </div>

                    <button id="close-btn" style="
                      position: absolute;
                      top: 1rem;
                      right: 1rem;
                      background: rgba(255, 255, 255, 0.1);
                      border: none;
                      border-radius: 50%;
                      width: 44px;
                      height: 44px;
                      color: white;
                      font-size: 1.5rem;
                      cursor: pointer;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      transition: all 0.3s ease;
                    ">×</button>
                  `;

                  modalContent.appendChild(contentDiv);
                  modalContainer.appendChild(modalContent);

                  // Add CSS animations
                  const style = document.createElement('style');
                  style.textContent = `
                    @keyframes rotate {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes bounce {
                      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                      40% { transform: translateY(-10px); }
                      60% { transform: translateY(-5px); }
                    }
                  `;
                  document.head.appendChild(style);

                  document.body.appendChild(modalContainer);

                  // Add event listeners
                  contentDiv.querySelector('#whatsapp-btn')?.addEventListener('click', () => {
                    window.open('https://wa.me/27786511482?text=Hi! I\'d like to start a new project with AzaniaDigital. Let\'s discuss my requirements and get a quote!', '_blank');
                    modalContainer.remove();
                    style.remove();
                  });

                  contentDiv.querySelector('#contact-btn')?.addEventListener('click', () => {
                    window.location.href = '/contact';
                  });

                  contentDiv.querySelector('#call-btn')?.addEventListener('click', () => {
                    window.open('tel:+27786511482', '_self');
                  });

                  contentDiv.querySelector('#close-btn')?.addEventListener('click', () => {
                    modalContainer.style.opacity = '0';
                    setTimeout(() => {
                      modalContainer.remove();
                      style.remove();
                    }, 400);
                  });

                  // Close on backdrop click
                  modalContainer.addEventListener('click', (e) => {
                    if (e.target === modalContainer) {
                      modalContainer.style.opacity = '0';
                      setTimeout(() => {
                        modalContainer.remove();
                        style.remove();
                      }, 400);
                    }
                  });

                  // Animate in
                  setTimeout(() => {
                    modalContainer.style.opacity = '1';
                    modalContent.style.transform = 'scale(1) translateY(0)';
                  }, 10);
                }}
                className="btn"
                style={{
                  background: 'white',
                  color: '#0EA5E9',
                  fontWeight: '600',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
                }}
              >
                🚀 Start Your Project
              </button>
              <a href="https://wa.me/27786511482" className="btn" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid white'
              }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
