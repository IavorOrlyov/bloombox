export function FlowerGallery() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const images = [
    { src: 'assets/flowers/flowers1.jpg', alt: 'Букет с лилиуми и рози' },
    { src: 'assets/flowers/flowers2.jpg', alt: 'Букет в кутия' },
    { src: 'assets/flowers/flowers3.jpg', alt: 'Букет червени рози' },
    { src: 'assets/flowers/flowers4.jpg', alt: 'Букет в черна кутия' },
    { src: 'assets/flowers/flowers5.jpg', alt: 'Букет в синя кутия' },
  ];

  return (
    <section className="py-16" style={{backgroundColor: "#f4f0ed"}}>
      <div className="container mx-auto px-4">
        <div className="mx-auto">
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
                    target.style.display = 'none';
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
          <p className="font-playfair text-center text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat et quam iaculis faucibus at sit amet nibh. Vestibulum dignissim lectus in ligula rhoncus, et bibendum risus dictum. Pellentesque condimentum arcu id dapibus tempor. Pellentesque venenatis nec magna nec finibus.
          </p>

          {/* CTA Button */}
          <div className="text-center">
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
