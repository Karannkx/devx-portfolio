import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import GamingSection from "@/components/GamingSection";
import Arsenal from "@/components/Arsenal";
import Intel from "@/components/Intel";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { ScrollVelocity } from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-[#050505] text-white selection:bg-red-600 selection:text-white">
        <CustomCursor />
        <Navbar />
        <BackToTop />

        <div id="hero">
          <Hero />
        </div>

        <section className="py-10 md:py-20 border-y border-white/5 bg-[#050505] overflow-hidden">
          <ScrollVelocity
            texts={[
              'IFWTRANQUILS • SOLITUDE IS LUXURY • STEALTH MODE •', 
              'DOMINATING THE RADIANT LOBBY • SILENT TACTICIAN •'
            ]} 
            velocity={40} 
            className="text-[6rem] md:text-[14rem] font-black uppercase leading-[0.8] tracking-tighter text-white opacity-5 hover:opacity-100 hover:text-red-600 transition-all duration-700 cursor-default"
          />
        </section>

        <section id="arsenal">
          <Arsenal />
        </section>

        <section id="intel">
          <Intel />
        </section>

        <BentoGrid />

        <section className="py-20 bg-white text-black overflow-hidden border-y-[10px] border-red-600">
          <ScrollVelocity
            texts={[
              'CHECKMATE IN 10 MOVES • VANDAL HEADSHOT ONLY •', 
              'MIDNIGHT SEARCH AND DESTROY • CLUTCH OR KICK •'
            ]} 
            velocity={-50} 
            className="text-[5rem] md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter text-black"
          />
        </section>

        <section id="gaming">
          <GamingSection />
        </section>

        <section className="py-10 bg-[#050505] overflow-hidden opacity-20">
           <ScrollVelocity
            texts={[
              '@IFWTRANQUILS • @IFWTRANQUILS • @IFWTRANQUILS •', 
            ]} 
            velocity={15} 
            className="text-[3rem] md:text-[6rem] font-mono font-bold uppercase tracking-widest text-zinc-500"
          />
        </section>

        <div id="footer">
          <Footer />
        </div>
        
        <div className="fixed inset-0 pointer-events-none z-[100]">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>
      </main>
    </SmoothScroll>
  );
}