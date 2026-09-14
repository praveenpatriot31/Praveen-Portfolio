import React from "react";
import { ArrowDownRight, Check, Palette, Type, ShieldCheck } from "lucide-react";

const COLORS = [
  { name: "Primary Navy", hex: "#0F1E3A" },
  { name: "Blue", hex: "#1161E7" },
  { name: "Green", hex: "#1FA463" },
  { name: "Orange", hex: "#FF8A00" },
  { name: "Magenta", hex: "#D81B8C" },
  { name: "Purple", hex: "#6A1B9A" },
  { name: "Neutral", hex: "#F3F4F6" },
];

const SERVICES = [
  "Painting",
  "Paint Supply",
  "Waterproofing",
  "Wallpaper & Wall Finishes",
  "Façade Cleaning",
  "Façade Repair",
];

export default function PaintOPaintsCaseStudy() {
  return (
    <section
      id="paint-o"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#f5f5f2] px-6 py-24 text-[#0F1E3A] md:px-12 lg:py-32 xl:px-24"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#1161E7]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#D81B8C]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <header className="grid gap-10 border-b border-[#0F1E3A]/15 pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1161E7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#1161E7]">
                Case Study 01 / Brand Identity
              </span>
            </div>
            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Paint-O Paints
              <br />
              <span className="text-[#1161E7]">Visual System.</span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-xl text-base leading-7 text-[#0F1E3A]/70">
              A brand identity and guideline system for a Singapore painting and property-maintenance brand. The work establishes a clearer visual language across logo usage, colour, typography, iconography and brand applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[9px] font-bold uppercase tracking-[0.18em]">
              {["Brand Identity", "Visual System", "Guidelines", "Applications"].map((item) => (
                <span key={item} className="rounded-full border border-[#0F1E3A]/15 bg-white/70 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-5 py-8 lg:grid-cols-12 lg:py-12">
          <div className="rounded-[28px] bg-[#0F1E3A] p-7 text-white sm:p-10 lg:col-span-7 lg:min-h-[430px] lg:p-12">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/45">Brand idea</p>
                  <h3 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                    Transform.
                    <br />
                    Protect.
                    <br />
                    <span className="text-[#FF8A00]">Maintain.</span>
                  </h3>
                </div>
                <ArrowDownRight className="hidden text-[#1161E7] sm:block" size={40} strokeWidth={1.2} />
              </div>

              <div className="mt-12 border-t border-white/10 pt-5">
                <p className="max-w-xl text-sm leading-6 text-white/60">
                  Positioning used in the source guideline: professional painting and property-maintenance solutions in Singapore.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="rounded-[28px] border border-[#0F1E3A]/10 bg-white p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <Palette size={18} strokeWidth={1.5} />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">Colour system</span>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {COLORS.map((color) => (
                  <div key={color.hex} title={`${color.name} ${color.hex}`}>
                    <div
                      className="aspect-square rounded-full border border-[#0F1E3A]/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[9px] font-mono uppercase tracking-[0.08em] text-[#0F1E3A]/55">
                {COLORS.map((color) => (
                  <span key={color.hex}>{color.hex}</span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#0F1E3A]/10 bg-white p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <Type size={18} strokeWidth={1.5} />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">Typography</span>
              </div>
              <p className="text-5xl font-black tracking-[-0.06em]">Aa</p>
              <p className="mt-2 text-sm font-semibold">Poppins Bold / Regular</p>
              <p className="mt-3 text-xs leading-5 text-[#0F1E3A]/55">
                A clean sans-serif foundation for a professional, modern and approachable service brand.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-[#0F1E3A]/15 pt-8 lg:grid-cols-12 lg:pt-12">
          <div className="rounded-[28px] border border-[#0F1E3A]/10 bg-white p-7 sm:p-10 lg:col-span-7">
            <div className="mb-8 flex items-center justify-between gap-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1161E7]">System architecture</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">Built for consistency.</h3>
              </div>
              <ShieldCheck size={28} strokeWidth={1.3} />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Primary and approved logo variations",
                "Clear-space and minimum-size rules",
                "Primary / neutral / accent colour hierarchy",
                "Poppins typography system",
                "Service-led iconography",
                "Photography direction and application guidance",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[#f5f5f2] p-4 text-sm leading-5 text-[#0F1E3A]/75">
                  <Check className="mt-0.5 shrink-0 text-[#1FA463]" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1161E7]">Service language</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">One system. Six services.</h3>
            <div className="mt-7 space-y-2">
              {SERVICES.map((service, index) => (
                <div key={service} className="flex items-center justify-between border-b border-[#0F1E3A]/10 py-3">
                  <span className="text-sm font-semibold">{service}</span>
                  <span className="font-mono text-[9px] text-[#0F1E3A]/35">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-8 grid gap-5 border-t border-[#0F1E3A]/15 pt-8 text-xs leading-6 text-[#0F1E3A]/55 md:grid-cols-2">
          <p>
            <strong className="text-[#0F1E3A]">Portfolio note:</strong> this case study presents the verified brand-guideline material available for the project. No unverified project counts, testimonials, performance metrics or client results are claimed here.
          </p>
          <p className="md:text-right">
            <strong className="text-[#0F1E3A]">Source discipline:</strong> real business information and genuine project photography should be used for final client-facing rollout; unsupported claims are intentionally excluded.
          </p>
        </footer>
      </div>
    </section>
  );
}
