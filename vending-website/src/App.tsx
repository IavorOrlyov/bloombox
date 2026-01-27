import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { FlowerGallery } from "./components/FlowerGallery";
import { Technology } from "./components/Technology";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { Privacy } from "./pages/Privacy";
import React, { useEffect } from "react";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
      <CookieConsent />
    </div>
  );
}

function Home() {
  return (
    <>
      <FlowerGallery />
      <FAQ />
      <Technology />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
