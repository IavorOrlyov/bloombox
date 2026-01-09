import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import React from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFixed, setLogoFixed] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoPlaceholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (logoPlaceholderRef.current) {
        const rect = logoPlaceholderRef.current.getBoundingClientRect();
        // When the logo's natural position reaches 2px from top, make it fixed
        setLogoFixed(rect.top <= 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <style>{`
        .desktop-logo { display: none; }
        @media (min-width: 886px) {
          .desktop-logo { display: block; }
        }
      `}</style>
      {/* Fixed Logo - Desktop Only - Stays static while scrolling */}
      <div
        className="desktop-logo"
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
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "opacity 0.3s",
            border: "none",
            background: "none",
            padding: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <div
            style={{
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              overflow: "hidden",
              width: "100px",
              height: "100px",
              border: "1px solid rgba(108, 112, 76, 0.3)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              flexShrink: 0,
            }}
          >
            <img
              src="assets/bloombox-logo.svg"
              alt="BloomBox Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
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
          className="container px-4"
          style={{ paddingTop: "12px", paddingBottom: "12px" }}
        >
          <div className="flex items-center relative">
            {/* Left Side - Bloombox Vending Text */}
            <style>{`
              .brand-text-mobile { font-size: 18px !important; letter-spacing: 0.15em !important; }
              @media (min-width: 886px) {
                .brand-text-mobile { font-size: 22px !important; letter-spacing: 0.2em !important; }
              }
            `}</style>
            <div className="flex items-center" style={{ flex: "0 0 auto" }}>
              <button
                onClick={scrollToTop}
                className="brand-text-mobile text-[#6c704c] cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{
                  fontFamily: "Papyrus, fantasy",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                BLOOMBOX VENDING
              </button>
            </div>

            {/* Center - Spacer for logo (invisible, maintains layout on desktop) */}
            <div
              className="desktop-logo"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                height: "120px",
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
        className="container mx-auto px-4 py-8 md:py-16"
        style={{ paddingBottom: "32px" }}
      >
        {/* Mobile Logo - Scrolls then sticks at top */}
        <style>{`
          .mobile-logo { display: block; }
          @media (min-width: 886px) {
            .mobile-logo { display: none; }
          }
        `}</style>

        {/* Placeholder to mark natural position */}
        <div
          ref={logoPlaceholderRef}
          className="mobile-logo"
          style={{
            height: logoFixed ? "96px" : "0px", // Height when fixed (80px logo + 16px padding)
            marginBottom: logoFixed ? "24px" : "0px",
          }}
        />

        {/* Actual logo that becomes fixed */}
        <div
          ref={logoRef}
          className="mobile-logo"
          style={{
            position: logoFixed ? "fixed" : "relative",
            top: logoFixed ? "2px" : "0px",
            left: logoFixed ? "50%" : "auto",
            transform: logoFixed ? "translateX(-50%)" : "none",
            zIndex: 90,
            paddingTop: "8px",
            paddingBottom: "8px",
            textAlign: "center",
            marginBottom: logoFixed ? "0px" : "24px",
            width: logoFixed ? "auto" : "100%",
          }}
        >
          <button
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "opacity 0.3s",
              border: "none",
              background: "none",
              padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                border: "1px solid rgba(108, 112, 76, 0.3)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            >
              <img
                src="assets/bloombox-logo.svg"
                alt="BloomBox Logo"
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </button>
        </div>

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
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16/9" }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="assets/videos/video-homepage.mp4" type="video/mp4" />
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
