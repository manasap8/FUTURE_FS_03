import React, { useState } from 'react';
import { programs } from '../data/gymData.ts';
import { Program } from '../types.ts';
import { 
  Dumbbell, 
  Flame, 
  Zap, 
  HeartPulse, 
  Target, 
  Users, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Gauge, 
  X 
} from 'lucide-react';

interface ProgramsProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgramForTrial }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Engineered Disciplines</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
              Elite Training Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
              Every regimen at IronForge is anchored in exercise science, periodized progression, 
              and ruthless execution. Find your lane and conquer it.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs uppercase font-bold tracking-widest text-gray-500">
              All Levels Welcomed
            </span>
            <p className="text-sm text-gray-300 font-medium">Coaches modify load & tempo for every athlete</p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => {
            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="group relative rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden hover:border-[#FF4433]/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF4433]/15 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Banner with gradient overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0D0D0D]/90 border border-[#333] text-[#FF4433] shadow-lg group-hover:bg-[#FF4433] group-hover:text-white transition-colors duration-300">
                    {getIcon(program.icon)}
                  </div>

                  {/* Intensity Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-[#333] text-[11px] font-bold uppercase tracking-wider text-gray-200">
                    {program.intensity} Intensity
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#FF4433] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#FF5E50] mt-1 uppercase tracking-wider">
                      {program.tagline}
                    </p>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed font-light">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#222] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-[#FF4433]" />
                      <span>{program.duration}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#FF4433] transition-colors">
                      <span>Details</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-[#2D2D2D] rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header Image */}
            <div className="relative h-56 w-full">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent" />
              
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-gray-300 hover:text-white border border-[#333] transition hover:bg-[#FF4433]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded bg-[#FF4433] text-white text-[11px] font-bold uppercase tracking-wider">
                  Program Deep Dive
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase tracking-wide mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F1F1F] border border-[#333]">
                  <Clock className="w-4 h-4 text-[#FF4433]" />
                  Duration: {selectedProgram.duration}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F1F1F] border border-[#333]">
                  <Gauge className="w-4 h-4 text-[#FF4433]" />
                  Intensity: {selectedProgram.intensity}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Overview & Methodology
                </h4>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {selectedProgram.fullDetails}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Outcomes & Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#1B1B1B] border border-[#282828] text-xs text-gray-200">
                      <Check className="w-4 h-4 text-[#FF4433] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-xs text-gray-400 text-center sm:text-left">
                  Ready to test this program on the gym floor?
                </span>
                <button
                  onClick={() => {
                    const progTitle = selectedProgram.title;
                    setSelectedProgram(null);
                    onSelectProgramForTrial(progTitle);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FF4433] hover:bg-[#FF5E50] text-white font-bold text-sm uppercase tracking-wider transition shadow-lg shadow-[#FF4433]/30"
                >
                  Book Trial Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
