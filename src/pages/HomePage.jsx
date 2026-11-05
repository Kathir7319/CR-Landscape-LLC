import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Star,
  CheckCircle2,
  ChevronRight,
  Phone,
  Ruler,
  Layers,
  MapPin,
  Flame,
  Check,
  TrendingUp,
  Zap
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TieredPricingMatrix from '../components/TieredPricingMatrix';
import ServiceAreaChecker from '../components/ServiceAreaChecker';
import TrustMetricsBadge from '../components/TrustMetricsBadge';
import { transformationsData } from '../data/transformationsData';
import { testimonialsData, trustMetrics } from '../data/testimonialsData';
import { serviceLocations } from '../data/locationsData';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION - Sleek Luxury Dark Obsidian & Emerald */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundColor: '#05120a',
          backgroundImage: 'radial-gradient(circle at 50% 20%, #0d3820 0%, #071d11 50%, #030c06 100%)',
        }}
      >
        {/* Real Estate Photography Background Layer */}
        <img
          src="/images/hero-estate.jpg"
          alt="Luxury Raleigh residential estate lawn"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none"
        />

        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-turf-bright/15 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-turf-lime/10 blur-[130px] pointer-events-none rounded-full"></div>

        {/* Ambient Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/90 border border-emerald-500/40 backdrop-blur-md mb-6 shadow-glow">
            <span className="w-2.5 h-2.5 rounded-full bg-turf-lime shadow-[0_0_8px_#65d900] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-100">
              Raleigh & Wake Forest's Premier Residential Turf Partner
            </span>
            <span className="text-gold hidden sm:inline">•</span>
            <span className="text-gold text-xs font-bold hidden sm:inline">⚡ 180s Speed-to-Lead</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white tracking-tight leading-[1.12] max-w-5xl mx-auto drop-shadow-md">
            Architectural Turf Care for Raleigh’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turf-lime via-emerald-300 to-turf-bright drop-shadow-sm">
              Finest Estates.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
            Eliminating lawn maintenance friction. Standardized verification, bi-annual core aeration, 4-phase agronomic nutrition, and instant SMS-routed quote dispatch.
          </p>

          {/* Core Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-600 hover:from-turf-bright hover:to-turf-lime text-brand-950 font-extrabold text-base shadow-xl hover:shadow-glow-lime transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-5 h-5 fill-brand-950 text-brand-950 group-hover:rotate-12 transition-transform" />
              <span>Launch Instant Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#visual-authority-engine"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-900/80 hover:bg-brand-800 text-white font-bold text-base backdrop-blur-md border border-emerald-500/40 hover:border-emerald-400 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Inspect Transformations</span>
              <ChevronRight className="w-4 h-4 text-turf-lime" />
            </a>
          </div>

          {/* Trust Stat Ticker - High Contrast Frosted Glass Cards */}
          <div className="mt-14 pt-10 border-t border-emerald-900/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {trustMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="bg-brand-900/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-emerald-500/25 shadow-xl hover:border-turf-bright/50 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                  {stat.val}
                </div>
                <div className="text-xs text-emerald-200/90 tracking-wide font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDENT VERIFICATION CREDENTIALS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustMetricsBadge />
      </section>

      {/* MODULE A: THE BEFORE-AND-AFTER VISUAL AUTHORITY ENGINE */}
      <section id="visual-authority-engine" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
            Module A • Visual Authority Engine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sand-900 mt-3">
            Proof of Capability Before You Commit
          </h2>
          <p className="text-sm sm:text-base text-sand-700 mt-3 leading-relaxed">
            Instead of static thumbnail arrays, inspect our hardware-accelerated comparison engine. Slide back and forth to examine turf density, laser leveling, and precision edge definition.
          </p>
        </div>

        {/* Primary Before/After Sliders */}
        <div className="space-y-12">
          {/* Item 1: Overgrown raw yard vs fully manicured turf */}
          <div>
            <BeforeAfterSlider item={transformationsData[0]} showDetails={true} />
          </div>

          {/* Item 2: Bare topsoil vs laser-leveled premium sod */}
          <div>
            <BeforeAfterSlider item={transformationsData[1]} showDetails={true} />
          </div>
        </div>

        {/* Explore All Transformations Link */}
        <div className="text-center mt-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-turf-bright transition-colors"
          >
            <span>View Full Portfolio Gallery & Hardscape Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY AFFLUENT RALEIGH HOMEOWNERS CHOOSE CR LANDSCAPE */}
      <section className="bg-sand-100/70 py-16 sm:py-24 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
                Agronomic Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 mt-2">
                Why Standard "Mow-and-Blow" Crews Fail In North Carolina
              </h2>
              <p className="text-sm sm:text-base text-sand-700 mt-4 leading-relaxed">
                Wake County sits squarely in the agronomic "Transition Zone." Hot humid summers burn unfertilized cool-season Fescue, while dense red clay strangles root zones. We don’t just cut grass—we manage soil microbiology, pH balance, and precise seasonal overseeding routines.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Precision Commercial Fleet Blades',
                    desc: 'Scag and Walker commercial mowers sharpened every 10 service hours to prevent ragged leaf tips and fungal entry.'
                  },
                  {
                    title: 'NC State Extension Agronomic Calendar',
                    desc: 'Scheduled 4-phase slow-release fertilization, spring crabgrass pre-emergent, and fall hollow-tine aeration.'
                  },
                  {
                    title: 'Automated 180-Second Speed-to-Lead',
                    desc: 'Direct Twilio + Zapier SMS pipeline ensuring property managers and homeowners never wait days for quotes.'
                  },
                  {
                    title: 'Dedicated Route Continuity',
                    desc: 'The same uniformed, background-checked crew lead services your property on the exact same day each week.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-turf-bright text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-sand-900">{item.title}</h4>
                      <p className="text-xs text-sand-700 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm transition-colors"
                >
                  <span>Read Our Standards & Licensing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-900">
                <img
                  src="/images/estate-edging.jpg"
                  alt="Precision turf edging and striping by CR Landscape"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-sand-200 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-turf-bright font-bold">
                    4.98
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-sand-900 mt-0.5">Wake County Favorite</p>
                    <p className="text-[10px] text-sand-700">Verified by 84+ Raleigh Homeowners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIERED SERVICE MATRIX COPYWRITING BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TieredPricingMatrix />
      </section>

      {/* INTERACTIVE LOCAL GEOFENCE AREA CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceAreaChecker />
      </section>

      {/* VERIFIED HOMEOWNER TESTIMONIALS & TRUST WALL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Real Community Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 mt-1">
            Verified Homeowner Endorsements
          </h2>
          <p className="text-sm text-sand-700 mt-2">
            Independent reviews across North Ridge, Wakefield, Preston, and Falls River.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-turf-bright/10 text-turf-bright border border-turf-bright/20">
                    {item.verifiedChannel}
                  </span>
                </div>

                <p className="text-sm text-sand-800 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400/50 shadow shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-sand-900">{item.author}</h4>
                    <p className="text-xs text-sand-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-turf-bright" />
                      {item.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-semibold text-brand-700 block">
                    {item.service}
                  </span>
                  <span className="text-[10px] text-sand-700">
                    {item.propertyDetails}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL HIGH-CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="relative rounded-3xl overflow-hidden text-white p-8 sm:p-14 shadow-2xl border border-emerald-500/40"
          style={{
            backgroundColor: '#06170e',
            backgroundImage: 'radial-gradient(circle at 70% 30%, #0f3d24 0%, #06170e 60%, #030d08 100%)',
          }}
        >
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-turf-bright/20 text-turf-lime text-xs font-bold uppercase tracking-wider border border-turf-bright/40">
              ⚡ 180-Second Speed-to-Lead Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-4 leading-tight">
              Ready to Upgrade Your Lawn to Country Club Standards?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 mt-4 leading-relaxed max-w-2xl">
              Lock in your recurring weekly route slot before Spring schedule capacity closes. Our programmatic funnel delivers an instant estimate and dispatches your request via SMS immediately.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-turf-lime via-turf-bright to-emerald-500 hover:from-turf-bright hover:to-turf-lime text-brand-950 font-extrabold text-base shadow-glow-lime transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 fill-brand-950" />
                <span>Get Programmatic Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:9195558873"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-brand-900/90 hover:bg-brand-800 text-white font-semibold text-sm border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-turf-lime" />
                <span>Call (919) 555-8873</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
