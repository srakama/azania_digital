import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      opacity: progress >= 100 ? 0 : 1,
      transition: 'opacity 0.5s ease'
    }}>
      {/* Animated Logo */}
      <div style={{
        marginBottom: '3rem',
        animation: 'pulse 2s infinite'
      }}>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#loadingGradient)" opacity="0.1"/>
          <path d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z" fill="url(#loadingGradient)" opacity="0.8"/>
          <circle cx="50" cy="50" r="8" fill="#ffffff"/>
          <path d="M35 45 L50 35 L65 45" stroke="#ffffff" strokeWidth="2" fill="none"/>
          <path d="M35 55 L50 65 L65 55" stroke="#ffffff" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Company Name */}
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '900',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'holographicShift 3s ease-in-out infinite'
      }}>
        AzaniaDigital
      </h1>

      {/* Loading Bar */}
      <div style={{
        width: '300px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #0EA5E9, #3B82F6, #6366F1)',
          borderRadius: '2px',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)'
        }} />
      </div>

      {/* Loading Text */}
      <p style={{
        color: '#94A3B8',
        fontSize: '1rem',
        fontWeight: '500',
        animation: 'pulse 1.5s infinite'
      }}>
        Loading amazing experiences... {Math.round(progress)}%
      </p>

      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#0EA5E9',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle 2s infinite ${Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Page Transition Component
interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      opacity: isLoading ? 0 : 1,
      transform: isLoading ? 'translateY(20px)' : 'translateY(0)',
      transition: 'all 0.5s ease'
    }}>
      {children}
    </div>
  );
};

// Smooth Scroll Component
export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const smoothScrollTo = (target: number, duration: number) => {
      const start = window.pageYOffset;
      const distance = target - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
          smoothScrollTo(targetPosition, 800);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
};
