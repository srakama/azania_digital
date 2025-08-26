import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './MobileNavigation.css';

interface NavigationItem {
  name: string;
  path: string;
  icon?: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Services', path: '/services', icon: '⚙️' },
  { name: 'Pricing', path: '/pricing', icon: '💰' },
  { name: 'About', path: '/about', icon: '👥' },
  { name: 'Blog', path: '/blog', icon: '📝' },
  { name: 'Contact', path: '/contact', icon: '📞' }
];

interface MobileNavigationProps {
  isScrolled?: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>
        {`
          @media (min-width: 769px) {
            .desktop-menu {
              display: flex !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
            .desktop-cta {
              display: inline-block !important;
              visibility: visible !important;
              opacity: 1 !important;
              pointer-events: auto !important;
            }
          }
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .desktop-cta {
              display: none !important;
            }
          }
        `}
      </style>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(255, 255, 255, 0.1)',
        zIndex: 10001
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)'
        }} />
      </div>

      {/* Main Navigation */}
      <nav 
        className="mobile-nav-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : 'none',
          zIndex: 10000,
          transition: 'all 0.3s ease',
          padding: '1rem 0'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <Logo
            variant="navbar"
            size="medium"
            showIcon={true}
            showText={true}
          />

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
            zIndex: 100
          }}>
            {/* Desktop Menu */}
            <div
              className="desktop-menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                visibility: 'visible',
                opacity: 1,
                pointerEvents: 'auto'
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? '#0EA5E9' : 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.currentTarget.style.color = '#0EA5E9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    }
                  }}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #0EA5E9 0%, #6366F1 100%)',
                      borderRadius: '1px'
                    }} />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {/* Hamburger Icon */}
              <div style={{
                width: '20px',
                height: '2px',
                background: 'white',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                background: 'white',
                borderRadius: '1px',
                margin: '4px 0',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                background: 'white',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
              }} />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="desktop-cta"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                display: 'inline-block',
                position: 'relative',
                zIndex: 1000,
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Get Started button clicked!');
                // Force navigation
                window.location.href = '/contact';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Mobile Menu */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '1rem',
            right: '1rem',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            animation: 'slideDown 0.3s ease-out'
          }}>
            {/* Mobile Navigation Items */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {navigationItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: location.pathname === item.path ? '#0EA5E9' : 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: location.pathname === item.path 
                      ? 'rgba(14, 165, 233, 0.1)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: location.pathname === item.path 
                      ? '1px solid rgba(14, 165, 233, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    animation: `slideInLeft 0.3s ease-out ${index * 0.1}s both`
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                  }}
                  onTouchEnd={(e) => {
                    if (location.pathname !== item.path) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.125rem',
                textAlign: 'center',
                marginTop: '2rem',
                boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
                animation: 'slideInUp 0.3s ease-out 0.6s both'
              }}
            >
              🚀 Get Started Today
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
