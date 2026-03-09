import { Anchor, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Anchor className="w-12 h-12 text-amber-400" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            SardiniaRent
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
          Vivi il mare della Sardegna a bordo di un'icona senza tempo
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-amber-400">
          Riva Bravo 38
        </h2>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Linee iconiche, comfort assoluto e un'esperienza su misura per te
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Richiedi disponibilità
          </button>
          <button
            onClick={scrollToExperience}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/50 transition-all duration-300"
          >
            Scopri l'esperienza
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
