import React from 'react';
import { Link } from 'react-router-dom';

export function LogoCrest({ size = 44, className = "" }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${className}`}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <linearGradient id="shieldGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#092415"/>
            <stop offset="50%" stopColor="#144329"/>
            <stop offset="100%" stopColor="#06190e"/>
          </linearGradient>
          <linearGradient id="goldGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf0cd"/>
            <stop offset="35%" stopColor="#d4af37"/>
            <stop offset="70%" stopColor="#aa820a"/>
            <stop offset="100%" stopColor="#f5e1a4"/>
          </linearGradient>
          <linearGradient id="leafGradComp" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2d7a4b"/>
            <stop offset="50%" stopColor="#40916c"/>
            <stop offset="100%" stopColor="#78f000"/>
          </linearGradient>
          <linearGradient id="stripeGradComp" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78f000" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1b4d2e" stopOpacity="0.2"/>
          </linearGradient>
        </defs>

        {/* Outer Luxury Hex-Shield Contour */}
        <path
          d="M 250,25 L 435,95 L 435,280 C 435,385 345,455 250,485 C 155,455 65,385 65,280 L 65,95 Z"
          fill="url(#shieldGradComp)"
          stroke="url(#goldGradComp)"
          strokeWidth="14"
          strokeLinejoin="round"
        />

        {/* Inner Border Accent */}
        <path
          d="M 250,50 L 415,112 L 415,275 C 415,368 335,432 250,460 C 165,432 85,368 85,275 L 85,112 Z"
          fill="none"
          stroke="url(#goldGradComp)"
          strokeWidth="3.5"
          strokeOpacity="0.65"
          strokeDasharray="12 6"
        />

        {/* Manicured Turf Mowing Stripes (Lawn Geometry) */}
        <g opacity="0.3">
          <path d="M 140,290 L 175,290 L 195,440 L 160,440 Z" fill="url(#stripeGradComp)"/>
          <path d="M 195,270 L 230,270 L 245,455 L 210,455 Z" fill="url(#stripeGradComp)"/>
          <path d="M 250,260 L 285,260 L 285,455 L 250,455 Z" fill="url(#stripeGradComp)"/>
          <path d="M 305,270 L 340,270 L 325,445 L 290,445 Z" fill="url(#stripeGradComp)"/>
        </g>

        {/* Monogram C */}
        <path
          d="M 220,150 C 160,150 130,190 130,250 C 130,310 160,350 220,350 C 245,350 265,340 275,330 L 260,300 C 250,308 238,314 220,314 C 182,314 165,285 165,250 C 165,215 182,186 220,186 C 240,186 252,192 262,202 L 280,172 C 265,158 245,150 220,150 Z"
          fill="url(#goldGradComp)"
        />

        {/* Monogram R */}
        <path
          d="M 265,155 L 330,155 C 365,155 385,175 385,208 C 385,232 372,250 350,258 L 392,348 L 355,348 L 318,265 L 298,265 L 298,348 L 265,348 Z M 298,185 L 298,235 L 326,235 C 342,235 352,226 352,210 C 352,194 342,185 326,185 Z"
          fill="url(#goldGradComp)"
        />

        {/* Vibrant Emerald Turf Leaf Blade */}
        <path
          d="M 240,320 C 240,260 270,180 320,130 C 310,170 290,240 255,290 C 265,270 280,240 295,220 C 275,250 255,290 250,330 Z"
          fill="url(#leafGradComp)"
        />

        {/* Apex Crown Star */}
        <polygon
          points="250,65 258,82 277,82 262,93 268,110 250,99 232,110 238,93 223,82 242,82"
          fill="url(#goldGradComp)"
        />
      </svg>
    </div>
  );
}

export default function BrandLogo({ size = "md", to = "/", className = "" }) {
  const crestSizes = {
    sm: 36,
    md: 46,
    lg: 56
  };

  const crestSize = crestSizes[size] || 46;

  return (
    <Link to={to} className={`flex items-center gap-3 group select-none ${className}`}>
      <LogoCrest size={crestSize} />

      <div className="flex flex-col text-left whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-serif font-black tracking-tight text-white group-hover:text-emerald-200 transition-colors whitespace-nowrap">
            CR LANDSCAPE
          </span>
          <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-gold-light border border-gold/40 shadow-sm uppercase tracking-wider">
            LLC
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-300 font-bold tracking-wider uppercase whitespace-nowrap">
          Raleigh, NC • Turf & Landscape Architecture
        </span>
      </div>
    </Link>
  );
}
