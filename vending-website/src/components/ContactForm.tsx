import { useState, FormEvent } from 'react';
import { Send, Check } from 'lucide-react';

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-[#6c704c]/5 to-[#cd3a6a]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <>
              <h2 className="font-playfair text-center text-[#6c704c] mb-8 text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: 700, fontSize: "24px" }}>
                Изпратете запитване за вендинг машина за цветя
              </h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="font-playfair block text-[#6c704c] mb-2 font-medium">
                    Име и фамилия <span className="text-[#cd3a6a]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="font-playfair w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c704c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-playfair block text-[#6c704c] mb-2 font-medium">
                    Имейл <span className="text-[#cd3a6a]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="font-playfair w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c704c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="font-playfair block text-[#6c704c] mb-2 font-medium">
                    Град
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="font-playfair w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c704c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-playfair block text-[#6c704c] mb-2 font-medium">
                    Телефонен номер
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-playfair w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c704c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-playfair block text-[#6c704c] mb-2 font-medium">
                    Вашето съобщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="font-playfair w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c704c] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-playfair w-full bg-[#cd3a6a] text-white py-3 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer font-semibold"
                >
                  Изпрати запитване
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="bg-white p-12 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6c704c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-[#6c704c] mb-3 text-xl font-semibold">
                Благодарим за запитването!
              </h3>
              <p className="font-playfair text-gray-600">
                Ще се свържем с вас в рамките на 24 часа.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
