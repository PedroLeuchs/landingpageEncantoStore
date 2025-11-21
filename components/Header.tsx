"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-letter", {
        y: -20,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-black/5 dark:supports-[backdrop-filter]:bg-black/40 dark:border-white/10">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between"
      >
        <a href="#hero" className="flex items-center gap-2">
          <div className="relative h-8 w-28 md:h-10 md:w-32">
            <Image
              src={logo}
              alt="encantostoreju"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              priority
              className="object-contain"
            />
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary">
            Sobre
          </a>
          <a href="#products" className="hover:text-primary">
            Produtos
          </a>
          <a
            href="#contact"
            className="rounded-full border px-4 py-2 hover:bg-primary hover:text-white border-primary text-primary"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
