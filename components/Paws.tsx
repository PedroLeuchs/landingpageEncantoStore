"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function Paws() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".paw-inline", {
        rotate: 10,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.25,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-2">
      {[...Array(3)].map((_, i) => (
        <svg key={i} className="paw-inline h-5 w-5 fill-teal-500" viewBox="0 0 64 64" aria-hidden="true"><circle cx="16" cy="16" r="8"/><circle cx="48" cy="16" r="8"/><circle cx="24" cy="48" r="8"/><circle cx="40" cy="48" r="8"/><ellipse cx="32" cy="28" rx="12" ry="10"/></svg>
      ))}
    </div>
  );
}