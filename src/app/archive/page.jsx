"use client";

import "./archive.css";
import products from "@/products";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ReactLenis, useLenis } from "lenis/react";

import Footer from "@/components/Footer/Footer";

const page = () => {
  const lenis = useLenis(({ scroll }) => {});
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".archive-header .revealer p", {
      y: "100%",
    });

    gsap.set(".archive-item .revealer p", {
      y: "100%",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        delay: 0.85,
      },
    });

    tl.to(".archive-header .revealer p", {
      y: "0%",
      duration: 0.75,
    });

    const archiveItems = containerRef.current.querySelectorAll(".archive-item");

    const rowTimeline = gsap.timeline({
      delay: 0.95,
    });

    archiveItems.forEach((item, index) => {
      const pTags = item.querySelectorAll(".revealer p");

      rowTimeline.to(
        pTags,
        {
          y: "0%",
          duration: 0.75,
          ease: "power3.out",
        },
        index * 0.05
      );
    });
  }, [containerRef]);

  return (
    <>
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
      ></ReactLenis>
      <div className="p-25"></div>
      <div className="archive-page" ref={containerRef}>
        <div className="archive">
          <div className="archive-header">
            <div className="archive-header-name">
              <div className="revealer">
                <p>Product Name</p>
              </div>
            </div>
            <div className="archive-header-designer">
              <div className="revealer">
                <p>Designer</p>
              </div>
            </div>
            <div className="archive-header-year">
              <div className="revealer">
                <p>Year</p>
              </div>
            </div>
          </div>
          <div className="archive-items">
            {[...Array(2)].flatMap((_, repetition) =>
              products.map((product) => {
                const productYear = new Date(product.date).getFullYear();

                return (
                  <div
                    className="archive-item"
                    key={`${repetition}-${product.id}`}
                  >
                    <div className="archive-item-name">
                      <div className="revealer">
                        <p>{product.name}</p>
                      </div>
                    </div>
                    <div className="archive-item-designer">
                      <div className="revealer">
                        <p>{product.designer}</p>
                      </div>
                    </div>
                    <div className="archive-item-year">
                      <div className="revealer">
                        <p>{productYear}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="archive-empty-col"></div>
      </div>
      <div className="p-25"></div>
      <div className="footer-wrapper">
        <Footer />
      </div>
      <ReactLenis />
    </>
  );
};

export default page;
