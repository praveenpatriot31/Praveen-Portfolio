import { motion } from "framer-motion";

const links = [
  { title: "Home", href: "#top" },
  { title: "Selected Work", href: "#work" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

const contact = [
  { title: "Email", href: "mailto:praveenpatriot31@gmail.com" },
  { title: "Phone", href: "tel:+919663227511" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:gap-16">
        <div className="max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-[6px]"
          >
            PRAVEEN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 leading-7 text-zinc-400"
          >
            Creative Visual Designer working across brand, motion, video,
            VFX compositing and AI-assisted creative production.
          </motion.p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Navigation
          </h3>
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block text-zinc-400 transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:text-red-500"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>
          <div className="space-y-3">
            {contact.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-zinc-400 transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:text-red-500"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Praveen. All rights reserved.</p>
          <p>React • Vite • Tailwind CSS • Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
