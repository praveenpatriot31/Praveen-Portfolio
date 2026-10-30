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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map(([name, description, videoSrc], index) => (
            <article key={name} id={name === "Cinematrix" ? "cinematrix" : undefined} className={`group flex min-h-[148px] flex-col justify-between rounded-xl border border-white/[0.10] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04] ${videoSrc ? "min-h-0" : ""}`}>
              {videoSrc && (
                <div className="mb-5 overflow-hidden rounded-lg border border-white/10 bg-black">
                  <video className="aspect-video w-full object-cover" controls preload="none" playsInline aria-label={`${name} portfolio video`}>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
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
          <h2 id="work-categories-title" className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Work, clearly <span className="text-zinc-500">categorised.</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">Explore each discipline separately. The categories organise brand identity, campaigns, advertising, video and packaging work. Project visuals and playable media can be added as the final assets are hosted.</p>
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
