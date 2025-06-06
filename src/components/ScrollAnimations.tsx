import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
            element.classList.add('animate-in', `animate-${animation}`);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, duration]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${className}`}
      style={{
        opacity: 0,
        transform: getInitialTransform(animation)
      }}
    >
      {children}
    </div>
  );
};

const getInitialTransform = (animation: string): string => {
  switch (animation) {
    case 'fadeInUp':
      return 'translateY(30px)';
    case 'fadeInLeft':
      return 'translateX(-30px)';
    case 'fadeInRight':
      return 'translateX(30px)';
    case 'scaleIn':
      return 'scale(0.8)';
    case 'slideInUp':
      return 'translateY(50px)';
    default:
      return 'translateY(30px)';
  }
};

// Floating Elements Component
export const FloatingElements: React.FC = () => {
  return (
    <div className="floating-elements">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-element"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}
        />
      ))}
    </div>
  );
};

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  href
}) => {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = x * strength * 0.3;
        const moveY = y * strength * 0.3;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const commonProps = {
    ref: buttonRef,
    className: `magnetic-button ${className}`,
    style: {
      transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
      cursor: 'pointer',
      ...style
    }
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick}>
      {children}
    </button>
  );
};

// Glitch Text Effect Component
interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`glitch-text ${className}`} data-text={text}>
      {text}
    </div>
  );
};
