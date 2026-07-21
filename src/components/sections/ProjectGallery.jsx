import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const CINEMATIC_COLLECTION = [
  {
    id: "asset-1",
    title: "AI Widescreen Environment Simulation",
    category: "Generative AI",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-42078-large.mp4", 
    layoutClass: "md:col-span-2 h-[350px]"
  },
  {
    id: "asset-2",
    title: "Vertical Brand Concept",
    category: "Visual Design",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    mediaUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop",
    layoutClass: "md:col-span-1 h-[350px]"
  },
  {
    id: "asset-3",
    title: "Corporate Visual Asset System",
    category: "Motion Graphics",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    mediaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    layoutClass: "md:col-span-1 h-[350px]"
  },
  {
    id: "asset-4",
    title: "Neural Engine Compositing",
    category: "VFX / GenAI",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-numbers-31919-large.mp4",
    layoutClass: "md:col-span-2 h-[350px]"
  }
];

function MatrixCard({ item, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const videoElement = useRef(null);

  const activatePreview = () => {
    setHovered(true);
    if (item.type === "video" && videoElement.current) {
      videoElement.current.play().catch(() => {});
    }
  };

  const deactivatePreview = () => {
    setHovered(false);
    if (item.type === "video" && videoElement.current) {
      videoElement.current.pause();
      videoElement.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={activatePreview}
      onMouseLeave={deactivatePreview}
      onClick={() => onSelect(item)}
      className={`group relative w-full overflow-hidden rounded-xl border border-white/[0.05] bg-zinc-900 cursor-pointer ${item.layoutClass}`}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover grayscale opacity-50 contrast-[1.1] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-20"
      />

      {item.type === "video" && (
        <video
          ref={videoElement}
          src={item.mediaUrl}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
            hovered ? "opacity-75 grayscale-0" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF453A] uppercase mb-1.5 block">
          {item.category}
        </span>
        <h3 className="text-base font-bold tracking-tight text-white uppercase max-w-md">
          {item.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-zinc-500 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>[ OPEN ENGINE DEPLOYMENT ]</span>
        </div>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filteredItems = CINEMATIC_COLLECTION.filter(item => 
    filter === "all" ? true : item.type === filter
  );

  return (
    <section id="showcase" className="w-full bg-[#050505] py-32 px-6 md:px-12 xl:px-24 border-t border-white/[0.04] relative z-20">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Title & Interactive Filter Matrix */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-black tracking-[0.4em] text-[#FF453A] uppercase">
                Production Engine
              </span>
              <span className="w-12 h-[1px] bg-white/10" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              SELECTED <br />WORKS.
            </h2>
          </div>

          {/* Filtering Terminal Tabs */}
          <div className="flex bg-zinc-950 p-1 rounded-lg border border-white/[0.04] self-start lg:self-auto">
            {["all", "image", "video"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                  filter === tab 
                    ? "bg-zinc-900 text-white border border-white/[0.06]" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab === "all" ? "All Nodes" : tab === "image" ? "Stills" : "Motion/AI"}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Core Matrix Grid Wrapper */}
        <motion.div 
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={item.layoutClass}
              >
                <MatrixCard item={item} onSelect={setLightbox} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Fullscreen Lightbox Theater */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full aspect-video bg-zinc-950 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl"
            >
              {lightbox.type === "video" ? (
                <video src={lightbox.mediaUrl} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={lightbox.mediaUrl} alt={lightbox.title} className="w-full h-full object-contain" />
              )}

              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF453A] uppercase block mb-1">
                    {lightbox.category}
                  </span>
                  <h4 className="text-white text-base font-bold uppercase tracking-tight">
                    {lightbox.title}
                  </h4>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="px-4 py-2 border border-white/10 rounded-md bg-zinc-900 text-zinc-400 hover:text-white text-xs font-bold uppercase transition-all"
                >
                  Close Matrix
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}