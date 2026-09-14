import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Recruiter-safe rule:
 * Only publish a testimonial here when the exact quote, author, role and
 * permission to publish have been verified. The previous testimonial was
 * presented as a Thermo Fisher recommendation without a verified source.
 */
const TESTIMONIALS = [];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="w-full bg-[#050505] py-28 lg:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.04] overflow-hidden"
      aria-label="Recommendations"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-600">
            06 / Recommendations
          </span>
          <span className="h-px w-10 bg-[#FF453A]" aria-hidden="true" />
        </div>

        {TESTIMONIALS.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item, index) => (
              <motion.figure
                key={`${item.author}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="border border-white/[0.07] bg-white/[0.02] p-8 md:p-10"
              >
                <blockquote className="text-xl md:text-2xl leading-relaxed text-zinc-200">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="text-sm font-semibold text-white">{item.author}</div>
                  <div className="mt-1 text-xs text-zinc-500">{item.role}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600">{item.company}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-start">
            <div>
              <h2 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] leading-[1.05] text-white">
                Let the work speak first.
              </h2>
              <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-zinc-400">
                Recommendations will be added here once the original quote,
                author details and permission to publish are verified.
              </p>
            </div>

            <div className="border border-white/[0.07] bg-white/[0.02] p-7 md:p-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#FF453A] font-semibold">
                Verification standard
              </div>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-zinc-400">
                <li>Original recommendation or approved testimonial.</li>
                <li>Correct author name, role and organisation.</li>
                <li>Permission to display it publicly.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
