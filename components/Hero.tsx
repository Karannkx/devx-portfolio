"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);
  
  // 1. Latency State Logic
  const [latency, setLatency] = useState(12);
  
  // 2. Typing Animation State Logic
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Software Engineer", "Ethical Hacker", "Pro Gamer"];
  const typingSpeed = isDeleting ? 50 : 100; // Deleting is faster

  // Random Latency Generator
  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (18 - 8 + 1)) + 8);
    }, 2000);
    return () => clearInterval(latencyInterval);
  }, []);

  // Professional Typing/Backspacing Loop
  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[wordIndex];
      
      if (isDeleting) {
        setDisplayText(currentFullWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentFullWord.substring(0, displayText.length + 1));
      }

      // Switch to deleting after a pause
      if (!isDeleting && displayText === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // Switch to next word after full deletion
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-main", {
        y: "100%",
        skewY: 7,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      gsap.to(".bg-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 80,
        scale: 1.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#050505]"
    >
      
      {/* Background Cinematic Texture */}
      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-40">
        <div className="bg-image absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center md:bg-right"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* HUD: Status Badge */}
        <div className="hero-sub flex items-center gap-2 mb-4 text-red-600 font-mono text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          System Operational // Active
        </div>

        {/* Massive Title */}
        <h1 className="text-[18vw] sm:text-[15vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] italic">
          <span className="hero-text-main block overflow-hidden">
            SHREYA<span className="text-red-600">.</span>
          </span>
        </h1>

        {/* --- NEW TYPING ANIMATION TEXT --- */}
        <div className="hero-sub min-h-[30px] mb-8 sm:mb-10">
          <p className="font-mono text-red-500 text-sm sm:text-lg md:text-xl uppercase tracking-[0.2em] font-bold">
            &gt; {displayText}
            <span className="animate-pulse inline-block w-2 h-4 sm:w-3 sm:h-5 bg-red-500 ml-2 align-middle"></span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-8">
          {/* Bio Text */}
          <p className="hero-sub text-zinc-400 text-lg sm:text-xl md:text-2xl max-w-lg leading-tight font-medium">
            An introvert finding solace in <span className="text-white">pixels</span>, 
            <span className="text-white"> strategy</span>, and silence. 
            Destroying lobbies in <span className="text-red-500 italic">Valorant</span> while home-bound.
          </p>

          {/* Stats & CTA Section */}
          <div className="hero-sub flex flex-col gap-6 sm:gap-8">
             <div className="flex items-center gap-4 text-zinc-500 text-[10px] sm:text-xs font-mono tracking-widest">
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[8px] uppercase mb-1">Latency</span>
                  <span className="text-white tabular-nums">{latency}ms</span>
                </div>
                <div className="w-[1px] h-8 bg-zinc-800" />
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[8px] uppercase mb-1">Rank</span>
                  <span className="text-white">RADIANT</span>
                </div>
             </div>
             
             <button className="w-fit flex items-center gap-4 bg-white text-black pl-8 pr-4 py-4 rounded-full font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all group active:scale-95">
                Initiate Protocol 
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-600 transition-colors">
                  <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
             </button>
          </div>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute right-6 bottom-10 md:left-10 md:bottom-10 hero-sub">
        <div className="md:rotate-[-90deg] md:origin-left flex items-center gap-4 text-[9px] sm:text-[10px] text-zinc-700 tracking-[0.3em] uppercase font-mono">
          <span className="hidden md:inline">Operational_Safehouse_001</span>
          <span className="md:hidden">SHR_OS_v.2.0.6</span>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <span className="text-red-900/40 font-black tracking-tighter uppercase">Secured</span>
        </div>
      </div>

      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </section>
  );
}