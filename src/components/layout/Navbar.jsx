import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOKENS = {
  colors: {
    accent: "#FF453A",
  },
  transitions: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1], // Precise Apple Cinematic Easing Profile
  },
};

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "WORK", href: "#work" }, // ✨ FIXED: Changed from #projects to match id="work"
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

const NavLink = memo(({ name, href, onClick }) => {
  const handleIntercept = (e) => {
    // Call mobile drawer toggles first
    if (onClick) onClick();

    // Trigger Lenis instance explicitly if global interceptor needs reinforcement
    if (window.lenis) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        window.lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
          immediate: false
        });
      }
    }
  };

  return (
    <li className="list-none m-0 p-0">
      <a
        href={href}
        onClick={handleIntercept} // ✨ FIXED: Direct hardware smooth-scroll injection
        className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors duration-200 py-1.5 block group outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded cursor-pointer"
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

  // Performance-Optimized Passive Scroll Handler
  useEffect(() => {
    let ticking = false;

    const updateNavbarState = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbarState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Branding text click handler (Back to top)
  const handleLogoClick = (e) => {
    if (window.lenis) {
      const element = document.querySelector("#home");
      if (element) {
        e.preventDefault();
        window.lenis.scrollTo(element, { duration: 1.2 });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={TOKENS.transitions}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none ${
        isScrolled 
          ? "bg-[#050505]/70 border-b border-white/[0.04] backdrop-blur-xl py-4" 
          : "bg-transparent py-6"
      }`}
      aria-label="Global Navigation Hub"
    >
      <div className="w-full max-w-[1280px] mx-auto px-10 md:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Branding Engine */}
        <a 
          href="#home" 
          onClick={handleLogoClick} // ✨ FIXED: Seamless smooth snap back to home hero zone
          className="flex items-center gap-3 group outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded p-1 cursor-pointer"
        >
          <div className="relative w-6 h-6 flex items-center justify-center" aria-hidden="true">
            <span className="w-1.5 h-1.5 bg-[#FF453A] rounded-full group-hover:scale-125 transition-transform duration-300" />
            <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-300" />
          </div>
          <span className="text-[14px] font-black uppercase tracking-[0.25em] text-white">
            Praveen S.
          </span>
        </a>

        {/* Desktop Directory Grid */}
        <ul className="hidden md:flex items-center gap-10 m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
        </ul>

        {/* Accessibility Compliant Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-end justify-center gap-1.5 md:hidden w-8 h-8 focus:outline-none z-50 group outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded cursor-pointer"
          aria-label="Toggle Navigation Options"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[4px]" : "w-6"}`} aria-hidden="true" />
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4"}`} aria-hidden="true" />
          <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[4px]" : "w-5"} `} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="relative w-full md:hidden" id="mobile-navigation-menu">
            <motion.ul
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TOKENS.transitions}
              className="absolute top-0 left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.06] px-10 py-8 flex flex-col gap-5 shadow-[0_24px_48px_rgba(0,0,0,0.9)] m-0 list-none"
            >
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.name} 
                  name={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                />
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}