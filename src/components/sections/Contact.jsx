import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const TOKENS = {
  transitions: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
};

const FADE_UP_VARIANT = {
  hidden: (shouldReduceMotion) => ({
    opacity: 0,
    y: shouldReduceMotion ? 0 : 20,
  }),
  show: {
    opacity: 1,
    y: 0,
    transition: TOKENS.transitions,
  },
};

export default function ContactChannels() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="contact"
      className="w-full bg-[#050505] py-28 border-t border-white/[0.04] overflow-hidden"
      aria-label="Direct Professional Communication Channels"
    >
      <div className="w-full max-w-[1280px] mx-auto px-10 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Headline Callout Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.ul 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={shouldReduceMotion}
              variants={FADE_UP_VARIANT}
              className="flex flex-wrap gap-2.5 mb-6 m-0 p-0 list-none"
            >
              {["Immediate Joiner", "Open to Opportunities", "Remote & Relocation"].map((badge, idx) => (
                <li 
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-[11px] font-bold uppercase tracking-wider select-none text-zinc-200"
                >
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.h2 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={shouldReduceMotion}
              variants={FADE_UP_VARIANT}
              className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tighter uppercase text-white leading-[1.05]"
            >
              Let's build <br />
              <span className="text-[#FF453A]">something cinematic.</span>
            </motion.h2>
          </div>

          {/* Core Interactive Communication Directories */}
          <motion.address 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={shouldReduceMotion}
            variants={FADE_UP_VARIANT}
            className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 w-full lg:pt-14 text-left lg:text-right not-italic"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 select-none">
                // Direct Inbox
              </span>
              <a 
                href="mailto:praveenpatriot31@gmail.com" 
                className="text-[20px] sm:text-[24px] font-black text-white hover:text-[#FF453A] transition-colors duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded-md"
              >
                praveenpatriot31@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 select-none">
                // Connection Line
              </span>
              <a 
                href="tel:+919663227511" 
                className="text-[20px] sm:text-[24px] font-black text-white hover:text-[#FF453A] transition-colors duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded-md"
              >
                +91 96632 27511
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 select-none">
                // Operational Base
              </span>
              <span className="text-[16px] font-bold text-zinc-300 select-none">
                Bengaluru, India
              </span>
            </div>
          </motion.address>

        </div>
      </div>
    </section>
  );
}