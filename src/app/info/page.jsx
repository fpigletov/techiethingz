"use client";
import "./info.css";
import { useRef, useEffect } from "react";

import Footer from "@/components/Footer/Footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useLenis } from "lenis/react";

const InfoPage = () => {
  const containerRef = useRef(null);
  const descriptionRef = useRef(null);

  const lenis = useLenis(({ scroll }) => { });

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".info-wrapper .revealer p", {
      y: "100%",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        delay: 0.85,
      },
    });

    tl.to(".info-col:nth-child(1) .revealer p", {
      y: "0%",
      duration: 0.75,
      stagger: 0.1,
    });

    tl.to(
      ".info-col:nth-child(2) .revealer p",
      {
        y: "0%",
        duration: 0.75,
        stagger: 0.1,
      },
      "0"
    );

    if (descriptionRef.current) {
      const descriptionParagraphs =
        descriptionRef.current.querySelectorAll("p");

      descriptionParagraphs.forEach((paragraph) => {
        const splitDescription = new SplitType(paragraph, {
          types: "lines",
          lineClass: "line",
        });

        splitDescription.lines.forEach((line) => {
          const content = line.innerHTML;
          line.innerHTML = `<span>${content}</span>`;
        });
      });

      gsap.set("#info-description p .line span", {
        y: "100%",
        display: "block",
      });

      tl.to(
        "#info-description p .line span",
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.05,
        },
        "-=2.5"
      );
    }
  }, [containerRef, descriptionRef]);

  return (
    <div className="info-page" ref={containerRef}>
      <div className="info-bg">
        <img src="/general/bg.jpg" alt="Home Background" />
      </div>
      <div className="info-wrapper">
        <div className="info-col">
          <div className="info-item">
            <div className="info-title">
              <div className="revealer">
                <p>Info</p>
              </div>
            </div>
            <div
              className="info-copy"
              id="info-description"
              ref={descriptionRef}
            >
              <p>
                Welcome to the future of tech! At our gadget shop, we’re passionate about bringing you the latest innovations in smart devices, accessories, and cutting-edge tools that make life easier, faster, and a whole lot more fun. Whether you're looking for sleek wireless earbuds, powerful portable chargers, smart home assistants, or gaming gear, we've got you covered. Every product we stock is hand-picked for quality, performance, and design. Not sure what to choose? Our tech-savvy team is always ready to help you find the perfect match for your lifestyle or workspace. We believe technology should be accessible, exciting, and a little bit magical. That's why we focus on delivering top-notch service, fair prices, and gadgets you won't find everywhere. Stop by, plug in, and power up — your next favorite device is just a click away!
              </p>
              <p>
                Our tech gadget shop is your trusted destination for the latest and most reliable technology products. We specialize in curating a wide range of high-quality devices designed to enhance productivity, connectivity, and everyday convenience. From smartwatches and wireless chargers to ergonomic accessories and portable speakers, we offer modern solutions for tech enthusiasts and professionals alike. Every item in our inventory undergoes careful selection based on performance, durability, and user satisfaction. We also provide expert guidance to help you make informed purchasing decisions, whether you're upgrading your home office or shopping for a gift. Our commitment is rooted in quality, transparency, and customer care. With secure checkout, fast shipping, and ongoing support, we aim to build lasting relationships with our clients. Experience the confidence of shopping with a tech store that values innovation as much as reliability. Discover what’s next in technology — right here.
              </p>
            </div>
          </div>
        </div>
        <div className="info-col">
          <div className="info-item">
            <div className="info-title">
              <div className="revealer">
                <p>What You Get</p>
              </div>
            </div>
            <div className="info-copy">
              <div className="revealer">
                <p>Curated digital assets</p>
              </div>
              <div className="revealer">
                <p>Ready to use</p>
              </div>
              <div className="revealer">
                <p>No subscriptions</p>
              </div>
              <div className="revealer">
                <p>Pay once, own forever</p>
              </div>
            </div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <div className="revealer">
                <p>Contact</p>
              </div>
            </div>
            <div className="info-copy">
              <div className="revealer">
                <p>Creator Collaborations</p>
              </div>
              <div className="revealer">
                <p>studio@formatarchive.com</p>
              </div>
              <br />
              <div className="revealer">
                <p>Customer Support</p>
              </div>
              <div className="revealer">
                <p>support@formatarchive.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
