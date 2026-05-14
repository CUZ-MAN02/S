import { Anchor, ChevronDown, Instagram, Music } from 'lucide-react';
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/immages/home s1.png')" }}>

      {/* Social Links */}
      <div className="absolute top-6 left-6 z-50 flex flex-col gap-4">
        <a 
          href="https://www.instagram.com/Mistral_Charter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all duration-300 group flex items-center gap-2"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 group-hover:scale-110 transition-transform drop-shadow-lg" />
          <span className="text-sm font-bold tracking-wide text-white shadow-black drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">@Mistral_Charter</span>
        </a>
        <a 
          href="https://www.tiktok.com/@Mistral_Charter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all duration-300 group flex items-center gap-2"
          aria-label="TikTok"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 sm:w-8 sm:h-8 fill-white group-hover:scale-110 transition-transform drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(2px 0 0 #ff0050) drop-shadow(-2px 0 0 #00f2ea)' }}
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.17.47-.12.99.06 1.45.35 1.05 1.48 1.82 2.59 1.73 1.25-.01 2.44-.93 2.67-2.16.03-3.15.02-6.3.03-9.45.02-.31.02-.63.02-.95z"/>
          </svg>
          <span className="text-sm font-bold tracking-wide text-white shadow-black drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">@Mistral_Charter</span>
        </a>
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-50" ref={langMenuRef}>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 sm:gap-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 transition-all duration-300"
          >
            <img 
              src={currentLang?.flag} 
              alt={currentLang?.label}
              className="w-4 sm:w-5 h-auto rounded-sm shadow-sm"
            />
            <span className="text-xs sm:text-sm font-bold tracking-wide">{currentLang?.label}</span>
            <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-amber-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
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

        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-amber-400">
          {t('hero.boat')}
        </h2>

        <p className="text-xl md:text-2xl mb-12 font-light tracking-wide">
          {t('hero.subtitle')}
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
