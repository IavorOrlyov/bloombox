import { Header } from "./components/Header";
import { FlowerGallery } from "./components/FlowerGallery";
import { Technology } from "./components/Technology";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import React from "react";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white">
      <Header />
      <FlowerGallery />
      <FAQ />
      <Technology />
      <ContactForm />
      <Footer />
      <CookieConsent />
    </div>
    </LanguageProvider>
  );
}
