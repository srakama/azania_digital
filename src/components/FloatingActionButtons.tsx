import React, { useState } from 'react';
import { useButtonActions } from '../hooks/useButtonActions';

const FloatingActionButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { handleAction } = useButtonActions();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const actionButtons = [
    {
      id: 'whatsapp-chat',
      icon: '💬',
      label: 'WhatsApp Chat',
      color: '#25D366',
      action: () => handleAction('whatsapp-chat')
    },
    {
      id: 'call-now',
      icon: '📞',
      label: 'Call Now',
      color: '#0EA5E9',
      action: () => handleAction('call-now')
    },
    {
      id: 'email-contact',
      icon: '📧',
      label: 'Email Us',
      color: '#8B5CF6',
      action: () => handleAction('email-contact')
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '1rem'
    }}>
      {/* Action Buttons */}
      {isExpanded && actionButtons.map((button, index) => (
        <div
          key={button.id}
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.3s ease ${index * 0.1}s`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          {/* Label */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {button.label}
          </div>

          {/* Button */}
          <button
            onClick={button.action}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: button.color,
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            }}
          >
            {button.icon}
          </button>
        </div>
      ))}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
          border: 'none',
          color: 'white',
          fontSize: '1.75rem',
          cursor: 'pointer',
          boxShadow: '0 6px 25px rgba(14, 165, 233, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(1.1) rotate(${isExpanded ? '45deg' : '0deg'})`;
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(14, 165, 233, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `scale(1) rotate(${isExpanded ? '45deg' : '0deg'})`;
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(14, 165, 233, 0.4)';
        }}
      >
        {isExpanded ? '✕' : '💬'}
      </button>

      {/* Pulsing animation for main button when not expanded */}
      {!isExpanded && (
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.3)',
          animation: 'pulse 2s infinite',
          pointerEvents: 'none'
        }} />
      )}

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          div[style*="bottom: '2rem'"] {
            bottom: 1rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButtons;
