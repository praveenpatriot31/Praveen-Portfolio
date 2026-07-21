import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative flex items-center justify-center w-full"
    >
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[140px]" />

      {/* Soft Ring */}
      <div className="absolute h-[560px] w-[560px] rounded-full border border-white/5" />

      {/* Portrait */}
      <motion.img
        src="/images/profile.png"
        alt="Praveen"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-[380px] sm:w-[440px] lg:w-[520px] object-contain select-none drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]"
      />
    </motion.div>
  );
}