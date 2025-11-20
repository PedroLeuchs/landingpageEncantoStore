"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/5599999999999?text=Olá%20Trae%20AI"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" aria-label="Ícone do WhatsApp">
          <title>WhatsApp</title>
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12.01 0C5.49 0 .21 5.28.21 11.8c0 2.08.56 4.08 1.63 5.85L0 24l6.51-1.71a11.6 11.6 0 0 0 5.51 1.41h.01c6.52 0 11.8-5.28 11.8-11.8 0-3.15-1.23-6.11-3.31-8.19ZM12.03 21.5c-1.77 0-3.5-.47-5.02-1.37l-.36-.21-3.86 1.02 1.03-3.75-.24-.39A9.65 9.65 0 0 1 2.37 11.8c0-5.32 4.34-9.66 9.66-9.66 2.58 0 5.01 1.01 6.84 2.85a9.64 9.64 0 0 1 2.83 6.81c0 5.32-4.34 9.65-9.66 9.65Zm5.3-7.26c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.63.15-.18.3-.72.94-.88 1.14-.16.19-.32.22-.61.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.36.43-.54.14-.18.18-.3.29-.5.1-.2.05-.37-.03-.52-.08-.15-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48h-.54c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.21 3.08c.15.2 2.08 3.18 5.05 4.46.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
