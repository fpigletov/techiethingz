"use client";

import "./product-detail.css";
import products from "@/products";
import { findProductBySlug } from "@/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

import { ReactLenis, useLenis } from "lenis/react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = findProductBySlug(products, slug);

  const lenis = useLenis(({ scroll }) => {});

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product not found</h1>
        <Link href="/catalogue">Back to Catalogue</Link>
      </div>
    );
  }

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
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-detail-col product-detail-copy">
            <div className="info-row">
              <div className="info-item">
                <div className="revealer">
                  <p>ID</p>
                </div>
                <div className="revealer">
                  <p>{product.id}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="revealer">
                  <p>Designer</p>
                </div>
                <div className="revealer">
                  <p>{product.designer}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="revealer">
                  <p>Date</p>
                </div>
                <div className="revealer">
                  <p>{product.date}</p>
                </div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-item">
                <div className="revealer">
                  <p>Name</p>
                </div>
                <div className="revealer">
                  <p>{product.name}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="revealer">
                  <p>Compatibility</p>
                </div>
                <div className="info-item-row">
                  {product.compatibility.map((item, index) => (
                    <div className="revealer" key={index}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-item">
                <div className="revealer">
                  <p>File Type</p>
                </div>
                <div className="revealer">
                  <p>{product.fileType}</p>
                </div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-item">
                <div className="revealer">
                  <p>Price</p>
                </div>
                <div className="revealer">
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="revealer">
                  <p>Info</p>
                </div>
                <p>{product.description.bodyCopy1}</p>
              </div>
              <div className="info-item"></div>
            </div>
          </div>
          <div className="product-detail-col product-detail-images">
            {product.productImages.map((image, index) => (
              <div
                className={`product-detail-img product-detail-img-${index + 1}`}
                key={index}
              >
                <img src={`/product_images/${image}`} alt={product.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-padding-bottom"></div>
      </div>
    </ReactLenis>
  );
};

export default ProductDetail;
