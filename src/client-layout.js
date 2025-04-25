"use client";

import { ReactLenis } from "lenis/react";
import Menu from "@/components/Menu/Menu";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Different settings for mobile and desktop
  const scrollSettings = isMobile
    ? {
        duration: 0.8, // Shorter duration for mobile
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Keep the same easing
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true, // Enable smooth touch on mobile
        touchMultiplier: 1.2, // Lower multiplier for more natural feel
        infinite: false,
        lerp: 0.05, // Lower lerp for less lag on mobile
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      }
    : {
        // Original desktop settings
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      };

  return (
    <ReactLenis root options={scrollSettings}>
      <Menu />
      {children}
    </ReactLenis>
  );
}
