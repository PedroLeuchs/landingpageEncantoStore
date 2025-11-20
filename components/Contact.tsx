"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import contactImages from "../data/contact.json";

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const resolvePath = (p: string) => {
    if (!p) return "";
    if (/^https?:\/\//.test(p)) return p;
    if (p.startsWith("/assets/")) return p;
    if (/^img\d+$/.test(p)) return `/assets/${p}.jpg`;
    const clean = p.replace(/^\/?assets[\/]/, "").replace(/\\/g, "/");
    return "/assets/" + clean;
  };
  const images: string[] = Array.isArray(contactImages) ? contactImages.map(resolvePath) : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const debug = typeof window !== "undefined" && window.location.hostname === "localhost";
      gsap.set([".ig-card", ".ig-post"], { willChange: "transform, opacity" });
      gsap.set(".ig-card", {  x: 0, y: 0, transformOrigin: "left top", width: "350px", height: "350px" });

      const slider = document.querySelector<HTMLElement>(".ig-slider");
      const track = document.querySelector<HTMLElement>(".ig-track");
      const slides = gsap.utils.toArray<HTMLElement>(".ig-slide");
      const countEl = document.querySelector<HTMLElement>(".ig-count");
      const total = (images.length || slides.length) || 1;
      if (countEl) countEl.textContent = `1 / ${total}`;

      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl
        .to(".ig-card", {  x: "100%" , y: "-30%", duration: 0.6, width: "450px", height: "800px" })
        .fromTo(".ig-post", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5 }, "<");

      let slideTween: gsap.core.Tween | null = null;
      if (slider && track) {
        gsap.set(track, { willChange: "transform" });
        gsap.set(slides, { willChange: "transform, opacity" });
        slideTween = gsap.to(track, {
          x: () => -(track.scrollWidth - slider.clientWidth),
          ease: "none",
          duration: 0.9,
        });
        tl.add(slideTween);
      }

      ScrollTrigger.create({
        trigger: ref.current!,
        start: "top 25%",
        end: () => {
          if (slider && track) {
            return "+=" + Math.max(track.scrollWidth - slider.clientWidth, 600);
          }
          return "+=800";
        },
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
        animation: tl,
        id: "ig-card-st",
        snap: slides.length > 1 ? 1 / (slides.length - 1) : undefined,
        onUpdate: () => {
          if (!countEl || !slideTween) return;
          const idx = Math.round(slideTween.progress() * (total - 1));
          countEl.textContent = `${idx + 1} / ${total}`;
        },
      });

      ScrollTrigger.addEventListener("refresh", () => {
        tl.invalidate();
      });

      window.addEventListener("resize", () => gsap.delayedCall(0.05, () => ScrollTrigger.refresh()), { passive: true });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 h-[120vh]">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="ig-card relative rounded-3xl p-10 md:p-6 text-white flex flex-col gap-4"
          style={{
            background:
              "linear-gradient(135deg, #f58529 0%, #feda75 25%, #dd2a7b 50%, #8134af 75%, #515bd4 100%)",
          }}
        >
          <div className="ig-count absolute top-24 right-10 rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs z-9">1 / {images.length || 1}</div>
          <div className="flex items-center justify-between gap-3" aria-label="Divulgação do Instagram">
            <div className="text-xl md:text-2xl font-bold bg-black/50 rounded-full px-3 py-1">@encantostoreju</div>
            <a 
              href="https://www.instagram.com/encantostoreju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >

            <svg viewBox="0 0 24 24" className="h-8 w-8" role="img" aria-label="Logo do Instagram">
              <title>Instagram</title>
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" fill="currentColor" />
            </svg>
            </a>
          </div>
          {/* <p className="mt-3 opacity-90">Siga-nos no Instagram</p> */}
          <div className="ig-post overflow-hidden rounded-2xl bg-white/10 p-2 h-full w-full">
            <div className="ig-slider overflow-hidden h-full w-full">
              <div className="ig-track flex h-full" style={{ width: `${(images.length || 1) * 100}%` }}>
                {images.map((src, idx) => (
                  <div key={idx} className="ig-slide h-full shrink-0" style={{ width: `${100 / (images.length || 1)}%` }}>
                    <img className="h-full w-full object-cover rounded-xl" src={src} alt={`Publicação ${idx + 1} do Instagram`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}