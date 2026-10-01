import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { NotFound } from './pages/NotFound';

/**
 * ScrollToTop helper: scrolls window to top on route change unless hash is present.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50 text-slate-800 antialiased selection:bg-brand-600 selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-600 text-white rounded-lg shadow-lg font-medium text-sm outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      
      {/* Sticky Responsive Header */}
      <Navbar />

      {/* Main Content Area */}
      <div id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Configurable Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
