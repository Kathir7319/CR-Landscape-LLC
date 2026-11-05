import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Shield, Sparkles, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Before & After', path: '/portfolio' },
    { name: 'Service Areas', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Geofenced Urgency & Credential Banner */}
      <div
        className="text-xs text-emerald-100 py-2 px-4 border-b border-emerald-900/60 relative z-50 select-none"
        style={{ backgroundColor: '#040d07' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-turf-bright/20 text-turf-lime font-bold text-[11px] uppercase tracking-wide border border-turf-bright/30">
              <span className="w-1.5 h-1.5 rounded-full bg-turf-lime animate-pulse"></span>
              Spring 2026 Season Open
            </span>
            <span className="font-medium text-emerald-100/90 text-xs">
              Serving Raleigh, Wake Forest, Cary, Apex & Morrisville, NC
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wide text-emerald-200">
            <span className="flex items-center gap-1 font-semibold">
              <Shield className="w-3.5 h-3.5 text-gold" />
              NC Lic. #48219 • $2M Insured
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-gold font-bold">
              ⚡ 180s Speed-to-Lead Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Flawless Horizontal Alignment */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md shadow-2xl border-b border-emerald-800/40 py-2'
            : 'backdrop-blur-sm border-b border-emerald-900/40 py-3'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(5, 18, 10, 0.97)' : 'rgba(7, 24, 14, 0.94)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4 h-16">
            {/* Left Column: Brand Logo */}
            <div className="shrink-0 flex items-center">
              <BrandLogo size="md" />
            </div>

            {/* Center Column: Single-Line Desktop Navigation Pill Cluster */}
            <nav className="hidden lg:flex items-center gap-1 bg-brand-950/80 p-1.5 rounded-full border border-emerald-900/60 shadow-inner h-12 shrink-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`whitespace-nowrap px-3.5 xl:px-4 h-9 flex items-center justify-center rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-800 text-white font-bold border border-emerald-500/50 shadow-md'
                        : 'text-emerald-100/80 hover:text-white hover:bg-brand-800/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Column: Matched Height Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
              <a
                href="tel:9195558873"
                className="h-11 flex items-center gap-2.5 px-3.5 rounded-2xl bg-brand-950/70 border border-emerald-900/60 hover:border-emerald-600 transition-all text-xs xl:text-sm font-semibold text-emerald-200 hover:text-white shadow-sm"
                title="Call CR Landscape Dispatch"
              >
                <div className="w-7 h-7 rounded-full bg-brand-800 border border-emerald-500/40 flex items-center justify-center text-turf-lime shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left hidden xl:block leading-tight">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Call Dispatch</div>
                  <div className="text-xs font-black text-white">(919) 555-TURF</div>
                </div>
              </a>

              <Link
                to="/quote"
                className="h-11 flex items-center gap-2 px-5 rounded-2xl bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-600 hover:from-turf-bright hover:to-turf-lime text-brand-950 font-black text-xs xl:text-sm shadow-md hover:shadow-glow-lime transition-all whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 fill-brand-950" />
                <span>Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>

            {/* Mobile Actions: Compact Quote & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/quote"
                className="sm:hidden px-3.5 py-2 rounded-xl bg-gradient-to-r from-turf-lime to-turf-bright text-brand-950 text-xs font-black shadow"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-brand-800 text-emerald-200 hover:text-white hover:bg-brand-700 focus:outline-none border border-emerald-700/50 shadow"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-emerald-800/80 px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200"
            style={{ backgroundColor: '#07180e' }}
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-800 text-white border-l-4 border-turf-lime'
                        : 'text-emerald-100 hover:bg-brand-800/60 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-turf-lime" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-emerald-800/80 flex flex-col gap-2">
              <a
                href="tel:9195558873"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-800 text-white font-bold text-sm border border-emerald-700/60"
              >
                <Phone className="w-4 h-4 text-turf-lime" />
                <span>Call (919) 555-8873</span>
              </a>
              <Link
                to="/quote"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-500 text-brand-950 font-black text-sm shadow-lg"
              >
                <Sparkles className="w-4 h-4 fill-brand-950" />
                <span>Launch Programmatic Quote Funnel</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
