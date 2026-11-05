import React from 'react';
import { Sparkles, Shield, Clock, Zap, CheckCircle2 } from 'lucide-react';
import InteractiveQuoteFunnel from '../components/InteractiveQuoteFunnel';

export default function QuotePage() {
  return (
    <div className="py-8 sm:py-12 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20 mb-3">
          <Zap className="w-3.5 h-3.5 fill-turf-bright" />
          <span>Module B • Real-Time Routing Engine</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sand-900">
          Programmatic Multi-Step Quote Funnel
        </h1>
        <p className="text-sm sm:text-base text-sand-800 mt-3 max-w-2xl mx-auto leading-relaxed">
          Configure your parcel classification, layer custom turf services, and trigger an automated SMS notification directly to our operations manager in under 180 seconds.
        </p>

        {/* Feature Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-sand-800">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-turf-bright" />
            Zero Commitment
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-turf-bright" />
            180s Speed-to-Lead SLA
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-turf-bright" />
            $2M Insured & NC Licensed
          </span>
        </div>
      </section>

      {/* The Funnel Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveQuoteFunnel />
      </section>

      {/* Speed-to-Lead Technical Architecture Explanation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-sand-100/90 rounded-2xl p-6 border border-sand-200 text-xs sm:text-sm text-sand-800 space-y-2">
          <h4 className="font-bold text-sand-900 uppercase tracking-wider text-xs flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-600" />
            How Our Speed-to-Lead Architecture Protects Your Time
          </h4>
          <p className="leading-relaxed">
            Most landscaping contractors take 4 to 7 business days to reply to emails or return voicemails. Our web infrastructure integrates a direct Zapier webhook and Twilio SMS gateway. When you complete Step 4, your parcel coordinates and service choices are instantly parsed and pushed as an urgent push notification to Carlos and our field lead’s smartphone. You get an immediate, accurate response while satellite imagery confirms your lot boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}
