export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Prezzi</h2>
        <p className="text-2xl text-[#FFF9C4] font-semibold mb-8">
          Esperienze su misura
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition">
            <h3 className="text-xl font-bold mb-2 text-[#FFF9C4]">Bassa stagione</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">1000€</p>
            <p className="text-sm text-slate-300">Carburante escluso</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition">
            <h3 className="text-xl font-bold mb-2 text-[#FFF9C4]">Alta stagione</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">1300€</p>
            <p className="text-sm text-slate-300">Carburante escluso</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition">
            <h3 className="text-xl font-bold mb-2 text-[#FFF9C4]">Tramonto</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">500€</p>
            <p className="text-sm text-slate-300">Carburante escluso</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-xl text-[#FFFDF0] leading-relaxed italic">
            I prezzi variano in base alla stagione e ai servizi richiesti. Richiedi disponibilità per ricevere una proposta personalizzata, senza impegno.
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Richiedi disponibilità
        </button>
      </div>
    </section>
  );
}
