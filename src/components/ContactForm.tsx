import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-[#475569] mb-4">
            {t('contact.subtitle1')}
          </p>
          <p className="text-xl text-[#475569]">
            {t('contact.subtitle2')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-[#475569] mb-8 text-center">
            {t('contact.description')}
          </p>

          <form action="https://formspree.io/f/mreyenar" method="POST" className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="+39 123 456 7890"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.date')}
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.guests')}
              </label>
              <select
                name="guests"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder={t('contact.description')}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
