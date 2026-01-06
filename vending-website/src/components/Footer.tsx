import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6c704c] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Logo - Clickable to go home */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div
                className="rounded-full flex items-center justify-center bg-white overflow-hidden"
                style={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/assets/logo.png"
                  alt="BloomBox Logo"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-brand text-lg tracking-[0.25em]">BLOOMBOX VENDING</span>
            </button>
            <p className="font-playfair text-white/80">
              Вашият надежден партньор в продажбата на цветя 24/7
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-playfair mb-4 text-lg font-semibold">Контакти</h3>
            <div className="space-y-3">
              <a
                href="tel:+359888123456"
                className="font-playfair flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+359 888 123 456</span>
              </a>
              <a
                href="mailto:info@bloomboxvending.bg"
                className="font-playfair flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@bloomboxvending.bg</span>
              </a>
              <div className="font-playfair flex items-center gap-3 text-white/80">
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
          <p className="font-playfair">&copy; 2025 BloomBox Vending. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
