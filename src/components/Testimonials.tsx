import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Un modo unico di scoprire la Sardegna. Barca bellissima e organizzazione impeccabile.",
    author: "Marco",
  },
  {
    text: "Esperienza elegante, rilassante e perfetta per una giornata speciale.",
    author: "Laura",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Testimonianze
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <p className="text-xl text-[#334155] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-xl">
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
