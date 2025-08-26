import React, { useEffect } from 'react';

// Content Security Policy configuration
const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for React inline scripts
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://wa.me"
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for styled-components
    "https://fonts.googleapis.com"
  ],
  'font-src': [
    "'self'",
    "https://fonts.gstatic.com"
  ],
  'img-src': [
    "'self'",
    "data:",
    "https:",
    "blob:"
  ],
  'connect-src': [
    "'self'",
    "https://www.google-analytics.com",
    "https://api.emailjs.com",
    "https://formsubmit.co"
  ],
  'frame-src': [
    "'self'",
    "https://wa.me"
  ]
};

// Input sanitization utilities
export class SecurityUtils {
  // Sanitize HTML input to prevent XSS
  static sanitizeHTML(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  // Validate and sanitize email
  static sanitizeEmail(email: string): string {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const sanitized = email.trim().toLowerCase();
    return emailRegex.test(sanitized) ? sanitized : '';
  }

  // Sanitize phone number
  static sanitizePhone(phone: string): string {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleaned) ? cleaned : '';
  }

  // Remove potentially dangerous characters from text input
  static sanitizeText(input: string): string {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/[<>]/g, '');
  }

  // Validate URL to prevent open redirect attacks
  static validateURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const allowedDomains = [
        'azaniadigital.co.za',
        'wa.me',
        'api.whatsapp.com',
        'github.com',
        'linkedin.com'
      ];
      
      return allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
      );
    } catch {
      return false;
    }
  }

  // Rate limiting for form submissions
  static checkRateLimit(key: string, maxAttempts: number = 5, windowMs: number = 300000): boolean {
    const now = Date.now();
    const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter((timestamp: number) => now - timestamp < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }
    
    // Add current attempt
    validAttempts.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(validAttempts));
    
    return true;
  }

  // Generate secure random token
  static generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
}

// Secure form component wrapper
export const SecureForm: React.FC<{
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  rateLimitKey: string;
}> = ({ children, onSubmit, rateLimitKey }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check rate limiting
    if (!SecurityUtils.checkRateLimit(rateLimitKey)) {
      alert('Too many attempts. Please wait before trying again.');
      return;
    }
    
    const formData = new FormData(e.currentTarget);
    const data: any = {};
    
    // Sanitize all form data
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        switch (key) {
          case 'email':
            data[key] = SecurityUtils.sanitizeEmail(value);
            break;
          case 'phone':
            data[key] = SecurityUtils.sanitizePhone(value);
            break;
          default:
            data[key] = SecurityUtils.sanitizeText(value);
        }
      } else {
        data[key] = value;
      }
    }
    
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
};

// Security headers component
const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Set security-related meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Content Security Policy (if not set by server)
    const cspString = Object.entries(CSP_CONFIG)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
    
    setMetaTag('Content-Security-Policy', cspString);
    
    // Additional security headers
    setMetaTag('X-Content-Type-Options', 'nosniff');
    setMetaTag('X-Frame-Options', 'DENY');
    setMetaTag('X-XSS-Protection', '1; mode=block');
    setMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');
    setMetaTag('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    // Disable right-click context menu in production (optional)
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
      
      document.addEventListener('contextmenu', handleContextMenu);
      
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, []);

  return null;
};

// Secure external link component
export const SecureExternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ href, children, className, style }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!SecurityUtils.validateURL(href)) {
      e.preventDefault();
      console.warn('Blocked potentially unsafe URL:', href);
      return;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

// Honeypot field for bot detection
export const HoneypotField: React.FC<{
  name?: string;
  onBotDetected?: () => void;
}> = ({ name = 'website', onBotDetected }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      // Bot detected - honeypot field was filled
      onBotDetected?.();
    }
  };

  return (
    <input
      type="text"
      name={name}
      onChange={handleChange}
      style={{
        position: 'absolute',
        left: '-9999px',
        opacity: 0,
        pointerEvents: 'none'
      }}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
};

// CSRF token management
export const useCSRFToken = () => {
  const [token, setToken] = React.useState<string>('');

  React.useEffect(() => {
    // Generate or retrieve CSRF token
    let csrfToken = sessionStorage.getItem('csrf_token');
    if (!csrfToken) {
      csrfToken = SecurityUtils.generateSecureToken();
      sessionStorage.setItem('csrf_token', csrfToken);
    }
    setToken(csrfToken);
  }, []);

  return token;
};

// Main security component
const SecurityEnhancements: React.FC = () => {
  useEffect(() => {
    // Disable console in production
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }

    // Detect developer tools (basic detection)
    let devtools = false;
    const detectDevTools = () => {
      if (devtools) return;
      
      const threshold = 160;
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        devtools = true;
        // Optional: Log security event or take action
      }
    };

    if (process.env.NODE_ENV === 'production') {
      setInterval(detectDevTools, 500);
    }

    // Prevent common keyboard shortcuts in production
    const handleKeyDown = (e: KeyboardEvent) => {
      if (process.env.NODE_ENV === 'production') {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <SecurityHeaders />;
};

export default SecurityEnhancements;
