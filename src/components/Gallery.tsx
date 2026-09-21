import React, { useState } from 'react';
import { galleryItems } from '../data/gymData.ts';
import { GalleryItem } from '../types.ts';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Equipment', 'Classes', 'Interior', 'Recovery'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#FF4433] text-xs font-bold uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Experience</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase">
              The Training Floor & Facilities
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl font-light">
              Step inside 15,000 square feet of curated iron, functional rigs, and high-performance recovery.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF4433] text-white shadow-md shadow-[#FF4433]/30'
                    : 'bg-[#181818] text-gray-400 hover:text-white border border-[#2B2B2B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-[#262626] cursor-pointer bg-[#141414] hover:border-[#FF4433]/70 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF4433]/15"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-200">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF4433] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-2xl text-white uppercase tracking-wide group-hover:text-[#FF4433] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#FF4433] text-white transition z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-[#FF4433] text-white transition z-50 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-[#FF4433] text-white transition z-50 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain border border-[#333] shadow-2xl"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="px-2.5 py-0.5 rounded bg-[#FF4433] text-white text-[10px] font-bold uppercase tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mt-1">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
