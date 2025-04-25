// app/layout.js
"use client";

import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";
import Menu from "@/components/Menu/Menu";

function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <ReactLenis
            root
            options={{
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
            }}
          >
            <Menu />
            {children}
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}

export default RootLayout;
