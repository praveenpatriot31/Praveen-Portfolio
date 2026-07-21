import React, { Suspense, lazy, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Layout
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";

// Hero
import Hero from "./components/hero/Hero";

// Lazy Sections
const Showreel = lazy(() => import("./components/sections/Showreel"));
const FeaturedProjects = lazy(() =>
  import("./components/sections/FeaturedProjectsPro")
);

// const About = lazy(() => import("./components/sections/About"));

const Impact = lazy(() => import("./components/sections/Impact"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Services = lazy(() => import("./components/sections/ServicesGrid"));
const VfxSlider = lazy(() => import("./components/sections/VfxSlider"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Loader />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<Loading />}>
          <Showreel />
          <FeaturedProjects />
          {/* <About /> */}
          <Impact />
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