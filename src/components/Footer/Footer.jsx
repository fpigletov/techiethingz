"use client";
import "./Footer.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [laTime, setLaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "America/Los_Angeles",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const timeString = formatter.format(new Date());
      setLaTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer">
      <div className="footer-col">
        <p>&copy;2025 All right reserved</p>
      </div>
      <div className="footer-col">
        <div className="footer-clock">
          <p>Los Angeles, {laTime}</p>
        </div>
        <div className="footer-author">
          <p>
            Made by
            <a href="https://www.fpigletov.com/works">fpigletov</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
