import React from "react";
import { ArrowUpRight, Check, Palette, ShieldCheck, Type } from "lucide-react";

const COLORS = [
  { name: "Vibrant Pink", hex: "#E5007D", role: "Energy & creativity" },
  { name: "Bright Orange", hex: "#FF8A00", role: "Enthusiasm & warmth" },
  { name: "Sun Yellow", hex: "#FFC107", role: "Optimism & happiness" },
  { name: "Sky Blue", hex: "#0095E2", role: "Trust & reliability" },
  { name: "Deep Blue", hex: "#003A8C", role: "Stability & professionalism" },
  { name: "Fresh Green", hex: "#4CAF50", role: "Growth & sustainability" },
  { name: "Royal Purple", hex: "#8A2BE2", role: "Premium & innovation" },
];

const SERVICES = [
  "Painting",
  "Paint Supply",
  "Waterproofing",
  "Wallpaper & Wall Finishes",
  "Façade Cleaning",
  "Façade Repair",
];

const SYSTEM = [
  "Logo usage and approved variations",
  "Clear-space and minimum-size rules",
  "Primary, secondary and accent colour system",
  "Montserrat primary / Lato secondary typography",
  "Service-led iconography",
  "Photography and application direction",
];

const APPLICATIONS = [
  ["Packaging", "Product packaging and range presentation"],
  ["Retail", "In-store displays and category communication"],
  ["Digital", "Website, social media and digital advertising"],
  ["Signage", "Storefront, directional and promotional signage"],
  ["Merchandise", "Uniforms, promotional items and stationery"],
  ["Environment", "Vehicle and spatial brand applications"],
];

