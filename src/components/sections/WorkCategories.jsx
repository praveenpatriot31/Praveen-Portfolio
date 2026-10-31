import React from "react";

const GROUPS = [
  {
    id: "branding",
    number: "01",
    title: "Branding & Identity",
    intro: "Brand systems, identity design and visual communication.",
    items: [
      ["PAINT-O PAINTS", "Visual identity, colour system and brand applications"],
      ["MANI Group", "Corporate identity and brand communication"],
      ["Cinematrix", "Creative studio identity and digital presence"],
      ["WHOOSH Singapore", "Digital and visual communication"],
      ["Logo & Identity Studies", "Selected logo explorations and identity work"],
    ],
  },
  {
    id: "social-campaigns",
    number: "02",
    title: "Social Media Campaigns",
    intro: "Campaign-led creative for social platforms, awareness and editorial communication.",
    items: [
      ["Kannada Rajyotsava", "Regional and cultural campaign creative"],
      ["World Children’s Day", "Awareness and educational communication"],
      ["Human Rights Day", "Social awareness creative"],
      ["Forbes Leadership", "Leadership-focused social content"],
      ["Batman vs Zombies", "Entertainment and motion-led promotion"],
    ],
  },
  {
    id: "ad-design",
    number: "03",
    title: "Advertising & Ad Design",
    intro: "Promotional creative and product-led communication for digital campaigns.",
    items: [
      ["A2Z POS", "B2B product campaign and feature communication"],
      ["Sacumen AI Entrepreneurs", "Startup challenge and event campaign creative"],
      ["Eye Care Campaign", "Healthcare awareness and informational creative"],
      ["Javik Karnataka", "Product-focused storytelling for honey and jaggery"],
    ],
  },
  {
    id: "packaging",
    number: "04",
    title: "Packaging Design",
    intro: "Packaging layouts, product presentation and print-ready artwork.",
    items: [
      ["Nutri Organics — A2 Desi Gir Cow Ghee", "Wrap label design with front, back and side panels, nutrition information and premium red-and-gold branding."],
      ["Malvi Marshmallows", "Pastel pouch packaging and illustrated product-world presentation."],
      ["Fiavini — Vegan Gummy Cubes", "Black-and-red stand-up pouch concept with flavour-led product presentation."],
      ["Coffee Packaging & Identity", "Coffee-themed graphic system and label/packaging direction."],
      ["Best Pizza", "Pizza box artwork, dieline layout and assembled packaging mockup."],
      ["Wilson Carton Packaging", "Carton artwork, dieline presentation and 3D pack mockups."],
    ],
  },
  {
    id: "video-motion",
    number: "05",
    title: "Video & Motion",
    intro: "Short-form campaign films, brand storytelling and location-led promotional edits.",
    items: [
      ["Jaivik Karnataka — Nature & Freshness", "Short-form visual story featuring Bengaluru greenery, local places and a nature-led campaign identity.", "/videos/Nature_freshness.mp4"],
      ["Jaivik Mall — Lalbagh", "Location-led promotional film featuring the organic produce store, fresh produce and customer experience.", "/videos/jaivik-mall.mp4"],
      ["Jaivik Sante", "Short-form film around the Jaivik Karnataka organic farmers market, stalls and shoppers.", "/videos/jaivik-sante.mp4"],
    ],
  },
  {
    id: "packaging",
    number: "04",
    title: "Packaging Design",
    intro: "Packaging layouts, product presentation and print-ready artwork.",
    items: [
      ["Nutri Organics — A2 Desi Gir Cow Ghee", "Wrap label design with front, back and side panels, nutrition information and premium red-and-gold branding."],
      ["Malvi Marshmallows", "Pastel pouch packaging and illustrated product-world presentation."],
      ["Fiavini — Vegan Gummy Cubes", "Black-and-red stand-up pouch concept with flavour-led product presentation."],
      ["Coffee Packaging & Identity", "Coffee-themed graphic system and label/packaging direction."],
      ["Best Pizza", "Pizza box artwork, dieline layout and assembled packaging mockup."],
      ["Wilson Carton Packaging", "Carton artwork, dieline presentation and 3D pack mockups."],
    ],
  },
];

