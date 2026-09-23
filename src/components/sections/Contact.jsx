import React from "react";

const CV_PATH = "/resume/Praveen_S_Resume.pdf";

export default function ContactChannels() {
  return (
    <section
      id="contact"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-14 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
            Contact
          </span>
          <span className="h-px w-10 bg-[#FF453A]" aria-hidden="true" />
        </header>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF453A]">
              Available for opportunities
            </p>
            <h2
              id="contact-title"
              className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              Let&apos;s make
              <span className="block text-zinc-500">something good.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Open to creative visual design, motion, video, VFX compositing and AI-assisted creative production opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenpatriot31@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#FF453A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                Email me
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-s-999491241"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/praveenpatriot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
              >
                Behance
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7 lg:col-span-4">
            <div className="space-y-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Email</p>
                <a
                  href="mailto:praveenpatriot31@gmail.com"
                  className="mt-2 block break-all text-base text-zinc-200 transition-colors hover:text-[#FF453A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A] sm:text-lg"
                >
                  praveenpatriot31@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Phone</p>
                <a
                  href="tel:+919663227511"
                  className="mt-2 block text-base text-zinc-200 transition-colors hover:text-[#FF453A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A] sm:text-lg"
                >
                  +91 96632 27511
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Base</p>
                <p className="mt-2 text-base text-zinc-200 sm:text-lg">Bengaluru, India</p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">Open to remote and relocation opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Praveen S. — Creative Visual Designer</span>
          <span>Design / Motion / VFX / AI</span>
        </footer>
      </div>
    </section>
  );
}
