import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Ruler,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldAlert,
  Zap,
  Check,
  Building,
  HelpCircle
} from 'lucide-react';
import { isZipServiced } from '../data/locationsData';
import SmsDispatchModal from './SmsDispatchModal';

export default function InteractiveQuoteFunnel() {
  const [searchParams] = useSearchParams();
  const initialTier = searchParams.get('tier');

  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    lotSize: '0.25-0.5 Acre',
    lotMultiplier: 1.0,
    services: ['Standard Mowing', 'Aeration & Overseeding'],
    streetAddress: '',
    zipCode: '27615',
    city: 'Raleigh',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    preferredStart: 'Immediately / Next Available Route'
  });

  const [geoValidation, setGeoValidation] = useState({
    checked: true,
    isValid: true,
    message: 'Geofence Verified: Fast Route Zone A (North Raleigh & Wake Forest)'
  });

  // Pre-fill tier if passed via URL
  useEffect(() => {
    if (initialTier === 'basic-mowing') {
      setFormData((prev) => ({
        ...prev,
        services: ['Standard Mowing']
      }));
    } else if (initialTier === 'premium-lawn-care') {
      setFormData((prev) => ({
        ...prev,
        services: ['Standard Mowing', 'Aeration & Overseeding']
      }));
    } else if (initialTier === 'full-seasonal-property-care') {
      setFormData((prev) => ({
        ...prev,
        services: [
          'Standard Mowing',
          'Aeration & Overseeding',
          'Seasonal Leaf Removal',
          'Hardwood Mulch Replenishment',
          'Shrub & Ornamental Pruning'
        ]
      }));
    }
  }, [initialTier]);

  // Handle Zip Validation
  useEffect(() => {
    if (formData.zipCode.length >= 5) {
      const result = isZipServiced(formData.zipCode);
      if (result.serviced) {
        setGeoValidation({
          checked: true,
          isValid: true,
          message: `✅ Geofence Verified: ${result.message}`
        });
      } else {
        setGeoValidation({
          checked: true,
          isValid: false,
          message: `⚠️ Outside Primary Service Perimeter: ${result.message}`
        });
      }
    } else {
      setGeoValidation({
        checked: false,
        isValid: false,
        message: 'Enter 5-digit Wake County ZIP code'
      });
    }
  }, [formData.zipCode]);

  // Property Classifications (Step 1)
  const lotOptions = [
    {
      id: 'under-0.25',
      title: 'Under 0.25 Acre',
      subtitle: 'Townhomes & Urban Lots',
      dimension: 'Up to ~10,800 sq ft',
      multiplier: 0.8,
      recommended: false
    },
    {
      id: '0.25-0.5',
      title: '0.25 – 0.5 Acre',
      subtitle: 'Standard Suburban Estate',
      dimension: '~10,800 - 21,780 sq ft',
      multiplier: 1.0,
      recommended: true
    },
    {
      id: '0.5-1.0',
      title: '0.5 – 1.0 Acre',
      subtitle: 'Executive Residential Lot',
      dimension: '~21,780 - 43,560 sq ft',
      multiplier: 1.35,
      recommended: false
    },
    {
      id: '1-plus',
      title: '1+ Acre',
      subtitle: 'Expansive Grounds & Acreage',
      dimension: '43,560+ sq ft',
      multiplier: 1.8,
      recommended: false
    }
  ];

  // Service Layering Options (Step 2)
  const availableServices = [
    {
      name: 'Standard Mowing',
      tag: 'Core Deliverable',
      description: 'Precision rotary mowing, multi-angle string trimming, blade concrete edging, hardscape air blow-off.',
      basePrice: 120
    },
    {
      name: 'Aeration & Overseeding',
      tag: 'Agronomic Health',
      description: 'Bi-annual core mechanical extraction with certified drought-tolerant Tall Fescue or Bermuda overseed.',
      basePrice: 50
    },
    {
      name: 'Seasonal Leaf Removal',
      tag: 'Fall / Winter',
      description: 'High-velocity blowers and truck-mounted vacuum mulch loader clearing all beds, turf, and gutters.',
      basePrice: 40
    },
    {
      name: 'Custom Sod Installation',
      tag: 'Instant Turf',
      description: 'Laser-level topsoil grading, soil amendment, and freshly harvested NC Zoysia/Bermuda/Fescue sod.',
      basePrice: 85
    },
    {
      name: 'Hardwood Mulch Replenishment',
      tag: 'Spring Enhancement',
      description: 'Deep 3-inch spade trenching of beds and triple-shredded premium organic brown hardwood mulch.',
      basePrice: 35
    },
    {
      name: 'Shrub & Ornamental Pruning',
      tag: 'Horticultural Care',
      description: 'Selective hand shaping and structural seasonal trimming of crape myrtles, boxwoods, and shrubs.',
      basePrice: 30
    }
  ];

  const toggleService = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  // Real-Time Price Calculation
  const calculateEstimate = () => {
    let baseSum = 0;
    availableServices.forEach((s) => {
      if (formData.services.includes(s.name)) {
        baseSum += s.basePrice;
      }
    });
    return Math.round(baseSum * formData.lotMultiplier);
  };

  const estimatedTotal = calculateEstimate();

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      // Step 4 final submission: Trigger Automation Pipeline
      setIsModalOpen(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Funnel Progress Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-semibold">
          <span className="text-turf-bright flex items-center gap-1.5 uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-turf-bright" />
            Programmatic Quote Engine
          </span>
          <span className="text-sand-800">
            Step {step} of 4: {
              step === 1 ? 'Scope Identification' :
              step === 2 ? 'Service Layering' :
              step === 3 ? 'Geographic Pre-Qualification' : 'Contact Core & SMS Route'
            }
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-sand-200 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-brand-600 via-turf-bright to-turf-lime rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step Indicator Pills */}
        <div className="grid grid-cols-4 gap-2 mt-3 text-center">
          {[
            { num: 1, label: '1. Scope' },
            { num: 2, label: '2. Services' },
            { num: 3, label: '3. Geofence' },
            { num: 4, label: '4. Dispatch' },
          ].map((item) => (
            <div
              key={item.num}
              onClick={() => {
                if (item.num < step) setStep(item.num);
              }}
              className={`py-1.5 px-1 rounded-lg text-xs font-semibold transition-all ${
                item.num === step
                  ? 'bg-brand-900 text-white shadow-sm'
                  : item.num < step
                  ? 'bg-turf-bright/20 text-brand-700 cursor-pointer'
                  : 'bg-sand-100 text-sand-800'
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Card Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-sand-200/90 overflow-hidden">
        {/* Dynamic Estimated Value Header Banner */}
        <div className="bg-sand-100/90 px-6 py-4 border-b border-sand-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-turf-bright" />
            <span className="text-xs sm:text-sm font-semibold text-sand-800">
              Selected: <strong className="text-sand-900">{formData.lotSize}</strong> • {formData.services.length} Services
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-xs text-sand-800 font-medium">Estimated Range:</span>
            <span className="text-xl sm:text-2xl font-black text-brand-700">
              ${estimatedTotal}
              <span className="text-xs font-normal text-sand-800"> / mo</span>
            </span>
          </div>
        </div>

        <form onSubmit={handleNextStep} className="p-6 sm:p-10">
          {/* STEP 1: SCOPE IDENTIFICATION */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
                  Step 1 • Lot Classification
                </span>
                <h3 className="text-2xl font-serif font-bold text-sand-900 mt-1">
                  Identify Your Property Classification
                </h3>
                <p className="text-sm text-sand-800 mt-1">
                  Select your residential or commercial parcel footprint to calibrate crew equipment scaling.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {lotOptions.map((option) => {
                  const isSelected = formData.lotSize === option.title;
                  return (
                    <div
                      key={option.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          lotSize: option.title,
                          lotMultiplier: option.multiplier
                        })
                      }
                      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-turf-bright bg-brand-50/70 shadow-md ring-2 ring-turf-bright/30'
                          : 'border-sand-200 hover:border-sand-300 hover:bg-sand-50/50'
                      }`}
                    >
                      {option.recommended && (
                        <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-turf-bright text-white text-[10px] font-bold uppercase tracking-wider shadow">
                          Most Common
                        </span>
                      )}

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-sand-900">{option.title}</h4>
                          <p className="text-xs text-turf-light font-semibold mt-0.5">{option.subtitle}</p>
                          <p className="text-xs text-sand-800 mt-1">{option.dimension}</p>
                        </div>

                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-turf-bright bg-turf-bright text-white'
                              : 'border-sand-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-sand-200/80 text-[11px] text-sand-800 flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-turf-bright" />
                        <span>Calibrated for Scag 48"-61" zero-turn deck routers</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SERVICE LAYERING */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
                  Step 2 • Multi-Select Layering
                </span>
                <h3 className="text-2xl font-serif font-bold text-sand-900 mt-1">
                  Layer Your Turf & Property Care Deliverables
                </h3>
                <p className="text-sm text-sand-800 mt-1">
                  Stack weekly precision mowing with bi-annual aeration, seasonal leaf vacuuming, or sod installations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {availableServices.map((service) => {
                  const isChecked = formData.services.includes(service.name);
                  return (
                    <div
                      key={service.name}
                      onClick={() => toggleService(service.name)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isChecked
                          ? 'border-brand-600 bg-brand-50/70 shadow-sm'
                          : 'border-sand-200 hover:border-sand-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-200 text-sand-800">
                            {service.tag}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                              isChecked
                                ? 'bg-brand-700 border-brand-700 text-white'
                                : 'border-sand-300'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <h4 className="text-base font-bold text-sand-900">{service.name}</h4>
                        <p className="text-xs text-sand-800 mt-1 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-sand-200/60 flex items-center justify-between text-xs">
                        <span className="text-sand-800">Additive Weight:</span>
                        <span className="font-bold text-brand-700">~${Math.round(service.basePrice * formData.lotMultiplier)}/mo</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: GEOGRAPHIC PRE-QUALIFICATION */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
                  Step 3 • Inline Address Validation
                </span>
                <h3 className="text-2xl font-serif font-bold text-sand-900 mt-1">
                  Geographic Pre-Qualification
                </h3>
                <p className="text-sm text-sand-800 mt-1">
                  We restrict routes to Raleigh, Wake Forest, Cary, Apex, and Morrisville municipal bounds to guarantee 180-second response SLA.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                    Property Street Address
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-sand-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1120 Falls River Ave"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                      Wake County City / Municipality
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium bg-white"
                    >
                      <option value="Raleigh">Raleigh, NC</option>
                      <option value="Wake Forest">Wake Forest, NC</option>
                      <option value="Cary">Cary, NC</option>
                      <option value="Apex">Apex, NC</option>
                      <option value="Morrisville">Morrisville, NC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                      ZIP Code (Geofence Check)
                    </label>
                    <input
                      type="text"
                      maxLength={5}
                      required
                      placeholder="e.g. 27615, 27587, 27519"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Inline Validation Banner */}
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    geoValidation.isValid
                      ? 'bg-brand-50 border-turf-bright/40 text-brand-900'
                      : 'bg-amber-50 border-amber-300 text-amber-900'
                  }`}
                >
                  {geoValidation.isValid ? (
                    <CheckCircle2 className="w-4 h-4 text-turf-bright shrink-0 mt-0.5" />
                  ) : (
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong className="block text-xs font-bold">
                      {geoValidation.isValid ? 'Route Pre-Qualification Verified' : 'Geofence Advisory'}
                    </strong>
                    <span>{geoValidation.message}</span>
                  </div>
                </div>

                {/* Preferred Start Window */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                    Target Commencement Date
                  </label>
                  <select
                    value={formData.preferredStart}
                    onChange={(e) => setFormData({ ...formData, preferredStart: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium bg-white"
                  >
                    <option value="Immediately / Next Available Route">Immediately / Next Available Weekly Route</option>
                    <option value="Within 2 Weeks">Within 2 Weeks</option>
                    <option value="Start of Next Month">Beginning of Next Month</option>
                    <option value="Spring Seasonal Booking">Spring 2026 Advance Reservation</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT CORE & REAL-TIME DISPATCH */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-turf-bright">
                  Step 4 • Contact Core & Speed-to-Lead
                </span>
                <h3 className="text-2xl font-serif font-bold text-sand-900 mt-1">
                  Direct Field Routing Dispatch
                </h3>
                <p className="text-sm text-sand-800 mt-1">
                  Upon submission, Zapier webhook routes parameters directly to the business owner via prioritized SMS. 180-second response SLA.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                    Homeowner / Business Full Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-sand-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                      Verified Mobile Phone (For Priority SMS)
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-sand-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (919) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                      Email Address (For Written Proposal PDF)
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-sand-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. marcus@trianglehealth.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1.5">
                    Property Notes (Gate code, pets, steep drainage slope, specific requests)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Back fence has a 48-inch gate latch, Golden Retriever kept indoors on mow days."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                  />
                </div>

                {/* Final Review Payload Box */}
                <div className="bg-sand-50 p-4 rounded-xl border border-sand-200 text-xs space-y-1.5">
                  <div className="font-bold text-sand-900 uppercase tracking-wider">
                    Automated Webhook Payload Summary:
                  </div>
                  <div className="text-sand-800">
                    • <strong>Lot Classification:</strong> {formData.lotSize} ({formData.streetAddress || 'Address Pending'}, {formData.city}, NC {formData.zipCode})
                  </div>
                  <div className="text-sand-800">
                    • <strong>Selected Services:</strong> {formData.services.join(', ')}
                  </div>
                  <div className="text-brand-700 font-bold">
                    • <strong>Estimated Recurring Value:</strong> ~${estimatedTotal}/month
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Form Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-sand-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-sand-300 text-sand-800 hover:text-sand-900 hover:bg-sand-100 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Step {step - 1}</span>
              </button>
            ) : (
              <div className="text-xs text-sand-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-turf-bright" />
                <span>100% Free • No commitment • NC Licensed</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-turf-bright to-brand-600 hover:from-turf-lime hover:to-turf-bright text-white hover:text-brand-950 font-bold text-sm shadow-lg shadow-brand-900/10 hover:shadow-glow transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{step < 4 ? `Continue to Step ${step + 1}` : 'Trigger Speed-to-Lead Webhook'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* The Automation Pipeline Modal */}
      <SmsDispatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quoteData={{
          ...formData,
          estimatedTotal
        }}
      />
    </div>
  );
}
