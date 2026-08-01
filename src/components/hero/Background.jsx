import { motion } from "framer-motion";
import React from "react";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Soft Red Glow - Now Breathing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5], 
          scale: [0.95, 1.05, 0.95] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]"
      />

      {/* Secondary Glow - Offset Breathing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          delay: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[140px]"
      />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial Overlay (Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_60%,#050505_100%)]" />

      {/* Noise - Pointing to local premium asset */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/premium-film-grain.png')",
        }}
      />
    </div>
  );
}