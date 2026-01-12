"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollStackItem: React.FC<{ children: React.ReactNode; itemClassName?: string }> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card absolute inset-0 m-auto w-full h-full rounded-[30px] md:rounded-[40px] shadow-2xl border border-white/10 overflow-hidden bg-[#050505] ${itemClassName}`.trim()}
    style={{ 
      willChange: 'transform',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
    }}
  >
    {children}
  </div>
);

export default function ScrollStack({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".scroll-stack-card");
    if (!cards.length) return;

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      // @ts-ignore
      const { isMobile } = context.conditions;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 1200}`, // Deep scroll for heavy feel
          pin: true,
          scrub: 1.5, // Heavy smooth scrub
          anticipatePin: 1,
        }
      });

      cards.forEach((card, i) => {
        gsap.set(card, { zIndex: i + 1 });

        if (i === 0) return;

        // Animation for card coming from bottom to center
        tl.fromTo(card, 
          { 
            y: "130%", // Screen ke bahar se start
            scale: 0.9,
          }, 
          { 
            y: "0%", // Dead center
            scale: 1,
            duration: 1,
            ease: "none",
            force3D: true
          }, 
          i * 1.5
        );

        // Jab agla card poora center mein aa jaye, pichle wale ko scale down karke piche dhaklo
        tl.to(cards[i-1], {
          scale: 0.85,
          opacity: 0, // Isse ghosting khatam ho jayegi
          y: "-10%",
          duration: 0.5,
          ease: "power2.inOut"
        }, i * 1.5);
      });

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* Ye container cards ko size deta hai aur center mein rakhta hai */}
      <div 
        ref={containerRef} 
        className="relative w-[92%] md:w-[85%] lg:w-[75%] max-w-[1400px] h-[75vh] md:h-[650px] flex items-center justify-center"
      >
        {children}
      </div>
    </section>
  );
}