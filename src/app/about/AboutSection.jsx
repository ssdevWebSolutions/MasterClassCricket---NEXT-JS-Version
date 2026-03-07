"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../assets/css/AboutSection.module.css";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fadeElements = entry.target.querySelectorAll(
            `.${styles.fadeIn}`,
          );
          fadeElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add(styles.animated);
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.aboutSection} id="About" ref={sectionRef}>
      {/* Background animation */}
      <div className={`${styles.cricketBall} ${styles.ball1}`}></div>
      <div className={`${styles.cricketBall} ${styles.ball2}`}></div>

      <div className={styles.aboutContainer}>
        {/* Top section with image on right, content on left */}
        <div className={styles.topSection}>
          <div className={`${styles.aboutImage} ${styles.fadeIn}`}>
            <Image
              src="/AboutBackground.png"
              alt="Masterclass Cricket Coaches"
              width={600}
              height={400}
              className={styles.aboutImg}
              priority
            />
          </div>
          <div className={styles.aboutContent}>
            <h1 className={`${styles.fadeIn} ${styles.aboutHeader}`}>
              Masterclass Cricket – The Ultimate Coaching Experience
            </h1>

            <h2 className={`${styles.fadeIn} ${styles.delay1}`}>
              What We Specialise In
            </h2>
            <p className={`${styles.fadeIn} ${styles.delay2}`}>
              At Masterclass Cricket, we combine advanced biomechanics with
              professional playing experience to develop elite cricketers. Our
              unique "linking" method ensures players not only understand
              technique but feel the difference in their batting, fast bowling,
              and spin bowling performance.
            </p>
            <p className={`${styles.fadeIn} ${styles.delay2}`}>
              We pride ourselves on identifying technical adjustments and
              designing innovative drills to accelerate improvement.
            </p>

            <h2 className={`${styles.fadeIn} ${styles.delay3}`}>
              A Complete Player Development System
            </h2>
            <p className={`${styles.fadeIn} ${styles.delay3}`}>
              For over 10 years, Masterclass Cricket has been a trusted coaching
              brand, attracting players from around the world. Our reputation
              for elite coaching and international success speaks for itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
