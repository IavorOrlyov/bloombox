import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToForm = () => {
    scrollToSection("contact-form");
  };

  const scrollToTechnology = () => {
    scrollToSection("technology");
  };

  const menuItems = [
    { label: "Защо BloomBox?", id: "why-choose" },
    { label: "Технология", id: "technology" },
    { label: "Въпроси", id: "faq" },
    { label: "Контакти", id: "contact-form" },
  ];

  return (
    <header className="relative bg-gradient-to-br from-[#6c704c]/10 to-[#cd3a6a]/10 overflow-hidden">
      {/* Fixed Logo - Stays static while scrolling */}
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="rounded-full flex items-center justify-center bg-white overflow-hidden"
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid rgba(108, 112, 76, 0.3)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              flexShrink: 0,
            }}
          >
            <img
              src="assets/logo.png"
              alt="BloomBox Logo"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain"
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </button>
      </div>

      {/* Navigation Bar - Scrolls out */}
      <nav
        style={{
          backgroundColor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="container mx-auto px-4"
          style={{ paddingTop: "12px", paddingBottom: "12px" }}
        >
          <div className="flex items-center relative">
            {/* Left Side - Bloombox Vending Text */}
            <style>{`
              .brand-text-mobile { font-size: 18px !important; letter-spacing: 0.15em !important; }
              @media (min-width: 768px) {
                .brand-text-mobile { font-size: 22px !important; letter-spacing: 0.2em !important; }
              }
            `}</style>
            <div className="flex items-center" style={{ flex: "0 0 auto" }}>
              <button
                onClick={scrollToTop}
                className="brand-text-mobile font-brand text-[#6c704c] cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                BLOOMBOX VENDING
              </button>
            </div>

            {/* Center - Spacer for logo (invisible, maintains layout) */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "100px",
                pointerEvents: "none",
              }}
            ></div>

            {/* Right Side - Mobile Menu Button */}
            <div
              className="flex items-center justify-end"
              style={{ flex: "0 0 auto", marginLeft: "auto" }}
            >
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#6c704c] cursor-pointer md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Right Side - Nav Items + CTA Button (Desktop) */}
            <style>{`
              .nav-item-text { font-size: 8px !important; }
              .nav-cta-text { font-size: 8px !important; padding: 5px 10px !important; }
              .nav-gap { gap: 8px !important; }
              .nav-container { margin-left: auto; padding-left: 200px; flex-wrap: nowrap; }
              @media (min-width: 900px) {
                .nav-item-text { font-size: 8px !important; }
                .nav-cta-text { font-size: 8px !important; padding: 6px 12px !important; }
                .nav-gap { gap: 10px !important; }
                .nav-container { padding-left: 220px; }
              }
              @media (min-width: 1024px) {
                .nav-item-text { font-size: 10px !important; }
                .nav-cta-text { font-size: 10px !important; padding: 8px 16px !important; }
                .nav-gap { gap: 18px !important; }
                .nav-container { padding-left: 250px; }
              }
              @media (min-width: 1281px) {
                .nav-item-text { font-size: 13px !important; }
                .nav-cta-text { font-size: 13px !important; padding: 10px 20px !important; }
                .nav-gap { gap: 24px !important; }
                .nav-container { padding-left: 300px; }
              }
            `}</style>
            <div
              className="hidden md:flex items-center nav-gap nav-container"
              style={{ flex: "0 0 auto" }}
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-playfair text-[#6c704c] hover:text-[#cd3a6a] transition-colors cursor-pointer nav-item-text whitespace-nowrap"
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={scrollToForm}
                className="font-playfair bg-[#cd3a6a] text-white rounded-lg hover:bg-[#cd3a6a]/90 transition-colors cursor-pointer font-semibold nav-cta-text whitespace-nowrap"
              >
                Свържи се с нас
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden space-y-3"
              style={{
                marginTop: "16px",
                paddingBottom: "16px",
                borderTop: "1px solid rgba(108, 112, 76, 0.1)",
                paddingTop: "16px",
              }}
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-playfair block w-full text-left text-[#6c704c] hover:text-[#cd3a6a] transition-colors cursor-pointer font-semibold"
                  style={{ padding: "8px 0", fontSize: "16px" }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={scrollToForm}
                className="font-playfair w-full bg-[#cd3a6a] text-white rounded-lg hover:bg-[#cd3a6a]/90 transition-colors cursor-pointer font-semibold"
                style={{ padding: "12px 24px", marginTop: "8px" }}
              >
                Свържи се с нас
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="container mx-auto px-4 py-12 md:py-16"
        style={{ marginTop: "32px", paddingBottom: "32px" }}
      >
        {/* Hero Title */}
        <div className="text-center mb-8">
          <h1
            className="font-playfair text-[#6c704c] leading-tight"
            style={{ fontWeight: 700, fontSize: "24px" }}
          >
            Вендинг машини за свежи цветя - 24/7 продажби без персонал
          </h1>
        </div>

        {/* Video Section - Landscape orientation */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
            <video
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover"
              }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="assets/videos/welcome-video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Decorative blurs */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#cd3a6a]/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#6c704c]/20 rounded-full blur-3xl"></div>
        </div>

        {/* Subtitle and CTA */}
        <div className="text-center space-y-6">
          <p className="font-playfair text-gray-600 max-w-3xl mx-auto">
            Модерни решения за продажба на свежи цветя по всяко време. Премиум
            технология, която работи за вас денонощно.
          </p>
          <button
            onClick={scrollToTechnology}
            className="font-playfair bg-[#cd3a6a] text-white rounded-full hover:bg-[#cd3a6a]/90 transition-colors inline-flex items-center gap-2 cursor-pointer font-semibold text-lg shadow-lg hover:shadow-xl"
            style={{ padding: "16px 48px" }}
          >
            Виж повече
          </button>
        </div>
      </div>
    </header>
  );
}
