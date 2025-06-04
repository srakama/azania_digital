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
            <Link to="/" className="footer-logo">
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
              <p>📧 hello@azaniadigital.co.za</p>
              <p>📱 +27 78 651 1482</p>
              <p>📍 Cape Town, South Africa</p>
            </div>
            <div className="social-links">
              <a href="https://wa.me/27786511482" className="social-link whatsapp" aria-label="WhatsApp">
                <span>💬</span>
              </a>
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <span>💼</span>
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
