"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Instagram,
  Headphones,
  Home,
  Brain,
  Target,
  ArrowUpRight,
  Activity,
  Terminal,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------- SpotlightCard -------------------- */

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const SpotlightCard = ({
  children,
  className = "",
  onClick,
  ...props
}: SpotlightCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      {...props}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-[#080808] group transition-all duration-500 hover:border-red-600/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-30"
        style={{
          opacity,
          background: `radial-gradient(
            400px circle at ${position.x}px ${position.y}px,
            rgba(220,38,38,0.15),
            transparent 40%
          )`,
        }}
      />
      {children}
    </div>
  );
};

/* -------------------- BentoGrid -------------------- */

export default function BentoGrid() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-item-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="bento"
      className="relative py-20 md:py-40 px-4 md:px-10 lg:px-20 max-w-[1600px] mx-auto bg-black z-30"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              Protocol // Essence_02
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] text-white">
            OPERATIVE <br /> <span className="text-zinc-800">ECOSYSTEM.</span>
          </h2>
        </div>

        <div className="max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-6 md:pl-0 md:pr-6">
          <p className="text-zinc-400 text-xs md:text-sm italic font-medium leading-relaxed">
            Neural mapping of tactical environment. Database entries secured.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[450px]">
        {/* 1 */}
        <SpotlightCard className="bento-item-anim col-span-12 md:col-span-8 md:row-span-2">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e')] bg-cover opacity-10 grayscale group-hover:opacity-40 transition-all duration-1000" />
          <div className="relative h-full p-8 md:p-14 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <Target className="text-red-600 w-10 h-10" />
              <span className="text-white font-mono text-[10px] tracking-widest border border-white/10 px-3 py-1 rounded bg-black/50">
                Rank: Radiant
              </span>
            </div>
            <h3 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] text-white">
              STRIKE ZONE.
            </h3>
          </div>
        </SpotlightCard>

        {/* 2 */}
        <SpotlightCard className="bento-item-anim col-span-12 sm:col-span-6 md:col-span-4">
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <Home size={32} className="text-white" />
              <Activity size={20} className="animate-pulse text-red-600" />
            </div>
            <h3 className="text-4xl md:text-7xl font-black italic uppercase text-white">
              100% <br /> HOMEBODY.
            </h3>
          </div>
        </SpotlightCard>

        {/* 3 */}
        <SpotlightCard className="bento-item-anim col-span-12 sm:col-span-6 md:col-span-4">
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
            <Headphones className="text-red-600 w-8 h-8" />
            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white">
              Silent_Network
            </h3>
          </div>
        </SpotlightCard>

        {/* 4 */}
        <SpotlightCard className="bento-item-anim col-span-12 md:col-span-7 lg:col-span-5">
          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
            <div className="flex items-center gap-4">
              <Terminal size={24} className="text-red-600" />
              <span className="text-zinc-500 font-mono text-[10px] uppercase font-bold">
                Logic_Processor
              </span>
            </div>
            <p className="text-2xl md:text-5xl font-black italic uppercase text-white">
              Calculated silence. <br /> 10 steps ahead.
            </p>
          </div>
        </SpotlightCard>

        {/* 5 – CLICKABLE IG */}
        <SpotlightCard
          className="bento-item-anim col-span-12 md:col-span-5 lg:col-span-3 flex flex-col items-center justify-center text-center cursor-pointer p-10"
          onClick={() =>
            window.open("https://instagram.com/ifwtranquils", "_blank")
          }
        >
          <Instagram className="text-white mb-4 w-12 h-12 group-hover:scale-110 group-hover:text-red-600 transition-all" />
          <h3 className="text-xl md:text-2xl font-black italic text-white uppercase">
            @ifwtranquils
          </h3>
          <div className="mt-4 flex items-center gap-2 text-zinc-500 font-mono text-[9px] uppercase">
            Connect <ArrowUpRight size={14} />
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
