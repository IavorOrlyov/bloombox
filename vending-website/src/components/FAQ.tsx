import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "Имате ли различни модели?",
    answer:
      "Да. Предлагаме няколко модела вендинг машини за цветя с различна вместимост, размери и функции. Моделите се различават по броя на букети, размер на дисплея, методи на плащане и дизайн. Освен това можем да предложим персонализиране: избор на цвят, оформление, брандинг и т.н.",
  },
  {
    question: "Колко често трябва да се зарежда?",
    answer:
      "Честотата на зареждане зависи от интензитета на продажбите и локацията. При места с висок човекопоток (напр. молове, метростанции) зареждане може да се налага всеки ден или през няколко дни. При по-спокойни локации – веднъж седмично.",
  },
  {
    question: "Как се поддържа свежестта на цветята?",
    answer:
      "Нашите машини работят с контролирана температура и влажност, като включват охлаждаща система и вентилация, проектирани специално за цветя. Това гарантира, че букети остават свежи значително по-дълго.",
  },
  {
    question: "Какви методи на плащане поддържа?",
    answer:
      "Машините поддържат различни методи на плащане: монети, банкноти, карти (дебитни/кредитни). Разплащателните методи са изцяло според предпочитанията на клиента.",
  },
  {
    question: "Как се обслужва?",
    answer:
      "След покупката и инсталацията ви предоставяме обучение за работа с машината и интерфейса ѝ. Поддръжката включва дистанционна техническа помощ и поръчка на резервни части.",
  },
  {
    question: "Предлагате ли гаранция?",
    answer:
      "Машините пристигат с гаранция към производителя, която е 12 месеца.",
  },
  {
    question: "Как да поръчам вендинг машина?",
    answer:
      "Процесът е следният: Свържете се с нас чрез формата на сайта или по телефон/имейл. Кажете ни какъв модел, конфигурация и дизайн искате. Подписваме договор, поръчваме и доставяме машината до посочения от вас адрес. Осигуряваме ви необходимите материали за обучение. Стартирате експлоатацията – ние оставаме на разположение за сервиз и оптимизация.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-playfair text-center text-[#6c704c] mb-12 text-3xl md:text-4xl lg:text-5xl"
            style={{ fontWeight: 700, fontSize: "24px" }}
          >
            Често задавани въпроси
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
