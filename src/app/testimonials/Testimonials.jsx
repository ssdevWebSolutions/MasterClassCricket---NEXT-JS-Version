"use client";
import { useRef } from "react";
import styles from "../assets/css/Testimonials.module.css";

const Testimonials = () => {
  const rowRefs = [useRef(null), useRef(null)];

  const cards = Array(8).fill({
    name: "Masterclass Cricket Academy",
    videoSrc: "/v2.mp4", // your video inside public/
  });

  const handleMouseEnter = (e, rowIndex) => {
    const video = e.currentTarget.querySelector("video");
    const row = rowRefs[rowIndex].current;
    if (video && row) {
      video.muted = false;
      video.play();
      row.classList.add(styles.paused); // ✅ stop row movement
      e.currentTarget.classList.add(styles.activeCard); // ✅ enlarge card
    }
  };

  const handleMouseLeave = (e, rowIndex) => {
    const video = e.currentTarget.querySelector("video");
    const row = rowRefs[rowIndex].current;
    if (video && row) {
      video.muted = true;
      video.pause();
      video.currentTime = 0; // reset
      row.classList.remove(styles.paused); // ✅ resume scroll
      e.currentTarget.classList.remove(styles.activeCard); // ✅ shrink back
    }
  };

  return (
    <section className={styles.hideScrollbars}>
      <section className={styles.videoTestimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <h2>🎥 Video Testimonials</h2>
          <p>
            Hover over a video to pause scrolling and hear real voices from
            Masterclass Cricket Academy.
          </p>
        </div>

        <div className={styles.videoRowsContainer}>
          {[...Array(2)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              ref={rowRefs[rowIndex]}
              className={styles.videoRow}
            >
              {cards.concat(cards).map((card, i) => (
                <div
                  key={i}
                  className={styles.videoCard}
                  onMouseEnter={(e) => handleMouseEnter(e, rowIndex)}
                  onMouseLeave={(e) => handleMouseLeave(e, rowIndex)}
                >
                  <video
                    className={styles.videoPlayer}
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className={styles.videoInfo}>
                    <h3>{card.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
