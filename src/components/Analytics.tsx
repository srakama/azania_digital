import React, { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class AnalyticsManager {
  private static instance: AnalyticsManager;
  private isInitialized = false;

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  // Initialize Google Analytics 4
  initializeGA4(measurementId: string = 'G-XXXXXXXXXX') {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });

    // Make gtag globally available
    (window as any).gtag = gtag;

    this.isInitialized = true;
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-XXXXXXXXXX', {
        page_path: path,
        page_title: title || document.title,
        page_location: window.location.href
      });
    }
  }

  // Track custom events
  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', { action, category, label, value });
    }
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean = true) {
    this.trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'engagement',
      label: formName
    });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location: string) {
    this.trackEvent({
      action: 'click',
      category: 'engagement',
      label: `${buttonName} - ${location}`
    });
  }

  // Track scroll depth
  trackScrollDepth(percentage: number) {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage
    });
  }

  // Track file downloads
  trackDownload(fileName: string, fileType: string) {
    this.trackEvent({
      action: 'download',
      category: 'engagement',
      label: `${fileName} (${fileType})`
    });
  }

  // Track external link clicks
  trackExternalLink(url: string) {
    this.trackEvent({
      action: 'click',
      category: 'external_link',
      label: url
    });
  }

  // Track search queries
  trackSearch(query: string, resultsCount?: number) {
    this.trackEvent({
      action: 'search',
      category: 'engagement',
      label: query,
      value: resultsCount
    });
  }

  // Track user timing (performance metrics)
  trackTiming(category: string, variable: string, time: number, label?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: variable,
        value: time,
        event_category: category,
        event_label: label
      });
    }
  }
}

// Hook for using analytics in components
export const useAnalytics = () => {
  const analytics = AnalyticsManager.getInstance();

  useEffect(() => {
    // Initialize analytics on first use
    analytics.initializeGA4();
  }, [analytics]);

  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackScrollDepth: analytics.trackScrollDepth.bind(analytics),
    trackDownload: analytics.trackDownload.bind(analytics),
    trackExternalLink: analytics.trackExternalLink.bind(analytics),
    trackSearch: analytics.trackSearch.bind(analytics),
    trackTiming: analytics.trackTiming.bind(analytics)
  };
};

// Component for automatic scroll depth tracking
export const ScrollDepthTracker: React.FC = () => {
  const { trackScrollDepth } = useAnalytics();
  const [trackedDepths, setTrackedDepths] = React.useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedDepths.has(milestone)) {
          trackScrollDepth(milestone);
          setTrackedDepths(prev => new Set(prev).add(milestone));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth, trackedDepths]);

  return null;
};

// Component for tracking page views with React Router
export const PageViewTracker: React.FC<{ path: string; title?: string }> = ({ path, title }) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(path, title);
  }, [path, title, trackPageView]);

  return null;
};

// Component for tracking performance metrics
export const PerformanceTracker: React.FC = () => {
  const { trackTiming } = useAnalytics();

  useEffect(() => {
    // Track page load performance
    const trackPerformance = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Track various performance metrics
          trackTiming('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart), 'total');
          trackTiming('performance', 'dom_content_loaded', Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart), 'dom');
          trackTiming('performance', 'first_paint', Math.round(navigation.responseStart - navigation.fetchStart), 'paint');
        }

        // Track Core Web Vitals if available
        if ('web-vitals' in window) {
          // This would require importing web-vitals library
          // getCLS(metric => trackTiming('web_vitals', 'cls', metric.value, 'layout_shift'));
          // getFID(metric => trackTiming('web_vitals', 'fid', metric.value, 'input_delay'));
          // getLCP(metric => trackTiming('web_vitals', 'lcp', metric.value, 'largest_paint'));
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
      return () => window.removeEventListener('load', trackPerformance);
    }
  }, [trackTiming]);

  return null;
};

// Main Analytics component to include in App
const Analytics: React.FC = () => {
  return (
    <>
      <ScrollDepthTracker />
      <PerformanceTracker />
    </>
  );
};

export default Analytics;

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
