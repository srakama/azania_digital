import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
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
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive digital solutions designed to transform your business and accelerate your growth
              in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">
            From concept to launch, we provide end-to-end solutions that drive results.
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
                    color: '#64748B',
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    Custom websites built with cutting-edge technologies like React, Next.js, and TypeScript.
                    We create fast, responsive, and SEO-optimized websites that convert visitors into customers.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      What's Included:
                    </h4>
                    <ul style={{ color: '#64748B', lineHeight: '1.6' }}>
                      <li>• Responsive design for all devices</li>
                      <li>• SEO optimization</li>
                      <li>• Performance optimization</li>
                      <li>• Content management system</li>
                      <li>• Analytics integration</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0EA5E9' }}>
                      From R8,500
                    </span>
                    <Link to="/contact" className="btn btn-primary">
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Fast Delivery</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem' }}>2-4 weeks turnaround</p>
                </div>
              </div>
            </div>

            {/* E-Commerce Solutions */}
            <div className="card" style={{ padding: '3rem' }}>
              <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Secure Payments</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Multiple payment gateways</p>
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
                    color: '#64748B',
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    Complete online stores with secure payment processing, inventory management,
                    and powerful analytics to maximize your sales and grow your business.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      Features:
                    </h4>
                    <ul style={{ color: '#64748B', lineHeight: '1.6' }}>
                      <li>• Product catalog management</li>
                      <li>• Secure payment integration</li>
                      <li>• Inventory tracking</li>
                      <li>• Order management system</li>
                      <li>• Customer accounts & wishlist</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10B981' }}>
                      From R15,000
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
                    color: '#64748B',
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    Keep your website running smoothly with our comprehensive maintenance packages.
                    Regular updates, security monitoring, and performance optimization included.
                  </p>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1E293B' }}>
                      Monthly Service:
                    </h4>
                    <ul style={{ color: '#64748B', lineHeight: '1.6' }}>
                      <li>• Security updates & monitoring</li>
                      <li>• Performance optimization</li>
                      <li>• Content updates</li>
                      <li>• Backup management</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#6366F1' }}>
                      From R1,200/month
                    </span>
                    <Link to="/contact" className="btn btn-secondary">
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>24/7 Monitoring</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Always protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">
            Specialized solutions to enhance your digital presence and business operations.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3 className="card-title">UI/UX Design</h3>
              <p className="card-text">
                Beautiful, user-friendly designs that enhance user experience and drive conversions.
              </p>
              <p style={{ fontWeight: '600', color: '#0EA5E9', marginTop: '1rem' }}>From R3,500</p>
            </div>

            <div className="card">
              <div className="card-icon">📱</div>
              <h3 className="card-title">Mobile Apps</h3>
              <p className="card-text">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
              <p style={{ fontWeight: '600', color: '#0EA5E9', marginTop: '1rem' }}>From R25,000</p>
            </div>

            <div className="card">
              <div className="card-icon">📈</div>
              <h3 className="card-title">Digital Marketing</h3>
              <p className="card-text">
                SEO, social media marketing, and online advertising to grow your business.
              </p>
              <p style={{ fontWeight: '600', color: '#0EA5E9', marginTop: '1rem' }}>From R2,500/month</p>
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
              opacity: '0.9'
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
