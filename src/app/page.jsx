"use client";
import "./index.css";
import { useRef, useState } from "react";

import useCartStore from "@/store/useCartStore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { useTransitionRouter } from "next-view-transitions";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", ".15, 1, .25, 1");

export default function Home() {
  const router = useTransitionRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const container = useRef(null);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const navigateTo = (path) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (isCartOpen) {
      setTimeout(() => {
        router.push(path, {
          onTransitionReady: slideInOut,
        });
      }, 500);
    } else {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to("h1 span", {
        y: "0%",
        ease: "hop",
        duration: 1.5,
        stagger: 0.1,
        delay: 1,
      });

      tl.to(
        ".product-preview",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "hop",
          duration: 1.5,
          stagger: 0.3,
        },
        "<"
      );
    },
    { scope: container }
  );

  return (
    <div className="home-page" ref={container}>
      <div className="home-page-content">
        <div className="header">
          <h1 className="header-line-1">
            <span>Format</span>
          </h1>
          <h1 className="header-line-2">
            <span>Archive</span>
          </h1>
        </div>

        <div className="home-page-footer">
          <div className="hp-footer-col"></div>
          <div className="hp-footer-col">
            <div
              className="product-preview"
              onClick={() => navigateTo(`/catalogue/mirror-orb-mockup`)}
            >
              <img src="/product_images/product_001.jpeg" alt="" />
            </div>
            <div
              className="product-preview"
              onClick={() => navigateTo(`/catalogue/earbud-ad-mockup`)}
            >
              <img src="/product_images/product_002.jpeg" alt="" />
            </div>
            <div
              className="product-preview"
              onClick={() => navigateTo(`/catalogue/minimal-phone-mockup`)}
            >
              <img src="/product_images/product_003.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
