import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'zoomIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className,
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      transitionDelay: `${delay}s`,
      ...style
    };

    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return { ...baseStyle, opacity: 0, transform: 'translateY(30px)' };
        case 'slideInLeft':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-100px)' };
        case 'slideInRight':
          return { ...baseStyle, opacity: 0, transform: 'translateX(100px)' };
        case 'slideInUp':
          return { ...baseStyle, opacity: 0, transform: 'translateY(100px)' };
        case 'zoomIn':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.3)' };
        case 'rotateIn':
          return { ...baseStyle, opacity: 0, transform: 'rotate(-180deg) scale(0.5)' };
        default:
          return { ...baseStyle, opacity: 0 };
      }
    }

    return { ...baseStyle, opacity: 1, transform: 'translateX(0) translateY(0) scale(1) rotate(0)' };
  };

  return (
    <div ref={elementRef} className={className} style={getAnimationStyle()}>
      {children}
    </div>
  );
};

// Counter Animation Component
interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const AnimatedCounter: React.FC<CounterProps> = ({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  style,
  className
}) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = (end - start) / (duration * 60); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, start, duration]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {prefix}{count}{suffix}
    </div>
  );
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
