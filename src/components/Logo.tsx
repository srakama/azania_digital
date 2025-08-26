import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoDownloader from './LogoDownloader';
import './Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'navbar' | 'footer' | 'standalone';
  showIcon?: boolean;
  showText?: boolean;
  showDownload?: boolean;
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  variant = 'standalone',
  showIcon = true,
  showText = true,
  onClick,
  className = ''
}) => {
  const sizes = {
    small: { icon: 24, text: '1.1rem' },
    medium: { icon: 32, text: '1.6rem' },
    large: { icon: 40, text: '2.2rem' }
  };

  const currentSize = sizes[size];

  const logoIcon = (
    <div className="logo-icon"
         style={{
           position: 'relative'
         }}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(14, 165, 233, 0.3))',
          transition: 'all 0.3s ease'
        }}
      >
        <defs>
          {/* Main gradient - vibrant blue to purple */}
          <linearGradient id={`mainGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="25%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="75%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Accent gradient - cyan to blue */}
          <linearGradient id={`accentGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06FFA5" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          {/* Glow gradient */}
          <radialGradient id={`glowGradient-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8"/>
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
          </radialGradient>

          {/* Animated gradient for the "A" */}
          <linearGradient id={`animatedGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B">
              <animate attributeName="stop-color"
                values="#FF6B6B;#4ECDC4;#45B7D1;#96CEB4;#FFEAA7;#DDA0DD;#FF6B6B"
                dur="3s"
                repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="#4ECDC4">
              <animate attributeName="stop-color"
                values="#4ECDC4;#45B7D1;#96CEB4;#FFEAA7;#DDA0DD;#FF6B6B;#4ECDC4"
                dur="3s"
                repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="#45B7D1">
              <animate attributeName="stop-color"
                values="#45B7D1;#96CEB4;#FFEAA7;#DDA0DD;#FF6B6B;#4ECDC4;#45B7D1"
                dur="3s"
                repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>

        {/* Outer glow ring */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill={`url(#glowGradient-${variant})`}
          opacity="0.6"
        />

        {/* Main circular background */}
        <circle
          cx="20"
          cy="20"
          r="16"
          fill={`url(#mainGradient-${variant})`}
          stroke={`url(#accentGradient-${variant})`}
          strokeWidth="1.5"
          opacity="0.95"
        />

        {/* Inner geometric pattern */}
        <g opacity="0.3">
          <polygon
            points="20,8 28,16 20,24 12,16"
            fill="none"
            stroke={`url(#accentGradient-${variant})`}
            strokeWidth="1"
          />
          <polygon
            points="20,12 24,16 20,20 16,16"
            fill="none"
            stroke={`url(#accentGradient-${variant})`}
            strokeWidth="0.8"
          />
        </g>

        {/* Stylized "A" for Azania */}
        <g transform="translate(20, 20)">
          {/* Main "A" shape */}
          <path
            d="M-6,-8 L0,-8 L6,8 L3,8 L1.5,4 L-1.5,4 L-3,8 L-6,8 Z M-1,0 L1,0 L0,-3 Z"
            fill={`url(#animatedGradient-${variant})`}
            stroke="white"
            strokeWidth="0.5"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          />

          {/* Digital accent dots */}
          <circle cx="-8" cy="-2" r="1" fill={`url(#accentGradient-${variant})`} opacity="0.8"/>
          <circle cx="8" cy="-2" r="1" fill={`url(#accentGradient-${variant})`} opacity="0.8"/>
          <circle cx="-8" cy="2" r="1" fill={`url(#accentGradient-${variant})`} opacity="0.6"/>
          <circle cx="8" cy="2" r="1" fill={`url(#accentGradient-${variant})`} opacity="0.6"/>

          {/* Connecting lines */}
          <line x1="-7" y1="-2" x2="-6" y2="-4" stroke={`url(#accentGradient-${variant})`} strokeWidth="0.8" opacity="0.5"/>
          <line x1="7" y1="-2" x2="6" y2="-4" stroke={`url(#accentGradient-${variant})`} strokeWidth="0.8" opacity="0.5"/>
        </g>

        {/* Rotating outer ring */}
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke={`url(#accentGradient-${variant})`}
          strokeWidth="0.5"
          strokeDasharray="2 4"
          opacity="0.7"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="8s"
            repeatCount="indefinite"/>
        </circle>

        {/* Pulsing inner highlight */}
        <circle
          cx="20"
          cy="20"
          r="12"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.5"
        >
          <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  );

  const logoText = (
    <div className="logo-text-container">
      <span
        className="logo-text-primary"
        style={{
          fontSize: currentSize.text,
          background: 'linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #3B82F6 50%, #6366F1 75%, #8B5CF6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 2px 8px rgba(14, 165, 233, 0.3)',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
        }}
      >
        AZANIA
      </span>
      <span
        className="logo-text-secondary"
        style={{
          fontSize: `calc(${currentSize.text} * 0.75)`,
          background: 'linear-gradient(90deg, #06FFA5 0%, #06B6D4 50%, #0EA5E9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginTop: '-0.15em'
        }}
      >
        DIGITAL
      </span>

      {/* Subtle glow effect behind text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120%',
        height: '120%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
        animation: variant === 'navbar' ? 'pulse 3s ease-in-out infinite' : 'none'
      }} />
    </div>
  );

  const logoContent = (
    <div className={`logo-container ${variant === 'navbar' ? 'navbar-variant' : ''}`}
         style={{
           gap: showIcon && showText ? '0.75rem' : '0',
           textDecoration: 'none'
         }}>
      {showIcon && logoIcon}
      {showText && logoText}
    </div>
  );

  if (variant === 'navbar' || variant === 'footer') {
    return (
      <Link
        to="/"
        onClick={onClick}
        className={className}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={className} onClick={onClick}>
      {logoContent}
    </div>
  );
};

export default Logo;
