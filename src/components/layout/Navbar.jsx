import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOKENS = {
  colors: { accent: "#FF453A" },
  transitions: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const NAV_LINKS = [
  { name: "HOME", index: 0 },
  { name: "WORK", index: 1 },
  { name: "EXPERIENCE", index: 2 },
  { name: "CONTACT", index: 3 },
];

const NavLink = memo(({ name, index, onClick }) => {
  const handleIntercept = (e) => {
    e.preventDefault();
    if (onClick) onClick(); // Close mobile menu if active

    // ✨ ULTRA RESILIENT LANDMARK CALCULATOR
    // Instead of parsing specific strings, it targets section tags sequentially
    const mainContainer = document.querySelector("main") || document.body;
    const targets = mainContainer.querySelectorAll("section, [id], main > div");
    
    if (index === 0) {
      // Home always resets straight to the top of the browser
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targets && targets.length > 0) {
      // Find the relative section by layout index flow
      let targetElement = null;
      
      if (index === 1) targetElement = document.getElementById("selected-works") || document.getElementById("projects") || targets[1];
      if (index === 2) targetElement = document.getElementById("experience") || targets[2];
      if (index === 3) targetElement = document.getElementById("contact") || targets[3];

      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <li className="list-none m-0 p-0">
      <a
        href="#"
        onClick={handleIntercept}
        className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors duration-200 py-3 md:py-1.5 block group outline-none cursor-pointer"
      >
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF453A] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
      </a>
    </li>
  );
});
NavLink.displayName = "NavLink";

export default function GlobalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#050505]/80 border-b border-white/[0.04] backdrop-blur-xl py-4" : "bg-transparent py-6"
    }`}>
      <div className="w-full max-w-[1280px] mx-auto px-10 flex items-center justify-between">
        
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3 group text-white font-black tracking-[0.25em] text-[14px]">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#FF453A] rounded-full" />
            <div className="absolute inset-0 border border-white/10 rounded-full" />
          </div>
          PRAVEEN S.
        </a>

        <ul className="hidden md:flex items-center gap-10 m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} name={link.name} index={link.index} />
          ))}
        </ul>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col items-end justify-center gap-1.5 md:hidden w-8 h-8 relative">
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 absolute" : "w-6"}`} />
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0 hidden" : "w-4"}`} />
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 absolute" : "w-5"}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="relative w-full md:hidden">
            <motion.ul initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="absolute top-0 left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.06] px-10 py-8 flex flex-col gap-6 m-0 list-none shadow-2xl">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} name={link.name} index={link.index} onClick={() => setMobileMenuOpen(false)} />
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}