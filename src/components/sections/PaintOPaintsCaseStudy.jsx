import React from "react";
import { ArrowUpRight, Check, Palette, ShieldCheck, Type } from "lucide-react";

const BASE = "/projects/paint-o-paints/";

const COLORS = [
  ["Vibrant Pink", "#E5007D", "Energy & creativity"],
  ["Bright Orange", "#FF8A00", "Enthusiasm & warmth"],
  ["Sun Yellow", "#FFC107", "Optimism & happiness"],
  ["Sky Blue", "#0095E2", "Trust & reliability"],
  ["Deep Blue", "#003A8C", "Stability & professionalism"],
  ["Fresh Green", "#4CAF50", "Growth & sustainability"],
  ["Royal Purple", "#8A2BE2", "Premium & innovation"],
];

const VISUALS = [
  ["07-packaging.webp", "Packaging system", "Product range and packaging direction."],
  ["08-digital-social.webp", "Digital & social", "Website, social and digital communication."],
  ["09-signage-environment.webp", "Signage & environment", "Retail, storefront and spatial applications."],
  ["10-application-system.webp", "Application system", "Vehicle, merchandise, stationery and supporting touchpoints."],
];

function SourceImage({ file, alt, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-[24px] border border-[#0F1E3A]/10 bg-white ${className}`}>
      <img src={`${BASE}${file}`} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  );
}

export default function PaintOPaintsCaseStudy() {
  return (
    <section id="paint-o" className="relative overflow-hidden bg-[#f5f5f2] px-5 py-20 text-[#0F1E3A] sm:px-8 md:px-12 lg:py-28 xl:px-24" aria-labelledby="paint-o-title">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <header className="grid gap-8 border-b border-[#0F1E3A]/15 pb-10 lg:grid-cols-[1fr_.72fr] lg:items-end lg:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-[#1161E7]" /><span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1161E7]">Case Study 01 / Brand Identity</span></div>
            <h2 id="paint-o-title" className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]">Paint-O Paints<br /><span className="text-[#1161E7]">Visual Identity.</span></h2>
          </div>
          <div>
            <p className="text-[15px] leading-7 text-[#0F1E3A]/70 sm:text-base">A brand identity and visual communication case study built around colour, consistency and applications across brand touchpoints.</p>
            <div className="mt-6 flex flex-wrap gap-2">{["Brand Identity", "Strategy", "Visual System", "Packaging", "Digital", "Environment"].map((item) => <span key={item} className="rounded-full border border-[#0F1E3A]/15 bg-white/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em]">{item}</span>)}</div>
          </div>
        </header>

        <div className="grid gap-5 py-8 sm:py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-7"><SourceImage file="01-overview.webp" alt="Paint-O Paints brand overview from supplied portfolio source" /></div>
          <div className="flex flex-col justify-between rounded-[24px] bg-[#0F1E3A] p-7 text-white sm:p-10 lg:col-span-5">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Project snapshot</p><h3 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Colours a<br />brighter<br /><span className="text-[#FF8A00]">tomorrow.</span></h3><p className="mt-6 text-sm leading-7 text-white/65">The source portfolio explores a complete visual identity system spanning strategy, identity, packaging, digital communication and environmental applications.</p></div>
            <div className="mt-10 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Concept case study · source visuals retained</div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-[#0F1E3A]/15 pt-8 lg:grid-cols-12 lg:pt-12">
          <div className="rounded-[24px] border border-[#0F1E3A]/10 bg-white p-7 sm:p-10 lg:col-span-5"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Project snapshot</p><dl className="mt-7 space-y-5 text-sm"><div className="flex justify-between gap-6 border-b border-[#0F1E3A]/10 pb-4"><dt className="text-[#0F1E3A]/45">Focus</dt><dd className="font-semibold text-right">Brand identity & visual communication</dd></div><div className="flex justify-between gap-6 border-b border-[#0F1E3A]/10 pb-4"><dt className="text-[#0F1E3A]/45">System</dt><dd className="font-semibold text-right">Identity · colour · type · applications</dd></div><div className="flex justify-between gap-6 border-b border-[#0F1E3A]/10 pb-4"><dt className="text-[#0F1E3A]/45">Applications</dt><dd className="font-semibold text-right">Packaging · digital · retail · environment</dd></div><div className="flex justify-between gap-6"><dt className="text-[#0F1E3A]/45">Status</dt><dd className="font-semibold text-right">Concept / exploration</dd></div></dl></div>
          <div className="rounded-[24px] bg-white p-7 sm:p-10 lg:col-span-7"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">Design direction</p><h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">A flexible system built to carry colour across touchpoints.</h3><p className="mt-5 max-w-2xl text-sm leading-7 text-[#0F1E3A]/65">The supplied source uses a deep blue foundation with a vibrant multi-colour palette, supported by clear typography and repeatable application rules.</p></div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12"><div className="lg:col-span-8"><SourceImage file="04-identity-system.webp" alt="Paint-O Paints identity system, colour and typography from supplied source" /></div><div className="rounded-[24px] bg-[#0F1E3A] p-7 text-white sm:p-10 lg:col-span-4"><div className="flex items-center gap-3"><Palette size={18} /><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Colour system</p></div><div className="mt-7 grid grid-cols-4 gap-2">{COLORS.map(([name, hex]) => <div key={hex} title={`${name} — ${hex}`} className="aspect-square rounded-xl border border-white/10" style={{ backgroundColor: hex }} />)}</div><div className="mt-7 flex items-center gap-3"><Type size={18} /><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Typography</p></div><p className="mt-3 text-2xl font-bold">Montserrat</p><p className="mt-1 text-sm text-white/50">Primary typeface</p><p className="mt-4 text-2xl font-bold">Lato</p><p className="mt-1 text-sm text-white/50">Secondary typeface</p></div></div>

        <div className="mt-8"><div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">01 / Packaging</p><h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">Product system.</h3></div><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0F1E3A]/40">Source page 07</span></div><SourceImage file="07-packaging.webp" alt="Paint-O Paints packaging system and product range concept" /></div>

        <div className="mt-8"><div className="mb-5"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">02 / Applications</p><h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">One identity. Multiple touchpoints.</h3></div><div className="grid gap-5 md:grid-cols-2">{VISUALS.slice(1).map(([file, title, description]) => <article key={file}><SourceImage file={file} alt={`Paint-O Paints ${title.toLowerCase()} concept applications`} /><div className="pt-4"><h4 className="text-lg font-bold">{title}</h4><p className="mt-1 text-sm leading-6 text-[#0F1E3A]/55">{description}</p></div></article>)}</div></div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12"><div className="rounded-[24px] border border-[#0F1E3A]/10 bg-white p-7 sm:p-10 lg:col-span-7"><div className="flex items-center gap-3"><ShieldCheck size={20} /><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1161E7]">System rules</p></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Logo usage and approved variations","Clear-space and minimum-size rules","Primary, secondary and accent colour system","Service-led iconography","Photography and application direction","Consistent typography hierarchy"].map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-[#f5f5f2] p-4 text-sm leading-6 text-[#0F1E3A]/70"><Check className="mt-0.5 shrink-0 text-[#1FA463]" size={16} />{item}</div>)}</div></div><div className="rounded-[24px] bg-[#0F1E3A] p-7 text-white sm:p-10 lg:col-span-5"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Designer takeaway</p><h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.035em] sm:text-3xl">Strategy becomes stronger when the visual system can travel.</h3><p className="mt-5 text-sm leading-7 text-white/60">This case study demonstrates identity thinking, colour systems, packaging direction and cross-touchpoint visual consistency.</p></div></div>

        <footer className="mt-8 border-t border-[#0F1E3A]/15 pt-7"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-3xl text-sm leading-6 text-[#0F1E3A]/55"><strong className="text-[#0F1E3A]">Concept / exploration:</strong> the supplied portfolio labels many application visuals as “Concept”. They remain presented here as concept work and are not represented as deployed client results.</p><a href="#contact" className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F1E3A]">Discuss the work <ArrowUpRight size={14} /></a></div></footer>
      </div>
    </section>
  );
}