export default function PaintOPaintsCaseStudy() {
  return (
    <section
      id="paint-o"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#f5f5f2] px-5 py-20 text-[#0F1E3A] sm:px-8 md:px-12 lg:py-28 xl:px-24"
      aria-labelledby="paint-o-title"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#1161E7]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#D81B8C]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <header className="grid gap-8 border-b border-[#0F1E3A]/15 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-12 lg:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1161E7]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1161E7] sm:text-xs sm:tracking-[0.28em]">
                Case Study 01 / Brand Identity
              </span>
            </div>
            <h2
              id="paint-o-title"
              className="max-w-5xl text-[clamp(2.8rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]"
            >
              Paint-O Paints
              <br />
              <span className="text-[#1161E7]">Visual Identity.</span>
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-[15px] leading-7 text-[#0F1E3A]/75 sm:text-base">
              A brand identity and visual communication case study developed around a clear, consistent system for Paint-O Paints.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[#0F1E3A]/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F1E3A]/60 sm:flex sm:flex-wrap sm:gap-2 sm:border-0 sm:pt-0">
              {["Brand Identity", "Strategy", "Visual System", "Applications"].map((item) => (
                <span key={item} className="sm:rounded-full sm:border sm:border-[#0F1E3A]/15 sm:bg-white/70 sm:px-3 sm:py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-5 py-8 sm:py-10 lg:grid-cols-12 lg:py-12">
          <div className="rounded-2xl bg-[#0F1E3A] p-7 text-white sm:rounded-[28px] sm:p-10 lg:col-span-7 lg:min-h-[430px] lg:p-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">Brand idea</p>
                <h3 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                  Colours a
                  <br />
                  brighter
                  <br />
                  <span className="text-[#FF8A00]">tomorrow.</span>
                </h3>
                <p className="mt-6 max-w-lg text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  The project explores how colour, protection and inspiration can shape a modern brand experience across spaces and touchpoints.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:gap-5">
                <span>Quality you can trust</span>
                <span>Beautiful spaces</span>
                <span>A brighter tomorrow</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#0F1E3A]/10 bg-white p-6 sm:rounded-[28px] sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <Palette size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Colour system</span>
              </div>
              <div className="grid grid-cols-7 gap-2" aria-label="Paint-O primary colour palette">
                {COLORS.map((color) => (
                  <div key={color.hex} title={`${color.name} — ${color.hex}`}>
                    <div className="aspect-square rounded-full border border-[#0F1E3A]/10" style={{ backgroundColor: color.hex }} />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[10px] leading-4 text-[#0F1E3A]/55">
                {COLORS.map((color) => (
                  <span key={color.hex}>
                    <strong className="text-[#0F1E3A]/75">{color.hex}</strong> · {color.role}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex h-2 overflow-hidden rounded-full" aria-label="Colour proportion guide">
                <span className="w-[60%] bg-[#003A8C]" />
                <span className="w-[20%] bg-[#FFC107]" />
                <span className="w-[10%] bg-[#E5007D]" />
                <span className="w-[10%] bg-[#F4F6F8]" />
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#0F1E3A]/45">60% primary · 20% secondary · 10% accent · 10% neutral</p>
            </div>

            <div className="rounded-2xl border border-[#0F1E3A]/10 bg-white p-6 sm:rounded-[28px] sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <Type size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Typography</span>
              </div>
              <p className="text-5xl font-black tracking-[-0.06em]">Aa</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F1E3A]/45">Primary typeface</p>
                  <p className="mt-1 text-xl font-bold">Montserrat</p>
                  <p className="mt-1 text-xs leading-5 text-[#0F1E3A]/55">Headings, titles and key brand statements.</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F1E3A]/45">Secondary typeface</p>
                  <p className="mt-1 text-xl font-bold">Lato</p>
                  <p className="mt-1 text-xs leading-5 text-[#0F1E3A]/55">Body text, subtitles and general communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-[#0F1E3A]/15 pt-8 lg:grid-cols-12 lg:pt-12">
          <div className="rounded-2xl border border-[#0F1E3A]/10 bg-white p-6 sm:rounded-[28px] sm:p-10 lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Project strategy</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">A system built around people and spaces.</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#eef5fb] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">Mission</p>
                <p className="mt-3 text-sm leading-6 text-[#0F1E3A]/70">High-quality, innovative and sustainable paint solutions that add colour, protection and long-term value.</p>
              </div>
              <div className="rounded-2xl bg-[#fff8e8] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">Vision</p>
                <p className="mt-3 text-sm leading-6 text-[#0F1E3A]/70">A trusted and inspiring paints brand known for transforming spaces and creating brighter, healthier communities.</p>
              </div>
              <div className="rounded-2xl bg-[#fff0f6] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">Personality</p>
                <p className="mt-3 text-sm leading-6 text-[#0F1E3A]/70">Vibrant, reliable, approachable, progressive and caring.</p>
              </div>
            </div>
            <div className="mt-6 border-t border-[#0F1E3A]/10 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F1E3A]/45">Target audience</p>
              <p className="mt-2 text-sm leading-6 text-[#0F1E3A]/70">Homeowners · Architects & Interior Designers · Builders & Contractors · Retail Partners</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F1E3A] p-6 text-white sm:rounded-[28px] sm:p-10 lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Project approach</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">From strategy to application.</h3>
            <ol className="mt-7 space-y-0">
              {[
                "Research & Market Understanding",
                "Brand Strategy",
                "Visual Identity Development",
                "Multi-Platform Applications",
                "Presentation & Refinement",
              ].map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-0">
                  <span className="font-mono text-[10px] text-[#FF8A00]">0{index + 1}</span>
                  <span className="text-sm font-semibold text-white/85">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#0F1E3A]/10 bg-white p-6 sm:rounded-[28px] sm:p-10 lg:mt-8">
          <div className="flex flex-col gap-5 border-b border-[#0F1E3A]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Brand applications</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">One identity. Many touchpoints.</h3>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F1E3A]/40">Pages 06–10 of source portfolio</span>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-[#0F1E3A]/10 bg-[#0F1E3A]/10 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map(([title, description], index) => (
              <div key={title} className="bg-[#f5f5f2] p-6 sm:p-7">
                <span className="font-mono text-[10px] text-[#1161E7]">0{index + 1}</span>
                <h4 className="mt-4 text-lg font-bold tracking-tight">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#0F1E3A]/60">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12 lg:mt-8">
          <div className="rounded-2xl border border-[#0F1E3A]/10 bg-white p-6 sm:rounded-[28px] sm:p-10 lg:col-span-7">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Visual system</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">Built for consistency.</h3>
              </div>
              <ShieldCheck size={28} strokeWidth={1.3} aria-hidden="true" />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {SYSTEM.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[#f5f5f2] p-4 text-sm leading-6 text-[#0F1E3A]/75">
                  <Check className="mt-0.5 shrink-0 text-[#1FA463]" size={16} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:rounded-[28px] sm:p-10 lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Service language</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">Six service areas.</h3>
            <div className="mt-6 space-y-1">
              {SERVICES.map((service, index) => (
                <div key={service} className="flex items-center justify-between border-b border-[#0F1E3A]/10 py-3.5">
                  <span className="text-sm font-semibold">{service}</span>
                  <span className="font-mono text-[10px] text-[#0F1E3A]/35" aria-hidden="true">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-8 border-t border-[#0F1E3A]/15 pt-8 text-sm leading-6 text-[#0F1E3A]/55">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl">
              <strong className="text-[#0F1E3A]">Concept labelling:</strong> the supplied portfolio marks many application visuals as “Concept”. They should remain presented as concept/exploration work, not as deployed client results.
            </p>
            <a href="#contact" className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F1E3A] hover:text-[#1161E7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1161E7]">
              Discuss the work <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
