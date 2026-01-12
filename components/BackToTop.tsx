"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] cursor-pointer group"
        >
          {/* Main Container */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            
            {/* 1. ROTATING TEXT LAYER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-zinc-500 font-mono text-[10px] uppercase tracking-[2px] font-bold">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    Back to top — Back to top — Back to top —
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* 2. INNER CIRCLE WITH ARROW */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] group-hover:scale-110 group-hover:bg-white transition-all duration-500">
              <ArrowUp 
                size={20} 
                className="text-white group-hover:text-red-600 transition-colors duration-500" 
              />
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-red-600/5 blur-xl group-hover:bg-red-600/10 transition-colors"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}