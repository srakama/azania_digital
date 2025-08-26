import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface InteractiveServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  price: string;
  gradient: string;
  hoverGradient: string;
  link: string;
  delay?: number;
}

const InteractiveServiceCard: React.FC<InteractiveServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  gradient,
  hoverGradient,
  link,
  delay = 0
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        perspective: '1000px',
        height: '400px',
        animation: `fadeIn 0.8s ease-out ${delay}s both`
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: 'pointer'
        }}
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: isHovered ? hoverGradient : gradient,
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            boxShadow: isHovered 
              ? '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 50px rgba(14, 165, 233, 0.3)'
              : '0 10px 30px rgba(0, 0, 0, 0.2)',
            transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}
        >
          {/* Animated Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `,
              animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
            }}
          />
          
          {/* Icon with Animation */}
          <div
            style={{
              fontSize: '4rem',
              marginBottom: '1.5rem',
              transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
              zIndex: 2,
              position: 'relative'
            }}
          >
            {icon}
          </div>
          
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              zIndex: 2,
              position: 'relative'
            }}
          >
            {title}
          </h3>
          
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              opacity: 0.9,
              zIndex: 2,
              position: 'relative'
            }}
          >
            {description}
          </p>
          
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              zIndex: 2,
              position: 'relative'
            }}
          >
            {price}
          </div>
          
          <div
            style={{
              fontSize: '0.875rem',
              opacity: 0.8,
              fontStyle: 'italic',
              zIndex: 2,
              position: 'relative'
            }}
          >
            Click to see details →
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            border: '2px solid rgba(14, 165, 233, 0.2)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#1E293B',
                textAlign: 'center'
              }}
            >
              What's Included:
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(14, 165, 233, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(14, 165, 233, 0.1)',
                    animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.5rem',
                      marginRight: '1rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                    }}
                  >
                    {feature.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontWeight: '600',
                        color: '#1E293B',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {feature.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: '#64748B'
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link
              to={link}
              style={{
                display: 'inline-block',
                background: gradient,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                position: 'relative',
                zIndex: 10
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent card flip when clicking the button
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(14, 165, 233, 0.3)';
              }}
            >
              Get Started →
            </Link>
            
            <div
              style={{
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: '#64748B',
                fontStyle: 'italic'
              }}
            >
              Click again to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveServiceCard;
