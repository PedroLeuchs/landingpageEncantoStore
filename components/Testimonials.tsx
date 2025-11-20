"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const testimonials = [
  { quote: "Trae elevou nossa velocidade em 3x.", author: "CTO, Fintech" },
  { quote: "Experiências com IA que nossos clientes amam.", author: "Head de Produto, Retail" },
  { quote: "Automatizamos processos críticos em semanas.", author: "COO, Logística" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-white to-teal-50 dark:from-black dark:to-teal-950/30">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Depoimentos</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="testimonial rounded-2xl border border-black/10 p-6 bg-white/70 dark:bg-white/5">
              <blockquote className="text-lg">“{t.quote}”</blockquote>
              <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}