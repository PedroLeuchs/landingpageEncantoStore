"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const images = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=801&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=802&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc3?q=80&w=803&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=804&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=805&auto=format&fit=crop",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-gradient-to-b from-white to-teal-50 dark:from-black dark:to-teal-950/30">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Galeria</h2>
        <div className="gallery-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="Cachorro" className="gallery-item h-64 w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}