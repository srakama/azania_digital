import React, { useEffect } from 'react';

interface MobileOptimizationsProps {
  children: React.ReactNode;
}

const MobileOptimizations: React.FC<MobileOptimizationsProps> = ({ children }) => {
  useEffect(() => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile || isTouch) {
      document.body.classList.add('touch-device');
      
      // Optimize viewport for mobile
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no');
      }

      // Prevent zoom on input focus (iOS)
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
          }
        });
        
        input.addEventListener('blur', () => {
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no');
          }
        });
      });

      // Optimize scroll performance
      let ticking = false;
      const updateScrollPosition = () => {
        // Update any scroll-dependent elements here
        ticking = false;
      };

      const requestScrollUpdate = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestScrollUpdate, { passive: true });

      // Improve touch responsiveness
      const addTouchFeedback = (element: Element) => {
        element.addEventListener('touchstart', () => {
          element.classList.add('touch-active');
        }, { passive: true });

        element.addEventListener('touchend', () => {
          setTimeout(() => {
            element.classList.remove('touch-active');
          }, 150);
        }, { passive: true });

        element.addEventListener('touchcancel', () => {
          element.classList.remove('touch-active');
        }, { passive: true });
      };

      // Add touch feedback to interactive elements
      const interactiveElements = document.querySelectorAll('button, .btn, .card, a[href]');
      interactiveElements.forEach(addTouchFeedback);

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });

      // Add mobile-specific CSS
      const mobileStyles = document.createElement('style');
      mobileStyles.textContent = `
        .touch-device .touch-active {
          transform: scale(0.98);
          opacity: 0.8;
          transition: all 0.1s ease;
        }

        .touch-device *:focus {
          outline: 2px solid #0EA5E9;
          outline-offset: 2px;
        }

        /* Improve tap targets */
        .touch-device button,
        .touch-device .btn,
        .touch-device a {
          min-height: 44px;
          min-width: 44px;
        }

        /* Optimize text selection */
        .touch-device {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .touch-device input,
        .touch-device textarea,
        .touch-device [contenteditable] {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }

        /* Improve scrolling */
        .touch-device {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Optimize animations for mobile */
        @media (max-width: 768px) {
          .touch-device * {
            animation-duration: 0.3s !important;
            transition-duration: 0.3s !important;
          }
        }

        /* Reduce motion for better performance */
        @media (prefers-reduced-motion: reduce) {
          .touch-device * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Improve modal behavior on mobile */
        .touch-device .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* Better button spacing on mobile */
        @media (max-width: 480px) {
          .touch-device .btn + .btn {
            margin-top: 0.75rem;
          }
        }

        /* Improve form elements on mobile */
        .touch-device input,
        .touch-device textarea,
        .touch-device select {
          font-size: 16px; /* Prevent zoom on iOS */
          border-radius: 8px;
          padding: 0.75rem;
        }

        /* Optimize hero section for mobile */
        @media (max-width: 768px) {
          .touch-device .hero {
            min-height: 70vh;
            padding: 2rem 0;
          }
        }

        /* Improve card layouts on mobile */
        @media (max-width: 480px) {
          .touch-device .card {
            margin-bottom: 1rem;
            border-radius: 12px;
          }
        }
      `;
      document.head.appendChild(mobileStyles);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', requestScrollUpdate);
        document.head.removeChild(mobileStyles);
      };
    }
  }, []);

  return <>{children}</>;
};

export default MobileOptimizations;
