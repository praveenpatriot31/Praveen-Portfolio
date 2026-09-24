import React from "react";

const PROJECTS = [
  { id: "01", title: "Paint-O Paints", category: "Brand Identity", type: "Visual identity, strategy & applications", visual: "paint-o" },
  { id: "02", title: "MANI Group", category: "Corporate Profile", type: "Brand, marketing & creative systems", visual: "mani" },
  { id: "03", title: "Cinematrix", category: "Digital Growth", type: "Web, digital strategy & creative production", visual: "cinematrix" },
  { id: "04", title: "WHOOSH Singapore", category: "Digital & Visual Design", type: "Brand communication & digital experience", visual: "whoosh" },
  { id: "05", title: "VFX Compositing", category: "VFX", type: "Compositing, roto & paint prep", visual: "vfx" },
  { id: "06", title: "Motion & Video", category: "Motion", type: "Editing & motion graphics", visual: "motion" },
  { id: "07", title: "AI Creative Workflows", category: "AI Creative", type: "AI-assisted visual exploration", visual: "ai" },
];

function ProjectVisual({ visual }) {
  if (visual === "vfx") {
    return (
      <video
        className="h-full w-full object-cover"
        src="/videos/Final_Output.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  if (visual === "paint-o") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#f4f2ed] text-[#0f1e3a]">
        <div className="absolute right-[-8%] top-[-18%] h-[75%] w-[45%] rounded-full border-[28px] border-[#1161e7]/20" />
        <div className="absolute bottom-8 left-8 flex gap-2">
          {["#1161E7", "#1FA463", "#FF8A00", "#D81B8C", "#6A1B9A"].map((color) => (
            <span key={color} className="h-2 w-12 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
        <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1161e7]">Brand Identity</p>
          <p className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
            Paint-O<br /><span className="text-[#1161e7]">Paints.</span>
          </p>
        </div>
      </div>
    );
  }

  const visualContent = {
    mani: ["#0b0b0b", "#d6b36a", "MANI", "Corporate profile & creative systems"],
    cinematrix: ["#101010", "#d9b98a", "CINEMATRIX", "Digital growth partnership"],
    whoosh: ["#e9f1f5", "#1268d4", "WHOOSH", "Digital transformation"],
    vfx: ["#111", "#ff453a", "VFX", "Before → Final"],
    motion: ["#0d0d0d", "#fff", "MOTION", "Edit / Animate"],
    ai: ["#0d0d0d", "#ff453a", "AI", "Creative exploration"],
  }[visual];

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[#111]"
      style={{ background: visualContent[0], color: visualContent[2] === "WHOOSH" ? "#101820" : "#fff" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at 75% 25%, ${visualContent[1]}33, transparent 38%), linear-gradient(135deg, transparent 30%, ${visualContent[1]}12)`,
        }}
      />
      <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: visualContent[1] }}>Project preview</p>
        <p className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">{visualContent[2]}</p>
        <p className="mt-4 max-w-[280px] text-xs font-medium uppercase tracking-[0.14em] opacity-55">{visualContent[3]}</p>
      </div>
      <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border" style={{ borderColor: `${visualContent[1]}55` }} />
    </div>
  );
}

function SocialCampaigns() {
  const campaigns = [
    ["Corporate Campaign", "Sacumen AI Entrepreneurs", "Startup challenge campaign visual and event communication."],
    ["Leadership Content", "Forbes Leadership", "Editorial-style social creative for leadership communication."],
    ["Product Campaign", "Javik Karnataka", "Honey, jaggery and farmer-focused product storytelling."],
    ["Regional Campaign", "Kannada Rajyotsava", "Cultural communication using Kannada typography and heritage imagery."],
    ["Healthcare Awareness", "Eye Care Campaign", "Informational healthcare communication with clear hierarchy."],
    ["Education Campaign", "World Children’s Day", "Family-friendly educational social communication."],
    ["Entertainment / Motion", "Batman vs Zombies", "Stop-motion promotion with dramatic typography and character imagery."],
    ["Social Awareness", "Human Rights Day", "Awareness creative focused on message hierarchy and civic communication."],
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-20 text-white md:px-12 md:py-24 lg:px-16 xl:px-20" aria-labelledby="social-campaigns-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-7 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b98a]">Campaign work</p>
            <h2 id="social-campaigns-title" className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Social Media &amp; Campaign Design</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">Selected social creatives spanning corporate, product, education, healthcare, cultural and entertainment communication.</p>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campaigns.map(([category, title, description]) => (
            <article key={title} className="rounded-[16px] border border-white/[0.10] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20">
              <div className="mb-10 flex h-28 items-end rounded-[12px] border border-white/[0.06] bg-[radial-gradient(circle_at_70%_25%,rgba(217,185,138,0.28),transparent_42%),linear-gradient(135deg,#141414,#090909)] p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9b98a]">{category}</span>
              </div>
              <h3 className="text-lg font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoIdentity() {
  const logos = [
    ["Belaku", "Identity exploration"],
    ["Jaivik", "Brand identity"],
    ["Samachar", "Logo / icon system"],
    ["Chimple", "Brand mark"],
    ["SELCO", "Identity work"],
    ["Elytri", "Logo identity"],
    ["Logo Studies", "Selected explorations"],
    ["Identity Archive", "Additional logo work"],
  ];
  return (
    <section id="logo-identity" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-20 text-white md:px-12 md:py-24 lg:px-16 xl:px-20" aria-labelledby="logo-identity-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-7 md:flex-row md:items-end">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b98a]">Identity work</p><h2 id="logo-identity-title" className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Logo &amp; Identity Design</h2></div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">Selected logo and identity work, presented separately from campaign and digital projects.</p>
        </header>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {logos.map(([name, type]) => <article key={name} className="flex min-h-[150px] flex-col justify-between rounded-[16px] border border-white/[0.10] bg-white/[0.02] p-5 transition-colors hover:border-white/20"><div className="flex h-20 items-center justify-center rounded-[12px] border border-white/[0.06] bg-white/[0.025] text-xl font-black tracking-[-0.04em] text-white/80">{name}</div><div><p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d9b98a]">{type}</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-600">Selected logo work</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export default function FeaturedProjectsPro() {
  return (
    <>
    <section id="work" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 md:py-28 lg:px-16 xl:px-20" aria-labelledby="selected-work-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-12 flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-end lg:mb-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b98a]">Selected work</p>
            <h2 id="selected-work-title" className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Selected <span className="text-zinc-500">projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Brand systems, digital growth, campaign design, motion, VFX and AI-assisted creative — selected for commercial relevance.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <article key={project.id} className={`group ${index < 2 ? "lg:col-span-6" : index === 2 ? "lg:col-span-6" : "lg:col-span-4"}`}>
              <div className="overflow-hidden rounded-[18px] border border-white/[0.10] bg-white/[0.02] p-2.5 transition-colors duration-300 group-hover:border-white/20">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                  <ProjectVisual visual={project.visual} />
                  <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/70 backdrop-blur-sm">
                    {project.id}
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9b98a]">{project.category}</p>
                  <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] sm:text-xl">{project.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-400">{project.type}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Case-study evidence appears below where available.</span>
          <span className="text-zinc-600">Concept-labelled work is clearly identified.</span>
        </div>
      </div>
    </section>
    <SocialCampaigns />
    <LogoIdentity />
    </>
  );
}
