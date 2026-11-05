import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wheat,
  Layers,
  Boxes,
  Trees,
  Wind,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Shield,
  HelpCircle
} from 'lucide-react';
import TieredPricingMatrix from '../components/TieredPricingMatrix';
import { specializedServices } from '../data/servicesData';

export default function ServicesPage() {
  const iconMap = {
    Wheat: Wheat,
    Layers: Layers,
    Boxes: Boxes,
    Trees: Trees,
    Wind: Wind,
    Building2: Building2
  };

  const agronomicSchedule = [
    {
      season: 'Phase 1 • Early Spring (Feb – Mar)',
      focus: 'Pre-Emergent Weed Barrier & Soil Awakening',
      details: 'Crabgrass & foxtail barrier application before soil temperatures reach 55°F. Broadleaf weed remediation spray and root-stimulating slow release micro-nutrients.'
    },
    {
      season: 'Phase 2 • Late Spring (Apr – May)',
      focus: 'Controlled Growth & Heat Defense Nutrition',
      details: 'Balanced nitrogen-potassium feed promoting deep cell-wall strength before Raleigh summer heat waves. Iron enrichment for dark emerald pigmentation.'
    },
    {
      season: 'Phase 3 • Early Fall (Sep – Oct)',
      focus: 'Mechanical Core Aeration & Blue-Tag Overseed',
      details: 'Hollow-tine core extraction pulling 2.5" soil plugs through dense red clay. Slit-seeding 100% certified drought-hardy Tall Fescue or Bermuda with phosphorus starter.'
    },
    {
      season: 'Phase 4 • Late Fall / Winter (Nov – Dec)',
      focus: 'Dormant Root Fortification & Agricultural Lime',
      details: 'Calcitic limestone application neutralizing Wake County red clay acidity. Root-building winterizer protecting turf against frost heaving.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <span className="px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
          Wake County Agronomic Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sand-900 mt-4 max-w-4xl mx-auto">
          Engineered Grounds Care & Specialized Landscape Craft
        </h1>
        <p className="text-base sm:text-lg text-sand-800 mt-4 max-w-2xl mx-auto">
          From weekly precision rotary mowing to laser-guided sod grading and agronomic turf nutrition, our programs protect and elevate your property value year-round.
        </p>
      </section>

      {/* Tiered Service Blueprint Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TieredPricingMatrix />
      </section>

      {/* 4-Phase Wake County Agronomic Calendar */}
      <section
        className="text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 border border-emerald-500/30 shadow-2xl"
        style={{
          backgroundColor: '#071d11',
          backgroundImage: 'radial-gradient(circle at 50% 30%, #0d3822 0%, #06180e 70%, #030d07 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-turf-lime">
              Soil Science in Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              The 4-Phase Wake County Turf Calendar
            </h2>
            <p className="text-sm text-brand-200 mt-2">
              Wake County red clay requires precise chemical and mechanical intervention. Here is our calibrated seasonal program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agronomicSchedule.map((phase, idx) => (
              <div
                key={idx}
                className="bg-brand-950/70 p-6 rounded-2xl border border-brand-800 flex flex-col justify-between hover:border-turf-bright/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-turf-lime mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{phase.season}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{phase.focus}</h3>
                  <p className="text-xs text-brand-300 leading-relaxed">{phase.details}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-brand-800/80 text-[11px] text-turf-bright font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Included in Premium & Seasonal Tiers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Deep-Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Beyond Routine Mowing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 mt-1">
            Specialized Landscape Architecture & Execution
          </h2>
          <p className="text-sm text-sand-800 mt-2">
            Custom capital enhancements engineered to solve grading, drainage, and outdoor living desires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((service) => {
            const Icon = iconMap[service.icon] || Wheat;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-md hover:shadow-xl hover:border-turf-bright/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-5 h-48 border border-sand-200 shadow-sm bg-sand-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-brand-950/85 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center text-turf-lime shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    {service.tagline}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-sand-900 mt-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand-800 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-sand-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sand-800 block">
                      Core Standards:
                    </span>
                    <ul className="space-y-1.5">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-sand-800 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-turf-bright shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-700">
                    {service.pricing}
                  </span>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sand-900 hover:text-turf-bright transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-emerald-500/30"
          style={{
            backgroundColor: '#06170e',
            backgroundImage: 'linear-gradient(to right, #06170e, #0c2b1a)',
          }}
        >
          <div>
            <span className="text-xs uppercase font-bold text-turf-lime tracking-wider">
              Need a Customized Service Mix?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Build Your Exact Program in Our 4-Step Funnel
            </h3>
            <p className="text-xs sm:text-sm text-sand-300 mt-2 max-w-xl">
              Select your exact parcel dimensions and stack your desired services to receive an automated real-time estimate.
            </p>
          </div>

          <Link
            to="/quote"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-turf-lime to-turf-bright text-brand-950 font-bold text-sm shadow-glow hover:scale-105 transition-all duration-200 shrink-0"
          >
            Launch Programmatic Funnel
          </Link>
        </div>
      </section>
    </div>
  );
}
