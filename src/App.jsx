import React, { Suspense, lazy, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Loader from "./components/layout/Loader";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";
import Hero from "./components/hero/HeroClean";

const Showreel = lazy(() => import("./components/sections/Showreel"));
const FeaturedProjects = lazy(() => import("./components/sections/FeaturedProjectsPro"));
const PaintOPaintsCaseStudy = lazy(() => import("./components/sections/PaintOPaintsCaseStudy"));
const ManiGroupCaseStudy = lazy(() => import("./components/sections/ManiGroupCaseStudy"));
const Impact = lazy(() => import("./components/sections/Impact"));
const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Services = lazy(() => import("./components/sections/ServicesGrid"));
const VfxSlider = lazy(() => import("./components/sections/VfxSlider"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

function Loading() {
  return (
    <div className="flex min-h-[35vh] items-center justify-center bg-[#080808] px-6 text-sm text-zinc-400" role="status" aria-live="polite">
      Loading…
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({ smoothWheel: true });
    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[10000] rounded bg-white px-4 py-3 text-sm font-semibold text-black focus:not-sr-only">
        Skip to content
      </a>
      <Loader />
      <CustomCursor />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<Loading />}>
          <Showreel />
          <FeaturedProjects />
          <PaintOPaintsCaseStudy />
          <ManiGroupCaseStudy />
          <Impact />
          <About />
          <Experience />
          <Skills />
          <Services />
          <VfxSlider />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
