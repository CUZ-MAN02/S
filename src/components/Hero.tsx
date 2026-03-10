import { Anchor, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'it', label: 'Italiano' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ru', label: 'Русский' },
    { code: 'es', label: 'Español' },
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 transition-all duration-300"
          >
            <Globe className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium uppercase">{language}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 py-2 w-40 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${
                    language === lang.code ? 'text-amber-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

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
            {t('hero.title')}
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
          {t('hero.subtitle')}
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-amber-400">
          {t('hero.boat')}
        </h2>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t('hero.cta.availability')}
          </button>
          <button
            onClick={scrollToExperience}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/50 transition-all duration-300"
          >
            {t('hero.cta.experience')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
