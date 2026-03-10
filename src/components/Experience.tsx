import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            {t('experience.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              {t('experience.description1')}
            </p>
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              {t('experience.description2')}
            </p>
            <button
              onClick={scrollToForm}
              className="mt-8 px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('experience.cta')}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/immages/sup-1.jpg"
                alt="Giornata al mare 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/immages/OIP.webp"
                alt="Giornata al mare 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg col-span-2">
              <img
                src="/immages/new-1.jpg"
                alt="Giornata al mare 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
