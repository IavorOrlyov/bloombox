export function WhyChooseUs() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-[#6c704c] mb-12">
            Защо да изберете BloomBox Vending?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <div className="space-y-4">
              <p>
                BloomBox Vending е вашият надежден партньор в продажбата на цветя 24/7. 
                Ние комбинираме модерни вендинг технологии с практически опит в управлението 
                на цветни автомати — така че да получите решение, което работи безотказно, 
                поддържа цветята свежи и привлича клиенти с изчистен премиум дизайн.
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                Машините, които предлагаме, са внимателно подбрани за българския пазар и се 
                отличават с интелигентно управление, стабилна температура, удобни методи на 
                плащане и ниски разходи за поддръжка. От консултация и брандинг до доставка, 
                монтаж и гаранция – ние сме до вас на всяка стъпка, за да създадете успешен 
                и рентабилен бизнес.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-[#cd3a6a] text-white px-8 py-3 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors inline-flex items-center gap-2 mt-6 cursor-pointer mx-auto block"
          >
            Свържи се с нас
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V16M10 16L16 10M10 16L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