function CampaignArtwork({ name, groupId, index }) {
  const themes = {
    branding: ["from-amber-200 via-orange-400 to-red-700", "from-zinc-100 via-stone-300 to-zinc-600", "from-fuchsia-500 via-purple-700 to-zinc-950"],
    "social-campaigns": ["from-red-600 via-orange-500 to-amber-300", "from-sky-300 via-blue-600 to-indigo-950", "from-emerald-300 via-teal-600 to-zinc-950"],
    "ad-design": ["from-lime-300 via-green-500 to-emerald-950", "from-violet-400 via-indigo-600 to-zinc-950", "from-rose-300 via-red-500 to-orange-950"],
    packaging: ["from-yellow-100 via-amber-300 to-red-700", "from-pink-200 via-fuchsia-300 to-purple-700", "from-zinc-100 via-neutral-300 to-zinc-800"],
  };
  const theme = (themes[groupId] || themes.branding)[index % (themes[groupId] || themes.branding).length];
  const words = name.replace(/ — /g, " / ").split(/\s+/).filter(Boolean);
  return (
    <div className={`relative mb-5 flex aspect-[4/3] w-full items-end overflow-hidden rounded-lg bg-gradient-to-br ${theme} p-4 sm:p-5`} aria-label={`Graphic preview for ${name}`} role="img">
      <div aria-hidden="true" className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[22px] border-white/20 sm:h-48 sm:w-48" />
      <div aria-hidden="true" className="absolute right-8 top-8 h-20 w-20 rotate-12 border border-white/50 sm:h-28 sm:w-28" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/15 to-transparent" />
      <div className="relative z-10 max-w-full">
        <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">CREATIVE CAMPAIGN / {String(index + 1).padStart(2, "0")}</p>
        <p className="max-w-full break-words text-2xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white drop-shadow sm:text-3xl lg:text-4xl">{words.slice(0, 5).join(" ")}</p>
        <div className="mt-3 h-1 w-12 bg-white/90" />
      </div>
      <span aria-hidden="true" className="absolute right-3 top-3 rounded-full border border-white/40 px-2 py-1 font-mono text-[9px] tracking-widest text-white">PREVIEW</span>
    </div>
  );
}

function CategorySection({ group }) {
  return (
    <section id={group.id} className="scroll-mt-24 border-t border-white/[0.08] py-14 sm:py-20" aria-labelledby={`${group.id}-title`}>
      <header className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-[#ff453a]">{group.number} / WORK CATEGORY</p>
          <h3 id={`${group.id}-title`} className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-4xl lg:text-5xl">{group.title}</h3>
        </div>
        <p className="max-w-lg text-sm leading-6 text-zinc-400 md:col-span-4 md:justify-self-end">{group.intro}</p>
      </header>
      {group.items.length ? (
        <div className={group.id === "video-motion"
          ? "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-6 pr-2 [scrollbar-width:thin] [scrollbar-color:#52525b_transparent]"
          : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
          {group.items.map(([name, description, videoSrc], index) => (
            <article key={name} id={name === "Cinematrix" ? "cinematrix" : undefined} className={`group flex min-h-[148px] flex-col justify-between rounded-xl border border-white/[0.10] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04] ${videoSrc ? "min-h-0" : ""} ${group.id === "video-motion" ? "w-[78vw] min-w-[78vw] max-w-[320px] flex-none snap-start sm:w-[280px] sm:min-w-[280px] lg:w-[300px]" : ""}`}>
              {videoSrc ? (
                <div className="mb-5 aspect-[9/16] w-full overflow-hidden rounded-lg border border-white/10 bg-black">
                  <video width="1920" height="1080" className="block h-full w-full object-cover" controls preload="metadata" playsInline aria-label={`${name} portfolio video`}>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
              ) : (
                <CampaignArtwork name={name} groupId={group.id} index={index} />
              )}
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-600">{group.number}.{String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="text-sm text-[#ff453a] transition-transform group-hover:translate-x-1">↗</span>
              </div>
              <div>
                <h4 className="text-base font-bold tracking-[-0.02em] text-white">{name}</h4>
                <p className="mt-2 text-sm leading-5 text-zinc-400">{description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 sm:px-8">
          <p className="text-lg font-semibold text-white">Packaging projects will be added here.</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Send the packaging artwork or product mockups you want to showcase, and this category can be populated with your actual work rather than placeholder projects.</p>
          <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff655c] hover:text-white">Share packaging work <span aria-hidden="true">↗</span></a>
        </div>
      )}
    </section>
  );
}

export default function WorkCategories() {
  return (
    <section id="work-categories" className="bg-[#050505] px-6 py-20 text-white md:px-12 lg:px-16 xl:px-20" aria-labelledby="work-categories-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-10 border-b border-white/10 pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff453a]">Browse by discipline</p>
          <h2 id="work-categories-title" className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Portfolio <span className="text-zinc-500">/ Selected Work.</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">A curated selection of brand identity, social campaigns, advertising, packaging and motion work. Browse by discipline to see the range of creative thinking, visual systems and campaign execution.</p>
        </header>
        <nav aria-label="Portfolio categories" className="mb-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {GROUPS.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="group flex min-h-[88px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-[#ff453a]/60">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#ff453a]">{group.number}</span>
              <span className="text-sm font-semibold leading-5 text-white">{group.title}<span className="ml-2 text-zinc-600 transition-colors group-hover:text-[#ff453a]" aria-hidden="true">↘</span></span>
            </a>
          ))}
        </nav>
        {GROUPS.map((group) => <CategorySection key={group.id} group={group} />)}
      </div>
    </section>
  );
}
