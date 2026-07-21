import React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  strength = 32,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Balanced spring configurations optimized for premium kinetic physics
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  function handleMouseMove(e) {
    if (shouldReduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Standardize delta matrices around center anchor coordinates [-1 to 1]
    const moveX = (mx - rect.width / 2) / (rect.width / 2);
    const moveY = (my - rect.height / 2) / (rect.height / 2);

    x.set(moveX * strength);
    y.set(moveY * strength);
  }

  function handleKeyboardFocus() {
    if (shouldReduceMotion) return;
    // Subtly float upward on focus to acknowledge key selection paths
    y.set(-strength * 0.25);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onFocus={handleKeyboardFocus}
      onBlur={reset}
      style={{
        x: shouldReduceMotion ? 0 : springX,
        y: shouldReduceMotion ? 0 : springY,
      }}
      className={`relative overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-8 py-3.5 transition-colors duration-300 hover:border-[#FF453A]/30 outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A] group cursor-pointer ${className}`}
    >
      {/* Background Ripple Layer */}
      <span 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF453A]/10 to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Internal Scaler Container to prevent parent-child transform fights */}
      <motion.span 
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative z-10 flex items-center justify-center gap-2.5 font-bold text-[13px] uppercase tracking-[0.2em] text-white"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}