import { Anchor, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  const languages = [
    { code: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  ];

  const currentLang = languages.find(l => l.code === language);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/immages/home1.jfif')" }}>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-50" ref={langMenuRef}>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 transition-all duration-300"
          >
            <img 
              src={currentLang?.flag} 
              alt={currentLang?.label}
              className="w-5 h-auto rounded-sm shadow-sm"
            />
            <span className="text-sm font-bold tracking-wide">{currentLang?.label}</span>
            <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 py-2 w-44 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200 overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 transition-colors flex items-center gap-3 ${
                    language === lang.code ? 'text-amber-600 font-bold bg-amber-50/50' : 'text-gray-700'
                  }`}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.label}
                    className="w-5 h-auto rounded-sm shadow-sm"
                  />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 z-0 scale-95"
        style={{
          backgroundImage: "url('/immages/home1.jfif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Anchor className="w-12 h-12 text-amber-400" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {t('hero.title')}
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-6 font-light tracking-wide">
          {t('hero.subtitle')}
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-400">
          {t('hero.boat')}
        </h2>

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
