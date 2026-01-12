"use client";
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { ShieldAlert, Gamepad2, Share2, ArrowUpRight, Cpu, Brain } from 'lucide-react';

const skills = [
  {
    title: "Coding",
    subTitle: "Full Stack Developer",
    tags: "REACT / NEXT.JS / NODE",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    icon: <Cpu className="text-blue-500" />,
    desc: "Crafting high-performance digital engines with surgical precision and modern tech stacks."
  },
  {
    title: "Chess",
    subTitle: "Tactical Strategist",
    tags: "LOGIC / 1500 ELO / STRATEGY",
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000",
    icon: <Brain className="text-amber-500" />,
    desc: "10 moves ahead. Dominating the board through pattern recognition and deep strategic calculation."
  },
  {
    title: "Hacking",
    subTitle: "Cyber Security",
    tags: "PENTESTING / LINUX",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    icon: <ShieldAlert className="text-green-500" />,
    desc: "Neutralizing vulnerabilities and securing the digital perimeter from potential threats."
  },
  {
    title: "Gaming",
    subTitle: "Pro Player",
    tags: "VALORANT / COD / CLUTCH",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
    icon: <Gamepad2 className="text-red-500" />,
    desc: "Tactical dominance in high-pressure shooters. Consistent performance in the clutch."
  },
  {
    title: "Socials",
    subTitle: "Management",
    tags: "BRANDING / GROWTH",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
    icon: <Share2 className="text-purple-500" />,
    desc: "Engineering viral growth through data-driven aesthetics and identity management."
  }
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="bg-black relative pt-32 pb-0">
      <div className="px-6 md:px-20 max-w-[1400px] mx-auto mb-16">
        <span className="text-red-600 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase block mb-4 animate-pulse">
          // SUBJECT_SKILLS_DOSSIER
        </span>
        <h2 className="text-5xl md:text-8xl lg:text-[10vw] font-black tracking-tighter italic uppercase leading-[0.8] text-white">
          SKILL <br /> <span className="text-zinc-800 font-black italic">STACK.</span>
        </h2>
      </div>

      <ScrollStack>
        {skills.map((skill, i) => (
          <ScrollStackItem key={i}>
            <div className="flex flex-col md:flex-row h-full w-full">
              {/* Text Area */}
              <div className="flex-1 p-8 md:p-14 flex flex-col justify-between relative z-10 bg-[#0a0a0a]">
                <div>
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="p-3 bg-zinc-900 border border-white/20 rounded-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-red-600 font-mono text-xs font-bold uppercase tracking-widest italic">Asset_0{i+1}</span>
                  </div>
                  <h3 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-3 text-white">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase mb-6 md:mb-8 tracking-widest font-bold">{skill.subTitle}</p>
                  <p className="text-zinc-300 text-base md:text-xl font-medium max-w-sm border-l-4 border-red-600 pl-4 md:pl-6 leading-tight">
                    {skill.desc}
                  </p>
                </div>
                <div className="font-mono text-[9px] md:text-[10px] text-zinc-600 tracking-[0.3em] uppercase mt-6 md:mt-0">{skill.tags}</div>
              </div>

              {/* Image Area - Height fixed for mobile, auto for desktop */}
              <div className="h-[200px] md:h-full md:flex-1 relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5 bg-black">
                <img src={skill.img} alt={skill.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-red-600 transition-colors">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}