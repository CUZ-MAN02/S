import { Check, Plus } from 'lucide-react';

const included = [
  "Skipper profesionista",
  "Pranzo a bordo",
  "Aperitivo di benvenuto",
  "SUP e attrezzatura snorkeling",
  "Assicurazione completa",
  "Attrezzatura di bordo",
];

const extras = [
  "Catering",
  "Premium Wine e Champagne",
  "Hostess/Barman",
  "Itinerari dedicati",
  "Eventi speciali",
];

export default function Inclusions() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Cosa è incluso
          </h2>
          <p className="text-xl text-[#1e3a8a]">
            Tutto ciò che serve per rilassarti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#FFFDF0] rounded-2xl shadow-lg p-8 border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-blue-500" />
              Incluso
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFFDF0] rounded-2xl shadow-lg p-8 border-2 border-amber-500">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
              <Plus className="w-6 h-6 text-amber-500" />
              Extra su richiesta
            </h3>
            <ul className="space-y-4">
              {extras.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
