"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../assets/css/FoundersLetter.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FoundersLetter = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll(
            `.${styles.fadeIn}`,
          );
          animatedElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add(styles.animated);
            }, index * 150);
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
    <section
      className={styles.foundersLetterSection}
      id="Founder"
      ref={sectionRef}
    >
      {/* Cricket Background Elements */}
      <div className={styles.cricketBgElements}>
        <div className={`${styles.cricketBall} ${styles.cricketBall1}`}></div>
        <div className={`${styles.cricketBall} ${styles.cricketBall2}`}></div>
        <div className={styles.cricketStumps}></div>
        <div className={styles.cricketBat}></div>
        <div className={styles.cricketPattern}></div>
        <div
          className={`${styles.letterDecorativeElement} ${styles.letterDecorativeElement1}`}
        ></div>
        <div
          className={`${styles.letterDecorativeElement} ${styles.letterDecorativeElement2}`}
        ></div>
      </div>

      <div className={styles.foundersLetterContainer}>
        {/* Founder Image Column */}
        <div className={styles.founderImageColumn}>
          <div className={styles.founderImageWrap}>
            <div className={styles.founderImageContainer}>
              <Image
                src="/CoachUzi (1).jpg"
                alt="Club Founder - Uzi Arif"
                width={400}
                height={500}
                className={styles.founderImage}
                priority
              />
            </div>

            {/* Decorative cricket elements behind image */}
            <div className={styles.founderImageCricketElements}>
              <div
                className={`${styles.cricketElement} ${styles.cricketElementBat}`}
              ></div>
              <div
                className={`${styles.cricketElement} ${styles.cricketElementBall}`}
              ></div>
            </div>
          </div>

          <div className={styles.lettercoach}>
            <h2>
              "A Letter from the Head Coach & Founder Of Masterclass Cricket"
            </h2>
          </div>

          {/* Founder Info Card */}
          <div className={styles.founderInfoCard}>
            <h3 className={styles.founderName}>Uzi Arif</h3>

            <div className={styles.founderDetails}>
              <div className={styles.founderDetail}>
                <i className="fas fa-calendar-alt"></i>
                <p>Played Country Cricket For *OVER A DECADE (2008-2018)</p>
              </div>
              <div className={styles.founderDetail}>
                <i className="fas fa-trophy"></i>
                <p>Clocked 92.4mph & Nicknamed "The Rocketman"</p>
              </div>
              <div className={styles.founderDetail}>
                <i className="fas fa-graduation-cap"></i>
                <p>
                  Assistant Bowling Coach Bangladesh Premier League (Chattogram
                  Challengers)
                </p>
              </div>
              <div className={styles.founderDetail}>
                <i className="fas fa-users"></i>
                <p>Highest wickets in a game</p>
              </div>
              <div className={styles.founderDetail}>
                <i className="fas fa-building"></i>
                <p>11 Wickets for - 73 runs against Northamptonshire CCC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Letter Content Column */}
        <div className={styles.letterContentColumn}>
          <div className={styles.letterContentScroll}>
            <div className={styles.letterText}>
              <p>Dear Cricket Community,</p>

              <p>
                Hello and welcome to Masterclass Cricket! I'm Uzi Arif, the
                founder of this academy, and I'd like to share a bit about the
                journey that led me to create something truly special for
                cricketers.
              </p>

              <div className={styles.cricketQuote}>
                Cricket teaches us resilience, teamwork, and the delicate
                balance between personal achievement and collective success –
                values that extend far beyond the boundary rope.
              </div>

              <p>
                From a young age, cricket was my passion. Growing up in the
                north-west of London, I spent countless hours playing tape-ball
                cricket in the parks, watching the likes of Shoaib Akhtar and
                Waqar Younis bowl at lightning speed. That fuelled my dream to
                bowl fast and compete at the highest level.
              </p>

              <p>
                I played over 200 county games, had trials with multiple
                counties, and experienced the highs and lows of professional
                cricket. But despite the setbacks, rejection, and injuries, one
                thing never changed: my unwavering commitment to the game.
                Cricket taught me more than just how to bowl fast—it taught me
                resilience, mental strength, and the importance of never giving
                up, no matter the obstacles.
              </p>

              <p>
                That's why Masterclass Cricket isn't just about teaching
                cricket—it's about developing complete players who understand
                the game, both on and off the field. At Masterclass, we aim to
                create not only skillful cricketers but also strong individuals
                who are ready to face life's challenges head-on.
              </p>

              <p>
                We don't just focus on the technical side of the game; we
                believe in holistic development. We want our players to develop
                a strong mental game, emotional intelligence, and physical
                readiness, all while fostering an understanding of the lifestyle
                that leads to success.
              </p>

              <p>
                I've experienced the rollercoaster ride of professional cricket,
                and I know what it takes to reach the top. That's why I'm here,
                to give every cricketer the opportunity I never had: to train
                smarter, develop deeper, and play harder.
              </p>

              <div className={styles.missionVision}>
                <div className={styles.missionSection}>
                  <strong>OUR MISSION</strong>
                  <p>
                    To create well-rounded cricketers who excel in skill,
                    mindset, and resilience, both on and off the field. At
                    Masterclass Cricket, we aim to help our players unlock their
                    full potential and make lasting contributions to the game.
                  </p>
                </div>

                <div className={styles.visionSection}>
                  <strong>OUR VISION</strong>
                  <p>
                    To be a leading force in the cricketing world, empowering
                    the next generation of cricketers with innovative coaching,
                    tailored to each individual's journey. We focus on nurturing
                    players to be successful on the field and influential off
                    it, carrying the spirit of cricket wherever they go.
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersLetter;
