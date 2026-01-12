"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Instagram, Headphones, Home, Brain, 
  Target, Zap, Fingerprint, 
  ArrowUpRight, Activity, Terminal
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SpotlightCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-[#080808] group transition-all duration-500 hover:border-red-600/30 ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-30"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(220,38,38,0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function BentoGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Visibility Fix: Trigger point ko lenient rakha hai taaki instantly show ho
      gsap.fromTo(".bento-item-anim", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Jab section ka top 90% screen par aaye
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="bento" // ID MUST MATCH NAVBAR HREF
      className="relative py-20 md:py-40 px-4 md:px-10 lg:px-20 max-w-[1600px] mx-auto bg-black z-30"
    >
      
      {/* HUD HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
             <span className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Protocol // Essence_02</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] text-white">
            OPERATIVE <br /> <span className="text-zinc-800">ECOSYSTEM.</span>
          </h2>
        </div>
        <div className="max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-6 md:pl-0 md:pr-6">
           <p className="text-zinc-400 text-xs md:text-sm italic font-medium leading-relaxed">
             Neural mapping of Shreya's tactical environment. Database entries secured.
           </p>
        </div>
      </div>

      {/* Main Grid - Fixed Mobile Stacking */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[450px]">
        
        {/* 1. TACTICAL COMBAT */}
        <SpotlightCard className="bento-item-anim col-span-12 md:col-span-8 md:row-span-2">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')] bg-cover opacity-10 grayscale group-hover:opacity-40 transition-all duration-1000" />
          <div className="relative h-full p-8 md:p-14 flex flex-col justify-between z-10">
             <div className="flex justify-between items-start">
                <Target className="text-red-600 w-10 h-10" />
                <span className="text-white font-mono text-[10px] tracking-widest border border-white/10 px-3 py-1 rounded bg-black/50">Rank: Radiant</span>
             </div>
             <div>
                <h3 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6 text-white text-wrap">STRIKE ZONE.</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                   {['Valorant', 'Chess', 'COD'].map(tag => (
                     <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{tag}</span>
                   ))}
                </div>
             </div>
          </div>
        </SpotlightCard>

        {/* 2. THE SAFEHOUSE */}
        <SpotlightCard className="bento-item-anim col-span-12 sm:col-span-6 md:col-span-4 border-red-600/20">
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
             <div className="flex justify-between items-start">
                <Home size={32} className="text-white" />
                <Activity size={20} className="animate-pulse text-red-600" />
             </div>
             <div>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase mb-2 block text-zinc-600 font-bold">Sanctuary Mode</span>
                <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] text-white text-wrap">100% <br /> HOMEBODY.</h3>
             </div>
          </div>
        </SpotlightCard>

        {/* 3. NEURAL LINK */}
        <SpotlightCard className="bento-item-anim col-span-12 sm:col-span-6 md:col-span-4">
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
             <Headphones className="text-red-600 w-8 h-8" />
             <div className="space-y-6">
                <div className="flex gap-2 items-end h-16">
                   {[0.4, 0.9, 0.5, 0.8, 0.3, 0.7].map((h, i) => (
                     <div key={i} className="flex-1 bg-red-600/50 rounded-sm animate-pulse" style={{ height: `${h * 100}%` }} />
                   ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest italic text-white">Silent_Network</h3>
             </div>
          </div>
        </SpotlightCard>

        {/* 4. THE MIND */}
        <SpotlightCard className="bento-item-anim col-span-12 md:col-span-7 lg:col-span-5 overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:opacity-20 transition-opacity hidden md:block">
            <Brain size={350} className="text-red-600" />
          </div>
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10 text-wrap">
             <div className="flex items-center gap-4">
                <Terminal size={24} className="text-red-600" />
                <span className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase font-bold">Logic_Processor</span>
             </div>
             <p className="text-2xl md:text-5xl font-black italic tracking-tighter text-white leading-[0.95] uppercase">
               Calculated silence. <br /> 10 steps ahead.
             </p>
          </div>
        </SpotlightCard>

        {/* 5. IG GATEWAY */}
        <SpotlightCard 
          className="bento-item-anim col-span-12 md:col-span-5 lg:col-span-3 flex flex-col items-center justify-center text-center cursor-pointer p-10 group"
          onClick={() => window.open('https://instagram.com/ifwtranquils', '_blank')}
        >
          <Instagram className="text-white mb-4 w-12 h-12 group-hover:scale-110 group-hover:text-red-600 transition-all" />
          <h3 className="text-xl md:text-2xl font-black italic text-white uppercase">@ifwtranquils</h3>
          <div className="mt-4 flex items-center gap-2 text-zinc-500 font-mono text-[9px] tracking-widest uppercase">Connect <ArrowUpRight size={14} /></div>
        </SpotlightCard>

        {/* 6. SYSTEM STATUS */}
        <SpotlightCard className="bento-item-anim col-span-12 bg-black border-dashed border-white/10 h-auto py-12 md:py-0">
          <div className="h-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 px-6">
             <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-red-600 font-black text-5xl md:text-7xl italic tracking-tighter leading-none">ELITE</span>
                <span className="text-zinc-600 font-mono text-[9px] tracking-[0.3em] uppercase mt-1">Core_Performance_Mode</span>
             </div>
             <div className="hidden md:block w-px h-16 bg-zinc-900 rotate-[25deg]" />
             <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-white font-black text-5xl md:text-7xl italic tracking-tighter leading-none">STEALTH</span>
                <span className="text-zinc-600 font-mono text-[9px] tracking-[0.3em] uppercase mt-1">Active_Operative_State</span>
             </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}