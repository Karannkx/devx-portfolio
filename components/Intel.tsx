"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollVelocity } from "./ScrollVelocity";
import { ArrowRight, Terminal, ShieldAlert } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Reveal Logic - High Visibility
      gsap.fromTo(".intel-image-inner",
        { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".intel-image-inner",
            start: "top 85%",
          },
        }
      );

      // Text Stagger
      gsap.from(".intel-reveal", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intel-reveal-container",
          start: "top 90%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="intel" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5 z-10">
      
      {/* --- BACKGROUND WATERMARK (Visible Zinc Color) --- */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 md:gap-8 pointer-events-none select-none">
        <ScrollVelocity
          texts={["CORE LOGIC • SHREYA SYSTEM •", "VOID PROTOCOL • ACTIVE •"]}
          velocity={15}
          className="text-[12vw] font-black uppercase text-zinc-900/40 leading-none italic"
        />
        <ScrollVelocity
          texts={["ENCRYPTED IDENTITY • STEALTH •", "ALGORITHM OF SOLITUDE •"]}
          velocity={-15}
          className="text-[12vw] font-black uppercase text-zinc-900/40 leading-none italic"
        />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto intel-reveal-container">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-4 mb-6 intel-reveal">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <Terminal size={16} className="text-red-600" />
              <span className="text-red-600 font-mono text-xs tracking-[0.4em] uppercase font-bold">Access_Level: OMEGA</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[9vw] font-black tracking-tighter leading-[0.85] uppercase intel-reveal text-white">
              VOID <br /> <span className="text-zinc-700 italic">OPERATOR.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:text-right pb-2 intel-reveal">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full">
              <ShieldAlert size={12} className="text-zinc-400" />
              <span className="text-zinc-400 font-mono text-[10px] tracking-widest uppercase italic">Stealth_Active</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-stretch">
          
          {/* IMAGE BLOCK */}
          <div className="lg:col-span-7 intel-image-inner relative h-[350px] md:h-[65vh] rounded-3xl overflow-hidden group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)]">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
              alt="Environment"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>

          {/* DATA BLOCK */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl h-full intel-reveal shadow-xl">
              <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter text-white border-b border-zinc-800 pb-4">The Sanctuary</h3>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium mb-12">
                Operating on a different frequency. While the world seeks energy in crowds, I refine my power in solitude. 
                A tactical setup, optimized code, and the absolute focus of a silent architect.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-zinc-500 font-bold tracking-widest uppercase italic text-xs">Sanctuary_Locked</span>
                <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                  <ArrowRight className="text-red-600 -rotate-45" size={24} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 intel-reveal">
               <div className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-3xl">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-2 font-mono italic">Chess.Logic</span>
                  <span className="text-2xl md:text-3xl font-black italic text-white tracking-tighter">MATE_IN_10</span>
               </div>
               <div className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-3xl">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-2 font-mono italic">Val.Protcl</span>
                  <span className="text-2xl md:text-3xl font-black italic text-white tracking-tighter uppercase">RADIANT</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}