import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Filter, MapPin, CheckCircle2 } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { transformationsData } from '../data/transformationsData';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Turf Renovation', 'Sod & Grading', 'Hardscapes & Beds'];

  const filteredTransformations = selectedCategory === 'All'
    ? transformationsData
    : transformationsData.filter((item) => {
        if (selectedCategory === 'Turf Renovation') return item.category.includes('Turf');
        if (selectedCategory === 'Sod & Grading') return item.category.includes('Sod');
        if (selectedCategory === 'Hardscapes & Beds') return item.category.includes('Hardscape');
        return true;
      });

  return (
    <div className="space-y-16 sm:space-y-20 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <span className="px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
          Module A • Visual Authority Engine
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sand-900 mt-4 max-w-4xl mx-auto">
          Interactive Transformation Showcase
        </h1>
        <p className="text-base sm:text-lg text-sand-800 mt-4 max-w-2xl mx-auto">
          High-resolution, hardware-accelerated image comparison matrices demonstrating real results across North Raleigh, Wake Forest, and Cary. Drag the interactive sliders to inspect our craftsmanship.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-sand-800 border border-sand-200 hover:border-sand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Sliders Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredTransformations.map((item) => (
            <div key={item.id} className="space-y-4">
              <BeforeAfterSlider item={item} showDetails={true} />
            </div>
          ))}
        </div>
      </section>

      {/* Side-by-Side Photographic Proof Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Static High-Res Inspection
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sand-900 mt-1">
            Before & After Photographic Evidence
          </h2>
          <p className="text-xs sm:text-sm text-sand-700 mt-2">
            Side-by-side original photographs captured on Wake County residential properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformationsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-sand-200 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                  {item.category}
                </span>
                <span className="text-xs font-semibold text-sand-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-turf-bright" />
                  {item.location}
                </span>
              </div>

              <h4 className="text-base font-bold text-sand-900 mb-3 font-serif">
                {item.title}
              </h4>

              {/* Dual Before / After Photo Display */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden mb-3">
                <div className="relative aspect-square overflow-hidden bg-sand-100 rounded-xl">
                  <img
                    src={item.beforeImage}
                    alt={item.beforeLabel}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold bg-black/70 text-red-300 px-2 py-0.5 rounded backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden bg-sand-100 rounded-xl">
                  <img
                    src={item.afterImage}
                    alt={item.afterLabel}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold bg-emerald-950/80 text-turf-lime px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-500/30">
                    AFTER
                  </span>
                </div>
              </div>

              <p className="text-xs text-sand-700 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="pt-3 border-t border-sand-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-brand-700">
                  {item.servicePackage}
                </span>
                <Link
                  to="/quote"
                  className="text-xs font-bold text-sand-900 hover:text-turf-bright flex items-center gap-1"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl border border-emerald-500/30"
          style={{
            backgroundColor: '#06170e',
            backgroundImage: 'radial-gradient(circle at 50% 30%, #0d3822 0%, #06180e 70%, #030d07 100%)',
          }}
        >
          <span className="px-3 py-1 rounded-full bg-turf-bright/20 text-turf-lime text-xs font-bold uppercase tracking-wider">
            Ready For Your Transformation?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 max-w-2xl mx-auto">
            Turn Your Red Clay Yard Into Wake County’s Greenest Lawn
          </h2>
          <p className="text-sm text-brand-200 mt-3 max-w-xl mx-auto">
            Use our programmatic funnel to configure your property size and get an instant estimate in under 60 seconds.
          </p>

          <div className="mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-turf-lime to-turf-bright text-brand-950 font-bold text-sm shadow-glow hover:scale-105 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 fill-brand-950" />
              <span>Launch Quote Engine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
