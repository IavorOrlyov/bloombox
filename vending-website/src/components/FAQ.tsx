import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";
import { useTranslation } from "../i18n/LanguageContext";

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-playfair text-center text-[#6c704c] mb-12 text-3xl md:text-4xl lg:text-5xl"
            style={{ fontWeight: 700, fontSize: "24px" }}
          >
            {t.faq.title}
          </h2>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer"
                >
                  <span
                    className="font-playfair font-semibold"
                    style={{
                      color: openIndex === index ? "#919951" : "#6c704c",
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#cd3a6a] transition-transform flex-shrink-0 ml-4 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="font-playfair text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
