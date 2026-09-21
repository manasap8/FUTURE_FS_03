import React, { useState } from 'react';
import { testimonials } from '../data/gymData.ts';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Proven Transformations</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
            Forged In Bengaluru: Member Stories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
            Real people. Relentless effort. Irrefutable physical and psychological breakthroughs.
          </p>
          <div className="w-20 h-1 bg-[#FF4433] mt-4 rounded-full" />
        </div>

        {/* Reviews Grid for Desktop / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              className="relative rounded-2xl bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between hover:border-[#FF4433]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF4433]/10"
            >
              {/* Quote Mark Background Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FF4433] mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1F1F1F] border border-[#333] text-[11px] font-semibold text-[#FF5E50] mb-4">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{test.achievement}</span>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#242424] flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF4433]/50"
                />
                <div>
                  <h3 className="font-heading text-xl text-white tracking-wide uppercase">
                    {test.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">{test.role}</p>
                  <p className="text-[10px] text-gray-500 font-semibold">{test.membershipDuration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Average Austin Member Rating: <span className="text-[#FF4433] font-bold">4.96 / 5.0</span> across 380+ Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
};
