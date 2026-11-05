import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { serviceLocations, isZipServiced } from '../data/locationsData';
import { Link } from 'react-router-dom';

export default function ServiceAreaChecker() {
  const [zipInput, setZipInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const res = isZipServiced(zipInput);
    setResult(res);
  };

  return (
    <div
      className="w-full rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-500/30"
      style={{
        backgroundColor: '#071d11',
        backgroundImage: 'radial-gradient(circle at 50% 30%, #0d3822 0%, #06180e 70%, #040e08 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="px-3 py-1 rounded-full bg-turf-bright/20 text-turf-lime text-xs font-bold uppercase tracking-wider border border-turf-bright/30">
          Local SEO Geofencing Validation
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-3">
          Check Your Neighborhood Service Schedule
        </h3>
        <p className="text-sm text-brand-200 mt-2">
          Enter your 5-digit Wake County ZIP code to verify dedicated crew route days and priority dispatch eligibility.
        </p>

        <form onSubmit={handleCheck} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <div className="relative flex-1">
            <MapPin className="w-5 h-5 text-brand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              maxLength={5}
              placeholder="e.g. 27615, 27587, 27519..."
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-brand-950/80 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-turf-bright text-sm"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-turf-bright to-brand-500 hover:from-turf-lime hover:to-turf-bright text-brand-950 font-bold text-sm shadow transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>Check Area</span>
          </button>
        </form>

        {/* Validation Result Box */}
        {result && (
          <div
            className={`mt-6 p-4 rounded-2xl border text-sm text-left animate-in fade-in duration-200 ${
              result.serviced
                ? 'bg-brand-800/80 border-turf-bright text-brand-100'
                : 'bg-amber-950/60 border-amber-500/40 text-amber-200'
            }`}
          >
            <div className="flex items-start gap-3">
              {result.serviced ? (
                <CheckCircle2 className="w-5 h-5 text-turf-lime shrink-0 mt-0.5" />
              ) : (
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1 flex-1">
                <div className="font-bold text-white text-sm">
                  {result.serviced
                    ? `Active Route Confirmed: ${result.location.region}`
                    : 'Municipal Perimeter Notice'}
                </div>
                <p className="text-xs leading-relaxed">{result.message}</p>
                {result.serviced && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-brand-700 text-turf-lime font-mono">
                      {result.location.activeCrews} Active Crew Trucks
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-brand-700 text-gold-light font-mono">
                      {result.location.establishedClients} Recurring Estates
                    </span>
                    <Link
                      to={`/quote?zip=${zipInput}`}
                      className="ml-auto text-xs font-bold text-turf-lime hover:underline flex items-center gap-1"
                    >
                      <span>Claim Route Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quick ZIP Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 text-xs text-brand-300">
          <span className="text-brand-400 mr-1">Popular Hubs:</span>
          {['27615 (N. Raleigh)', '27587 (Wake Forest)', '27519 (Cary)', '27502 (Apex)'].map((hub, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                const zip = hub.slice(0, 5);
                setZipInput(zip);
                setResult(isZipServiced(zip));
              }}
              className="px-2.5 py-1 rounded-lg bg-brand-800 hover:bg-brand-700 text-brand-200 hover:text-white transition-colors border border-brand-700/60"
            >
              {hub}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
