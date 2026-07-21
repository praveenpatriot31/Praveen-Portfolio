import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#050505] text-white py-32 px-10 md:px-12 xl:px-24 select-none relative">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Section Title & Micro Profile Photo */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full lg:sticky lg:top-32">
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF453A]" />
            </span>
            <span className="text-[12px] uppercase tracking-[0.35em] text-[#FF453A] font-bold">
              Biography
            </span>
          </div>
          
          {/* Controlled Image Frame to match text height perfectly */}
          <div className="w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden bg-zinc-900 border border-white/[0.05] group relative shadow-xl">
            <img 
              src="/profile.jpg" 
              alt="Praveen - Creative Visual Designer" 
              className="w-full h-full object-cover object-center filter grayscale contrast-[1.15] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
              loading="lazy"
            />
            {/* Elegant dark gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: Typography Content Blocks */}
        <div className="lg:col-span-8 flex flex-col items-start text-left min-w-0 pt-2 lg:pt-0">
          <h2 className="text-[36px] sm:text-[48px] md:text-[52px] font-black tracking-tight leading-[1.1] uppercase text-white mb-8">
            Creative Visual Designer <br />
            Based in Bengaluru.
          </h2>

          <p className="text-[#B8B8B8] text-[16px] sm:text-[18px] font-normal leading-relaxed mb-6 max-w-[720px] antialiased">
            I am a <span className="text-white font-medium">Creative Visual Designer</span> with 5+ years of hands-on 
            experience crafting cohesive design languages across motion graphics, high-impact video production, 
            complex VFX compositing, and modern AI-powered workflows.
          </p>

          <p className="text-[#B8B8B8] text-[16px] sm:text-[18px] font-normal leading-relaxed mb-16 max-w-[720px] antialiased">
            My professional scope centers on delivering clean, highly impactful visual communication frameworks. 
            I specialize in bridging the gap between dynamic brand systems and modern multi-platform campaigns for 
            global design teams, agile startups, and international brands.
          </p>

          <div className="w-full h-px bg-white/[0.08] mb-8" aria-hidden="true" />

          {/* Core Navigation Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[12px] uppercase tracking-[0.25em] font-bold text-zinc-400">
            <a 
              href="#explore" 
              className="hover:text-[#FF453A] hover:underline underline-offset-4 transition-colors duration-300"
            >
              Portfolio
            </a>
            
            <a 
              href="https://www.behance.net/praveenpatriot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF453A] hover:underline underline-offset-4 transition-colors duration-300"
            >
              Behance
            </a>
            
            <a 
              href="https://www.linkedin.com/in/praveen-s-999491241" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF453A] hover:underline underline-offset-4 transition-colors duration-300"
            >
              Linkedin
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}