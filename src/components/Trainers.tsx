import React from 'react';
import { trainers } from '../data/gymData.ts';
import { Instagram, Award, Shield, ArrowUpRight } from 'lucide-react';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Master Coaches</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
            Led By Champions. Driven By Science.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
            No clipboard-holding bystanders. Every IronForge coach is an active competitor or 
            exercise physiologist dedicated to your movement safety, power output, and long-term vitality.
          </p>
          <div className="w-20 h-1 bg-[#FF4433] mt-4 rounded-full" />
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden hover:border-[#FF4433]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF4433]/15 flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-80 sm:h-88 w-full overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                {/* Instagram Quick Link Pill */}
                <a
                  href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#FF4433] text-white border border-[#333] transition duration-200 shadow-md flex items-center justify-center group/btn"
                  title={`Follow ${trainer.name} on Instagram`}
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Role Pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#FF4433] text-white text-[10px] font-bold uppercase tracking-wider">
                    {trainer.role.split('&')[0]}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-white tracking-wide uppercase group-hover:text-[#FF4433] transition-colors">
                    {trainer.name}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 font-light leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Certifications and Specialties */}
                <div className="mt-5 pt-4 border-t border-[#222]">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {trainer.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2E2E2E]"
                      >
                        <Award className="w-2.5 h-2.5 text-[#FF4433]" />
                        {cert}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#FF4433] hover:text-[#FF5E50] inline-flex items-center gap-1 transition"
                  >
                    <span>{trainer.instagram}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
