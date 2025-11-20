"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import productsData from "../data/products.json";

type Product = {
  name: string;
  price: number;
  images: string[];
};

const productsInfo: Product[] = productsData as Product[];

export default function Products() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".prod-card");
      cards.forEach((card) => {
        const slider = card.querySelector<HTMLElement>(".prod-slider");
        const track = card.querySelector<HTMLElement>(".prod-track");
        const slides = Array.from(card.querySelectorAll<HTMLElement>(".prod-slide"));
        const prev = card.querySelector<HTMLButtonElement>(".prod-prev");
        const next = card.querySelector<HTMLButtonElement>(".prod-next");
        const count = card.querySelector<HTMLElement>(".prod-count");
        if (!track || slides.length === 0) return;

        let idx = 0;
        const slideWidth = () => (slider?.clientWidth || slides[0]?.clientWidth || 0);
        const goTo = (i: number) => {
          idx = gsap.utils.clamp(0, slides.length - 1, i);
          gsap.to(track, { x: -idx * slideWidth(), duration: 0.4, ease: "power2.out" });
          if (count) count.textContent = `${idx + 1} / ${slides.length}`;
        };
        goTo(0);
        prev?.addEventListener("click", () => goTo(idx - 1));
        next?.addEventListener("click", () => goTo(idx + 1));
        window.addEventListener("resize", () => goTo(idx), { passive: true });
      });
      gsap.from(".prod-card", {
        scrollTrigger: { trigger: ref.current!, start: "top 80%", toggleActions: "restart none restart none" },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={ref} className="py-28 min-h-[100vh]">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Produtos</h2>
        <p className="mt-2 text-sm opacity-80">Populado por JSON, com carrossel por produto.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsInfo.map((p, i) => (
            <article key={i} className="prod-card rounded-2xl border border-black/10 p-4 bg-white/70 dark:bg-white/5 h-74">
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <span className="text-primary font-semibold">R$ {p.price.toFixed(2)}</span>
              </div>
              <div className="mt-3 relative">
                <div className="prod-slider overflow-hidden rounded-xl">
                  <div className="prod-track flex" style={{ width: `${(p.images?.length || 1) * 100}%` }}>
                    {(p.images || []).map((src, idx) => (
                      <div key={idx} className="prod-slide shrink-0" style={{ width: `${100 / (p.images?.length || 1)}%` }}>
                        <img src={src} alt={`${p.name} imagem ${idx + 1}`} className="h-48 w-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                <div className="absolute inset-x-32 bottom-2 flex items-center justify-between px-2">
                  <button type="button" className="prod-prev rounded-full bg-black/60 text-white px-3 py-1 text-xs">◀</button>
                  <div className="prod-count rounded-full bg-black/60 text-white px-3 py-1 text-xs">1 / {(p.images.length)}</div>
                  <button type="button" className="prod-next rounded-full bg-black/60 text-white px-3 py-1 text-xs">▶</button>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}