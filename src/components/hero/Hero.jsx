import React, { memo, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const HERO_CONFIG = {
  photoSrc: "/images/hero.jpg",
  videoBgSrc: "/videos/hero-bg-loop.mp4",
  resumeUrl: "/resume/Praveen_S_Resume.pdf",
  workExternalUrl: "https://www.behance.net/praveenpatriot",
};

const STAGGER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const ELEMENT_VARIANTS = {
  hidden: (shouldReduceMotion) => ({ opacity: 0, y: shouldReduceMotion ? 0 : 24 }),
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const STATS_CARDS_MAP = [
  {
    value: "5+",
    label: "Years Experience",
    transformClass: "md:-translate-x-[270px] md:-translate-y-[190px] lg:-translate-x-[285px] lg:-translate-y-[205px]",
    phaseShift: 0,
  },
  {
    value: "100+",
    label: "Projects Delivered",
    transformClass: "md:translate-x-[65px] md:-translate-y-[190px] lg:translate-x-[80px] lg:-translate-y-[205px]",
    phaseShift: 1,
  },
  {
    value: "30+",
    label: "Brands Supported",
    transformClass: "md:translate-x-[75px] md:translate-y-[100px] lg:translate-x-[90px] lg:translate-y-[115px]",
    phaseShift: 2,
  },
];

const AVAILABILITY_CARD_MAP = {
  value: "Open",
  label: "Immediate Joiner",
  transformClass: "md:-translate-x-[255px] md:translate-y-[100px] lg:-translate-x-[270px] lg:translate-y-[115px]",
};

const FloatingStatCard = memo(({ value, label, transformClass, phaseShift, isStatus, shouldReduceMotion }) => {
  const dynamicYAnimation = shouldReduceMotion ? [0, 0] : [0, -8, 0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, y: dynamicYAnimation }}
      transition={{
        delay: 0.4 + phaseShift * 0.15,
        duration: 0.8,
        y: shouldReduceMotion
          ? { duration: 0 }
          : { repeat: Infinity, duration: 6 + phaseShift * 0.5, ease: "easeInOut" },
      }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4, transition: { duration: 0.2 } }}
      className={`relative md:absolute top-auto left-auto md:top-1/2 md:left-1/2 ${transformClass} z-30 min-w-[180px] rounded-[20px] p-4 backdrop-blur-2xl select-none will-change-transform shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] border ${
        isStatus
          ? "bg-[rgba(255,69,58,0.035)] border-[rgba(255,69,58,0.16)] shadow-[0_24px_48px_-12px_rgba(255,69,58,0.08)]"
          : "bg-[rgba(255,255,255,0.035)] border-[rgba(255,255,255,0.07)]"
      }`}
    >
      <div className="flex items-center gap-3">
        {isStatus && (
          <span className="relative flex h-2.5 w-2.5">
            {!shouldReduceMotion && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF453A] opacity-75" />}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF453A]" />
          </span>
        )}
        <h3 className="text-[28px] font-black text-white tracking-tight leading-none">{value}</h3>
      </div>
      <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8] font-medium leading-none">{label}</p>
    </motion.div>
  );
});

