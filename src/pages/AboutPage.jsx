import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle2, Star, Truck, Users, Sparkles, ArrowRight, FileText } from 'lucide-react';
import TrustMetricsBadge from '../components/TrustMetricsBadge';

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <span className="px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
          Independent Verification & Standards
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sand-900 mt-4 max-w-4xl mx-auto">
          Built on Transparency, Agronomy, and Professional Credibility
        </h1>
        <p className="text-base sm:text-lg text-sand-800 mt-4 max-w-2xl mx-auto">
          We eliminated the uncertainty of unregulated Facebook lawn cutters by establishing documented state licensing, multi-million dollar liability insurance, and an audited track record across Wake County.
        </p>
      </section>

      {/* Trust Metrics Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustMetricsBadge />
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
              Our Journey & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 mt-2">
              From Local Roots to Raleigh’s Premier Turf Partner
            </h2>
            <p className="text-sm sm:text-base text-sand-800 mt-4 leading-relaxed">
              CR Landscape LLC was founded with a singular conviction: homeowners investing in high-end estates in North Raleigh, Wake Forest, and Cary shouldn't have to tolerate unverified contractors, missed service days, or damaged turf edges.
            </p>
            <p className="text-sm sm:text-base text-sand-800 mt-4 leading-relaxed">
              While casual social media channels fail to deliver standardized trust metrics, CR Landscape LLC operates with full institutional rigor. Every employee is W-2 employed, background checked, and trained in NC State University turf science agronomy.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-sand-200 shadow-sm">
                <span className="text-2xl font-black text-brand-700 font-sans">84+</span>
                <p className="text-xs font-semibold text-sand-900 mt-0.5">Verified 5-Star Reviews</p>
                <p className="text-[11px] text-sand-800">Across Google, Houzz & Nextdoor</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-sand-200 shadow-sm">
                <span className="text-2xl font-black text-brand-700 font-sans">100%</span>
                <p className="text-xs font-semibold text-sand-900 mt-0.5">Gate-Latch Guarantee</p>
                <p className="text-[11px] text-sand-800">Mandatory photo verification</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-900">
            <img
              src="/images/fleet-mowers.jpg"
              alt="CR Landscape commercial equipment fleet"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Equipment & Standards Grid */}
      <section className="bg-sand-100/70 py-16 sm:py-20 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 border border-sand-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
              No Second-Rate Tools
            </span>
            <h2 className="text-3xl font-serif font-bold text-sand-900 mt-2">
              Our Commercial Equipment Standards
            </h2>
            <p className="text-sm text-sand-800 mt-2">
              Clean cuts prevent lawn diseases. We invest in commercial-grade equipment calibrated daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Scag & Walker Commercial Fleet</h3>
              <p className="text-xs text-sand-800 mt-2 leading-relaxed">
                Dual hydrostatic floating decks with Marbain high-lift blades sharpened every 10 engine hours. Produces clean, crisp striping without scalping hilltops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Hollow-Core Aerators</h3>
              <p className="text-xs text-sand-800 mt-2 leading-relaxed">
                Commercial core extractors designed specifically to penetrate Wake County's dense red clay up to 3 inches deep, depositing nutrient-ready plugs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Uniformed & Screened Crews</h3>
              <p className="text-xs text-sand-800 mt-2 leading-relaxed">
                Full background screening, branded attire, and strict adherence to property noise ordinances. Direct cell contact with your designated route leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10">
        <h2 className="text-3xl font-serif font-bold text-sand-900">
          Ready to Experience the CR Landscape Standard?
        </h2>
        <p className="text-sm text-sand-800 mt-3 max-w-xl mx-auto">
          Join over 400 affluent homeowners who trust CR Landscape LLC with their property curb appeal.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/quote"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-turf-bright to-brand-600 text-white font-bold text-sm shadow-md hover:shadow-glow transition-all"
          >
            Launch Programmatic Quote Funnel
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-white border border-sand-300 text-sand-800 hover:text-sand-900 font-semibold text-sm transition-colors"
          >
            Contact Dispatch
          </Link>
        </div>
      </section>
    </div>
  );
}
