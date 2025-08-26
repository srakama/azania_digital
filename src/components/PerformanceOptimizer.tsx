import React, { useEffect, useState, useCallback, useMemo } from 'react';

// Image optimization component with lazy loading and WebP support
export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  style, 
  loading = 'lazy',
  priority = false 
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Create WebP version if supported
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const finalSrc = supportsWebP() ? webpSrc : src;
    
    // Preload critical images
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = finalSrc;
      document.head.appendChild(link);
    }

    setImageSrc(finalSrc);
  }, [src, priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    // Fallback to original format if WebP fails
    if (imageSrc.includes('.webp')) {
      setImageSrc(src);
    }
  }, [imageSrc, src]);

  if (hasError && imageSrc === src) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #374151 0%, #4B5563 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9CA3AF',
          fontSize: '0.875rem'
        }}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      decoding="async"
    />
  );
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options]);

  return isIntersecting;
};

// Lazy loading wrapper component
export const LazySection: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, fallback, className, style }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div ref={ref} className={className} style={style}>
      {hasLoaded ? children : (fallback || <div style={{ minHeight: '200px' }} />)}
    </div>
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }>({});

  useEffect(() => {
    // First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint'] });

    // Time to First Byte
    if ('navigation' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navEntry.responseStart - navEntry.requestStart 
        }));
      }
    }

    return () => observer.disconnect();
  }, []);

  return metrics;
};

// Resource preloader
export const ResourcePreloader: React.FC<{
  resources: Array<{
    href: string;
    as: 'script' | 'style' | 'image' | 'font';
    type?: string;
    crossorigin?: boolean;
  }>;
}> = ({ resources }) => {
  useEffect(() => {
    resources.forEach(({ href, as, type, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossorigin) link.crossOrigin = 'anonymous';
      
      document.head.appendChild(link);
    });
  }, [resources]);

  return null;
};

// Memory usage monitor
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  }>({});

  useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        });
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};

// Bundle size analyzer (development only)
export const BundleAnalyzer: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Log bundle information
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      
      console.group('Bundle Analysis');
      console.log('Scripts:', scripts.length);
      console.log('Stylesheets:', styles.length);
      
      // Estimate bundle sizes (rough approximation)
      let totalSize = 0;
      scripts.forEach((script: any) => {
        if (script.src.includes('static/js/')) {
          // Rough estimation based on typical React bundle sizes
          totalSize += 200; // KB
        }
      });
      
      console.log('Estimated JS bundle size:', totalSize, 'KB');
      console.groupEnd();
    }
  }, []);

  return null;
};

// Service Worker registration
export const ServiceWorkerManager: React.FC = () => {
  const [swStatus, setSwStatus] = useState<'loading' | 'ready' | 'error' | 'unsupported'>('loading');

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          setSwStatus('ready');
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available, prompt user to refresh
                  if (confirm('New version available! Refresh to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          setSwStatus('error');
          console.log('SW registration failed: ', error);
        });
    } else {
      setSwStatus('unsupported');
    }
  }, []);

  return null;
};

// Critical CSS inliner (for above-the-fold content)
export const CriticalCSS: React.FC<{ css: string }> = ({ css }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    return () => {
      const criticalStyles = document.querySelectorAll('style[data-critical="true"]');
      criticalStyles.forEach(style => style.remove());
    };
  }, [css]);

  return null;
};

// Main performance optimizer component
const PerformanceOptimizer: React.FC = () => {
  const metrics = usePerformanceMonitor();
  const memoryInfo = useMemoryMonitor();

  useEffect(() => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Metrics');
      console.log('First Contentful Paint:', metrics.fcp, 'ms');
      console.log('Time to First Byte:', metrics.ttfb, 'ms');
      console.log('Memory Usage:', memoryInfo.usedJSHeapSize, 'bytes');
      console.groupEnd();
    }
  }, [metrics, memoryInfo]);

  // Critical resources to preload
  const criticalResources = useMemo(() => [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      as: 'style' as const
    },
    {
      href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
      as: 'font' as const,
      type: 'font/woff2',
      crossorigin: true
    }
  ], []);

  const criticalCSS = `
    /* Critical above-the-fold styles */
    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      color: #E2E8F0;
    }
    
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    #root {
      min-height: 100vh;
    }
  `;

  return (
    <>
      <CriticalCSS css={criticalCSS} />
      <ResourcePreloader resources={criticalResources} />
      <ServiceWorkerManager />
      <BundleAnalyzer />
    </>
  );
};

export default PerformanceOptimizer;
