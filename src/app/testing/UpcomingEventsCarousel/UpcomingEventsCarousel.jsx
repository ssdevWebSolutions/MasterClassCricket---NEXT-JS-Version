'use client'
import { useRef } from "react";
import styles from "./UpcomingEventsCarousel.module.css";

const events = [
  {
    title: "Masterclass: Power Hitting",
    date: "12 Dec 2025 · Hyderabad",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
    link: "/events/cricket-workshop-1",
  },
  {
    title: "3-Day Coaching Camp",
    date: "20 Dec 2025 · Mumbai",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400&auto=format&fit=crop",
    link: "/events/coaching-camp-2",
  },
  {
    title: "City T20 Tournament",
    date: "05 Jan 2026 · Chennai",
    img: "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?q=80&w=1400&auto=format&fit=crop",
    link: "/events/tournament-3",
  },
];

export default function UpcomingEventsCarousel() {
  const carouselRef = useRef(null);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Upcoming Events</h1>
          <p className={styles.lead}>Premium series. Tap a flyer to view details.</p>
          <div className={styles.underline} />
        </div>
      </div>

      <div className={styles.viewport}>
        <div className={styles.carousel} ref={carouselRef}>
          {events.map((e, idx) => (
            <div className={styles.card} key={idx}>
              <a href={e.link} className={styles.cardLink}>
                <div
                  className={styles.flyer}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(212,175,55,0.06), rgba(0,0,0,0.2)), url(${e.img})`,
                  }}
                ></div>

                <div className={styles.cardInfo}>
                  <h3 className={styles.eventTitle}>{e.title}</h3>
                  <div className={styles.meta}>{e.date}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}