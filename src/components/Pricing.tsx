import React, { useState } from 'react';
import { pricingPlans } from '../data/gymData.ts';
import { Check, X, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Memberships</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
            Invest In Your Strength
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
            Zero hidden initiation fees. Zero long-term contract lock-ins. Cancel or freeze anytime with 14 days notice.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center bg-[#151515] p-1.5 rounded-xl border border-[#2B2B2B]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF4433] text-white shadow-md shadow-[#FF4433]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#FF4433] text-white shadow-md shadow-[#FF4433]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-[#FF4433] shadow-2xl shadow-[#FF4433]/20 lg:-translate-y-3'
                    : 'bg-[#141414] border border-[#262626] hover:border-[#444]'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF4433] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-3xl text-white uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[10px] font-semibold text-gray-400 px-2 py-0.5 rounded bg-[#1F1F1F] border border-[#333]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-[#262626]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-light text-gray-400">₹</span>
                      <span className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        / month
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-[11px] text-[#FF5E50] mt-1 font-semibold">
                        Billed annually (₹{(price * 12).toLocaleString('en-IN')}/yr). Save ₹{((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString('en-IN')}/year.
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-6 flex flex-col gap-3.5">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Included Privileges:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="p-0.5 rounded-full bg-[#FF4433]/20 text-[#FF4433] shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="p-0.5 rounded-full bg-[#222] text-gray-600 shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span
                          className={`text-xs ${
                            feature.included ? 'text-gray-200' : 'text-gray-600 line-through'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button CTA */}
                <div className="mt-8 pt-6 border-t border-[#262626]">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl font-heading text-xl uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#FF4433] hover:bg-[#FF5E50] text-white shadow-xl shadow-[#FF4433]/30 hover:shadow-[#FF4433]/50'
                        : 'bg-[#1E1E1E] hover:bg-white/10 text-white border border-[#333]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10px] text-gray-500 mt-2.5">
                    100% Risk-Free 14-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate / Student / First Responder Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-lg bg-[#1F1F1F] text-[#FF4433]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                First Responders, Military & Student Discounts
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Active service personnel and verified students receive an ongoing 15% discount on all plans.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Discount Inquiry')}
            className="shrink-0 px-5 py-2.5 rounded-lg border border-[#333] hover:border-[#FF4433] text-xs font-bold text-gray-200 uppercase tracking-wider transition hover:text-white"
          >
            Inquire For Verification
          </button>
        </div>
      </div>
    </section>
  );
};
