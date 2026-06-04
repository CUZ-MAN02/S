import { Users, Sun, Home, Umbrella, Volume2, Sofa, ChevronLeft, ChevronRight, X, Droplets } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const galleryImages = [
  "/immages/WhatsApp Image 2026-01-20 at 23.38.17 (1).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.17 (3).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.17 (4).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.18 (4).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.18 (2).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.17.jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.19.jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.19 (1).jpeg",
  "/immages/WhatsApp Image 2026-01-20 at 23.38.18 (1).jpeg"
];

export default function Boat() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  const specs = [
    { icon: Users, text: t('boat.spec.guests') },
    { icon: Sun, text: t('boat.spec.sunpad') },
    { icon: Home, text: t('boat.spec.cabin') },
    { icon: Umbrella, text: t('boat.spec.awning') },
    { icon: Volume2, text: t('boat.spec.audio') },
    { icon: Sofa, text: t('boat.spec.relax') },
    { icon: Droplets, text: t('boat.spec.shower') },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 880;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-amber-400">{t('boat.title')}</h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t('boat.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl md:translate-x-4">
            <img
              src="/immages/R.jfif"
              alt="Riva Bravo 38"
              className="w-full h-[320px] sm:h-[500px] object-cover object-center sm:object-[70%_center]"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-amber-400">
              {t('boat.features.title')}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-amber-400/20">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <p className="text-base md:text-lg text-slate-200 pt-1 md:pt-2">{spec.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 relative group">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-amber-400">
            {t('boat.gallery.title')}
          </h3>
          
          <div className="relative flex items-center">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div 
              ref={scrollRef} 
              className="flex gap-4 overflow-x-auto no-scrollbar py-8 pl-3 pr-0 snap-x w-full justify-start scroll-px-3"
            >
              {galleryImages.map((src, index) => (
                <div key={index} className="relative flex-shrink-0 snap-center">
                  <img
                    src={src}
                    alt={`Riva Bravo 38 Gallery ${index + 1}`}
                    className={`h-36 md:h-52 w-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:z-20 cursor-zoom-in relative ${
                      index === 0 ? 'origin-right' : index === galleryImages.length - 1 ? 'origin-left' : 'origin-center'
                    }`}
                    onClick={() => setLightboxIndex(index)}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out group"
            onClick={() => setLightboxIndex(null)}
          >
              <div className="relative max-h-[90vh] max-w-[95vw] md:max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryImages[lightboxIndex]}
                  alt="Preview"
                  className="max-h-[85vh] md:max-h-[90vh] rounded-xl shadow-2xl mx-auto"
                />
                
                {/* Frecce interne */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev: number | null) => {
                      if (prev === null) return 0;
                      return (prev - 1 + galleryImages.length) % galleryImages.length;
                    });
                  }}
                  className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all z-50"
                  aria-label="Precedente"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev: number | null) => {
                      if (prev === null) return 0;
                      return (prev + 1) % galleryImages.length;
                    });
                  }}
                  className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all z-50"
                  aria-label="Successiva"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <button
                  className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
          </div>
        )}
      </div>
    </section>
  );
}
