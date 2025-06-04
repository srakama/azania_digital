import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
            <h1 className="section-title">About AzaniaDigital</h1>
            <p className="section-subtitle">
              We are a South African digital agency specializing in cutting-edge web development solutions.
              Our mission is to empower businesses with innovative technology that drives growth and success.
            </p>
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
                Founded with a vision to bridge the digital divide in South Africa, AzaniaDigital emerged
                from a passion for technology and a commitment to excellence. We believe that every business,
                regardless of size, deserves access to world-class digital solutions.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#64748B',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Our name "Azania" pays homage to the historical name of South Africa, representing our
                deep roots in African innovation while embracing global technological standards.
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
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do and shape our approach to client relationships.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Innovation</h3>
              <p className="card-text">
                We embrace cutting-edge technologies and creative solutions to solve complex challenges
                and deliver exceptional results.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Partnership</h3>
              <p className="card-text">
                We work closely with our clients as trusted partners, understanding their goals and
                collaborating to achieve success.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">⭐</div>
              <h3 className="card-title">Excellence</h3>
              <p className="card-text">
                We maintain the highest standards in code quality, design, and customer service to
                exceed expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Technical Expertise</h2>
          <p className="section-subtitle">
            We master the latest technologies to build robust, scalable, and future-ready solutions.
          </p>

          <div className="grid grid-cols-2">
            <div className="card">
              <div className="card-icon">⚛️</div>
              <h3 className="card-title">Frontend Technologies</h3>
              <p className="card-text">
                React, Next.js, TypeScript, Tailwind CSS, Vue.js, Angular, and modern JavaScript frameworks
                for creating stunning user interfaces.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🔧</div>
              <h3 className="card-title">Backend Development</h3>
              <p className="card-text">
                Node.js, Python, PHP, databases (MySQL, PostgreSQL, MongoDB), and cloud services
                for robust server-side solutions.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">☁️</div>
              <h3 className="card-title">Cloud & DevOps</h3>
              <p className="card-text">
                AWS, Google Cloud, Docker, CI/CD pipelines, and modern deployment strategies
                for scalable and reliable hosting.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📊</div>
              <h3 className="card-title">Analytics & SEO</h3>
              <p className="card-text">
                Google Analytics, Search Console, performance optimization, and SEO best practices
                to maximize your online visibility.
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
              Let's Build Something Amazing
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Ready to transform your digital presence? We'd love to hear about your project
              and discuss how we can help you achieve your goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn" style={{
                background: 'white',
                color: '#0EA5E9',
                fontWeight: '600'
              }}>
                📧 Get In Touch
              </Link>
              <Link to="/services" className="btn" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid white'
              }}>
                🔍 View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
