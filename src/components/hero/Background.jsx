import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Soft Red Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]"
      />

      {/* Secondary Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 2 }}
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

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_60%,#050505_100%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </div>
  );
}