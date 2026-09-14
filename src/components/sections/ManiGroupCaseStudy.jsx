import React from "react";
import { ArrowUpRight, Award, Box, Camera, Palette, Sparkles } from "lucide-react";

const offerings = [
  "Trophies & Awards",
  "Gifts & Custom Products",
  "Apparel & Merchandise",
  "Creative Content & Video",
  "Branding & Graphic Design",
  "Digital Marketing & Creative Solutions",
];

const applications = [
  { title: "Recognition", icon: Award, text: "Trophies, medals, plaques and recognition-led presentation." },
  { title: "Corporate Gifting", icon: Box, text: "Premium gift concepts, packaging and branded merchandise." },
  { title: "Brand Communication", icon: Palette, text: "Brand identity, marketing creatives and visual communication." },
  { title: "Content & Video", icon: Camera, text: "Video, motion and content concepts for digital communication." },
];

export default function ManiGroupCaseStudy() {
  return (
    <section id="mani-group" className="relative overflow-hidden bg-[#0b0b0a] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#c69a55]">02 / Brand & Marketing Creative</p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-white md:text-7xl">
              MANI GROUP<span className="text-[#c69a55]">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              A brand and communication project spanning the Mani Sports & Gifts business, its product categories, corporate profile and creative-digital direction.
            </p>
          </div>
          <div className="max-w-xs border-l border-[#c69a55]/60 pl-5 text-xs uppercase tracking-[0.18em] text-white/45">
            Real project material supplied for portfolio review. Selected applications are presented as concepts where the source document labels them as concepts.
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#24211d] via-[#11110f] to-black p-7 md:p-10">
            <div className="absolute right-[-12%] top-[-18%] h-80 w-80 rounded-full bg-[#c69a55]/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c69a55]">Corporate Profile / Creative Direction</p>
                <p className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.035em] md:text-6xl">
                  Celebrating people.<br />Building brighter<br /><span className="text-[#c69a55]">tomorrows.</span>
                </p>
              </div>
              <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">Focus</p>
                  <p className="mt-2 text-sm text-white/70">Brand · Content · Communities · Growth</p>
                </div>
                <Sparkles className="h-7 w-7 text-[#c69a55]" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c69a55]">Business Offering</p>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight">Complete solutions.</h3>
            <p className="mt-4 text-sm leading-6 text-white/55">
              The supplied 12-page corporate profile presents the business through six connected offering areas.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {offerings.map((item, index) => (
                <div key={item} className="border-t border-white/10 pt-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#c69a55]">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {applications.map(({ title, icon: Icon, text }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <Icon className="h-6 w-6 text-[#c69a55]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.12em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">Portfolio role</p>
            <p className="mt-2 text-sm text-white/65">Branding · Marketing · Social Content · Product Communication</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c69a55] hover:text-white">
            Discuss the work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
