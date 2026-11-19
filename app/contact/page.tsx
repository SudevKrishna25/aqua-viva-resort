'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, CheckCircle2, ArrowRight, Compass, Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '2',
    accommodation: 'The Water Villas',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.arrivalDate) {
      setError('Please provide your full name, email, and proposed arrival date.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-darkness text-salt min-h-screen pt-32 pb-24">
      {/* Editorial Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-salt/15">
        <div className="flex items-center gap-2 text-xs font-mono text-shipmate uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>Private Residency Concierge // 08° 14′ S, 115° 09′ E</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-salt leading-[0.95]">
          Residency <span className="font-display-italic text-shipmate">Enquiry</span>
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-sage font-light leading-relaxed">
          Every stay at Aqua Viva is tailored personally. Please share your intended dates and preferences, and our Chief Concierge will respond with an invitation portfolio.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="border border-salt/15 bg-darkness-surface p-5 sm:p-12 space-y-6 shadow-2xl">
                <div className="border-b border-salt/10 pb-4">
                  <h3 className="font-display text-3xl font-light text-salt">
                    Sanctuary Booking Request
                  </h3>
                  <p className="text-xs text-sage mt-1 font-mono">
                    Confidential inquiry transmitted directly to the Private Office.
                  </p>
                </div>

                {error && (
                  <div className="border-l-2 border-red-400 bg-red-950/40 p-3 text-xs text-red-200">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="mt-1.5 w-full border-b border-salt/30 bg-transparent py-2.5 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.vance@residence.com"
                      className="mt-1.5 w-full border-b border-salt/30 bg-transparent py-2.5 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="mt-1.5 w-full border-b border-salt/30 bg-transparent py-2.5 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Accommodation Preference
                    </label>
                    <div className="relative">
                      <select
                        value={formData.accommodation}
                        onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                        className="mt-1.5 w-full appearance-none border-b border-salt/30 bg-darkness py-2.5 text-sm text-salt focus:border-kingtide focus:outline-none"
                      >
                        <option value="The Water Villas">The Water Villas (Overwater)</option>
                        <option value="The Garden Residences">The Garden Residences (Botanical)</option>
                        <option value="The Horizon Suites">The Horizon Suites (Cliffside)</option>
                        <option value="Private Peninsula Buyout">Complete Peninsula Buyout (Private)</option>
                      </select>
                      <Home className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Proposed Arrival *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                        className="mt-1.5 w-full border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
                      />
                      <Calendar className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Proposed Departure
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        className="mt-1.5 w-full border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
                      />
                      <Calendar className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="mt-1.5 w-full appearance-none border-b border-salt/30 bg-darkness py-2.5 text-sm text-salt focus:border-kingtide focus:outline-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3-4">3 — 4 Guests</option>
                        <option value="5-8">5 — 8 Guests</option>
                        <option value="buyout">Peninsula Charter (8+)</option>
                      </select>
                      <Users className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-sage">
                    Concierge Notes & Tailored Desires
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Dietary wishes, private seaplane or helicopter transfer coordination, wellness requests..."
                    className="mt-1.5 w-full border-b border-salt/30 bg-transparent py-2 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-sage font-mono">
                    Direct confidential handling by our private office.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    data-magnetic="true"
                    data-cursor-text="TRANSMIT"
                    className="group inline-flex items-center gap-2 bg-kingtide px-9 py-4 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors shadow-2xl"
                  >
                    <span>{loading ? 'Transmitting...' : 'Submit Residency Request'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="border border-salt/20 bg-darkness-surface p-10 sm:p-16 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-kingtide bg-kingtide/20 text-shipmate">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate">
                  Residency Portfolio Dispatched
                </span>
                <h3 className="mt-2 font-display text-4xl sm:text-5xl font-light text-salt">
                  We Await You at Aqua Viva
                </h3>
                <p className="mx-auto mt-4 max-w-md font-sans text-xs sm:text-sm text-sage leading-relaxed">
                  Thank you, <span className="text-salt font-medium">{formData.name}</span>. Your enquiry for{' '}
                  <span className="text-salt font-medium">{formData.accommodation}</span> has been conveyed directly to our Chief Concierge. An invitation portfolio will reach you at{' '}
                  <span className="text-salt font-medium">{formData.email}</span> within 4 hours.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-salt/30 px-7 py-3 font-mono text-xs uppercase tracking-luxury text-salt hover:bg-salt/10"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Office & Seaplane Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="border border-salt/15 p-8 space-y-6 bg-darkness-surface shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate block">
                Direct Communication
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-shipmate shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-sage font-mono">Residency Enquiries</div>
                    <a href="mailto:concierge@aquaviva-resort.com" className="text-salt hover:text-shipmate transition-colors font-mono">
                      concierge@aquaviva-resort.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-shipmate shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-sage font-mono">Private Office Direct</div>
                    <div className="text-salt font-mono">+1 (800) 892-AQUA // +41 22 819 0920</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-shipmate shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-sage font-mono">Concierge Hours</div>
                    <div className="text-salt">24 Hours / 7 Days — Continuous Watch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival & Coordinates */}
            <div className="border border-salt/15 p-8 space-y-4 bg-darkness-surface shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate block">
                Arrival Logistics
              </span>
              <h4 className="font-display text-2xl font-light text-salt">
                Aviation & Marine Anchorage
              </h4>
              <p className="text-xs text-sage leading-relaxed font-sans">
                Aqua Viva is accessible exclusively by our private fleet of amphibious twin-turboprop seaplanes (45 minutes from international hub) or by private yacht tender to our sheltered deep-water marina basin.
              </p>
              <div className="border-t border-salt/10 pt-3 text-[11px] font-mono text-shipmate">
                ICAO Waypoint: W-AQUA // Coordinates: 08° 14′ S, 115° 09′ E
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
