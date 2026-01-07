import React, { useState, FormEvent, ChangeEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Replace YOUR_EMAIL with your actual email address
    const formAction = "https://formsubmit.co/4354eef68691810c497a5dbb92ddf4f1";

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      // Add a subject line
      formDataToSend.append("_subject", "Ново запитване от BloomBox Vending");

      // Prevent FormSubmit from showing a redirect page
      if (typeof window !== "undefined") {
        formDataToSend.append("_next", window.location.href);
      }
      formDataToSend.append("_captcha", "false");

      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          city: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setSubmitError(
        "Възникна грешка при изпращането. Моля, опитайте отново или се свържете директно."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-[#6c704c]/5 to-[#cd3a6a]/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <>
              <h2
                className="font-playfair text-center text-[#6c704c] mb-8 text-3xl md:text-4xl lg:text-5xl"
                style={{ fontWeight: 700, fontSize: "24px" }}
              >
                Изпратете запитване за вендинг машина за цветя
              </h2>

              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/YOUR_EMAIL"
                method="POST"
                className="bg-white p-8 rounded-xl shadow-lg space-y-6"
              >
                {/* Hidden inputs for FormSubmit configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Ново запитване от BloomBox Vending"
                />
                <input
                  type="hidden"
                  name="_next"
                  value={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <div>
                  <label
                    htmlFor="name"
                    className="font-playfair block text-[#6c704c] mb-2 font-medium"
                  >
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
                  <label
                    htmlFor="email"
                    className="font-playfair block text-[#6c704c] mb-2 font-medium"
                  >
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
                  <label
                    htmlFor="city"
                    className="font-playfair block text-[#6c704c] mb-2 font-medium"
                  >
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
                  <label
                    htmlFor="phone"
                    className="font-playfair block text-[#6c704c] mb-2 font-medium"
                  >
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
                  <label
                    htmlFor="message"
                    className="font-playfair block text-[#6c704c] mb-2 font-medium"
                  >
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

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-playfair text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-playfair w-full bg-[#cd3a6a] text-white py-3 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Изпращане...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Изпрати запитване
                      <Send className="w-5 h-5" />
                    </>
                  )}
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
