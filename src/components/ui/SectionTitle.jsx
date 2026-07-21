import { motion } from "framer-motion";

export default function SectionTitle({
  label,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-red-400"
      >
        {label}
      </motion.span>

      <h2 className="gsap-title mt-8 text-5xl font-black leading-tight md:text-7xl">
        {title}
      </h2>

      <p className="gsap-text mt-8 text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}