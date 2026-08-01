import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectsPro() {
  const targetRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        targetRef.current,
        { x: 0 },
        {
          x: "-400vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: "01",
      title: "CYBERPUNK NEON DRIFT",
      category: "3D VFX // COMPOSITING",
      tag: "C4D / AE / NUKE",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200",
    },
    {
      id: "02",
      title: "CHRONO TRIGGER CINEMATIC",
      category: "MOTION GRAPHICS // DIRECTION",
      tag: "HOUDINI / REDSHIFT",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    },
    {
      id: "03",
      title: "VIRTUAL AURA APPAREL",
      category: "CGI PRODUCT COMMERCIAL",
      tag: "BLENDER / CLO3D",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200",
    },
    {
      id: "04",
      title: "DYSTOPIAN CITADEL LABS",
      category: "MATTE PAINTING // ENVIRONMENT",
      tag: "UNREAL ENGINE 5",
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200",
    },
  ];

  return (
    <div ref={triggerRef} className="relative bg-[#050505]">
      <div className="overflow-hidden relative h-screen w-full">

        <div
          ref={targetRef}
          className="flex flex-row relative h-full items-center will-change-transform"
          style={{ width: "500vw" }}
        >

          {/* PANEL 1: Intro Splash Frame */}
          <section className="w-screen h-full flex flex-col justify-center px-10 md:px-16 lg:px-24 bg-[#050505] relative z-10 shrink-0 select-none">
            <div className="max-w-4xl w-full mx-auto text-left">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                  PORTFOLIO // INDEX
                </h2>
                <span className="w-8 h-px bg-[#FF453A] opacity-60" />
              </div>

              <h3 className="text-[56px] sm:text-[72px] md:text-[90px] font-black tracking-tighter uppercase leading-[0.95] mb-8 whitespace-nowrap">
                SELECTED <br />
                <span
                  className="text-[#050505] tracking-tighter"
                  style={{
                    textShadow: `
                      -1px -1px 0 rgba(255, 255, 255, 0.25),  
                       1px -1px 0 rgba(255, 255, 255, 0.25),
                      -1px  1px 0 rgba(255, 255, 255, 0.25),
                       1px  1px 0 rgba(255, 255, 255, 0.25)
                    `
                  }}
                >
                  WORKS
                </span>
              </h3>

              <p className="text-zinc-400 text-[16px] max-w-sm font-normal leading-relaxed antialiased">
                A highly curated digital playground containing commercial motion designs, environment builds, and intricate VFX composites.
              </p>

              <div className="mt-16 text-zinc-600 font-bold text-[11px] tracking-[0.25em] flex items-center gap-2">
                SCROLL DOWN TO EXPLORE <span className="animate-pulse">→</span>
              </div>
            </div>
          </section>

          {/* PANELS 2-5: The Project Showcase Cards */}
          {projects.map((project) => (
            <section
              key={project.id}
              className="w-screen h-full flex items-center justify-center bg-[#050505] shrink-0 px-10 md:px-16 lg:px-24"
            >
              <div className="w-full max-w-[1300px] max-h-[75vh] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-zinc-950/20 border border-white/[0.03] p-8 md:p-10 rounded-2xl group relative overflow-hidden backdrop-blur-sm">

                {/* Visual Media Showcase Frame */}
                <div className="col-span-1 md:col-span-7 h-full w-full min-h-[250px] md:min-h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.05] relative shadow-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1s] ease-[0.16,1,0.3,1]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-md text-zinc-300 font-mono">
                    {project.id}
                  </div>
                </div>

                {/* Meta Description Frame */}
                <div className="col-span-1 md:col-span-5 flex flex-col items-start px-2 text-left select-none">
                  <span className="text-[11px] font-bold text-[#FF453A] tracking-[0.25em] uppercase block mb-4">
                    {project.category}
                  </span>

                  <h4 className="text-[28px] md:text-[38px] lg:text-[44px] font-black tracking-tight leading-none text-white mb-6 group-hover:text-[#FF453A] transition-colors duration-300 uppercase">
                    {project.title}
                  </h4>

                  <div className="inline-block border border-white/10 rounded-md px-3 py-1 bg-white/[0.02] text-[11px] text-zinc-400 font-mono tracking-wider mb-10">
                    {project.tag}
                  </div>

                  <button className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase bg-transparent border-none cursor-pointer p-0">
                    VIEW BREAKDOWN
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#FF453A]">→</span>
                  </button>
                </div>

              </div>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
}