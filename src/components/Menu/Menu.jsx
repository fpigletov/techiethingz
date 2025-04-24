"use client";
import "./Menu.css";

import { useRef, useState } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

const Menu = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useTransitionRouter();

  const menuRef = useRef(null);
  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);

  const navLogoRef = useRef(null);
  const menuBtnRef = useRef(null);
  const cartBtnRef = useRef(null);

  const overlayLogoRef = useRef(null);
  const closeBtnRef = useRef(null);

  const menuItemsRef = useRef(null);
  const menuFooterColsRef = useRef(null);

  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", ".15, 1, .25, 1");

  useGSAP(
    () => {
      gsap.set(menuOverlayRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        pointerEvents: "none",
      });

      gsap.set([overlayLogoRef.current, closeBtnRef.current], {
        y: "100%",
      });

      gsap.set(".menu-overlay-items .revealer a", {
        y: "100%",
      });

      gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
        y: "100%",
      });
    },
    { scope: menuRef }
  );

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

    closeMenu();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 750);
  };

  const openMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.to([navLogoRef.current, menuBtnRef.current, cartBtnRef.current], {
      y: "-100%",
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      onComplete: () => {
        navRef.current.style.pointerEvents = "none";

        gsap.set([navLogoRef.current, menuBtnRef.current, cartBtnRef.current], {
          y: "100%",
        });
      },
    });

    tl.to(
      menuOverlayRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "hop",
        onStart: () => {
          menuOverlayRef.current.style.pointerEvents = "all";
        },
      },
      "-=0.55"
    );

    tl.to(
      [overlayLogoRef.current, closeBtnRef.current],
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(
      ".menu-overlay-items .revealer a",
      {
        y: "0%",
        duration: 1,
        stagger: 0.075,
        ease: "power3.out",
      },
      "<"
    );

    tl.to(
      ".menu-footer .revealer p, .menu-footer .revealer a",
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "<"
    );
  };

  const closeMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.to([overlayLogoRef.current, closeBtnRef.current], {
      y: "-100%",
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    });

    tl.to(
      ".menu-overlay-items .revealer a",
      {
        y: "-100%",
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.in",
      },
      "<"
    );

    tl.to(
      ".menu-footer .revealer p, .menu-footer .revealer a",
      {
        y: "-100%",
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.in",
      },
      "<"
    );

    tl.to(
      menuOverlayRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "hop",
        onComplete: () => {
          menuOverlayRef.current.style.pointerEvents = "none";

          gsap.set(menuOverlayRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set([overlayLogoRef.current, closeBtnRef.current], {
            y: "100%",
          });

          gsap.set(".menu-overlay-items .revealer a", {
            y: "100%",
          });

          gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
            y: "100%",
          });
        },
      },
      "+=0.25"
    );

    tl.to(
      [navLogoRef.current, menuBtnRef.current, cartBtnRef.current],
      {
        y: "0%",
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        onStart: () => {
          navRef.current.style.pointerEvents = "all";
        },
      },
      "-=0.35"
    );
  };

  return (
    <div className="menu" ref={menuRef}>
      <div className="nav" ref={navRef}>
        <div className="nav-logo">
          <div className="revealer">
            <a
              href="/"
              ref={navLogoRef}
              onClick={(e) => {
                e.preventDefault();
                router.push("/", {
                  onTransitionReady: slideInOut,
                });
              }}
            >
              Format Archive
            </a>
          </div>
        </div>

        <div className="nav-items">
          <div className="nav-menu-toggle-open">
            <div className="revealer" onClick={openMenu}>
              <p ref={menuBtnRef}>Menu</p>
            </div>
          </div>

          <div className="nav-cart-btn">
            <div className="revealer">
              <p ref={cartBtnRef}>
                Cart (<span id="cart-count">0</span>)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-overlay-nav">
          <div className="menu-overlay-nav-logo">
            <div className="revealer">
              <a
                href="/"
                ref={overlayLogoRef}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/");
                }}
              >
                Format Archive
              </a>
            </div>
          </div>

          <div className="menu-overlay-nav-toggle-close">
            <div className="revealer" onClick={closeMenu}>
              <p ref={closeBtnRef}>Close</p>
            </div>
          </div>
        </div>

        <div className="menu-overlay-items" ref={menuItemsRef}>
          <div className="revealer">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
            >
              Index
            </a>
          </div>

          <div className="revealer">
            <a
              href="/catalogue"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/catalogue");
              }}
            >
              Catalogue
            </a>
          </div>

          <div className="revealer">
            <a
              href="/info"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/info");
              }}
            >
              Info
            </a>
          </div>

          <div className="revealer">
            <a
              href="/archive"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/archive");
              }}
            >
              Archive
            </a>
          </div>

          <div className="revealer">
            <a
              href="/editorial"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/editorial");
              }}
            >
              Editorial
            </a>
          </div>
        </div>

        <div className="menu-footer" ref={menuFooterColsRef}>
          <div className="menu-footer-col">
            <div className="revealer">
              <p>&copy;2025 All rights reserved</p>
            </div>
          </div>

          <div className="menu-footer-col">
            <div className="socials">
              <div className="revealer">
                <a href="https://www.youtube.com/@codegrid">Meta</a>
              </div>
              <div className="revealer">
                <a href="https://www.youtube.com/@codegrid">Instagram</a>
              </div>
              <div className="revealer">
                <a href="https://www.youtube.com/@codegrid">X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
