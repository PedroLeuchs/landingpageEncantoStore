"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function CTA() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-card", {
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="cta-card rounded-3xl bg-primary p-10 md:p-16 text-white grid gap-6 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Entre para o Doggo Club</h2>
            <p className="mt-2 opacity-90">Assine a newsletter e receba novidades e eventos.</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <input type="email" placeholder="Seu melhor e-mail" required className="w-full rounded-full px-5 py-3 text-black" />
            <button type="submit" className="rounded-full bg-black/90 px-6 py-3 font-semibold text-white hover:bg-black">Assinar</button>
          </form>
        </div>
      </div>
    </section>
  );
}