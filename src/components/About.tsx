import React, { useState, useEffect, useRef } from 'react';
import { gymStats, gymInfo } from '../data/gymData.ts';
import { CheckCircle2, Award, Zap, Dumbbell } from 'lucide-react';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    members: 0,
    experience: 0,
    trainers: 0,
    classes: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1800; // ms
          const steps = 40;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(currentStep / steps, 1);
            // Ease-out curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              members: Math.floor(easeProgress * 500),
              experience: Math.floor(easeProgress * 12),
              trainers: Math.floor(easeProgress * 15),
              classes: Math.floor(easeProgress * 35),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                members: 500,
                experience: 12,
                trainers: 15,
                classes: 35,
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] relative overflow-hidden"
    >
      {/* Subtle background ambient light */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#FF4433]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>The IronForge Philosophy</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
            Built On Heavy Metal, Science, & Unbroken Grit.
          </h2>
          <div className="w-20 h-1 bg-[#FF4433] mt-4 rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with overlapping badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="Intense athlete lifting at IronForge Gym"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] shadow-xl">
                <p className="text-sm italic text-gray-200">
                  "We stripped away the wellness fluff and built an authentic house of strength. If you want results, you belong here."
                </p>
                <p className="text-xs font-bold text-[#FF4433] uppercase tracking-wider mt-2">
                  — Marcus Vance, Founder & Head Director
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#FF4433] text-white p-4 rounded-xl shadow-xl shadow-[#FF4433]/30 flex-col items-center justify-center text-center rotate-3 hover:rotate-0 transition-transform">
              <Award className="w-7 h-7 mb-1" />
              <span className="font-heading text-xl tracking-wider uppercase leading-tight">Bengaluru's #1</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Strength Club</span>
            </div>
          </div>

          {/* Right Column: Mission Story & Core Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-subheading text-2xl sm:text-3xl text-white font-semibold tracking-wide uppercase leading-snug">
              We Didn’t Build Another Commercial Box. <br />
              <span className="text-[#FF4433]">We Built An Arena For High Achievers.</span>
            </h3>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Founded in 2014 in the heart of Bengaluru, IronForge Fitness began with a singular obsession: 
              to construct the ultimate training haven where serious lifters, competitive athletes, and ambitious 
              beginners could execute without fighting over plastic machines or enduring deafening corporate sales pitches.
            </p>

            <p className="mt-4 text-base text-gray-400 leading-relaxed font-light">
              We provide 15,000 square feet of competition-grade barbells, calibrated steel plates, custom rigs, 
              sprint turf, and a contrast thermal recovery suite. Every coach on our floor holds collegiate-level 
              credentials and walks the walk alongside you.
            </p>

            {/* Key Differentiators */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#141414] border border-[#222]">
                <CheckCircle2 className="w-5 h-5 text-[#FF4433] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Zero Wait Times</h4>
                  <p className="text-xs text-gray-400 mt-0.5">14 custom power racks and 8 lifting platforms guarantee your session never stalls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#141414] border border-[#222]">
                <CheckCircle2 className="w-5 h-5 text-[#FF4433] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contrast Suite</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Direct access to clean 42°F cold plunges and full Finnish cedar saunas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#141414] border border-[#222]">
                <CheckCircle2 className="w-5 h-5 text-[#FF4433] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Coach Supervised</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Floor directors always available for form spot-checks and bar-path reviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#141414] border border-[#222]">
                <CheckCircle2 className="w-5 h-5 text-[#FF4433] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bengaluru Community</h4>
                  <p className="text-xs text-gray-400 mt-0.5">An ego-free brotherhood and sisterhood of athletes pushing each other daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row of 4 Animated Stat Counters */}
        <div className="mt-20 pt-12 border-t border-[#222] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {gymStats.map((stat) => {
            const countVal = counts[stat.id] ?? stat.value;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FF4433]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF4433]/10"
              >
                <div className="font-heading text-5xl sm:text-6xl text-white tracking-wider flex items-baseline group-hover:text-[#FF4433] transition-colors">
                  <span>{countVal}</span>
                  <span className="text-[#FF4433] ml-0.5">{stat.suffix}</span>
                </div>
                <h4 className="mt-2 text-sm sm:text-base font-bold text-gray-200 uppercase tracking-wider">
                  {stat.label}
                </h4>
                <p className="mt-1 text-xs text-gray-400 leading-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
