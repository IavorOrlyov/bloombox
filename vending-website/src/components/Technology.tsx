import { Clock, Thermometer, Sparkles, Monitor, Smartphone, Pencil } from 'lucide-react';

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

export function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-center text-[#6c704c] mb-16" style={{ fontWeight: 700, fontSize: "24px" }}>
            Нашата high-end технология
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#6c704c] to-[#6c704c]/80 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-[#6c704c] mb-3 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="font-playfair text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
