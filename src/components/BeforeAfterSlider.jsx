import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeftRight, CheckCircle2, Sparkles, MapPin, Clock, Ruler } from 'lucide-react';

export default function BeforeAfterSlider({ item, showDetails = true }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const onPointerUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [isDragging, handleMove]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-sand-200 transition-all duration-300 hover:border-turf-light/50">
      {/* Header Info */}
      <div
        className="p-4 sm:p-6 text-white flex flex-wrap items-center justify-between gap-3"
        style={{
          backgroundColor: '#06170e',
          backgroundImage: 'linear-gradient(to right, #06170e, #0c2b1a)',
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-turf-bright/20 text-turf-lime border border-turf-bright/40">
              {item.category}
            </span>
            <span className="text-xs text-emerald-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              {item.location}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">
            {item.title}
          </h3>
        </div>

        {/* Quick position presets */}
        <div className="flex items-center gap-1.5 bg-brand-950/80 p-1 rounded-xl border border-emerald-900/60 text-xs">
          <button
            type="button"
            onClick={() => setSliderPos(0)}
            className={`px-3 py-1 rounded-lg transition-colors font-semibold ${
              sliderPos <= 5 ? 'bg-brand-800 text-white shadow' : 'text-emerald-200 hover:text-white'
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            className={`px-3 py-1 rounded-lg transition-colors font-semibold ${
              sliderPos > 40 && sliderPos < 60 ? 'bg-turf-bright text-white shadow' : 'text-emerald-200 hover:text-white'
            }`}
          >
            Split 50%
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(100)}
            className={`px-3 py-1 rounded-lg transition-colors font-semibold ${
              sliderPos >= 95 ? 'bg-brand-800 text-white shadow' : 'text-emerald-200 hover:text-white'
            }`}
          >
            After
          </button>
        </div>
      </div>

      {/* Hardware-Accelerated Interactive Slider Container (Eliminates CLS) */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Interactive Before and After Image Comparison Slider"
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] overflow-hidden select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-turf-bright"
        style={{ touchAction: 'none' }}
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={item.afterImage}
          alt={item.afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE Image (Clipped overlay layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none will-change-[clip-path]"
          style={{
            clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)`,
          }}
        >
          <img
            src={item.beforeImage}
            alt={item.beforeLabel}
            className="absolute inset-0 w-full h-full object-cover filter brightness-95"
            loading="lazy"
          />
          {/* Subtle vignette shadow on before side */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* BEFORE Label Badge */}
        <div
          className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-200"
          style={{ opacity: sliderPos > 15 ? 1 : 0 }}
        >
          <div className="bg-sand-950/85 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span>{item.beforeLabel}</span>
          </div>
        </div>

        {/* AFTER Label Badge */}
        <div
          className="absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-200"
          style={{ opacity: sliderPos < 85 ? 1 : 0 }}
        >
          <div className="bg-brand-950/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl border border-turf-bright/50 shadow-xl flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-turf-lime shadow-[0_0_8px_#65d900] animate-pulse"></span>
            <span>{item.afterLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Line element */}
          <div className="w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)]"></div>

          {/* Central Handle Pill */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-700 to-brand-950 text-white flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-turf-bright/40 transition-transform duration-150 ${
              isDragging ? 'scale-110 ring-turf-bright/70' : 'hover:scale-105'
            }`}
          >
            <ArrowLeftRight className="w-5 h-5 text-turf-lime" />
          </div>
        </div>

        {/* Bottom Instructional Pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-brand-950/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1 rounded-full border border-white/20 shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Drag slider horizontally or use keyboard arrows to inspect</span>
          </div>
        </div>
      </div>

      {/* Details & Performance Metrics */}
      {showDetails && (
        <div className="p-5 sm:p-6 bg-sand-50 border-t border-sand-200">
          <p className="text-sm text-sand-800 leading-relaxed mb-4 font-normal">
            {item.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-sand-200 shadow-sm">
              <span className="text-[11px] uppercase tracking-wider text-sand-600 font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-turf-bright" />
                Timeframe
              </span>
              <p className="text-sm font-extrabold text-sand-900 mt-1">{item.timeframe}</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-sand-200 shadow-sm">
              <span className="text-[11px] uppercase tracking-wider text-sand-600 font-bold flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-turf-bright" />
                Lot Scale
              </span>
              <p className="text-sm font-extrabold text-sand-900 mt-1">{item.lotSize}</p>
            </div>

            {item.stats && item.stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-sand-200 shadow-sm">
                <span className="text-[11px] uppercase tracking-wider text-sand-600 font-bold">
                  {stat.label}
                </span>
                <p className="text-sm font-extrabold text-brand-700 mt-1">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
