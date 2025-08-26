import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo
              variant="navbar"
              size="medium"
              showIcon={true}
              showText={true}
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => window.location.href = '/', 500);
              }}
            />
            <p className="footer-description">
              Transforming businesses through innovative web solutions and cutting-edge digital experiences.
            </p>

          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Our Services</Link></li>
              <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>Pricing</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
              <li><Link to="/brand-assets" onClick={() => window.scrollTo(0, 0)}>Brand Assets</Link></li>
              <li><Link to="/brand-guide" onClick={() => window.scrollTo(0, 0)}>Brand Guide</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const element = document.getElementById('website-development');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const element = document.getElementById('ecommerce-solutions');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const element = document.getElementById('digital-marketing');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const element = document.getElementById('mobile-apps');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const element = document.getElementById('seo-optimization');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>
                <span className="contact-icon">📧</span>
                <a href="mailto:hello@azaniadigital.co.za" className="contact-link">hello@azaniadigital.co.za</a>
              </p>
              <p>
                <span className="contact-icon">📱</span>
                <a href="tel:+27786511482" className="contact-link">+27 78 651 1482</a>
              </p>
              <p>
                <span className="contact-icon">📍</span>
                <span className="contact-text">Cape Town, South Africa</span>
              </p>
            </div>
            <div className="social-links">
              <a
                href="https://wa.me/27786511482?text=Hi! I'm interested in AzaniaDigital's services. Can you help me?"
                className="social-link whatsapp"
                aria-label="WhatsApp"
                data-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/azaniadigital"
                className="social-link linkedin"
                aria-label="LinkedIn"
                data-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} AzaniaDigital. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy: We respect your privacy and protect your personal information. Contact us for our full privacy policy.');
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service: By using our services, you agree to our terms and conditions. Contact us for detailed terms.');
                }}
              >
                Terms of Service
              </a>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
