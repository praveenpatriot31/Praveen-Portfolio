import React, { useEffect, useState, memo } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const CustomCursor = memo(() => {
  const isReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 450, mass: 0.6 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 450, mass: 0.6 });

  useEffect(() => {
    if (isReducedMotion || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const moveCursor = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handlePointerOver = (event) => {
      if (event.target.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovered(true);
      }
    };

    const handlePointerOut = (event) => {
      const interactive = event.target.closest('a, button, [role="button"], input, select, textarea');
      if (interactive && !interactive.contains(event.relatedTarget)) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
    };
  }, [isReducedMotion, mouseX, mouseY]);

  if (isReducedMotion || !isVisible) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference will-change-transform md:block"
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference will-change-transform md:block"
        style={{ x: mouseX, y: mouseY }}
        animate={{ scale: isHovered ? 0 : 1 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';
export default CustomCursor;
