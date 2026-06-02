import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<'full' | 'half' | 'sunset' | null>(null);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const options = {
    full: {
      title: t('pricing.low_season.title'),
      price: t('pricing.low_season.price'),
      note: t('pricing.low_season.note'),
      details: t('pricing.full_day.details'),
      msg: t('pricing.full_day.msg')
    },
    half: {
      title: t('pricing.high_season.title'),
      price: t('pricing.high_season.price'),
      note: t('pricing.high_season.note'),
      details: t('pricing.half_day.details'),
      msg: t('pricing.half_day.msg')
    },
    sunset: {
      title: t('pricing.sunset.title'),
      price: t('pricing.sunset.price'),
      note: t('pricing.sunset.note'),
      details: t('pricing.sunset.details'),
      msg: t('pricing.sunset.msg')
    }
  };

  const handleCtaClick = () => {
    if (selectedOption) {
      const message = options[selectedOption].msg;
      window.dispatchEvent(new CustomEvent('prefillContactForm', { detail: { message } }));
    }
    scrollToForm();
  };

  if (selectedOption) {
    const option = options[selectedOption];
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-[600px] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <button 
            onClick={() => setSelectedOption(null)}
            className="mb-8 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-bold group"
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
            {t('common.back')}
          </button>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{option.title}</h2>
                <p className="text-xl text-slate-300">{option.note}</p>
              </div>
              <div className="md:text-right">
                <p className="text-5xl font-black text-amber-400">{option.price}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div
                className="text-lg md:text-xl text-slate-200 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: option.details.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCtaClick}
                className="flex-1 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
              >
                {t('pricing.cta')}
              </button>
              <button
                onClick={() => setSelectedOption(null)}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-xl transition-all border border-white/10"
              >
                {t('common.back')}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">{t('pricing.title')}</h2>
        <p className="text-2xl text-[#FFF9C4] font-semibold mb-2">
          {t('pricing.subtitle')}
        </p>
        <p className="text-sm text-slate-300/80 mb-10">
          Premi per selezionare l&apos;esperienza più adatta a te
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={() => setSelectedOption('full')}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition cursor-pointer flex flex-col border-2 border-amber-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-[#FFF9C4]">{t('pricing.low_season.title')}</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">{t('pricing.low_season.price')}</p>
            <p className="text-sm text-slate-300">{t('pricing.low_season.note')}</p>
            <p className="mt-auto pt-4 text-amber-400 text-xs font-bold">Scopri di più</p>
          </div>

          <div 
            onClick={() => setSelectedOption('half')}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition cursor-pointer border-2 border-amber-400/30 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-3 text-[#FFF9C4]">{t('pricing.high_season.title')}</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">{t('pricing.high_season.price')}</p>
            <p className="text-sm text-slate-300">{t('pricing.high_season.note')}</p>
            <p className="mt-auto pt-4 text-amber-400 text-xs font-bold">Scopri di più</p>
          </div>

          <div 
            onClick={() => setSelectedOption('sunset')}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition cursor-pointer flex flex-col border-2 border-amber-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-[#FFF9C4]">{t('pricing.sunset.title')}</h3>
            <p className="text-3xl font-extrabold mb-2 text-amber-400">{t('pricing.sunset.price')}</p>
            <p className="text-sm text-slate-300">{t('pricing.sunset.note')}</p>
            <p className="mt-auto pt-4 text-amber-400 text-xs font-bold">Scopri di più</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-8">
          <p className="text-lg text-[#FFFDF0] leading-relaxed italic">
            {t('pricing.note')}
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          {t('pricing.cta')}
        </button>
      </div>
    </section>
  );
}
