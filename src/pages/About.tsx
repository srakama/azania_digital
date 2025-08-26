import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollAnimation, AnimatedCounter } from '../components/ScrollAnimations';

const About: React.FC = () => {
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
            radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 8s ease-in-out infinite'
        }}></div>

        {/* Code Pattern Overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: '0.3'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Company Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              marginBottom: '2rem',
              color: '#34D399',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <span style={{ fontSize: '1rem' }}>🇿🇦</span>
              South African Innovation
            </div>

            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #34D399 0%, #10B981 25%, #06B6D4 50%, #0EA5E9 75%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
            }}>
              Crafting Digital <br />
              <span style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Excellence
              </span>
            </h1>

            {/* Company Values */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'Innovation', icon: '💡' },
                { name: 'Quality', icon: '⭐' },
                { name: 'Partnership', icon: '🤝' },
                { name: 'Growth', icon: '📈' }
              ].map((value, index) => (
                <span key={value.name} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                  <span>{value.icon}</span>
                  {value.name}
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
              We're a <span style={{ color: '#34D399', fontWeight: '600' }}>passionate team from South Africa</span> who believe every business
              <span style={{ color: '#38BDF8', fontWeight: '600' }}> deserves a beautiful online presence</span>. We help small and medium businesses
              <span style={{ color: '#A78BFA', fontWeight: '600' }}>compete with the big players</span> through smart, affordable web solutions.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                border: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>🤝</span>
                Work With Us
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{ marginRight: '0.5rem' }}>🔍</span>
                Our Services
              </Link>
            </div>

            {/* Company Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '2rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              {[
                { number: 2019, label: 'Founded', color: '#34D399', isYear: true },
                { number: 50, label: 'Projects', color: '#38BDF8', suffix: '+' },
                { number: 100, label: 'Client Satisfaction', color: '#A78BFA', suffix: '%' },
                { number: 24, label: 'Support Hours', color: '#F59E0B', suffix: '/7' }
              ].map((stat, index) => (
                <ScrollAnimation
                  key={stat.label}
                  animation="zoomIn"
                  delay={index * 0.2}
                  duration={0.8}
                >
                  <div style={{ textAlign: 'center' }}>
                    <AnimatedCounter
                      end={stat.number}
                      start={stat.isYear ? 2019 : 0}
                      duration={2}
                      suffix={stat.suffix || ''}
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '900',
                        color: stat.color,
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#64748B',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                Started by a team of developers who were tired of seeing small businesses struggle online,
                AzaniaDigital was born from a simple idea: great websites shouldn't cost a fortune or take forever to build.
                We've helped over 50 businesses transform their online presence and grow their revenue.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#64748B',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Our name "Azania" honors South Africa's rich heritage while our work embraces the latest global
                web technologies. We're proud to be a local team that delivers world-class results.
              </p>
              <Link to="/contact" className="btn btn-primary">
                🤝 Work With Us
              </Link>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Innovation First
              </h3>
              <p style={{ color: '#64748B' }}>
                We stay ahead of technology trends to deliver solutions that future-proof your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
            radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
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
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridPulse 5s ease-in-out infinite'
        }}></div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '140px',
          height: '140px',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          animation: 'techFloat 10s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'techFloat 14s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 25%, #00D4FF 50%, #10B981 75%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
            Our Core Values
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.375rem)',
            color: '#E2E8F0',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.7',
            fontWeight: '500',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            padding: '0 1rem'
          }}>
            The <span style={{ color: '#A855F7', fontWeight: '700' }}>principles</span> that guide everything we do and shape our
            <span style={{ color: '#00D4FF', fontWeight: '700' }}> approach</span> to
            <span style={{ color: '#10B981', fontWeight: '700' }}>client relationships</span>.
          </p>

          <div className="grid grid-cols-3" style={{ gap: '2.5rem' }}>
            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #A855F7 0%, #EC4899 100%)',
                animation: 'shimmer 2s ease-in-out infinite'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#A855F7',
                textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(168, 85, 247, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(168, 85, 247, 0.3)'
              }}>💡</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Innovation</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We embrace <span style={{ color: '#A855F7', fontWeight: '700' }}>cutting-edge technologies</span> and
                <span style={{ color: '#EC4899', fontWeight: '700' }}> creative solutions</span> to solve complex challenges
                and deliver exceptional results.
              </p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #00D4FF 0%, #06B6D4 100%)',
                animation: 'shimmer 2s ease-in-out infinite 0.5s'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#00D4FF',
                textShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(0, 212, 255, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(0, 212, 255, 0.3)'
              }}>🤝</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Partnership</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We work closely with our clients as <span style={{ color: '#00D4FF', fontWeight: '700' }}>trusted partners</span>,
                understanding their <span style={{ color: '#06B6D4', fontWeight: '700' }}>goals</span> and
                collaborating to achieve success.
              </p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
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
                background: 'linear-gradient(90deg, #10B981 0%, #F59E0B 100%)',
                animation: 'shimmer 2s ease-in-out infinite 1s'
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
              }}>⭐</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Excellence</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We maintain the <span style={{ color: '#10B981', fontWeight: '700' }}>highest standards</span> in
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>code quality</span>, design, and customer service to
                exceed expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}>
        {/* Animated Particle Background */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
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

        {/* Floating Tech Icons */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)',
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
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'techFloat 10s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '20%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'techFloat 12s ease-in-out infinite'
        }}></div>

        {/* Animated Lines */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.6) 50%, transparent 100%)',
          animation: 'lineMove 6s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '40%',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.6) 50%, transparent 100%)',
          animation: 'lineMove 8s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #3B82F6 50%, #6366F1 75%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            textShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
            Our Technical Expertise
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
            We master the <span style={{ color: '#00D4FF', fontWeight: '700' }}>latest technologies</span> to build
            <span style={{ color: '#34D399', fontWeight: '700' }}> robust, scalable</span>, and
            <span style={{ color: '#A78BFA', fontWeight: '700' }}>future-ready solutions</span>.
          </p>

          <div className="grid grid-cols-2" style={{ gap: '2.5rem' }}>
            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #00D4FF 0%, #0EA5E9 100%)',
                animation: 'shimmer 2s ease-in-out infinite'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#00D4FF',
                textShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(0, 212, 255, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(0, 212, 255, 0.3)'
              }}>⚛️</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Frontend Technologies</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#00D4FF', fontWeight: '700' }}>React</span>,
                <span style={{ color: '#38BDF8', fontWeight: '700' }}> Next.js</span>,
                <span style={{ color: '#3B82F6', fontWeight: '700' }}>TypeScript</span>,
                <span style={{ color: '#06B6D4', fontWeight: '700' }}>Tailwind CSS</span>,
                <span style={{ color: '#10B981', fontWeight: '700' }}>Vue.js</span>,
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>Angular</span>, and modern JavaScript frameworks
                for creating stunning user interfaces.
              </p>
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
              }}>🔧</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Backend Development</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#10B981', fontWeight: '700' }}>Node.js</span>,
                <span style={{ color: '#3B82F6', fontWeight: '700' }}> Python</span>,
                <span style={{ color: '#8B5CF6', fontWeight: '700' }}>PHP</span>,
                databases (<span style={{ color: '#F59E0B', fontWeight: '700' }}>MySQL</span>,
                <span style={{ color: '#06B6D4', fontWeight: '700' }}>PostgreSQL</span>,
                <span style={{ color: '#10B981', fontWeight: '700' }}>MongoDB</span>), and cloud services
                for robust server-side solutions.
              </p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(99, 102, 241, 0.3)',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
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
              }}>☁️</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Cloud & DevOps</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>AWS</span>,
                <span style={{ color: '#3B82F6', fontWeight: '700' }}> Google Cloud</span>,
                <span style={{ color: '#06B6D4', fontWeight: '700' }}>Docker</span>,
                <span style={{ color: '#8B5CF6', fontWeight: '700' }}>CI/CD pipelines</span>, and modern deployment strategies
                for scalable and reliable hosting.
              </p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #F59E0B 0%, #EF4444 100%)',
                animation: 'shimmer 2s ease-in-out infinite 1.5s'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#F59E0B',
                textShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(245, 158, 11, 0.3)'
              }}>📊</div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>Analytics & SEO</h3>
              <p style={{
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>Google Analytics</span>,
                <span style={{ color: '#10B981', fontWeight: '700' }}>Search Console</span>,
                <span style={{ color: '#3B82F6', fontWeight: '700' }}>performance optimization</span>, and
                <span style={{ color: '#EF4444', fontWeight: '700' }}>SEO best practices</span>
                to maximize your online visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
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
              Recent Success Stories
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              See how we've helped businesses like yours grow online
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                title: "Local Restaurant Chain",
                description: "Increased online orders by 400% with a custom ordering system",
                results: ["400% more orders", "50% faster service", "R50k+ monthly revenue"],
                tech: ["React", "Payment Gateway", "Mobile App"]
              },
              {
                title: "Fashion Boutique",
                description: "Built an e-commerce store that tripled their customer base",
                results: ["300% more customers", "24/7 sales", "R80k+ monthly sales"],
                tech: ["E-commerce", "Inventory System", "SEO"]
              },
              {
                title: "Professional Services",
                description: "Created a lead-generating website for a consulting firm",
                results: ["10+ leads/month", "Higher credibility", "50% cost reduction"],
                tech: ["Lead Forms", "CRM Integration", "Analytics"]
              }
            ].map((project, index) => (
              <div key={index} className="card" style={{
                padding: '2rem',
                animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#1E293B',
                  marginBottom: '1rem'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#64748B',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Results:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.results.map((result, i) => (
                      <li key={i} style={{
                        color: '#10B981',
                        fontWeight: '500',
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        ✓ {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Technologies:
                  </h4>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: '#0EA5E9',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span style={{ marginRight: '0.5rem' }}>🚀</span>
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
          `
        }}></div>

        {/* Floating Particles */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'techFloat 12s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '20%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          animation: 'techFloat 15s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '4rem',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #3B82F6 50%, #6366F1 75%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 25px rgba(14, 165, 233, 0.4)',
              animation: 'titleGlow 4s ease-in-out infinite alternate',
              lineHeight: '1.1'
            }}>
              Let's Build Something Amazing
            </h2>
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '3rem',
              color: '#E2E8F0',
              lineHeight: '1.6',
              fontWeight: '500',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Ready to <span style={{ color: '#00D4FF', fontWeight: '700' }}>transform your digital presence</span>?
              We'd love to hear about your <span style={{ color: '#34D399', fontWeight: '700' }}>project</span>
              and discuss how we can help you <span style={{ color: '#A78BFA', fontWeight: '700' }}>achieve your goals</span>.
            </p>
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '3rem'
            }}>
              <Link to="/contact" style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #0EA5E9 100%)',
                color: 'white',
                fontWeight: '700',
                padding: '1.25rem 2.5rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(0, 212, 255, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 212, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}>
                <span style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}>📧</span>
                Get In Touch
              </Link>
              <Link to="/services" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: '700',
                padding: '1.25rem 2.5rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}>
                <span style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}>🔍</span>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
