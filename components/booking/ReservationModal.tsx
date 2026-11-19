'use client';

import React, { useState, useEffect } from 'react';
import { useReservation } from '@/components/providers/ReservationProvider';
import { X, Calendar, Users, Home, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ReservationModal() {
  const { isOpen, selectedVilla, closeReservation } = useReservation();
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

  useEffect(() => {
    if (selectedVilla) {
      setFormData((prev) => ({ ...prev, accommodation: selectedVilla }));
    }
  }, [selectedVilla]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeReservation();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeReservation]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.arrivalDate) {
      setError('Please provide your name, email, and proposed arrival date.');
      return;
    }

    setLoading(true);
    // Simulate luxury concierge dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeReservation();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-darkness/80 backdrop-blur-md transition-opacity duration-500"
        onClick={closeReservation}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-sm border border-salt-dim bg-darkness text-salt shadow-2xl transition-all duration-500">
        {/* Subtle top waterline accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-kingtide to-transparent" />

        {/* Close Button */}
        <button
          onClick={closeReservation}
          className="group absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-salt/20 text-salt transition-colors hover:border-salt hover:bg-salt/10"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-10">
          {!submitted ? (
            <div>
              <div className="mb-8">
                <span className="text-[11px] font-sans uppercase tracking-editorial text-shipmate">
                  Private Sanctuary Reservations
                </span>
                <h3 className="mt-2 font-display text-3xl font-light tracking-wide text-salt sm:text-4xl">
                  Enquire for <span className="font-display-italic text-shipmate">Aqua Viva</span>
                </h3>
                <p className="mt-2 font-sans text-xs tracking-wide text-sage">
                  Each stay is privately curated by our residency concierge. Share your envisioned dates below.
                </p>
              </div>

              {error && (
                <div className="mb-6 border-l-2 border-red-400 bg-red-950/30 p-3 text-xs text-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lady / Lord / Dr. / First Last"
                      className="mt-1 w-full border-b border-salt/30 bg-transparent py-2 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="concierge@residency.com"
                      className="mt-1 w-full border-b border-salt/30 bg-transparent py-2 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="mt-1 w-full border-b border-salt/30 bg-transparent py-2 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Accommodation Sanctuary
                    </label>
                    <div className="relative">
                      <select
                        value={formData.accommodation}
                        onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                        className="mt-1 w-full appearance-none border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
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

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Arrival Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                        className="mt-1 w-full border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
                      />
                      <Calendar className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Departure Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        className="mt-1 w-full border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
                      />
                      <Calendar className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                      Guests
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="mt-1 w-full appearance-none border-b border-salt/30 bg-darkness py-2 text-sm text-salt focus:border-kingtide focus:outline-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3-4">3 — 4 Guests</option>
                        <option value="5-8">5 — 8 Guests</option>
                        <option value="peninsula">Peninsula Group (8+)</option>
                      </select>
                      <Users className="pointer-events-none absolute right-2 top-3 h-4 w-4 text-sage" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-sage">
                    Bespoke Requests & Dietary Wishes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific dietary preferences, private seaplane / yacht transfer, wellness requirements..."
                    className="mt-1 w-full border-b border-salt/30 bg-transparent py-2 text-sm text-salt placeholder-sage/60 focus:border-kingtide focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-sage">
                    Strict privacy ensured. Dedicated response within 4 hours.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-kingtide px-7 py-3 font-sans text-xs uppercase tracking-luxury text-salt transition-all duration-300 hover:bg-kingtide-light shadow-xl"
                  >
                    <span>{loading ? 'Transmitting...' : 'Request Residency'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-kingtide/60 bg-kingtide/20 text-shipmate">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-editorial text-shipmate">
                Sanctuary Enquiry Registered
              </span>
              <h3 className="mt-2 font-display text-3xl font-light text-salt">
                We Await You at Aqua Viva
              </h3>
              <p className="mx-auto mt-4 max-w-md font-sans text-xs leading-relaxed text-sage">
                Thank you, <span className="text-salt font-medium">{formData.name}</span>. Your enquiry for{' '}
                <span className="text-salt font-medium">{formData.accommodation}</span> has been conveyed directly to
                our Head of Concierge. An invitation portfolio and itinerary proposal will reach you at{' '}
                <span className="text-salt font-medium">{formData.email}</span> shortly.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="border border-salt/30 px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-salt transition-colors hover:border-salt hover:bg-salt/10"
                >
                  Return to Discovery
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
