"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

const items = [
  { icon: "🐾", title: "Eventos caninos", text: "Encontros, adestramento e socialização." },
  { icon: "🍖", title: "Nutrição", text: "Guias de alimentação saudável e receitas." },
  { icon: "🎥", title: "Conteúdo exclusivo", text: "Vídeos e lives com especialistas." },
  { icon: "💬", title: "Comunidade", text: "Troca de experiências e amizades." },
];

export default function Features() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">O que oferecemos</h2>
        <div className="features-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <article key={idx} className="feature-card rounded-2xl border border-black/10 p-6 shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-white/5">
              <div className="feature-icon text-4xl">{it.icon}</div>
              <h3 className="mt-3 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}