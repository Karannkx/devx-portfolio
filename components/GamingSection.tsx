"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GamingSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        // High end value ensures full horizontal scroll before moving to the next section
        end: "+=3000", 
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={scrollRef} className="overflow-hidden bg-[#050505] text-white relative z-10 border-y border-white/5">
      {/* w-[300vw] maintains the 3 sections width */}
      <div className="flex w-[300vw] h-screen">
        
        {/* VALORANT */}
        <section className="panel w-screen h-full flex flex-col items-center justify-center p-4 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614027164847-1b2809eb189d?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 blur-sm pointer-events-none"></div>
          <h2 className="text-6xl sm:text-8xl md:text-[15vw] font-black uppercase tracking-tighter leading-none z-10 italic text-center px-4">
            Valorant
          </h2>
          <div className="z-10 flex flex-col md:flex-row gap-3 md:gap-6 items-center mt-8">
            <span className="px-4 py-2 md:px-6 md:py-2 border border-red-600 text-red-600 rounded-full font-mono text-xs sm:text-sm md:text-xl uppercase tracking-widest whitespace-nowrap">
              Radiant Aspirant
            </span>
            <span className="text-zinc-500 font-mono text-xs sm:text-sm md:text-xl italic text-center md:text-left tracking-tighter">
              // One tap specialist
            </span>
          </div>
        </section>

        {/* CHESS */}
        <section className="panel w-screen h-full flex flex-col items-center justify-center bg-white text-black p-4 md:p-20 relative overflow-hidden">
          <h2 className="text-6xl sm:text-8xl md:text-[15vw] font-black uppercase tracking-tighter leading-none z-10 italic text-center px-4">
            Chess
          </h2>
          <div className="z-10 flex flex-col md:flex-row gap-3 md:gap-6 items-center mt-8">
            <span className="px-4 py-2 md:px-6 md:py-2 bg-black text-white rounded-full font-mono text-xs sm:text-sm md:text-xl uppercase tracking-widest whitespace-nowrap">
              The Strategist
            </span>
            <span className="text-zinc-600 font-mono text-xs sm:text-sm md:text-xl italic text-center md:text-left tracking-tighter">
              // 10 moves ahead
            </span>
          </div>
        </section>

        {/* COD */}
        <section className="panel w-screen h-full flex flex-col items-center justify-center bg-zinc-950 text-white p-4 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"></div>
          <h2 className="text-6xl sm:text-8xl md:text-[15vw] font-black uppercase tracking-tighter leading-none z-10 italic text-center px-4">
            COD
          </h2>
          <div className="z-10 flex flex-col md:flex-row gap-3 md:gap-6 items-center mt-8">
            <span className="px-4 py-2 md:px-6 md:py-2 border border-white text-white rounded-full font-mono text-xs sm:text-sm md:text-xl uppercase tracking-widest whitespace-nowrap">
              Midnight Lobbies
            </span>
            <span className="text-zinc-500 font-mono text-xs sm:text-sm md:text-xl italic text-center md:text-left tracking-tighter">
              // No mercy, all focus
            </span>
          </div>
        </section>
        
      </div>
    </div>
  );
}