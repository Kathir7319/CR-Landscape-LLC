import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import QuotePage from './pages/QuotePage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Phone, Sparkles } from 'lucide-react';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-sand-50 text-sand-900 selection:bg-brand-600 selection:text-white">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />

        {/* Mobile Sticky Action Bar */}
        <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-brand-900/95 backdrop-blur-md p-2 rounded-2xl border border-brand-700/80 shadow-2xl flex items-center justify-between gap-2">
          <a
            href="tel:9195558873"
            className="flex-1 py-2.5 px-3 rounded-xl bg-brand-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-brand-700"
          >
            <Phone className="w-3.5 h-3.5 text-turf-lime" />
            <span>Call (919) 555-8873</span>
          </a>

          <Link
            to="/quote"
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-turf-bright to-brand-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-turf-bright/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span>Instant Quote</span>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
