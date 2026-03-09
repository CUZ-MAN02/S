import { Sparkles, User, Sofa, Settings } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "A bordo di un'icona del lusso italiano",
    description: "Il Riva Bravo 38 è un simbolo di eleganza senza tempo, riconosciuto in tutto il mondo.",
  },
  {
    icon: User,
    title: "Skipper professionista",
    description: "Conoscenza profonda del territorio e delle calette più esclusive, per un'esperienza sicura e rilassante.",
  },
  {
    icon: Sofa,
    title: "Comfort & design",
    description: "Ampi spazi prendisole, zone d'ombra e dettagli curati per vivere il mare con stile.",
  },
  {
    icon: Settings,
    title: "Esperienza su misura",
    description: "Ogni uscita è personalizzata in base ai tuoi desideri, ai tempi e alle condizioni del mare.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Perché scegliere questa esperienza
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Scopri la Sardegna dal suo punto di vista migliore: il mare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
