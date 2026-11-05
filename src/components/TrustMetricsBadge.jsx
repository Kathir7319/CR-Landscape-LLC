import React from 'react';
import { ShieldCheck, Award, FileCheck2, Clock, CheckCircle2, Star } from 'lucide-react';

export default function TrustMetricsBadge() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'NC Licensed Contractor',
      subtitle: 'Board Lic. #NC-LC 48219',
      verified: 'State Registry Verified'
    },
    {
      icon: Award,
      title: '$2,000,000 Insured',
      subtitle: 'Commercial General Liability',
      verified: 'Certificate On Demand'
    },
    {
      icon: FileCheck2,
      title: 'NC State Extension Agronomy',
      subtitle: 'Soil pH & Cool/Warm Turf Certified',
      verified: 'Scientific Practice'
    },
    {
      icon: Clock,
      title: '180s Speed-to-Lead SLA',
      subtitle: 'Automated SMS Webhook Routing',
      verified: 'Zero Waiting Friction'
    }
  ];

  return (
    <div className="w-full bg-sand-100/80 rounded-3xl p-6 sm:p-8 border border-sand-200/90 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="text-[11px] uppercase tracking-widest font-bold text-turf-bright">
          Independent Verification Channels
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-sand-900 mt-1">
          Standardized Trust Metrics for High-End Contracts
        </h3>
        <p className="text-xs sm:text-sm text-sand-800 mt-1">
          Eliminating Facebook-only uncertainty with formal state licensing, bonded liability insurance, and audited homeowner reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm flex flex-col justify-between hover:border-turf-bright/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sand-900 leading-tight">{b.title}</h4>
                  <p className="text-xs text-sand-800 mt-0.5">{b.subtitle}</p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-sand-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-turf-bright" />
                <span>{b.verified}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
