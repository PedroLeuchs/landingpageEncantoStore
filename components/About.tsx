"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-block", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current!, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sobre a Trae AI</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="about-block rounded-2xl border border-black/10 p-6 bg-white/70 dark:bg-white/5">
            <h3 className="text-xl font-bold">História</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Nasceu para transformar ideias em produtos com IA, rapidamente e com qualidade.</p>
          </div>
          <div className="about-block rounded-2xl border border-black/10 p-6 bg-white/70 dark:bg-white/5">
            <h3 className="text-xl font-bold">Valores</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Velocidade, simplicidade, confiança e foco em resultados mensuráveis.</p>
          </div>
          <div className="about-block rounded-2xl border border-black/10 p-6 bg-white/70 dark:bg-white/5">
            <h3 className="text-xl font-bold">Diferenciais</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Arquiteturas modernas, automações e equipe experiente em AI/Produto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}