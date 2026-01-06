import { useState, useEffect } from 'react';
import { Clock, Thermometer, Sparkles, Monitor, Smartphone, Pencil, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 автоматични продажби',
    description: 'Цветя на разположение по всяко време — удобно, елегантно и без персонал.',
  },
  {
    icon: Thermometer,
    title: 'Патентована технология за дълготрайна свежест',
    description: 'Равномерно охлаждане благодарение на оптимизиран въздушен поток, който удължава живота на цветята.',
  },
  {
    icon: Sparkles,
    title: 'Антифог и висококачествено кристално стъкло',
    description: 'Ясна видимост без запотяване – витрина, която винаги изглежда перфектно.',
  },
  {
    icon: Monitor,
    title: "Премиум 21.5'' тъчскрийн дисплей",
    description: 'Модерен, ярък и интуитивен интерфейс за high-end shopping experience.',
  },
  {
    icon: Smartphone,
    title: 'Система за отдалечен мониторинг',
    description: 'Проследяване на наличности, продажби и температура в реално време.',
  },
  {
    icon: Pencil,
    title: 'Персонализация и брандинг по ваш вкус',
    description: 'Машината може да бъде изцяло персонализирана – от цветовете и печата до LED акценти и интерфейс.',
  },
];

const carouselImages = [
  '/assets/1.png',
  '/assets/2.png',
  '/assets/3.png',
  '/assets/4.png',
  '/assets/7.png',
  '/assets/5.png',
];

export function Technology() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="technology" className="py-10 bg-[#f4f0ed]" style={{ paddingBottom: "80px", paddingTop: "40px", backgroundColor: "#f3f1ed"}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "flex", flexDirection: isLargeScreen ? "row" : "column", gap: "2rem", alignItems: "center" }}>
            {/* Left Side - Carousel (40%) */}
            <div style={{ width: isLargeScreen ? "40%" : "100%", flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="relative bg-gradient-to-br from-sky-200 to-[#a8b864] rounded-3xl overflow-hidden shadow-2xl" style={{ width: "100%", maxWidth: "400px", height: "500px" }}>
                <img
                  src={carouselImages[currentImageIndex]}
                  alt={`Vending machine ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "30px",
                    backgroundColor: "#6c704c",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                    transition: "opacity 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  <ChevronLeft style={{ width: "32px", height: "32px", color: "#ffffff" }} />
                </button>
                <button
                  onClick={nextImage}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: "100%",
                    width: "30px",
                    backgroundColor: "#6c704c",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                    transition: "opacity 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  <ChevronRight style={{ width: "32px", height: "32px", color: "#ffffff" }} />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Header and Feature Cards (60%) */}
            <div style={{ width: isLargeScreen ? "60%" : "100%", flexGrow: 1 }}>
              <div className="mb-8 text-center">
                <h2 className="font-playfair text-[#6c704c] mb-3" style={{ fontWeight: 300, fontSize: "72px", lineHeight: "1.2" }}>
                  <div>Нашата <span style={{ fontWeight: 400, fontStyle: "italic" }}>HIGH-</span></div>
                  <div><span style={{ fontWeight: 400, fontStyle: "italic" }}>END</span> технология</div>
                </h2>
                <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
                  <div className="w-full h-px bg-[#6c704c]" style={{height: "3px"}}></div>
                  <div className="absolute w-2 h-2 rounded-full border-2 border-[#6c704c] bg-[#f4f0ed]" style={{ height: "10px" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#6c704c] rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-[#6c704c] text-base font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-playfair text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
