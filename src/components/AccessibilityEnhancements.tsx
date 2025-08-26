import React, { useEffect, useState } from 'react';

// Skip to content link for keyboard navigation
export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#0EA5E9',
        color: 'white',
        padding: '8px',
        textDecoration: 'none',
        borderRadius: '4px',
        zIndex: 10000,
        fontSize: '14px',
        fontWeight: '600',
        transition: 'top 0.3s ease'
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '6px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

// Focus trap for modals and overlays
export const FocusTrap: React.FC<{ children: React.ReactNode; isActive: boolean }> = ({ 
  children, 
  isActive 
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Trigger close event
        const closeEvent = new CustomEvent('focustrap:close');
        container.dispatchEvent(closeEvent);
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Focus first element
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isActive]);

  return (
    <div ref={containerRef} role="dialog" aria-modal={isActive}>
      {children}
    </div>
  );
};

// Accessible button with proper focus states
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  type = 'button',
  className = '',
  style = {}
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    transform: isPressed ? 'translateY(1px)' : 'translateY(0)',
    ...style
  };

  // Size variants
  const sizeStyles = {
    small: { padding: '0.5rem 1rem', fontSize: '0.875rem', minHeight: '36px' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem', minHeight: '44px' },
    large: { padding: '1rem 2rem', fontSize: '1.125rem', minHeight: '52px' }
  };

  // Color variants
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
      color: 'white',
      boxShadow: isFocused 
        ? '0 0 0 3px rgba(14, 165, 233, 0.3), 0 4px 12px rgba(14, 165, 233, 0.2)' 
        : '0 2px 8px rgba(14, 165, 233, 0.2)'
    },
    secondary: {
      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: 'white',
      boxShadow: isFocused 
        ? '0 0 0 3px rgba(99, 102, 241, 0.3), 0 4px 12px rgba(99, 102, 241, 0.2)' 
        : '0 2px 8px rgba(99, 102, 241, 0.2)'
    },
    outline: {
      background: 'transparent',
      color: '#0EA5E9',
      border: '2px solid #0EA5E9',
      boxShadow: isFocused 
        ? '0 0 0 3px rgba(14, 165, 233, 0.3)' 
        : 'none'
    }
  };

  const finalStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant]
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      style={finalStyles}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsPressed(true);
        }
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsPressed(false);
        }
      }}
    >
      {children}
    </button>
  );
};

// Screen reader announcements
export const ScreenReaderAnnouncement: React.FC<{ message: string; priority?: 'polite' | 'assertive' }> = ({ 
  message, 
  priority = 'polite' 
}) => {
  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
    >
      {message}
    </div>
  );
};

// Loading state with accessibility
export const AccessibleLoader: React.FC<{ 
  isLoading: boolean; 
  loadingText?: string;
  children: React.ReactNode;
}> = ({ 
  isLoading, 
  loadingText = 'Loading...', 
  children 
}) => {
  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <>
          <div
            role="status"
            aria-live="polite"
            aria-label={loadingText}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.9)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              color: 'white'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(14, 165, 233, 0.3)',
                borderTop: '3px solid #0EA5E9',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
              aria-hidden="true"
            />
            <span>{loadingText}</span>
          </div>
          <div
            style={{
              filter: 'blur(2px)',
              pointerEvents: 'none',
              opacity: 0.5
            }}
            aria-hidden="true"
          >
            {children}
          </div>
        </>
      )}
      {!isLoading && children}
    </div>
  );
};

// High contrast mode toggle
export const HighContrastToggle: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem('high-contrast');
    if (savedPreference === 'true') {
      setIsHighContrast(true);
      document.body.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('high-contrast', newValue.toString());
    
    if (newValue) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <AccessibleButton
      onClick={toggleHighContrast}
      variant="outline"
      size="small"
      ariaLabel={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: isHighContrast ? '#000' : 'rgba(255, 255, 255, 0.02)',
        color: isHighContrast ? '#fff' : '#0EA5E9',
        border: `2px solid ${isHighContrast ? '#fff' : '#0EA5E9'}`,
        backdropFilter: 'blur(10px)'
      }}
    >
      {isHighContrast ? '🌙' : '☀️'}
    </AccessibleButton>
  );
};

// Main accessibility provider component
const AccessibilityEnhancements: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast CSS
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .high-contrast * {
        background-color: #000 !important;
        color: #fff !important;
        border-color: #fff !important;
      }
      
      .high-contrast a {
        color: #ffff00 !important;
      }
      
      .high-contrast button {
        background-color: #fff !important;
        color: #000 !important;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <SkipToContent />
      <HighContrastToggle />
      {children}
    </>
  );
};

export default AccessibilityEnhancements;
