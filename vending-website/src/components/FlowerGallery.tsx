import React from "react";

export function FlowerGallery() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const images = [
    { src: "assets/flowers/flowers1.jpg", alt: "Букет с лилиуми и рози" },
    { src: "assets/flowers/flowers2.jpg", alt: "Букет в кутия" },
    { src: "assets/flowers/flowers3.jpg", alt: "Букет червени рози" },
    { src: "assets/flowers/flowers4.jpg", alt: "Букет в черна кутия" },
    { src: "assets/flowers/flowers5.jpg", alt: "Букет в синя кутия" },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#f4f0ed" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Image Gallery */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[200px]"
                style={{ height: "200px" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <h2
            className="font-playfair text-center text-[#6c704c] mb-8"
            style={{ fontWeight: 700, fontSize: "36px" }}
          >
            Защо да изберете Bloombox Vending
          </h2>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <div className="space-y-4">
              <p className="font-playfair leading-relaxed">
                BloomBox Vending е вашият надежден партньор в продажбата на
                цветя 24/7. Ние комбинираме модерни вендинг технологии с
                практически опит в управлението на цветни автомати — така че да
                получите решение, което работи безотказно, поддържа цветята
                свежи и привлича клиенти с изчистен премиум дизайн.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-playfair leading-relaxed">
                Машините, които предлагаме, са внимателно подбрани за българския
                пазар и се отличават с интелигентно управление, стабилна
                температура, удобни методи на плащане и ниски разходи за
                поддръжка. От консултация и брандинг до доставка, монтаж и
                гаранция – ние сме до вас на всяка стъпка, за да създадете
                успешен и рентабилен бизнес.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center" style={{ marginTop: "40px" }}>
            <button
              onClick={scrollToForm}
              className="font-playfair bg-[#cd3a6a] text-white px-8 py-3 rounded-full hover:bg-[#cd3a6a]/90 transition-colors inline-flex items-center gap-2 cursor-pointer font-semibold uppercase text-sm tracking-wide"
            >
              СВЪРЖИ СЕ С НАС
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
