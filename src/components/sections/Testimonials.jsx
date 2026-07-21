import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const TESTIMONIAL_DATA = {
  quoteFirstPart: "Praveen possesses a rare duality: the ",
  quoteBoldOne: "technical rigor",
  quoteMiddlePart: " of a high-end VFX artist and the ",
  quoteBoldTwo: "refined aesthetic sensibilities",
  quoteLastPart: " of a luxury brand designer. He doesn't just build interfaces or composites; he crafts ",
  quoteAccent: "cinematic experiences.",
  author: "Creative Visual Designer",
  company: "Thermo Fisher Scientific",
  year: "2026"
};

export default function Testimonials() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Premium editorial parallax offset interpolations
  const textParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="w-full bg-[#050505] py-32 lg:py-44 px-6 md:px-12 lg:px-20 border-t border-white/[0.02] overflow-hidden relative selection:bg-[#FF453A] selection:text-white"
      aria-label="Executive Leadership Review Matrix"
    >
      {/* Background Soft Studio Aura Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,69,58,0.015),transparent_60%)] animate-pulse" 
        style={{ animationDuration: '8s' }}
        aria-hidden="true" 
      />

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: ARCHITECTURAL PORTRAIT FRAMING */}
          <div className="lg:col-span-5 flex justify-center w-full group">
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : imageParallaxY }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900/20 shadow-2xl"
            >
              {/* Card Surface Light Geometric Accent Rim */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none mix-blend-overlay" />
              
              {/* Dynamic Grayscale Portrait Node Asset */}
              <img
                src="/images/praveen-portrait.jpg" 
                alt="Praveen S. Profile Portrait"
                className="w-full h-full object-cover grayscale contrast-[1.08] brightness-90 group-hover:scale-[1.02] group-hover:contrast-[1.12] transition-all duration-700 ease-out z-10 relative"
                loading="lazy"
              />
              
              {/* Soft overlay shadow floor layout blend layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15 pointer-events-none" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PREMIUM EDITORIAL TYPOGRAPHY PANEL */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : textParallaxY }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left relative pl-0 lg:pl-8"
          >
            {/* Giant Graphic Quote Mark Background Motif */}
            <div 
              className="text-[180px] lg:text-[260px] font-serif font-black text-white/[0.02] leading-none select-none absolute -top-24 lg:-top-44 -left-4 lg:left-0 pointer-events-none z-0"
              aria-hidden="true"
            >
              “
            </div>

            <div className="relative z-10 flex flex-col gap-10">
              {/* Highlighted Structural Clean Content Block */}
              <blockquote className="text-[26px] sm:text-[34px] md:text-[40px] font-light tracking-tight text-zinc-100 leading-[1.3] antialiased">
                {TESTIMONIAL_DATA.quoteFirstPart}
                <span className="font-semibold text-white">{TESTIMONIAL_DATA.quoteBoldOne}</span>
                {TESTIMONIAL_DATA.quoteMiddlePart}
                <span className="font-semibold text-white">{TESTIMONIAL_DATA.quoteBoldTwo}</span>
                {TESTIMONIAL_DATA.quoteLastPart}
                <span className="text-[#FF453A] font-medium">{TESTIMONIAL_DATA.quoteAccent}</span>
              </blockquote>

              {/* Attributed Clean Sign-off Tray Node */}
              <div className="flex flex-col gap-2 select-none">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-[#FF453A]" aria-hidden="true" />
                  <p className="text-white font-bold uppercase tracking-[0.25em] text-[13px] font-mono">
                    {TESTIMONIAL_DATA.author}
                  </p>
                </div>
                
                <div className="pl-12 text-zinc-500 text-[11px] tracking-widest font-mono uppercase flex gap-3 items-center">
                  <span>{TESTIMONIAL_DATA.company}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-800" aria-hidden="true"></span>
                  <span>{TESTIMONIAL_DATA.year}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}