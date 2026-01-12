"use client";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 md:pt-32 pb-10 px-4 md:px-20 relative z-20 overflow-hidden">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-10 md:gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
            <span className="text-zinc-600 font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">End_of_Protocol</span>
          </div>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.8] italic uppercase">
            LET'S <br /> <span className="text-white">CONNECT.</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-xl font-medium max-w-md leading-tight italic">
            Operating from the sanctuary. If you want to talk tactics, chess, or solitude—the network is open.
          </p>
        </div>

        {/* Links Area - Only Instagram */}
        <div className="flex flex-col gap-4 md:gap-6 md:text-right w-full md:w-auto">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-zinc-700 font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">// NETWORK_ID</span>
            <a 
              href="https://instagram.com/ifwtranquils" 
              target="_blank"
              className="text-3xl md:text-5xl font-black italic tracking-tighter hover:text-red-600 transition-all duration-500 flex items-center md:justify-end gap-2 group"
            >
              @ifwtranquils <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* --- REFRESHED INFINITE MARQUEE --- */}
      <div className="relative border-y border-white/5 py-6 md:py-10 my-10 md:my-20 overflow-hidden group cursor-default">
        <div className="flex w-fit animate-marquee">
          {/* First Set */}
          <div className="flex items-center whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[20vw] md:text-[15vw] font-black text-zinc-900 leading-none uppercase italic mx-4 md:mx-10">
                SHREYA —
              </span>
            ))}
          </div>
          {/* Duplicate Set for seamless loop */}
          <div className="flex items-center whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[20vw] md:text-[15vw] font-black text-zinc-900 leading-none uppercase italic mx-4 md:mx-10">
                SHREYA —
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[8px] md:text-[10px] font-mono tracking-[0.2em] gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <p>© 2026 // DESIGNED_BY_SHREYA</p>
          <span className="hidden md:block text-zinc-900">|</span>
          <p>STAY_OFFLINE_STAY_SAFE</p>
        </div>

        <button 
          onClick={scrollToTop} 
          className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors group px-5 py-2 border border-zinc-900 rounded-full bg-zinc-950/50"
        >
          BACK_TO_TOP <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-3">
           <span className="opacity-50">OS_VERSION_2.0.6</span>
           <span className="text-red-600 animate-pulse">●</span>
        </div>
      </div>
    </footer>
  );
}