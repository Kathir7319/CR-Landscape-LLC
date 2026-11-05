import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sparkles, Shield, ArrowRight, Info, Star } from 'lucide-react';
import { tieredPackages } from '../data/servicesData';

export default function TieredPricingMatrix() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const navigate = useNavigate();

  const handleSelectPackage = (packageId) => {
    navigate(`/quote?tier=${packageId}`);
  };

  return (
    <div className="w-full">
      {/* Billing Switcher & Value Proposition */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="text-center sm:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Wake County Agronomic Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sand-900 mt-1">
            Predictable, Recurring Maintenance Tiers
          </h2>
          <p className="text-sm text-sand-700 mt-1 max-w-xl">
            Engineered for affluent Raleigh, Wake Forest & Cary residential estates. No hidden equipment fees.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2 bg-sand-200/90 p-1.5 rounded-2xl border border-sand-300 shadow-inner">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-brand-900 text-white shadow-md'
                : 'text-sand-700 hover:text-sand-900'
            }`}
          >
            Monthly Program
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-brand-900 text-white shadow-md'
                : 'text-sand-700 hover:text-sand-900'
            }`}
          >
            <span>Annual Agreement</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-turf-bright text-brand-950 uppercase">
              Save 8%
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal / Grid Tiered Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tieredPackages.map((pkg) => {
          const isPremium = pkg.popular;
          const displayPrice = billingCycle === 'annual'
            ? Math.round(pkg.price * 0.92)
            : pkg.price;

          return (
            <div
              key={pkg.id}
              style={
                isPremium
                  ? {
                      backgroundColor: '#071f13',
                      backgroundImage: 'linear-gradient(to bottom, #0a2d1b, #05150d)',
                    }
                  : {}
              }
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isPremium
                  ? 'text-white shadow-2xl ring-2 ring-turf-bright scale-[1.02] lg:-translate-y-2'
                  : 'bg-white text-sand-900 border border-sand-200 shadow-xl hover:shadow-2xl hover:border-turf-light/50'
              }`}
            >
              {/* Badge for popular tier */}
              {isPremium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-400 text-brand-950 font-black text-xs uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-brand-950" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Top header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isPremium
                        ? 'bg-brand-800 text-turf-lime border border-turf-bright/40'
                        : 'bg-sand-100 text-brand-700 border border-sand-300'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  {isPremium && (
                    <div className="flex items-center gap-1 text-gold text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-gold" />
                      <span>94% Renewal</span>
                    </div>
                  )}
                </div>

                <h3
                  className={`text-2xl font-serif font-bold ${
                    isPremium ? 'text-white' : 'text-sand-900'
                  }`}
                >
                  {pkg.tierName}
                </h3>
                <p
                  className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                    isPremium ? 'text-emerald-100/90' : 'text-sand-700'
                  }`}
                >
                  {pkg.subtitle}
                </p>

                {/* Pricing Box */}
                <div className="my-6 pt-4 border-t border-sand-200/50">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">
                      ${displayPrice}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isPremium ? 'text-emerald-200' : 'text-sand-600'
                      }`}
                    >
                      / {pkg.period}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-bold mt-1 ${
                      isPremium ? 'text-turf-lime' : 'text-brand-700'
                    }`}
                  >
                    Est. {pkg.monthlyEstimate}
                  </div>
                </div>

                {/* Strategic Blueprint Directive (From PDF) */}
                <div
                  className={`p-3.5 rounded-xl mb-6 text-xs flex items-start gap-2.5 ${
                    isPremium
                      ? 'bg-brand-950/80 border border-emerald-900/80 text-emerald-100'
                      : 'bg-sand-100 border border-sand-200 text-sand-800'
                  }`}
                >
                  <Info className="w-4 h-4 text-turf-bright shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[11px] uppercase tracking-wider text-turf-lime">
                      Strategic Objective:
                    </span>
                    <span className="leading-relaxed">{pkg.strategicObjective}</span>
                  </div>
                </div>

                {/* Detailed Core Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <div
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isPremium ? 'text-emerald-200' : 'text-sand-800'
                    }`}
                  >
                    Detailed Core Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPremium
                              ? 'bg-turf-bright text-brand-950'
                              : 'bg-brand-100 text-brand-700'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span
                          className={`leading-snug ${
                            isPremium ? 'text-emerald-50' : 'text-sand-800'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full py-4 px-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${
                    isPremium
                      ? 'bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-400 hover:from-turf-bright hover:to-turf-lime text-brand-950 shadow-glow-lime'
                      : 'bg-brand-900 hover:bg-brand-800 text-white'
                  }`}
                >
                  <span>Select {pkg.tierName}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
                <p
                  className={`text-[11px] text-center mt-2.5 font-medium ${
                    isPremium ? 'text-emerald-200/80' : 'text-sand-600'
                  }`}
                >
                  Instant quote calculation • No credit card required
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
