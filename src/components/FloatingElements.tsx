import React, { useState, useEffect } from 'react';

interface FloatingElement {
  id: number;
  icon: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  delay: number;
}

interface FloatingElementsProps {
  elements?: string[];
  count?: number;
  colors?: string[];
  interactive?: boolean;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  elements = ['💻', '🚀', '⚡', '🎯', '💡', '🔧', '📱', '🌟', '💎', '🎨'],
  count = 8,
  colors = ['#0EA5E9', '#3B82F6', '#6366F1', '#8B5CF6', '#10B981', '#F59E0B'],
  interactive = true
}) => {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < count; i++) {
        newElements.push({
          id: i,
          icon: elements[Math.floor(Math.random() * elements.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          speed: Math.random() * 2 + 1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5
        });
      }
      setFloatingElements(newElements);
    };

    createElements();
  }, [count, elements, colors]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [interactive]);

  const getElementStyle = (element: FloatingElement): React.CSSProperties => {
    const mouseInfluence = interactive ? {
      x: (mousePosition.x - element.x) * 0.02,
      y: (mousePosition.y - element.y) * 0.02
    } : { x: 0, y: 0 };

    return {
      position: 'absolute',
      left: `${element.x + mouseInfluence.x}%`,
      top: `${element.y + mouseInfluence.y}%`,
      fontSize: `${element.size}px`,
      color: element.color,
      transform: `rotate(${element.rotation}deg)`,
      animation: `
        float ${element.speed + 3}s ease-in-out infinite ${element.delay}s,
        rotate ${element.speed + 5}s linear infinite ${element.delay}s
      `,
      filter: `drop-shadow(0 0 10px ${element.color}40)`,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all 0.3s ease',
      zIndex: 2,
      userSelect: 'none',
      pointerEvents: interactive ? 'auto' : 'none'
    };
  };

  const handleElementClick = (element: FloatingElement) => {
    if (!interactive) return;
    
    // Create ripple effect
    setFloatingElements(prev => 
      prev.map(el => 
        el.id === element.id 
          ? { ...el, size: el.size * 1.5, rotation: el.rotation + 180 }
          : el
      )
    );

    // Reset after animation
    setTimeout(() => {
      setFloatingElements(prev => 
        prev.map(el => 
          el.id === element.id 
            ? { ...el, size: el.size / 1.5, rotation: el.rotation - 180 }
            : el
        )
      );
    }, 300);
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {floatingElements.map((element) => (
        <div
          key={element.id}
          style={getElementStyle(element)}
          onClick={() => handleElementClick(element)}
          onMouseEnter={(e) => {
            if (interactive) {
              e.currentTarget.style.transform = `rotate(${element.rotation}deg) scale(1.2)`;
              e.currentTarget.style.filter = `drop-shadow(0 0 20px ${element.color}80)`;
            }
          }}
          onMouseLeave={(e) => {
            if (interactive) {
              e.currentTarget.style.transform = `rotate(${element.rotation}deg) scale(1)`;
              e.currentTarget.style.filter = `drop-shadow(0 0 10px ${element.color}40)`;
            }
          }}
        >
          {element.icon}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;
