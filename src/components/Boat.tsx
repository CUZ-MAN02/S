import { Users, Sun, Home, Umbrella, Volume2, Sofa, ChevronLeft, ChevronRight, X, Droplets } from 'lucide-react';
import { useRef, useState } from 'react';

const specs = [
  { icon: Users, text: "Fino a 10 ospiti a bordo" },
  { icon: Sun, text: "Ampio prendisole anteriore e posteriore" },
  { icon: Home, text: "Cabina interna e bagno" },
  { icon: Umbrella, text: "Tendalino per le ore più calde" },
  { icon: Volume2, text: "Impianto audio di qualità" },
  { icon: Sofa, text: "Spazi pensati per il massimo relax" },
  { icon: Droplets, text: "Doccetta esterna" },
];

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">La Barca</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Il Riva Bravo 38 unisce prestazioni fluide, comfort e un design iconico.
            Perfetto per chi desidera un'esperienza esclusiva, elegante e curata in ogni dettaglio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl md:translate-x-4">
            <img
              src="/immages/R.jfif"
              alt="Riva Bravo 38"
              className="w-full h-[500px] object-cover"
              style={{ objectPosition: '70% center' }}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-amber-400">
              Caratteristiche principali
            </h3>
            <div className="space-y-6">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-amber-400/20">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <p className="text-lg text-slate-200 pt-2">{spec.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 relative group">
          <h3 className="text-3xl font-bold mb-8 text-center text-amber-400">
            Galleria
          </h3>
          
          <div className="relative flex items-center">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div ref={scrollRef} className="flex gap-4 overflow-visible overflow-x-auto no-scrollbar py-10 snap-x w-full">
              {galleryImages.map((src, index) => (
                <div key={index} className="relative flex-shrink-0 snap-center group/image">
                  <img
                    src={src}
                    alt={`Riva Bravo 38 Gallery ${index + 1}`}
                    className="h-48 w-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-125 group-hover/image:scale-125 group-hover/image:z-20 hover:shadow-2xl relative z-10 cursor-zoom-in"
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev: number | null) => {
                    if (prev === null) return 0;
                    return (prev - 1 + galleryImages.length) % galleryImages.length;
                  });
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryImages[lightboxIndex]}
                  alt="Preview"
                  className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                />
                <button
                  className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev: number | null) => {
                    if (prev === null) return 0;
                    return (prev + 1) % galleryImages.length;
                  });
                }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Successiva"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
