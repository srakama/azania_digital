import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CursorTrail, CustomCursor } from './components/CursorTrail';
import { LoadingScreen, SmoothScroll } from './components/LoadingScreen';
import { PerformanceProvider } from './components/PerformanceOptimizations';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

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
  return (
    <PerformanceProvider>
      <Router>
        <SmoothScroll>
          <div className="App">
            <LoadingScreen />
            <CursorTrail />
            <CustomCursor />
            <Header />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </PerformanceProvider>
  );
};

export default App;
