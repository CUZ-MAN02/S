import React, { useState } from 'react';
import { Star, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ReviewSection() {
  const { t } = useLanguage();
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Stats Section */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              {t('reviews.title')}
            </h3>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-black text-slate-900">4.9</div>
              <div>
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {t('reviews.rating_label')}
                </div>
              </div>
            </div>
            
            <div className="text-slate-600 font-medium">
              38 {t('reviews.total_reviews')}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              {t('reviews.leave_review')}
            </h4>
            
            {submitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-xl text-center font-medium animate-in fade-in zoom-in duration-300">
                {t('reviews.form.success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {t('reviews.form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {t('reviews.form.rating')}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {t('reviews.form.comment')}
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  {t('reviews.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
