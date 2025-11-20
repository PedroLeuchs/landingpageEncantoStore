"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

const stats = [
  { label: "Membros", target: 12000 },
  { label: "Eventos por ano", target: 350 },
  { label: "Satisfação (%)", target: 98 },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>(".stat-number").forEach((el) => {
        const end = Number(el.dataset.target || "0");

        const startAnim = () => {
          const obj = { val: 0 } as { val: number };
          return gsap.to(obj, {
            val: end,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString("pt-BR");
            },
          });
        };

        let tween: gsap.core.Tween | null = null;
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => {
            tween?.kill();
            el.textContent = "0";
            tween = startAnim();
          },
          onEnterBack: () => {
            tween?.kill();
            el.textContent = "0";
            tween = startAnim();
          },
          onLeave: () => {
            tween?.kill();
          },
          onLeaveBack: () => {
            tween?.kill();
            el.textContent = "0";
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Nosso impacto</h2>
        <div className="stats-grid mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="stat rounded-2xl border border-black/10 p-8 text-center bg-white/70 dark:bg-white/5">
              <div className="stat-number text-4xl font-black" data-target={String(s.target)}>0</div>
              <div className="stat-label mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}