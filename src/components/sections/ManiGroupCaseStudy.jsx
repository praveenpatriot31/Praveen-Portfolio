import React from "react";

const OFFERINGS = [
  "Trophies & Awards",
  "Gifts & Custom Products",
  "Apparel & Merchandise",
  "Creative Content & Video",
  "Branding & Graphic Design",
  "Digital Marketing & Creative Solutions",
];

const APPLICATIONS = [
  "Recognition",
  "Corporate Gifting",
  "Brand Communication",
  "Content & Video",
];

export default function ManiGroupCaseStudy() {
  return (
    <section
      id="mani-group"
      className="relative overflow-hidden bg-[#0b0b0a] px-6 py-24 text-white md:px-12 lg:py-32 xl:px-24"
      aria-labelledby="mani-group-title"
    >
      <div className="relative mx-auto max-w-[1500px]">
        <header className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c69a55]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c69a55]">
                Case Study 02 / Brand & Marketing Creative
              </span>
            </div>
            <h2
              id="mani-group-title"
              className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl lg:text-8xl"
            >
              MANI GROUP<span className="text-[#c69a55]">.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">
            Brand and marketing creative work connected to Mani Sports & Gifts, presented through the supplied MANI GROUP corporate profile.
          </p>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1.1fr_.9fr] lg:py-14">
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#141311] p-8 md:p-12">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c69a55]/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c69a55]">
                Corporate Profile
              </p>
              <h3 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.045em] md:text-6xl">
                Celebrating people.
                <br />
                Building brighter
                <br />
                <span className="text-[#c69a55]">tomorrows.</span>
              </h3>
              <p className="mt-8 max-w-2xl border-t border-white/10 pt-6 text-sm leading-7 text-white/55">
                The supplied profile positions MANI GROUP around awards, gifts, apparel, creative content, branding and digital solutions.
              </p>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c69a55]">
              Offering system
            </p>
            <h3 className="mt-3 text-2xl font-bold uppercase tracking-[-0.02em] md:text-3xl">
              Six connected areas.
            </h3>
            <div className="mt-8 divide-y divide-white/10">
              {OFFERINGS.map((item, index) => (
                <div key={item} className="flex items-center gap-5 py-4">
                  <span className="w-7 shrink-0 text-xs font-mono text-[#c69a55]">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/80 md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c69a55]">
                Creative application areas
              </p>
              <h3 className="mt-3 text-2xl font-bold uppercase tracking-[-0.02em] md:text-3xl">
                From products to communication.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50 md:text-right">
              These categories reflect the project material and are not presented as performance claims or invented deliverables.
            </p>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {APPLICATIONS.map((item, index) => (
              <div key={item} className="bg-[#0f0e0c] p-7 md:p-8">
                <span className="text-xs font-mono text-[#c69a55]">0{index + 1}</span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-white md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-7 text-sm leading-6 text-white/45">
          <p>
            <strong className="font-semibold text-white/70">Portfolio note:</strong> application work is presented according to the supplied corporate-profile material, with concept-labelled work kept distinct from verified project information.
          </p>
        </footer>
      </div>
    </section>
  );
}
