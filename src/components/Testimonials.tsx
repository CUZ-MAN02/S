import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#1e3a8a] mb-4" />
              <p className="text-lg md:text-xl text-[#334155] leading-relaxed mb-4 md:mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  {testimonial.author[0]}
                </div>
                <span className="font-bold text-[#1e3a8a]">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
