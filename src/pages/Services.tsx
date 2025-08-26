import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveServiceCard from '../components/InteractiveServiceCard';

const Services: React.FC = () => {
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 15}s`
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

        {/* Tech Grid Pattern */}
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
            {/* Service Badge */}
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
              <span style={{ fontSize: '1rem' }}>🛠️</span>
              Full-Stack Solutions
            </div>

            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              lineHeight: '1.1',
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)',
              textAlign: 'center'
            }}>
              <span style={{
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
              }}>
                Enterprise-Grade
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none'
              }}>
                Development Services
              </span>
            </h1>

            {/* Service Categories */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'React Apps', color: '#38BDF8' },
                { name: 'Next.js', color: '#10B981' },
                { name: 'E-Commerce', color: '#6366F1' },
                { name: 'AI Integration', color: '#8B5CF6' },
                { name: 'DevOps', color: '#F59E0B' }
              ].map((service, index) => (
                <span key={service.name} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: service.color,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  textShadow: `0 0 10px ${service.color}40`
                }}>
                  {service.name}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: '1.375rem',
              color: '#E2E8F0',
              marginBottom: '3rem',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              fontWeight: '500'
            }}>
              From <span style={{ color: '#38BDF8', fontWeight: '600' }}>scalable web applications</span> to
              <span style={{ color: '#10B981', fontWeight: '600' }}> AI-powered solutions</span>, we deliver
              enterprise-grade development services that drive <span style={{ color: '#6366F1', fontWeight: '600' }}>measurable business growth</span>.
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
                <span style={{ marginRight: '0.5rem' }}>💬</span>
                Get Free Consultation
              </Link>
              <a href="https://wa.me/27786511482" className="btn btn-secondary btn-lg magnetic-btn" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#F8FAFC',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                fontWeight: '600'
              }}>
                <span style={{ marginRight: '0.5rem' }}>📱</span>
                WhatsApp Quote
              </a>
            </div>

            {/* Service Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {[
                { number: '50+', label: 'Projects Delivered', color: '#38BDF8' },
                { number: '99.9%', label: 'Uptime Guarantee', color: '#10B981' },
                { number: '24/7', label: 'Support Available', color: '#6366F1' },
                { number: '2-4', label: 'Week Delivery', color: '#F59E0B' }
              ].map((stat, index) => (
                <div key={stat.label} style={{
                  textAlign: 'center',
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: stat.color,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#CBD5E1',
                    fontWeight: '600'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 25%, #CBD5E1 50%, #94A3B8 75%, #64748B 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 25% 75%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
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
          backgroundSize: '60px 60px',
          animation: 'gridPulse 5s ease-in-out infinite'
        }}></div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '130px',
          height: '130px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(65px)',
          animation: 'techFloat 9s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '10%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(55px)',
          animation: 'techFloat 11s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 25%, #6366F1 50%, #8B5CF6 75%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            textShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
            Core Services
          </h2>
          <p style={{
            fontSize: '1.375rem',
            color: '#475569',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.7',
            fontWeight: '500',
            textShadow: 'none'
          }}>
            From <span style={{ color: '#0EA5E9', fontWeight: '700' }}>concept to launch</span>, we provide
            <span style={{ color: '#10B981', fontWeight: '700' }}> end-to-end solutions</span> that
            <span style={{ color: '#8B5CF6', fontWeight: '700' }}>drive results</span>.
          </p>

          <div className="grid grid-cols-1" style={{ gap: '3rem' }}>
            {/* Website Development */}
            <div className="card" style={{ padding: '3rem' }}>
              <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div>
                  <div className="card-icon" style={{ marginBottom: '2rem' }}>💻</div>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Website Development
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#1F2937',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    fontWeight: '500'
                  }}>
                    Professional websites that make your business look trustworthy and attract more customers.
                    We create fast, mobile-friendly websites that rank well on Google and turn visitors into paying customers.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      What's Included:
                    </h4>
                    <ul style={{ color: '#1F2937', lineHeight: '1.6', fontWeight: '500' }}>
                      <li>• Works perfectly on phones, tablets & computers</li>
                      <li>• Shows up higher in Google search results</li>
                      <li>• Loads super fast (under 3 seconds)</li>
                      <li>• Easy-to-use admin panel to update content</li>
                      <li>• Track visitor behavior and sales</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0EA5E9' }}>
                      From R4,500
                    </span>
                    <Link to="/contact" className="btn btn-primary">
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1E293B' }}>Fast Delivery</h4>
                  <p style={{ color: '#1F2937', fontSize: '0.9rem', fontWeight: '500' }}>2-4 weeks turnaround</p>
                </div>
              </div>
            </div>

            {/* E-Commerce Solutions */}
            <div className="card" style={{ padding: '3rem' }}>
              <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1E293B' }}>Secure Payments</h4>
                  <p style={{ color: '#1F2937', fontSize: '0.9rem', fontWeight: '500' }}>Multiple payment gateways</p>
                </div>
                <div>
                  <div className="card-icon" style={{ marginBottom: '2rem' }}>🛒</div>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    E-Commerce Solutions
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#1F2937',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    fontWeight: '500'
                  }}>
                    Start selling online with a professional store that accepts payments, manages your products,
                    and helps you understand your customers better to increase sales.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      Features:
                    </h4>
                    <ul style={{ color: '#1F2937', lineHeight: '1.6', fontWeight: '500' }}>
                      <li>• Easy product upload and organization</li>
                      <li>• Safe credit card and PayPal payments</li>
                      <li>• Automatic stock level tracking</li>
                      <li>• Simple order processing and fulfillment</li>
                      <li>• Customer login area with favorites</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10B981' }}>
                      From R8,500
                    </span>
                    <Link to="/contact" className="btn btn-accent">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Maintenance */}
            <div className="card" style={{ padding: '3rem' }}>
              <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div>
                  <div className="card-icon" style={{ marginBottom: '2rem' }}>⚙️</div>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Website Maintenance
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#1F2937',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    fontWeight: '500'
                  }}>
                    Keep your website safe, fast, and up-to-date without any technical headaches.
                    We handle all the behind-the-scenes work so you can focus on your business.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      Monthly Service:
                    </h4>
                    <ul style={{ color: '#1F2937', lineHeight: '1.6', fontWeight: '500' }}>
                      <li>• Protection from hackers and malware</li>
                      <li>• Keep your site running fast</li>
                      <li>• Update text, images, and prices</li>
                      <li>• Daily automatic backups</li>
                      <li>• Quick help when you need it</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#6366F1' }}>
                      From R800/month
                    </span>
                    <Link to="/contact" className="btn btn-secondary">
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1E293B' }}>24/7 Monitoring</h4>
                  <p style={{ color: '#1F2937', fontSize: '0.9rem', fontWeight: '500' }}>Always protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Cards */}
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
              Explore Our Services
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Click on any card to see detailed features and pricing
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <InteractiveServiceCard
              icon="💻"
              title="Website Development"
              description="Professional websites that attract customers and drive sales"
              price="From R4,500"
              gradient="linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)"
              hoverGradient="linear-gradient(135deg, #0284C7 0%, #2563EB 100%)"
              link="/contact"
              delay={0}
              features={[
                {
                  icon: "📱",
                  title: "Mobile Responsive",
                  description: "Works perfectly on all devices"
                },
                {
                  icon: "🚀",
                  title: "Fast Loading",
                  description: "Loads in under 3 seconds"
                },
                {
                  icon: "🎯",
                  title: "SEO Optimized",
                  description: "Ranks higher on Google"
                },
                {
                  icon: "🔧",
                  title: "Easy Management",
                  description: "Simple admin panel included"
                }
              ]}
            />

            <InteractiveServiceCard
              icon="🛒"
              title="E-Commerce Store"
              description="Start selling online with secure payment processing"
              price="From R8,500"
              gradient="linear-gradient(135deg, #10B981 0%, #059669 100%)"
              hoverGradient="linear-gradient(135deg, #047857 0%, #065F46 100%)"
              link="/contact"
              delay={0.2}
              features={[
                {
                  icon: "💳",
                  title: "Secure Payments",
                  description: "PayPal, credit cards, EFT"
                },
                {
                  icon: "📦",
                  title: "Inventory Management",
                  description: "Track stock automatically"
                },
                {
                  icon: "👥",
                  title: "Customer Accounts",
                  description: "Login area with order history"
                },
                {
                  icon: "📊",
                  title: "Sales Analytics",
                  description: "Understand your customers"
                }
              ]}
            />

            <InteractiveServiceCard
              icon="⚙️"
              title="Website Maintenance"
              description="Keep your site safe, fast, and up-to-date"
              price="From R800/month"
              gradient="linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
              hoverGradient="linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
              link="/contact"
              delay={0.4}
              features={[
                {
                  icon: "🛡️",
                  title: "Security Protection",
                  description: "Protection from hackers"
                },
                {
                  icon: "⚡",
                  title: "Performance Optimization",
                  description: "Keep your site running fast"
                },
                {
                  icon: "🔄",
                  title: "Regular Updates",
                  description: "Content and software updates"
                },
                {
                  icon: "💬",
                  title: "24/7 Support",
                  description: "Quick help when you need it"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 25%, #CBD5E1 50%, #94A3B8 75%, #64748B 100%)',
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
            radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
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
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '10' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #A855F7 0%, #F59E0B 25%, #EC4899 50%, #0EA5E9 75%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
            Additional Services
          </h2>
          <p style={{
            fontSize: '1.375rem',
            color: '#475569',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.7',
            fontWeight: '500',
            textShadow: 'none'
          }}>
            <span style={{ color: '#A855F7', fontWeight: '700' }}>Specialized solutions</span> to enhance your
            <span style={{ color: '#F59E0B', fontWeight: '700' }}> digital presence</span> and
            <span style={{ color: '#EC4899', fontWeight: '700' }}>business operations</span>.
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
              }}>🎨</div>
              <h3 style={{
                color: '#1E293B',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: 'none'
              }}>UI/UX Design</h3>
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                textShadow: 'none'
              }}>
                Beautiful, <span style={{ color: '#A855F7', fontWeight: '700' }}>user-friendly designs</span> that enhance
                <span style={{ color: '#EC4899', fontWeight: '700' }}>user experience</span> and drive conversions.
              </p>
              <p style={{ fontWeight: '700', color: '#A855F7', marginTop: '1rem', fontSize: '1.125rem' }}>From R2,500</p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
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
                background: 'linear-gradient(90deg, #F59E0B 0%, #0EA5E9 100%)',
                animation: 'shimmer 2s ease-in-out infinite 0.5s'
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
              }}>📱</div>
              <h3 style={{
                color: '#1E293B',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: 'none'
              }}>Mobile Apps</h3>
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                textShadow: 'none'
              }}>
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>Native</span> and
                <span style={{ color: '#0EA5E9', fontWeight: '700' }}>cross-platform</span> mobile applications for
                iOS and Android devices.
              </p>
              <p style={{ fontWeight: '700', color: '#F59E0B', marginTop: '1rem', fontSize: '1.125rem' }}>From R12,000</p>
            </div>

            <div className="card tech-card" style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(236, 72, 153, 0.3)',
              boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #EC4899 0%, #10B981 100%)',
                animation: 'shimmer 2s ease-in-out infinite 1s'
              }}></div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                color: '#EC4899',
                textShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(236, 72, 153, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(236, 72, 153, 0.1)',
                borderRadius: '16px',
                border: '2px solid rgba(236, 72, 153, 0.3)'
              }}>📈</div>
              <h3 style={{
                color: '#1E293B',
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: 'none'
              }}>Digital Marketing</h3>
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                textShadow: 'none'
              }}>
                <span style={{ color: '#EC4899', fontWeight: '700' }}>SEO</span>,
                <span style={{ color: '#10B981', fontWeight: '700' }}> social media marketing</span>, and
                <span style={{ color: '#0EA5E9', fontWeight: '700' }}>online advertising</span> to grow your business.
              </p>
              <p style={{ fontWeight: '700', color: '#EC4899', marginTop: '1rem', fontSize: '1.125rem' }}>From R1,500/month</p>
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
              Ready to Start Your Project?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.95',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              Get a free consultation and detailed quote for your project.
              We'll help you choose the right solution for your needs and budget.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn" style={{
                background: 'white',
                color: '#0EA5E9',
                fontWeight: '600'
              }}>
                💬 Get Free Consultation
              </Link>
              <a href="https://wa.me/27786511482" className="btn" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid white'
              }}>
                📱 WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
