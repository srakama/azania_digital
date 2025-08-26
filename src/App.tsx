import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileNavigation from './components/MobileNavigation';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import { CursorTrail, CustomCursor } from './components/CursorTrail';
import { LoadingScreen, SmoothScroll } from './components/LoadingScreen';
import { PerformanceProvider } from './components/PerformanceOptimizations';
import Analytics from './components/Analytics';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import SecurityEnhancements from './components/SecurityEnhancements';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import LeadGenerationPopup from './components/LeadGenerationPopup';
import ButtonActionHandler from './components/ButtonActionHandler';
import FloatingActionButtons from './components/FloatingActionButtons';
import MobileOptimizations from './components/MobileOptimizations';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Admin = lazy(() => import('./pages/Admin'));
const BrandAssets = lazy(() => import('./pages/BrandAssets'));
const BrandGuide = lazy(() => import('./pages/BrandGuide'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(14, 165, 233, 0.3)',
      borderTop: '3px solid #0EA5E9',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PerformanceProvider>
      <SecurityEnhancements />
      <PerformanceOptimizer />
      <AccessibilityEnhancements>
        <ButtonActionHandler>
          <MobileOptimizations>
            <Router>
              <SmoothScroll>
                <div className="App" id="main-content">
            <LoadingScreen />
            <CursorTrail />
            <CustomCursor />
            <MobileNavigation isScrolled={isScrolled} />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/customers" element={<Admin />} />
                  <Route path="/admin/projects" element={<Admin />} />
                  <Route path="/admin/analytics" element={<Admin />} />
                    <Route path="/brand-assets" element={<BrandAssets />} />
                    <Route path="/brand-guide" element={<BrandGuide />} />
                  </Routes>
              </Suspense>
            </main>
            <Footer />

            {/* WhatsApp Chat Widget */}
            <WhatsAppChat
              phoneNumber="+27786511482"
              message="Hi! I'm interested in AzaniaDigital's services. Can you help me?"
              position="bottom-right"
              showOnMobile={true}
              showOnDesktop={true}
            />

            {/* Analytics Tracking */}
            <Analytics />

            {/* Lead Generation Popup - Disabled */}
            {/* <LeadGenerationPopup /> */}

            {/* Floating Action Buttons */}
            <FloatingActionButtons />
              </div>
            </SmoothScroll>
          </Router>
        </MobileOptimizations>
        </ButtonActionHandler>
      </AccessibilityEnhancements>
    </PerformanceProvider>
  );
};

export default App;
