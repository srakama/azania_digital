import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1'
            }}>
              Transform Your Digital Presence
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#64748B',
              marginBottom: '2.5rem',
              lineHeight: '1.7'
            }}>
              We craft cutting-edge web solutions that drive growth, enhance user experience,
              and establish your brand as a digital leader in South Africa and beyond.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                🚀 Start Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                💼 View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions designed to elevate your business and maximize your online potential.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Website Development</h3>
              <p className="card-text">
                Custom-built websites using modern frameworks like React, Next.js, and TypeScript.
                Fast, responsive, and optimized for search engines.
              </p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="card">
              <div className="card-icon">🛒</div>
              <h3 className="card-title">E-Commerce Solutions</h3>
              <p className="card-text">
                Complete online stores with secure payment processing, inventory management,
                and analytics to boost your sales.
              </p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="card">
              <div className="card-icon">⚙️</div>
              <h3 className="card-title">Website Maintenance</h3>
              <p className="card-text">
                Ongoing support, security updates, performance optimization, and content management
                to keep your site running perfectly.
              </p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Why Choose AzaniaDigital?</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative innovation to deliver exceptional results.
          </p>

          <div className="grid grid-cols-2">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Lightning Fast Performance</h3>
              <p className="card-text">
                Optimized code, modern frameworks, and best practices ensure your website loads in under 2 seconds.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📱</div>
              <h3 className="card-title">Mobile-First Design</h3>
              <p className="card-text">
                Responsive designs that look perfect on all devices, from smartphones to desktop computers.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🔒</div>
              <h3 className="card-title">Security & Reliability</h3>
              <p className="card-text">
                Enterprise-grade security measures and 99.9% uptime guarantee to protect your business.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">SEO Optimized</h3>
              <p className="card-text">
                Built-in SEO best practices to help your website rank higher in search results.
              </p>
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
