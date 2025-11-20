"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = document.querySelector<HTMLElement>(".ss-track");
      const dots = gsap.utils.toArray<HTMLElement>(".ss-dot");
      if (!track) return;

      gsap.set(track, { willChange: "transform" });
      gsap.set(".ss-slide", { willChange: "transform, opacity" });

      const slidesCount = gsap.utils.toArray(".ss-slide").length || 1;

      const tl = gsap.timeline({ defaults: { ease: "none" } });
      tl.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        duration: 1,
      });

      ScrollTrigger.create({
        trigger: ref.current!,
        start: "top top",
        end: () => "+=" + (track.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tl,
        snap: slidesCount > 1 ? 1 / (slidesCount - 1) : undefined,
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (slidesCount - 1));
          dots.forEach((d, i) => gsap.to(d, { scale: i === idx ? 1.2 : 1, opacity: i === idx ? 1 : 0.5, duration: 0.2 }));
        },
        onLeaveBack: () => tl.progress(0).pause(0),
      });

      ScrollTrigger.addEventListener("refresh", () => {
        tl.invalidate();
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" ref={ref} className="relative py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/30 dark:to-black">
      <div className="mx-auto max-w-[100vw] px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Apresentação sincronizada ao scroll</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Conteúdo desliza horizontalmente conforme você rola.</p>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="ss-track flex">
          <div className="ss-slide w-screen shrink-0 px-6">
            <div className="h-[60vh] md:h-[70vh] rounded-2xl border border-black/10 p-6 bg-white/80 dark:bg-white/5 flex items-center">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold">Velocidade</h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">Produtos com IA entregues em ciclos curtos.</p>
              </div>
            </div>
          </div>
          <div className="ss-slide w-screen shrink-0 px-6">
            <div className="h-[60vh] md:h-[70vh] rounded-2xl border border-black/10 p-6 bg-white/80 dark:bg-white/5 flex items-center">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold">Experiência</h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">UX refinada com animações suaves.</p>
              </div>
            </div>
          </div>
          <div className="ss-slide w-screen shrink-0 px-6">
            <div className="h-[60vh] md:h-[70vh] rounded-2xl border border-black/10 p-6 bg-white/80 dark:bg-white/5 flex items-center">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold">Resultado</h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">Foco em métricas e conversão.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="ss-dot h-2 w-2 rounded-full bg-teal-600 opacity-1" />
          <span className="ss-dot h-2 w-2 rounded-full bg-teal-600 opacity-50" />
          <span className="ss-dot h-2 w-2 rounded-full bg-teal-600 opacity-50" />
        </div>
      </div>
    </section>
  );
}