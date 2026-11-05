import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, CheckCircle, Clock, Award, Star, ArrowUpRight } from 'lucide-react';
import { serviceLocations } from '../data/locationsData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer
      className="text-emerald-100 border-t border-emerald-900/60"
      style={{ backgroundColor: '#040e08' }}
    >
      {/* Pre-footer Trust Strip */}
      <div className="border-b border-emerald-900/60 bg-black/40 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center gap-1.5 p-2">
            <Shield className="w-5 h-5 text-turf-bright" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">NC Licensed Contractor</span>
            <span className="text-[11px] text-brand-300">License #NC-LC 48219</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">$2,000,000 Insured</span>
            <span className="text-[11px] text-brand-300">Commercial Liability & Workers Comp</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2">
            <Clock className="w-5 h-5 text-turf-bright" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">180s Speed-to-Lead</span>
            <span className="text-[11px] text-brand-300">Instant SMS Dispatch Webhook</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wide uppercase">4.98 / 5.0 Star Rating</span>
            <span className="text-[11px] text-brand-300">Across 84+ Wake County Reviews</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />

            <p className="text-sm text-brand-200/90 leading-relaxed pt-2">
              Engineered specifically for affluent Wake County residential properties and commercial communities. We deliver commercial-grade turf nutrition, bi-annual aeration, laser sod installation, and full seasonal property care with real-time digital transparency.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-turf-bright shrink-0" />
                <span>Falls of Neuse Rd, Raleigh, NC 27615 (Wake County)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-turf-bright shrink-0" />
                <a href="tel:9195558873" className="hover:text-white underline font-semibold">(919) 555-8873 (Dispatch)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-turf-bright shrink-0" />
                <span>quotes@crlandscapenc.com</span>
              </div>
              <div className="flex items-center gap-2 text-brand-300">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Mon – Sat: 7:00 AM – 6:30 PM • Closed Sunday</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Tiered Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Basic Precision Mowing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group text-turf-lime font-medium">
                  <span>Premium Lawn Care (Aeration)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Full Seasonal VIP Care</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Laser-Leveled Sodding</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Hardwood Mulch & Beds</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Leaf Vacuuming & Mulch</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Geofenced Regional Coverage */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Service Municipalities</h4>
            <ul className="space-y-2 text-sm">
              {serviceLocations.map((loc) => (
                <li key={loc.id}>
                  <Link to="/locations" className="hover:text-white transition-colors block">
                    <span className="font-medium text-brand-100">{loc.region}</span>
                    <span className="block text-[11px] text-brand-300">{loc.routeDays}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Tech Pipeline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Verification Channels</h4>
            <div className="space-y-2 text-xs text-brand-200">
              <div className="p-2.5 rounded-lg bg-brand-800/60 border border-brand-700/60">
                <span className="font-semibold text-white block">NC Contractor Board</span>
                <span className="text-[11px] text-brand-300">Verified Active Status #48219</span>
              </div>
              <div className="p-2.5 rounded-lg bg-brand-800/60 border border-brand-700/60">
                <span className="font-semibold text-white block">Speed-to-Lead Pipeline</span>
                <span className="text-[11px] text-brand-300">Twilio SMS + Zapier Webhook active</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-turf-bright hover:bg-turf-lime hover:text-brand-900 text-white font-bold text-xs transition-colors"
                >
                  <span>Launch Quote Funnel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-300">
          <div>
            © {new Date().getFullYear()} CR Landscape LLC. All Rights Reserved. Raleigh, North Carolina.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white">Credentials & Insurance</Link>
            <Link to="/locations" className="hover:text-white">Hyper-Local SEO</Link>
            <Link to="/contact" className="hover:text-white">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
