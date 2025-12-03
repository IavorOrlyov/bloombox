import { Flower, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#6c704c] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Flower className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl">BloomBox Vending</span>
            </div>
            <p className="text-white/80">
              Вашият надежден партньор в продажбата на цветя 24/7
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4">Контакти</h3>
            <div className="space-y-3">
              <a
                href="tel:+359888123456"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+359 888 123 456</span>
              </a>
              <a
                href="mailto:info@bloomboxvending.bg"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@bloomboxvending.bg</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>София, България</span>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 BloomBox Vending. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
