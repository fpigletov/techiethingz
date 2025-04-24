"use client";

import "./catalogue.css";
import products from "@/products";
import { generateSlug } from "@/utils";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ReactLenis, useLenis } from "lenis/react";

const Page = () => {
  const containerRef = useRef(null);

  const lenis = useLenis(({ scroll }) => {});

  const productDistribution = [
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
  ];

  const getProductLayout = () => {
    let productIndex = 0;
    const layout = [];

    for (let rowIndex = 0; rowIndex < productDistribution.length; rowIndex++) {
      const rowLayout = [[], [], [], []];

      for (let colIndex = 0; colIndex < 4; colIndex++) {
        const productCount = productDistribution[rowIndex][colIndex];

        for (let i = 0; i < productCount; i++) {
          if (productIndex < products.length) {
            rowLayout[colIndex].push(products[productIndex]);
            productIndex++;
          }
        }
      }

      layout.push(rowLayout);
    }

    return layout;
  };

  const productLayout = getProductLayout();

  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".row");

      gsap.fromTo(
        rows,
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.5,
        }
      );
    },
    { scope: containerRef }
  );

  return (
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
      <div className="catalogue-page" ref={containerRef}>
        <div className="scroll-padding-top"></div>
        <div className="products">
          {productLayout.map((row, rowIndex) => (
            <div className="row" key={`row-${rowIndex}`}>
              {row.map((column, colIndex) => (
                <div
                  className={`column ${
                    column.length === 0 ? "empty-column" : ""
                  }`}
                  key={`col-${rowIndex}-${colIndex}`}
                >
                  {column.map((product) => (
                    <Link
                      href={`/catalogue/${generateSlug(product.name)}`}
                      key={product.id}
                      className="product-link"
                    >
                      <div className="product-card">
                        <div className="product-card-image">
                          <img
                            src={`/product_images/${product.previewImg}`}
                            alt={product.name}
                            className="product-card-img"
                          />
                        </div>
                        <div className="product-info">
                          <p className="product-card-name">{product.name}</p>
                          <p className="product-card-price">
                            USD {product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="scroll-padding-bottom"></div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Page;
