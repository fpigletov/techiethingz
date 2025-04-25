"use client";

import "./article-detail.css";
import articles from "@/articles";
import { findArticleBySlug, generateSlug } from "@/utils";
import { useParams } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useState, useRef } from "react";
import Footer from "@/components/Footer/Footer";
import { ReactLenis } from "lenis/react";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = findArticleBySlug(articles, slug);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useTransitionRouter();

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

    router.push(path, {
      onTransitionReady: slideInOut,
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>Article not found</h1>
        <div className="back-link" onClick={() => navigateTo("/editorial")}>
          Back to Editorial
        </div>
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
      <div className="article-detail-page">
        <div className="article-banner">
          <img
            src={`/product_images/${article.bannerImg}`}
            alt={article.title}
            className="article-banner-img"
          />
        </div>
        <p className="article-title">{article.title}</p>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArticleDetail;
