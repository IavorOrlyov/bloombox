import { useState } from 'react';
import { Header } from './components/Header';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Technology } from './components/Technology';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhyChooseUs />
      <Technology />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
