"use client";

import "./article-detail.css";
import articles from "@/articles";
import { findArticleBySlug, generateSlug } from "@/utils";
import { useParams } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = findArticleBySlug(articles, slug);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useTransitionRouter();

  const containerRef = useRef(null);
  const descriptionRefs = useRef([]);

  const lenis = useLenis(({ scroll }) => {});

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

  useGSAP(() => {
    if (!containerRef.current || !article) return;

    gsap.set(".article-meta .revealer p", {
      y: "100%",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        delay: 0.85,
      },
    });

    tl.to(".article-meta .revealer p", {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    });

    tl.fromTo(
      ".article-banner-img",
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=2"
    );

    descriptionRefs.current.forEach((ref, index) => {
      if (ref) {
        const splitDescription = new SplitType(ref, {
          types: "lines",
          lineClass: "line",
        });

        splitDescription.lines.forEach((line) => {
          const content = line.innerHTML;
          line.innerHTML = `<span>${content}</span>`;
        });

        gsap.set(`#article-paragraph-${index} .line span`, {
          y: "100%",
          display: "block",
        });

        tl.to(
          `#article-paragraph-${index} .line span`,
          {
            y: "0%",
            duration: 0.75,
            stagger: 0.05,
          },
          "-=1.5"
        );
      }
    });
  }, [article, containerRef]);

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
      <div className="article-detail-page" ref={containerRef}>
        <div className="article-content">
          <div className="article-detail-col">
            <div className="article-banner-img">
              <img
                src={`/product_images/${article.bannerImg}`}
                alt={article.title}
              />
            </div>

            <div className="article-copy">
              <p
                id="article-paragraph-0"
                ref={(el) => (descriptionRefs.current[0] = el)}
              >
                {article.bodyCopy[0]}
              </p>
            </div>

            <div className="article-copy">
              <p
                id="article-paragraph-1"
                ref={(el) => (descriptionRefs.current[1] = el)}
              >
                {article.bodyCopy[1]}
              </p>
            </div>

            <div className="article-copy">
              <p
                id="article-paragraph-2"
                ref={(el) => (descriptionRefs.current[2] = el)}
              >
                {article.bodyCopy[2]}
              </p>
            </div>
          </div>
          <div className="article-detail-col article-meta">
            <div className="article-date">
              <div className="revealer">
                <p>Date</p>
              </div>
              <div className="revealer">
                <p>{article.date}</p>
              </div>
            </div>
            <div className="article-title">
              <div className="revealer">
                <p>Article Name</p>
              </div>
              <div className="revealer">
                <p>{article.title}</p>
              </div>
            </div>

            <div className="article-author">
              <div className="revealer">
                <p>Author</p>
              </div>

              <div className="revealer">
                <p>By {article.author}</p>
              </div>
            </div>

            <div className="article-tags">
              <div className="revealer">
                <p>Tags</p>
              </div>

              <div className="tags">
                {article.tags.map((tag, index) => (
                  <div className="revealer" key={index}>
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArticleDetail;
