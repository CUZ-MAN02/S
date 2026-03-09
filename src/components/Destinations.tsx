import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: "Arcipelago della Maddalena",
    description: "Isole incontaminate e fondali incredibili",
    image: "/immages/arcipelago-della-maddalena.avif",
  },
  {
    name: "Piscine Naturali",
    description: "Acque turchesi e sabbia bianchissima",
    image: "/immages/budelli-picine-naturali.webp",
  },
  {
    name: "Isola di Spargi",
    description: "Natura selvaggia e calette nascoste",
    image: "/immages/spargi-island.webp",
  },
  {
    name: "Corsica",
    description: "L'emozione di una traversata verso le scogliere francesi",
    image: "/immages/corsica.jpg",
  },
];

export default function Destinations() {
  return (
    <section className="py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Destinazioni
          </h2>
          <p className="text-xl text-[#1e3a8a]">
            Il meglio della Sardegna, visto dal mare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-white/90 text-sm">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[#1e3a8a] italic">
            L'itinerario viene scelto in base alle condizioni meteo e ai tuoi desideri.
          </p>
        </div>
      </div>
    </section>
  );
}
