import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-14 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
            Recommendations
          </span>
          <span className="h-px w-10 bg-[#FF453A]" aria-hidden="true" />
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-8">
            <h2
              id="testimonials-title"
              className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              Let the work
              <span className="text-zinc-500"> speak first.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Recommendations will be added when the original quote, author details and permission to publish are verified.
            </p>
          </div>

          <aside className="border-l-2 border-[#FF453A]/70 pl-6 lg:col-span-4 lg:mt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Verification standard
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-500">
              <li>Original or approved recommendation</li>
              <li>Correct author, role and organisation</li>
              <li>Permission for public display</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
