import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <span className="px-3.5 py-1 rounded-full bg-turf-bright/10 text-turf-bright text-xs font-bold uppercase tracking-wider border border-turf-bright/20">
          Direct Operations Communication
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sand-900 mt-4 max-w-4xl mx-auto">
          Contact Our Raleigh Dispatch Team
        </h1>
        <p className="text-base sm:text-lg text-sand-800 mt-4 max-w-2xl mx-auto">
          Have a question about routing, emergency storm cleanup, or custom landscaping contracts? We are here to help.
        </p>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Direct Info Cards */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Direct Phone & SMS</h3>
              <p className="text-xs text-sand-800 mt-1">Available 7am - 6:30pm Mon-Sat</p>
              <a
                href="tel:9195558873"
                className="mt-3 block text-base font-bold text-brand-700 hover:text-turf-bright"
              >
                (919) 555-8873 (Dispatch)
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Email Proposals</h3>
              <p className="text-xs text-sand-800 mt-1">Send blueprints, plans & RFPs</p>
              <a
                href="mailto:quotes@crlandscapenc.com"
                className="mt-3 block text-sm font-bold text-brand-700 hover:text-turf-bright break-all"
              >
                quotes@crlandscapenc.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-turf-bright mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-sand-900">Operations Hub</h3>
              <p className="text-xs text-sand-800 mt-1">
                Falls of Neuse Rd, Raleigh, NC 27615
              </p>
              <p className="text-[11px] text-brand-700 font-semibold mt-2">
                Wake County Central Dispatch
              </p>
            </div>

            {/* Emergency Alert Box */}
            <div className="bg-amber-50 p-5 rounded-3xl border border-amber-200 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Storm Debris Emergency Hotline</span>
              </div>
              <p className="leading-relaxed">
                Severe thunderstorm or ice storm damage on your property? Existing maintenance clients receive priority 4-hour limb and branch clearance.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-sand-200 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-sand-900 mb-2">
              Send a Message to Operations
            </h3>
            <p className="text-xs sm:text-sm text-sand-800 mb-6">
              Fill out the form below or use our <strong className="text-brand-700">Programmatic Quote Funnel</strong> for instant automated estimates.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-brand-50 rounded-2xl border border-turf-bright/40 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-turf-bright mx-auto" />
                <h4 className="text-xl font-bold text-sand-900">Message Dispatched!</h4>
                <p className="text-sm text-sand-800 max-w-md mx-auto">
                  Thank you, {contactForm.name || 'valued neighbor'}. Our operations team has received your message and will reply within 180 seconds during standard business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-900 text-white text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (919) 555-0144"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@wakeforestnc.gov"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium bg-white"
                    >
                      <option value="General Inquiry">General Maintenance Question</option>
                      <option value="Sod Installation RFP">Custom Sod Installation RFP</option>
                      <option value="Commercial / HOA">Commercial / HOA Contract</option>
                      <option value="Aeration / Overseed">Fall Aeration & Overseeding</option>
                      <option value="Storm Debris Clearance">Emergency Storm Debris</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-800 mb-1">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your property address, lawn conditions, or specific questions..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-turf-bright to-brand-600 hover:from-turf-lime hover:to-turf-bright text-white hover:text-brand-950 font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Message to Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-turf-bright">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-serif font-bold text-sand-900 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sand-900 hover:text-brand-700 text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-turf-bright shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sand-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-sand-800 leading-relaxed border-t border-sand-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
