import { Send, AlertCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    const handlePrefill = (event: any) => {
      if (event.detail && event.detail.message) {
        setFormData(prev => ({ ...prev, message: event.detail.message }));
      }
    };

    window.addEventListener('prefillContactForm', handlePrefill);
    return () => window.removeEventListener('prefillContactForm', handlePrefill);
  }, []);

  const validateField = (name: string, value: string) => {
    if (!value || value.trim() === '') return false;
    if (name === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: !validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'message' && !validateField(key, value)) {
        newErrors[key] = true;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      const firstError = document.querySelector('.border-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mreyenar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          guests: '1',
          message: ''
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4 md:mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#475569] mb-2 md:mb-4">
            {t('contact.subtitle1')}
          </p>
          <p className="text-lg md:text-xl text-[#475569]">
            {t('contact.subtitle2')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <p className="text-base md:text-lg text-[#475569] mb-6 md:mb-8 text-center">
            {t('contact.description')}
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.name')}*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t('contact.form.error.required')}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.email')}*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t('contact.form.error.email')}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.phone')}*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="+39 123 456 7890"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t('contact.form.error.required')}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.date')}*
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-white ${
                    errors.date ? 'border-red-500 bg-red-50' : 'border-slate-200'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer block`}
                />
                <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  errors.date ? 'text-red-400' : 'text-slate-400'
                } pointer-events-none transition-colors z-0`} />
              </div>
              {errors.date && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t('contact.form.error.date')}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {t('contact.form.guests')}
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder={t('contact.description')}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-[#2563eb] hover:bg-[#1d4ed8]'} text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </div>
            {submitStatus === 'success' && (
              <div className="md:col-span-2 p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                {t('contact.form.success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="md:col-span-2 p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
                {t('contact.form.error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

