import { Sparkles, User, Sofa, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t('features.luxury.title'),
      description: t('features.luxury.description'),
    },
    {
      icon: User,
      title: t('features.skipper.title'),
      description: t('features.skipper.description'),
    },
    {
      icon: Sofa,
      title: t('features.comfort.title'),
      description: t('features.comfort.description'),
    },
    {
      icon: Settings,
      title: t('features.custom.title'),
      description: t('features.custom.description'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            {t('features.subtitle')}
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
