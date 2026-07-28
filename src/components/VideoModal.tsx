import React from 'react';
import { X, Play, Heart, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonateModal: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenDonateModal
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-stone-900 text-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-white/10 animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
            Charitarth Grassroots Documentary
          </span>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold mt-1">
            "Changing Lives. Creating Opportunities. Building Futures."
          </h3>
        </div>

        {/* Video Frame */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl border border-white/10">
          <iframe
            src="https://www.youtube-nocookie.com/embed/g2fR04z_Ets?autoplay=1"
            title="Charitarth Foundation Rural Impact Story"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>200+ Rural Villages • 15,000+ Children Educated • 12,000+ Women Empowered</span>
          </div>

          <button
            onClick={() => { onClose(); onOpenDonateModal(); }}
            className="px-6 py-2.5 rounded-full bg-[#1B5E20] hover:bg-[#124216] text-white font-bold uppercase shadow-lg flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Support This Movement</span>
          </button>
        </div>
      </div>
    </div>
  );
};
