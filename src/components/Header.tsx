import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="30%" stopColor="#3B82F6" />
                    <stop offset="70%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="logoAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                
                {/* Outer tech ring */}
                <circle cx="16" cy="16" r="15" fill="none" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.3"/>
                
                {/* Circuit board pattern */}
                <g stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" opacity="0.8">
                  {/* Horizontal circuit lines */}
                  <path d="M4 8 L12 8 L12 12 L20 12 L20 8 L28 8"/>
                  <path d="M4 16 L8 16 L8 20 L24 20 L24 16 L28 16"/>
                  <path d="M4 24 L12 24 L12 20 L20 20 L20 24 L28 24"/>
                  
                  {/* Vertical circuit lines */}
                  <path d="M8 4 L8 12 L12 12 L12 20 L8 20 L8 28"/>
                  <path d="M24 4 L24 12 L20 12 L20 20 L24 20 L24 28"/>
                </g>
                
                {/* Circuit nodes/connection points */}
                <g fill="url(#logoAccentGradient)">
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
                <rect x="12" y="12" width="8" height="8" rx="1" fill="url(#logoGradient)" stroke="url(#logoAccentGradient)" strokeWidth="1"/>
                
                {/* Chip pins */}
                <g fill="url(#circuitGradient)">
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
                <circle cx="16" cy="16" r="2" fill="url(#circuitGradient)"/>
                <circle cx="16" cy="16" r="1" fill="#FFFFFF" opacity="0.9"/>
              </svg>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Azania</span>
              <span className="logo-accent">Digital</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
