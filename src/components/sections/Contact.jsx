import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (reduce) => ({
  initial: { opacity: 0, y: reduce ? 0 : 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});

const CV_PATH = "/resume/Praveen_S_Resume.pdf";

export default function ContactChannels() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="w-full bg-[#050505] py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.05] overflow-hidden"
      aria-label="Contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-600">
            07 / Contact
          </span>
          <span className="h-px w-10 bg-[#FF453A]" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-24 items-end">
          <motion.div {...fadeUp(shouldReduceMotion)}>
            <p className="text-sm uppercase tracking-[0.22em] text-[#FF453A] font-semibold mb-5">
              Available for opportunities
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.055em] leading-[0.95] text-white">
              Let&apos;s make
              <br />
              <span className="text-zinc-500">something good.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-zinc-400">
              Open to creative visual design, motion, video, VFX compositing and
              AI-assisted creative production opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:praveenpatriot31@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black text-sm font-semibold hover:bg-[#FF453A] hover:text-white transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                Email me
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/10 text-white text-sm font-semibold hover:border-white/30 transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(shouldReduceMotion)}
            className="border-t border-white/[0.08] pt-7"
          >
            <div className="grid gap-7">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Email
                </div>
                <a
                  href="mailto:praveenpatriot31@gmail.com"
                  className="text-lg text-zinc-200 hover:text-[#FF453A] transition-colors break-all"
                >
                  praveenpatriot31@gmail.com
                </a>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Phone
                </div>
                <a
                  href="tel:+919663227511"
                  className="text-lg text-zinc-200 hover:text-[#FF453A] transition-colors"
                >
                  +91 96632 27511
                </a>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Base
                </div>
                <p className="text-lg text-zinc-200">Bengaluru, India</p>
                <p className="mt-1 text-sm text-zinc-500">Open to remote & relocation opportunities.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-7 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span>Praveen S. — Creative Visual Designer</span>
          <span>Design / Motion / VFX / AI</span>
        </div>
      </div>
    </section>
  );
}
