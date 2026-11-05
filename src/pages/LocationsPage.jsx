import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, Shield, ArrowRight, Truck, Users, Calendar } from 'lucide-react';
import { serviceLocations } from '../data/locationsData';
import ServiceAreaChecker from '../components/ServiceAreaChecker';

export default function LocationsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <span className="px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
          Section 4 • Hyper-Local SEO Geofencing
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sand-900 mt-4 max-w-4xl mx-auto">
          Geofenced Service Hubs Across Wake County
        </h1>
        <p className="text-base sm:text-lg text-sand-800 mt-4 max-w-2xl mx-auto">
          To maintain our 180-second response SLA and prevent route delays, CR Landscape LLC restricts weekly service routes to municipal clusters in Raleigh, Wake Forest, Cary, Apex, and Morrisville.
        </p>
      </section>

      {/* Interactive ZIP / Geofence Checker */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceAreaChecker />
      </section>

      {/* Geofenced Content Blocks (Direct from Document Blueprint) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Regional Micro-Markets
          </span>
          <h2 className="text-3xl font-serif font-bold text-sand-900 mt-1">
            Dedicated Route Clusters & Neighborhood Profiles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg hover:shadow-xl hover:border-turf-bright/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-5 h-48 border border-sand-200 shadow-sm bg-sand-100">
                  <img
                    src={loc.image}
                    alt={loc.h3Heading}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-950/85 backdrop-blur-md text-white text-xs font-bold border border-emerald-500/40">
                    {loc.city}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-turf-lime text-[11px] font-bold flex items-center gap-1.5 border border-white/10">
                    <Truck className="w-3.5 h-3.5" />
                    <span>{loc.routeDays}</span>
                  </div>
                </div>

                {/* H3 Sub-heading targeted to micro-market as specified in Section 4 */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-sand-900 leading-snug">
                  {loc.h3Heading}
                </h3>

                <p className="text-xs sm:text-sm text-sand-800 mt-3 leading-relaxed">
                  {loc.description}
                </p>

                {/* Neighborhood Clusters */}
                <div className="mt-5 pt-4 border-t border-sand-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sand-800 block mb-2">
                    Serviced Neighborhood Clusters:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.neighborhoods.map((n, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-sand-100 text-sand-800 font-medium"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Serviced ZIP Codes */}
                <div className="mt-4 pt-3 border-t border-sand-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sand-800 block mb-1.5">
                    Verified ZIP Codes:
                  </span>
                  <div className="flex flex-wrap gap-1 font-mono text-xs text-brand-700 font-semibold">
                    {loc.zipCodes.map((zip) => (
                      <span key={zip} className="px-2 py-0.5 rounded bg-brand-50 border border-brand-200">
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom stats & action */}
              <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-sand-800">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-turf-bright" />
                    <strong>{loc.establishedClients}</strong> Estates
                  </span>
                  <span>•</span>
                  <span><strong>{loc.activeCrews}</strong> Daily Trucks</span>
                </div>

                <Link
                  to={`/quote?city=${encodeURIComponent(loc.city)}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-turf-bright"
                >
                  <span>Book Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wake County Soil & Climate Guide */}
      <section className="bg-sand-100/70 py-16 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 border border-sand-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Local Agronomic Conditions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sand-900 mt-2">
            Why Wake County Soil Requires Specialized Mechanical Equipment
          </h2>
          <div className="mt-6 space-y-4 text-sm text-sand-800 leading-relaxed">
            <p>
              The North Carolina Piedmont region is defined by heavy Cecil and Appling red clay soils. Under intense summer sunlight and foot traffic, this clay compacts into near brick-like density, suffocating grass roots and causing water to run off rather than penetrate.
            </p>
            <p>
              Standard residential aerators bounce off dry NC clay without pulling meaningful plugs. CR Landscape LLC utilizes commercial hydraulic Class-A core extractors that sink up to 3 inches deep, depositing open aeration chambers ready for specialized NC State-certified Tall Fescue seed blends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
