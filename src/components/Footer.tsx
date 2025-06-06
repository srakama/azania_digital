import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link
              to="/"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => window.location.href = '/', 500);
              }}
            >
              <div className="logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="30%" stopColor="#3B82F6" />
                      <stop offset="70%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="footerLogoAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="footerCircuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  
                  {/* Outer tech ring */}
                  <circle cx="16" cy="16" r="15" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1" opacity="0.3"/>
                  
                  {/* Circuit board pattern */}
                  <g stroke="url(#footerCircuitGradient)" strokeWidth="1.5" fill="none" opacity="0.8">
                    {/* Horizontal circuit lines */}
                    <path d="M4 8 L12 8 L12 12 L20 12 L20 8 L28 8"/>
                    <path d="M4 16 L8 16 L8 20 L24 20 L24 16 L28 16"/>
                    <path d="M4 24 L12 24 L12 20 L20 20 L20 24 L28 24"/>
                    
                    {/* Vertical circuit lines */}
                    <path d="M8 4 L8 12 L12 12 L12 20 L8 20 L8 28"/>
                    <path d="M24 4 L24 12 L20 12 L20 20 L24 20 L24 28"/>
                  </g>
                  
                  {/* Circuit nodes/connection points */}
                  <g fill="url(#footerLogoAccentGradient)">
                    <circle cx="8" cy="8" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="20" cy="12" r="1.5"/>
                    <circle cx="24" cy="8" r="1.5"/>
                    <circle cx="8" cy="20" r="1.5"/>
                    <circle cx="24" cy="20" r="1.5"/>
                    <circle cx="12" cy="24" r="1.5"/>
                    <circle cx="20" cy="24" r="1.5"/>
                  </g>
                  
                  {/* Central processor/chip */}
                  <rect x="12" y="12" width="8" height="8" rx="1" fill="url(#footerLogoGradient)" stroke="url(#footerLogoAccentGradient)" strokeWidth="1"/>
                  
                  {/* Chip pins */}
                  <g fill="url(#footerCircuitGradient)">
                    <rect x="10" y="14" width="2" height="1"/>
                    <rect x="10" y="16" width="2" height="1"/>
                    <rect x="10" y="18" width="2" height="1"/>
                    <rect x="20" y="14" width="2" height="1"/>
                    <rect x="20" y="16" width="2" height="1"/>
                    <rect x="20" y="18" width="2" height="1"/>
                    <rect x="14" y="10" width="1" height="2"/>
                    <rect x="16" y="10" width="1" height="2"/>
                    <rect x="18" y="10" width="1" height="2"/>
                    <rect x="14" y="20" width="1" height="2"/>
                    <rect x="16" y="20" width="1" height="2"/>
                    <rect x="18" y="20" width="1" height="2"/>
                  </g>
                  
                  {/* Central core */}
                  <circle cx="16" cy="16" r="2" fill="url(#footerCircuitGradient)"/>
                  <circle cx="16" cy="16" r="1" fill="#FFFFFF" opacity="0.9"/>
                </svg>
              </div>
              <div className="logo-text-container">
                <span className="logo-text">Azania</span>
                <span className="logo-accent">Digital</span>
              </div>
            </Link>
            <p className="footer-description">
              Transforming businesses through innovative web solutions and cutting-edge digital experiences.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/website-development">Website Development</Link></li>
              <li><Link to="/services/ecommerce-solutions">E-Commerce Solutions</Link></li>
              <li><Link to="/services/website-maintenance">Website Maintenance</Link></li>
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
              <a href="https://wa.me/27786511482" className="social-link whatsapp" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/azaniadigital" className="social-link linkedin" aria-label="LinkedIn">
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
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
