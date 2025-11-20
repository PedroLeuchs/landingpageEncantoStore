"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function Header() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-letter", { y: -20, opacity: 0, stagger: 0.06, duration: 0.5, ease: "power2.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-black/5 dark:supports-[backdrop-filter]:bg-black/40 dark:border-white/10">
      <div ref={ref} className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex items-center text-2xl font-extrabold tracking-tight gap-1">
            <span className="flex">
              {"Encanto".split("").map((c, i) => (
                <span key={i} className="logo-letter text-primary font-light">{c}</span>
              ))}
            </span>
            <span className="flex ml-1">
              {"Store".split("").map((c, i) => (
                <span key={i} className="logo-letter text-black dark:text-white font-light">{c}</span>
              ))}
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary">Sobre</a>
          <a href="#products" className="hover:text-primary">Produtos</a>
          <a href="#contact" className="rounded-full border px-4 py-2 hover:bg-primary hover:text-white border-primary text-primary">Contato</a>
        </nav>
      </div>
    </header>
  );
}