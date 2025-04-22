"use client";

import "./catalogue.css";
import products from "@/products";

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
    <ReactLenis root>
      <div className="catalogue-page" ref={containerRef}>
        <div className="scroll-padding"></div>
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
                    <div className="product-card" key={product.id}>
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
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="scroll-padding"></div>
      </div>
    </ReactLenis>
  );
};

export default Page;
