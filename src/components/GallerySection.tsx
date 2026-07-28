import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Camera, MapPin, X, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Education', 'Employment', 'Entrepreneurship', 'Community', 'Events'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>Grassroots Photo Archives</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Moments of Hope & Action
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Unfiltered images from our field centers, smart classrooms, vocational workshops, and village community meets across India.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Masonry Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs">{item.title}</h4>
                    <p className="text-[10px] text-stone-300">📍 {item.location}</p>
                  </div>
                  <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              <div className="p-6 space-y-1">
                <h4 className="font-bold text-stone-900 text-sm group-hover:text-[#1B5E20] transition-colors">
                  {item.title}
                </h4>
                <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="text-[10px] text-stone-400 font-medium pt-2 border-t border-black/5">
                  📍 {item.location} • {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-stone-900 text-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative space-y-4 animate-in zoom-in-95 border border-white/10">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden max-h-[60vh]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold bg-[#D4AF37] text-stone-900 px-3 py-1 rounded-full">
                {lightboxItem.category}
              </span>
              <h3 className="font-serif-title text-2xl font-bold">{lightboxItem.title}</h3>
              <p className="text-stone-300 text-sm">{lightboxItem.caption}</p>
              <div className="text-xs text-stone-400">
                📍 Location: {lightboxItem.location} • Captured: {lightboxItem.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