FloatingStatCard.displayName = "FloatingStatCard";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const mouseInputX = useMotionValue(0);
  const mouseInputY = useMotionValue(0);
  const dynamicSpringX = useSpring(mouseInputX, { stiffness: 40, damping: 24 });
  const dynamicSpringY = useSpring(mouseInputY, { stiffness: 40, damping: 24 });

  useEffect(() => setIsMounted(true), []);

  const handleMouseMovePerspective = (e) => {
    if (shouldReduceMotion || !isMounted) return;
    const { innerWidth, innerHeight } = window;
    mouseInputX.set((e.clientX - innerWidth / 2) / 36);
    mouseInputY.set((e.clientY - innerHeight / 2) / 36);
  };

  const ringSpinTransition = (duration) =>
    shouldReduceMotion ? { duration: 0 } : { duration, repeat: Infinity, ease: "linear" };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-stroke-red {
          color: #FF453A !important;
          -webkit-text-fill-color: #050505 !important;
          text-shadow: -1.5px -1.5px 0 #FF453A, 1.5px -1.5px 0 #FF453A, -1.5px 1.5px 0 #FF453A, 1.5px 1.5px 0 #FF453A;
        }
        .custom-stroke-white {
          color: rgba(255,255,255,0.95) !important;
          -webkit-text-fill-color: #050505 !important;
          text-shadow: -1.5px -1.5px 0 rgba(255,255,255,0.95), 1.5px -1.5px 0 rgba(255,255,255,0.95), -1.5px 1.5px 0 rgba(255,255,255,0.95), 1.5px 1.5px 0 rgba(255,255,255,0.95);
        }
      ` }} />

      <section
        onMouseMove={handleMouseMovePerspective}
        className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex items-center select-none py-20 lg:py-0"
        aria-label="Creative Visual Designer Portfolio Hero"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity">
            <source src={HERO_CONFIG.videoBgSrc} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,69,58,0.1),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.02),transparent_48%)]" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-10 md:px-12 xl:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-12">
            <motion.div
              variants={STAGGER_VARIANTS}
              initial="hidden"
              animate="show"
              className="relative max-w-[650px] w-full flex flex-col items-start text-left min-w-0 lg:pt-8"
            >
              <motion.div variants={ELEMENT_VARIANTS} custom={shouldReduceMotion} className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-[#FF453A]" aria-hidden="true" />
                <span className="uppercase tracking-[0.32em] text-[#FF453A] text-[12px] font-bold">INTRODUCTION</span>
              </motion.div>

              <motion.h1 variants={ELEMENT_VARIANTS} custom={shouldReduceMotion} className="font-black tracking-[-0.045em] text-left w-full select-none flex flex-col leading-[0.82] gap-0">
                <span className="block text-white text-[56px] sm:text-[72px] md:text-[84px] xl:text-[104px]">CREATIVE</span>
                <span className="custom-stroke-red block text-[56px] sm:text-[72px] md:text-[84px] xl:text-[104px] tracking-[0.01em]">VISUAL</span>
                <span className="custom-stroke-white block text-[56px] sm:text-[72px] md:text-[84px] xl:text-[104px] tracking-[0.01em]">DESIGNER</span>
              </motion.h1>

              <motion.p variants={ELEMENT_VARIANTS} custom={shouldReduceMotion} className="mt-7 max-w-[500px] text-[#B8B8B8] text-[17px] font-normal leading-[1.7] tracking-normal antialiased">
                Creative Visual Designer with 5+ years of experience across visual design, brand campaigns, motion graphics, video, VFX compositing, and AI-assisted creative workflows. Experienced in end-to-end project execution with international stakeholders and Singapore-based clients.
              </motion.p>

              <motion.div variants={ELEMENT_VARIANTS} custom={shouldReduceMotion} className="flex flex-wrap gap-4 sm:gap-6 mt-10 w-full sm:w-auto">
                <motion.a href={HERO_CONFIG.workExternalUrl} target="_blank" rel="noopener noreferrer" whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto inline-flex items-center justify-center text-center px-9 py-3.5 rounded-full bg-white text-black font-bold text-[14px] tracking-[0.2em] shadow-[0_12px_32px_rgba(255,255,255,0.06)] transition-all duration-300 min-h-[48px] cursor-pointer">
                  VIEW WORK
                </motion.a>
                <motion.a href={HERO_CONFIG.resumeUrl} download="Praveen_S_Resume.pdf" whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto inline-flex items-center justify-center text-center px-9 py-3.5 rounded-full border border-[rgba(255,255,255,0.2)] text-white font-bold text-[14px] tracking-[0.2em] hover:border-[#FF453A] hover:bg-[rgba(255,69,58,0.08)] transition-all duration-300 min-h-[48px] cursor-pointer">
                  DOWNLOAD RESUME
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: dynamicSpringX, y: dynamicSpringY }} className="relative flex items-center justify-center h-auto md:h-[620px] w-full lg:w-[600px] xl:ml-auto flex-shrink-0 overflow-visible will-change-transform mt-8 lg:mt-0 lg:pt-8">
              <div className="relative md:absolute w-full max-w-[460px] md:max-w-none md:w-[460px] h-auto md:h-[460px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                <div className="absolute inset-0 m-auto w-[320px] h-[320px] rounded-full bg-[#FF453A]/5 blur-[90px] pointer-events-none mix-blend-screen hidden md:block" />

                <motion.div animate={{ rotate: shouldReduceMotion ? 0 : 360 }} transition={ringSpinTransition(180)} className="absolute w-[520px] h-[520px] rounded-full border border-white/[0.025] pointer-events-none hidden md:block" />
                <motion.div animate={{ rotate: shouldReduceMotion ? 0 : -360 }} transition={ringSpinTransition(140)} className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.04] pointer-events-none hidden md:block" />
                <motion.div animate={{ rotate: shouldReduceMotion ? 0 : 360 }} transition={ringSpinTransition(100)} className="absolute w-[330px] h-[330px] rounded-full border border-[#FF453A]/10 pointer-events-none hidden md:block" />

                <motion.div animate={{ y: shouldReduceMotion ? 0 : [0, -8, 0] }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative md:absolute order-first md:order-none z-20 w-[300px] h-[300px] rounded-full border border-[#FF453A]/25 bg-black backdrop-blur-3xl shadow-[0_0_80px_rgba(255,69,58,0.16)] flex flex-col items-center justify-center overflow-hidden mb-6 md:mb-0">
                  <img src={HERO_CONFIG.photoSrc} alt="Praveen S. Portrait" className="absolute inset-0 h-full w-full object-cover object-[center_top_35%] transition-all duration-700 select-none pointer-events-none" style={{ imageRendering: "-webkit-optimize-contrast", transform: "translateZ(0)" }} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-8 flex flex-col items-center pointer-events-none z-10">
                    <p className="tracking-[0.35em] text-zinc-200 uppercase text-[14px] font-bold">Praveen S.</p>
                    <p className="tracking-[0.25em] text-[#FF453A] mt-1.5 uppercase text-[11px] font-semibold">Creative Designer</p>
                  </div>
                </motion.div>

                {STATS_CARDS_MAP.map((stat) => (
                  <FloatingStatCard key={stat.label} value={stat.value} label={stat.label} transformClass={stat.transformClass} phaseShift={stat.phaseShift} isStatus={false} shouldReduceMotion={shouldReduceMotion} />
                ))}

                <FloatingStatCard value={AVAILABILITY_CARD_MAP.value} label={AVAILABILITY_CARD_MAP.label} transformClass={AVAILABILITY_CARD_MAP.transformClass} phaseShift={3} isStatus={true} shouldReduceMotion={shouldReduceMotion} />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none z-20">
          <div className="w-[24px] h-[40px] rounded-full border-2 border-white/20 flex justify-center p-1.5 bg-black/20 backdrop-blur-sm">
            <motion.div animate={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-[3px] h-[8px] rounded-full bg-[#FF453A]" />
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase mt-1 pl-[0.3em]">Scroll</span>
        </motion.div>
      </section>
    </>
  );
}
