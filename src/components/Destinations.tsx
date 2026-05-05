import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Destinations() {
  const { t } = useLanguage();

  const destinations = [
    {
      name: t('destinations.maddalena.name'),
      description: t('destinations.maddalena.description'),
      image: "/immages/arcipelago-della-maddalena.avif",
    },
    {
      name: t('destinations.pools.name'),
      description: t('destinations.pools.description'),
      image: "/immages/piscine nat.jfif",
    },
    {
      name: t('destinations.spargi.name'),
      description: t('destinations.spargi.description'),
      image: "/immages/spargi new.jfif",
    },
    {
      name: t('destinations.corsica.name'),
      description: t('destinations.corsica.description'),
      image: "/immages/corsica.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-3 md:mb-4">
            {t('destinations.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#1e3a8a]">
            {t('destinations.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[16/9] md:aspect-square overflow-hidden">
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
            {t('destinations.itinerary_note')}
          </p>
        </div>
      </div>
    </section>
  );
}
