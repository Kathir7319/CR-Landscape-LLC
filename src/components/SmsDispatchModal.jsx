import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, MessageSquare, Zap, Clock, Shield, Sparkles, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SmsDispatchModal({ isOpen, onClose, quoteData }) {
  const [secondsRemaining, setSecondsRemaining] = useState(180);
  const [simulatedReplySent, setSimulatedReplySent] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSecondsRemaining(180);
      setSimulatedReplySent(false);
      return;
    }

    // Trigger celebratory confetti on modal open
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2d7a4b', '#70e000', '#d4af37', '#ffffff']
      });
    } catch (e) {
      // safe fallback
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-2xl border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden text-white animate-in zoom-in-95 duration-200"
        style={{ backgroundColor: '#07190f' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-brand-800 text-brand-300 hover:text-white hover:bg-brand-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-turf-bright to-brand-600 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-black/30 text-turf-lime text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-turf-lime" />
              Automated Speed-to-Lead Webhook Triggered
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Lead Dispatched Directly to Business Owner
          </h2>
          <p className="text-sm text-brand-100 mt-1 max-w-xl">
            Bypassing email clutter: Zapier webhook has structured your parameters and dispatched a priority SMS to CR Landscape operations.
          </p>
        </div>

        {/* Response Countdown Strip */}
        <div className="bg-brand-950/90 border-y border-brand-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-turf-bright/20 border border-turf-lime/40 flex items-center justify-center text-turf-lime">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-brand-300 tracking-wider">
                180-Second Guaranteed SLA
              </div>
              <div className="text-xs text-brand-200">
                Live Response Window:
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-2 bg-brand-900 px-4 py-2 rounded-xl border border-turf-bright/30">
            <span className="text-2xl sm:text-3xl font-mono font-black text-turf-lime tracking-wider">
              {formattedTime}
            </span>
            <span className="text-xs text-brand-300 font-mono">REMAINING</span>
          </div>
        </div>

        {/* Realistic Twilio / Smartphone SMS Preview */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-turf-lime" />
            <span>Simulated Twilio SMS Received on Owner's iPhone</span>
          </div>

          <div
            className="rounded-2xl p-4 sm:p-5 border border-emerald-700/60 shadow-inner font-sans"
            style={{ backgroundColor: '#030c06' }}
          >
            <div className="flex items-center justify-between border-b border-brand-800 pb-2 mb-3 text-[11px] text-brand-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-turf-lime"></span>
                <span className="font-bold text-brand-200">TWILIO DISPATCH GATEWAY</span>
              </div>
              <span>Just Now • High Priority</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-brand-100">
              <div className="text-turf-lime font-bold">
                🚨 NEW HIGH-INTENT QUOTE REQUEST (RALEIGH/WAKE REGION)
              </div>
              <div className="bg-brand-900/80 p-3 rounded-lg border border-brand-700 text-xs space-y-1">
                <div><strong className="text-white">Client:</strong> {quoteData.fullName || "Prospective Homeowner"}</div>
                <div><strong className="text-white">Phone:</strong> {quoteData.phone || "(919) 555-0199"} (SMS Enabled)</div>
                <div><strong className="text-white">Address:</strong> {quoteData.address || "Falls River, Raleigh, NC 27615"}</div>
                <div><strong className="text-white">Property Scope:</strong> {quoteData.lotSize || "0.25 - 0.50 Acre"}</div>
                <div>
                  <strong className="text-white">Selected Services:</strong>{" "}
                  <span className="text-gold-light">
                    {quoteData.services && quoteData.services.length > 0
                      ? quoteData.services.join(", ")
                      : "Standard Mowing, Aeration/Overseeding"}
                  </span>
                </div>
                <div><strong className="text-white">Estimated Value:</strong> ${quoteData.estimatedTotal || 199}/mo</div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-brand-400">
              <span>Status: Routed to Lead Tech via Webhook</span>
              <span className="text-turf-lime flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Parsed in 0.42s
              </span>
            </div>
          </div>

          {/* Interactive Simulation Action */}
          <div className="bg-brand-800/60 p-4 rounded-2xl border border-brand-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-white">What Happens Next?</h4>
              <p className="text-xs text-brand-200 mt-0.5">
                Our field manager examines parcel boundaries via GIS satellite mapping and confirms your route slot.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {!simulatedReplySent ? (
                <button
                  type="button"
                  onClick={() => setSimulatedReplySent(true)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-turf-bright hover:bg-turf-lime hover:text-brand-950 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Simulate Owner Fast-Reply</span>
                </button>
              ) : (
                <div className="px-4 py-2.5 rounded-xl bg-brand-700 text-turf-lime text-xs font-bold flex items-center gap-1.5 border border-turf-bright/40">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Owner Texted: "Reviewing your parcel now!"</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-brand-950 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-300">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-gold" />
            <span>Direct Operations Line: (919) 555-8873</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-turf-lime underline font-semibold"
          >
            Close & Return to Website
          </button>
        </div>
      </div>
    </div>
  );
}
