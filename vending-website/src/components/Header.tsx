import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flower, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToForm = () => {
    scrollToSection('contact-form');
  };

  const menuItems = [
    { label: 'Защо BloomBox?', id: 'why-choose' },
    { label: 'Технология', id: 'technology' },
    { label: 'Въпроси', id: 'faq' },
    { label: 'Контакти', id: 'contact-form' },
  ];

  return (
    <header className="relative bg-gradient-to-br from-[#6c704c]/10 to-[#cd3a6a]/10 overflow-hidden">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#6c704c] rounded-lg flex items-center justify-center">
              <Flower className="w-7 h-7 text-white" />
            </div>
            <span className="text-[#6c704c]">BloomBox Vending</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#6c704c] hover:text-[#cd3a6a] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={scrollToForm}
              className="bg-[#cd3a6a] text-white px-6 py-2 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors cursor-pointer"
            >
              Свържи се с нас
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#6c704c] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-[#6c704c] hover:text-[#cd3a6a] transition-colors py-2 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={scrollToForm}
              className="w-full bg-[#cd3a6a] text-white px-6 py-2 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors cursor-pointer"
            >
              Свържи се с нас
            </button>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-[#6c704c]">
              Вендинг машини за свежи цветя - 24/7 продажби без персонал
            </h1>
            <p className="text-gray-600">
              Модерни автоматични решения за продажба на свежи цветя по всяко време. 
              Премиум технология, която работи за вас денонощно.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-[#cd3a6a] text-white px-8 py-3 rounded-lg hover:bg-[#cd3a6a]/90 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Свържи се с нас
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4V16M10 16L16 10M10 16L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745387933771-2dda7f5f966a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjM0ODY1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BloomBox Vending Machine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#cd3a6a]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#6c704c]/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
