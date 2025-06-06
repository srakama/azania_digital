import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
        {/* Particle Background */}
        <div className="particle-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
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
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: '900',
              marginBottom: '2rem',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(14, 165, 233, 0.3)',
              position: 'relative'
            }}>
              Code. Create. <br />
              <span style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Innovate.
              </span>
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
              fontSize: '1.375rem',
              color: '#94A3B8',
              marginBottom: '3rem',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              We build <span style={{ color: '#38BDF8', fontWeight: '600' }}>scalable web applications</span> using
              cutting-edge technologies. From <span style={{ color: '#10B981', fontWeight: '600' }}>React & TypeScript</span> to
              <span style={{ color: '#6366F1', fontWeight: '600' }}> AI-powered solutions</span>,
              we turn complex ideas into elegant code.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <Link to="/contact" className="btn btn-primary btn-lg magnetic-btn glow-effect" style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)',
                border: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>🚀</span>
                Start Building
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg magnetic-btn" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{ marginRight: '0.5rem' }}>💻</span>
                View Tech Stack
              </Link>
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
              }}>Next.js & Node.js</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#10B981', fontWeight: '700' }}>Full-stack applications</span> with
                <span style={{ color: '#06B6D4', fontWeight: '700' }}> server-side rendering</span>,
                <span style={{ color: '#0EA5E9', fontWeight: '700' }}>API routes</span>, and optimized performance.
                SEO-friendly and lightning-fast.
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
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)',
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
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)',
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
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)',
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
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Let's discuss your project and create something amazing together.
              Get a free consultation and quote today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn" style={{
                background: 'white',
                color: '#0EA5E9',
                fontWeight: '600'
              }}>
                📞 Get Free Quote
              </Link>
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
