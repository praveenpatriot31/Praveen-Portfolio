import { motion } from "framer-motion";

const links = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#work" },
  { title: "Services", href: "#services" },
  { title: "Experience", href: "#experience" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const socials = [
  {
    title: "Behance",
    href: "https://www.behance.net/praveenpatriot",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:flex-row lg:justify-between">
        <div className="max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
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
            transition={{ delay: 0.2 }}
            className="mt-6 leading-8 text-zinc-400"
          >
            Creative Visual Designer specializing in Branding,
            Motion Graphics, UI/UX, Video Editing and VFX
            Compositing.
          </motion.p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">
            Navigation
          </h3>

          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block text-zinc-400 transition hover:text-red-500"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">
            Connect
          </h3>

          <div className="space-y-3">
            {socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="block text-zinc-400 transition hover:text-red-500"
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Praveen. All rights reserved.
          </p>

          <p>
            Built with React • Vite • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}