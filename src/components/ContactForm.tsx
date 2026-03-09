import { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // 1. Salvataggio su Supabase (database)
      const { error: insertError } = await supabase
        .from('contact_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            guests: parseInt(formData.guests),
            message: formData.message,
          },
        ]);

      if (insertError) throw insertError;

      // 2. Invio email tramite Formspree (servizio gratuito per invio email da frontend)
      // Nota: Sostituisci 'sardiniarent@gmail.com' con il tuo endpoint se usi un servizio specifico
      // Per semplicità e affidabilità lato client, usiamo una fetch a un servizio di mailing o simuliamo l'invio
      // In un ambiente di produzione reale, useresti una Edge Function di Supabase o un backend.
      const response = await fetch("https://formspree.io/f/sardiniarent@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Nuova richiesta disponibilità da ${formData.name}`,
          ...formData
        }),
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2',
        message: '',
      });
    } catch (err) {
      setError('Si è verificato un errore. Riprova più tardi.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Pronto a vivere il mare come non l'hai mai fatto?
          </h2>
          <p className="text-xl text-[#475569] mb-4">
            Regalati un'esperienza esclusiva a bordo di un Riva.
          </p>
          <p className="text-xl text-[#475569]">
            Il mare della Sardegna ti aspetta.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-[#475569] mb-8 text-center">
            Compila il modulo indicando la data e il numero di persone.
            Ti risponderemo rapidamente per organizzare la tua esperienza ideale.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 text-center">
              Grazie! Abbiamo ricevuto la tua richiesta e ti contatteremo presto.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="mario@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">
                  Data desiderata *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-semibold text-slate-700 mb-2">
                Numero di ospiti *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'ospite' : 'ospiti'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Messaggio (opzionale)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Raccontaci cosa hai in mente per la tua giornata ideale..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                'Invio in corso...'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Richiedi disponibilità ora
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
