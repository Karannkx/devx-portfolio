"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-wrapper", 
        { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 },
        { 
          clipPath: "inset(0% 0% 0% 0%)", 
          opacity: 1, 
          duration: 1.5, 
          ease: "expo.inOut",
          delay: 0.3 
        }
      );

      gsap.from(".nav-item", {
        y: -10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1
      });
    });

    return () => ctx.revert();
  }, []);

  const menuItems = [
    { name: "ARSENAL", href: "#arsenal" },
    { name: "NETWORK", href: "https://instagram.com/ifwtranquils" },
    { name: "INTEL", href: "#intel" },
    { name: "COMMS", href: "#footer" }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[1000] p-4 pointer-events-none flex justify-center">
      {/* max-w-xl ensures it looks like a mobile pill even on large screens */}
      <div className="nav-wrapper w-full max-w-xl pointer-events-auto overflow-hidden">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3 rounded-2xl md:rounded-full flex justify-between items-center px-6">
          
          {/* LOGO */}
          <div className="nav-item flex items-center">
            <span className="text-white font-black tracking-tighter text-sm md:text-base uppercase whitespace-nowrap">
              Shreya <span className="text-red-600">—</span>
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-3 md:gap-6">
            {menuItems.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="nav-item group relative px-1 md:px-2 py-1"
              >
                <span className="relative z-10 text-[9px] md:text-[11px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Minimal status dot for HUD feel */}
          <div className="nav-item flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_red]" />
          </div>
        </div>
      </div>
    </nav>
  );
}