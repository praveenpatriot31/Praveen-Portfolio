import React, { useEffect, useState, memo } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const TOKENS = {
  colors: {
    accent: "#FF453A",
  },
  springs: {
    outer: { damping: 30, stiffness: 450, mass: 0.6 },
    inner: { damping: 20, stiffness: 800 },
  }
};

const CustomCursor = memo(() => {
  const isReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position Tracks Using Hardware-Accelerated Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Damped Premium Physics Configurations
  const smoothX = useSpring(mouseX, TOKENS.springs.outer);
  const smoothY = useSpring(mouseY, TOKENS.springs.outer);

  useEffect(() => {
    // 1. Accessibility Hardware Check for Touch Interfaces
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsTouchDevice(true);
      }
    };
    
    checkTouch();
    if (isTouchDevice || isReducedMotion) return;

    // 2. High-Frequency Tracking Event Node
    const moveCursor = (e) => {
      // Direct assignment bypassing state-re-render schedules
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    // 3. Contextual Global Hover Intersection Listeners
    const addHoverStates = () => setIsHovered(true);
    const removeHoverStates = () => setIsHovered(false);

    const attachListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', addHoverStates);
        el.addEventListener('mouseleave', removeHoverStates);
      });
    };

    // Initialize Global Subscriptions
    window.addEventListener('mousemove', moveCursor, { passive: true });
    
    // Dynamic Mutation Observer to capture asynchronously loaded DOM trees
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    // Clean Lifecycle Closure
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverStates);
        el.removeEventListener('mouseleave', removeHoverStates);
      });
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice, isReducedMotion]);

  // Early return out of runtime execution cycles if accessibility/touch thresholds are met
  if (isTouchDevice || isReducedMotion || !isVisible) return null;

  return (
    <>
      {/* Outer Easing Precision Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
        }}
      />

      {/* Center Core Micro Dot Tracker */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut"
        }}
      />
    </>
  );
});

CustomCursor.displayName = "CustomCursor";
export default CustomCursor;