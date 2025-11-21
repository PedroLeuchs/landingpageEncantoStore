"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import Image from "next/image";
import logoCompleta from "../assets/logoCompleta.png";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      gsap.set([".hero-logo", ".hero-shine"], {
        willChange: "transform, opacity, filter",
      });
      tl.from(".hero-logo", {
        opacity: 0,
        scale: 0.95,
        y: 20,
        filter: "blur(12px)",
        duration: 0.9,
      })
        .to(".hero-logo", { filter: "blur(0px)", duration: 0.3 }, "<")
        .fromTo(
          ".hero-shine",
          { xPercent: -30, opacity: 0 },
          { xPercent: 130, opacity: 1, duration: 1.2, ease: "power2.out" },
          "<"
        )
        .to(".hero-shine", { opacity: 0, duration: 0.6 }, ">-");

      ScrollTrigger.create({
        trigger: ref.current!,
        start: "top 90%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });

      gsap.to(".orb", {
        yPercent: -20,
        xPercent: 10,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
        stagger: { each: 0.6, from: "random" },
      });

      gsap.from("section", {
        scrollTrigger: {
          trigger: ref.current!,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
        backgroundPosition: "0% 100%",
        duration: 1,
        ease: "none",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[80vh] sm:h-screen w-full overflow-hidden bg-background"
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={logoCompleta}
          alt="Logo Completa"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-contain md:object-cover"
          priority
        />
        <div className="hero-shine pointer-events-none absolute top-0 left-0 h-full w-2/3 sm:w-1/2 md:w-1/3 bg-gradient-to-r from-white/0 via-white/40 to-white/0 mix-blend-screen" />
      </div>
    </section>
  );
}
