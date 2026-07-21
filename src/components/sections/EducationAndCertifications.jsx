import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TOKENS = {
  colors: {
    bg: "#050505",
    accent: "#FF453A",
    card: "rgba(255, 255, 255, 0.02)",
    border: "rgba(255, 255, 255, 0.06)",
    textPrimary: "#FFFFFF",
    textSecondary: "#A3A3A3",
  },
  transitions: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
};

const STAGGER_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: TOKENS.transitions,
  },
};

const CV_EDUCATION_DATA = [
  {
    id: "edu-01",
    period: "Expected 2027",
    title: "Bachelor of Vocation (B.Voc) - Graphics & VFX",
    institution: "PSB Academy, Singapore (Correspondence)",
    details: "Advanced undergraduate academic track focusing on global media structures, graphics pipelines, and technical VFX integrations."
  },
  {
    id: "edu-02",
    period: "2025",
    title: "Certificate in Media & Communication",
    institution: "PSB Academy, Singapore",
    details: "Core credential specializing in cross-cultural communication architectures and modern brand strategy alignment."
  },
  {
    id: "edu-03",
    period: "2020 — 2023",
    title: "Diploma in Graphics & VFX",
    institution: "Arena Animation, Bengaluru",
    details: "Rigorous technical foundation in high-fidelity compositing, creative tool deployment, and dynamic motion pipelines."
  }
];

const EducationRow = memo(({ period, title, institution, details, shouldReduceMotion }) => {
  return (
    <motion.div 
      variants={FADE_UP_VARIANT}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              x: 6,
              backgroundColor: "rgba(255, 255, 255, 0.012)",
            }
      }
      className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/[0.04] px-6 -mx-6 rounded-2xl transition-all duration-300 ease-out will-change-transform group outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A]"
      tabIndex={0}
    >
      <div 
        className="md:col-span-3 text-[14px] font-bold tracking-wider uppercase pt-1.5 transition-colors duration-300 group-hover:text-white"
        style={{ color: TOKENS.colors.textSecondary }}
      >
        {period}
      </div>

      <div className="md:col-span-9 flex flex-col items-start text-left">
        <h4 className="text-[20px] font-black tracking-tight text-white leading-tight">
          {title}{" "}
          <span 
            className="text-[14px] font-bold tracking-wide block md:inline md:ml-1.5 mt-1 md:mt-0"
            style={{ color: TOKENS.colors.accent }}
          >
            // {institution}
          </span>
        </h4>
        
        <p 
          className="mt-3 text-[14px] leading-relaxed tracking-wide font-normal antialiased"
          style={{ color: TOKENS.colors.textSecondary }}
        >
          {details}
        </p>
      </div>
    </motion.div>
  );
});

EducationRow.displayName = "EducationRow";

export default function EducationAndCertifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      className="w-full bg-[#050505] py-24 border-t border-white/[0.04] overflow-hidden"
      aria-label="Academic Education and Professional Certifications History"
    >
      <div className="w-full max-w-[1280px] mx-auto px-10 md:px-12 lg:px-20">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          
          <motion.div 
            variants={FADE_UP_VARIANT} 
            className="lg:col-span-4 flex items-center gap-3.5 h-auto lg:sticky lg:top-16 self-start select-none"
          >
            <span 
              className="text-[14px] font-bold uppercase tracking-[0.25em] whitespace-nowrap"
              style={{ color: TOKENS.colors.accent }}
            >
              Academic Blueprint
            </span>
            <div className="h-px bg-white/[0.08] flex-1 max-w-[80px]" aria-hidden="true" />
          </motion.div>

          <div className="lg:col-span-8 flex flex-col w-full border-t border-white/[0.04]">
            {CV_EDUCATION_DATA.map((edu) => (
              <EducationRow
                key={edu.id}
                period={edu.period}
                title={edu.title}
                institution={edu.institution}
                details={edu.details}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}