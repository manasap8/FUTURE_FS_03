import React, { useState, useEffect } from 'react';
import { gymInfo, programs, pricingPlans } from '../data/gymData.ts';
import { ContactFormData } from '../types.ts';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Navigation,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  initialPlan?: string;
  initialProgram?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialPlan, initialProgram }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    program: initialProgram || 'General Inquiry',
    plan: initialPlan || 'Pro Athlete',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, plan: initialPlan }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for pass confirmation.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate real client-side booking/contact submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'General Inquiry',
      plan: 'Pro Athlete',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
            Start Your Journey Today
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
            Drop by for a facility walkthrough, grab your complimentary 1-day pass, or contact our directors.
          </p>
          <div className="w-20 h-1 bg-[#FF4433] mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FF4433]/20 border-2 border-[#FF4433] flex items-center justify-center text-[#FF4433] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase tracking-wide">
                  Pass Reserved Successfully!
                </h3>
                <p className="mt-3 text-base text-gray-300 max-w-md">
                  Thank you, <span className="text-[#FF4433] font-bold">{formData.name}</span>. Your 
                  complimentary 1-Day Trial Pass and VIP facility access credentials have been registered.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] text-xs text-left text-gray-300 max-w-sm w-full space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pass Type:</span>
                    <span className="font-semibold text-white">{formData.plan} / {formData.program}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Confirmation Sent To:</span>
                    <span className="font-semibold text-white truncate max-w-[180px]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Valid at:</span>
                    <span className="font-semibold text-white">Indiranagar, Bengaluru</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-lg bg-[#222] hover:bg-[#2A2A2A] text-white text-xs font-bold uppercase tracking-wider transition"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`https://wa.me/${gymInfo.whatsappRaw}?text=Hi%20IronForge!%20I%20just%20reserved%20a%20pass%20under%20${encodeURIComponent(formData.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#22bf5b] text-white text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Confirm</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    Claim Your Free 1-Day Pass or Message Us
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill out the brief details below and a coach will have your pass waiting at the front desk.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Cole"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#1C1C1C] border text-white placeholder-gray-500 text-sm focus:outline-none transition ${
                      errors.name ? 'border-[#FF4433] focus:border-[#FF4433]' : 'border-[#2E2E2E] focus:border-[#FF4433]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#FF4433] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@domain.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#1C1C1C] border text-white placeholder-gray-500 text-sm focus:outline-none transition ${
                        errors.email ? 'border-[#FF4433] focus:border-[#FF4433]' : 'border-[#2E2E2E] focus:border-[#FF4433]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#FF4433] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98804 12345"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#1C1C1C] border text-white placeholder-gray-500 text-sm focus:outline-none transition ${
                        errors.phone ? 'border-[#FF4433] focus:border-[#FF4433]' : 'border-[#2E2E2E] focus:border-[#FF4433]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#FF4433] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Primary Interest and Membership Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-program" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Primary Interest
                    </label>
                    <select
                      id="contact-program"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                    >
                      <option value="General Facility Tour">General Facility Tour & Lift</option>
                      {programs.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-plan" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Target Membership Plan
                    </label>
                    <select
                      id="contact-plan"
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                    >
                      {pricingPlans.map((pl) => (
                        <option key={pl.id} value={pl.name}>
                          {pl.name} (₹{pl.annualPrice.toLocaleString('en-IN')}–₹{pl.monthlyPrice.toLocaleString('en-IN')}/mo)
                        </option>
                      ))}
                      <option value="Student / Military Discount">Student / Military Verification</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Training Goals or Questions (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking to achieve or ask any questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] text-white placeholder-gray-500 text-sm focus:border-[#FF4433] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FF4433] hover:bg-[#FF5E50] disabled:bg-gray-700 text-white font-heading text-2xl uppercase tracking-wider transition-all shadow-xl shadow-[#FF4433]/25 flex items-center justify-center gap-2 cursor-pointer"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Registering Pass...</span>
                  ) : (
                    <>
                      <span>Claim Free Pass & Submit</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  We respect your privacy. No promotional spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Location, Embedded Map, Hours, Direct Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Contact Box */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide border-b border-[#242424] pb-4">
                Headquarters & Hours
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-[#FF4433] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Gym Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{gymInfo.address}</p>
                  <p className="text-xs text-gray-300">{gymInfo.cityStateZip}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-[#FF4433] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Facility Hours</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{gymInfo.hoursWeekday}</p>
                  <p className="text-xs text-gray-300">{gymInfo.hoursWeekend}</p>
                  <span className="inline-block text-[10px] text-[#FF5E50] font-semibold mt-1">
                    *24/7 keycard entry available for Elite members
                  </span>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-[#FF4433] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Direct Line & WhatsApp</h4>
                  <a
                    href={`tel:${gymInfo.phoneRaw}`}
                    className="text-sm font-semibold text-white hover:text-[#FF4433] transition block mt-0.5"
                  >
                    {gymInfo.phone}
                  </a>
                  <a
                    href={`https://wa.me/${gymInfo.whatsappRaw}?text=Hi%20IronForge%20Gym!%20I'd%20like%20to%20ask%20about%20membership.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-[#FF4433] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">General Inquiries</h4>
                  <a
                    href={`mailto:${gymInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-[#FF4433] transition block mt-0.5"
                  >
                    {gymInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl h-64 sm:h-72 w-full">
              <iframe
                title="IronForge Fitness Bengaluru Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.782012753356!2d77.63228414436735!3d12.975412218447814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7bb7d5d29%3A0xb35a09e0839f9976!2s100%20Feet%20Rd%2C%20HAL%202nd%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay directions badge */}
              <a
                href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-xs font-bold text-white hover:bg-[#FF4433] transition flex items-center gap-1.5 shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
