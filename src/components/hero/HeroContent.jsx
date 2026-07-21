import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

export default function HeroContent() {
  return (
    <div className="max-w-[640px]">
      {/* Small Intro */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />

        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-300">
          Available for Opportunities
        </span>
      </motion.div>

      {/* Main Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.9,
        }}
        className="leading-[0.9] tracking-[-0.06em]"
      >
        <span className="block text-[64px] font-black text-white sm:text-[78px] lg:text-[112px]">
          Creative
        </span>

        <span className="block text-[64px] font-black text-white sm:text-[78px] lg:text-[112px]">
          Visual
        </span>

        <span className="block text-[64px] font-black text-red-500 sm:text-[78px] lg:text-[112px]">
          Designer.
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.45,
          duration: 0.8,
        }}
        className="mt-10 max-w-[560px] text-lg leading-9 text-zinc-400 lg:text-xl"
      >
        I create premium digital experiences through visual design,
        motion graphics, UI/UX and thoughtful storytelling.
        Every project is designed with clarity, purpose and attention
        to detail—turning complex ideas into memorable experiences.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
        }}
        className="mt-14 flex flex-wrap items-center gap-5"
      >
        <MagneticButton
          onClick={() =>
            document
              .getElementById("work")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-[0_15px_60px_rgba(239,68,68,.25)] transition-all duration-300 hover:bg-red-500"
        >
          View Selected Work
        </MagneticButton>

        <MagneticButton
          onClick={() =>
            window.open("/resume.pdf", "_blank")
          }
          className="rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        >
          Download Resume
        </MagneticButton>
      </motion.div>

      {/* Bottom Info */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="mt-20 border-t border-white/10 pt-8"
      >
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div>
            <h3 className="text-4xl font-black text-white">
              5+
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">
              100+
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Creative Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">
              30+
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Brands
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">
              2026
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Available Now
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}