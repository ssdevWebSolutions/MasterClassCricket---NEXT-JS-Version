"use client";

import styles from "./UpcomingEventsCarousel.module.css";


import Link from "next/link";

const events = [
  {
    slug: "new-years-eve-gala-match",
    day: "31",
    month: "DEC",
    title: "New Year's Eve Gala Match",
    dateFull: "31 Dec 2025",
    venue: "Academy Grounds",
    image: "/1-2-1-coaching.png",
  },
  {
    slug: "winter-training-camp-open-day",
    day: "05",
    month: "JAN",
    title: "Winter Training Camp Open Day",
    dateFull: "05 Jan 2026",
    venue: "Indoor Centre",
    image: "/1-2-1-coaching.png",
  },
  {
    slug: "charity-celebrity-match",
    day: "14",
    month: "JAN",
    title: "Charity Celebrity Match",
    dateFull: "14 Jan 2026",
    venue: "City Stadium",
    image: "/1-2-1-coaching.png",
  },
  {
    slug: "national-t20-cup-final",
    day: "12",
    month: "DEC",
    title: "National T20 Cup Final",
    dateFull: "12 Dec 2025",
    venue: "Lord's Cricket Ground",
    image: "/1-2-1-coaching.png",
  },
];

export default function UpcomingEventsCarousel() {
  const scrollingEvents = [...events, ...events];

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventCard}></div>
      <div className={styles.eventsHeader}>
        <span className={styles.eventsBadge}>Don't Miss Out</span>
        <h2 className={styles.eventsTitle}>
          Upcoming <span>Events</span>
        </h2>
      </div>

      <div className={styles.eventsRow}>
        <div className={styles.eventsTrack}>
          {scrollingEvents.map((event, index) => (
            <article key={index} className={styles.eventCard}>
              <div className={styles.eventImageWrapper}>
                <img src={event.image} alt={event.title} className={styles.eventImage} />
                <div className={styles.eventDateBadge}>
                  <span className={styles.eventDateDay}>{event.day}</span>
                  <span className={styles.eventDateMonth}>{event.month}</span>
                </div>
              </div>

              <div className={styles.eventBody}>
                <h3 className={styles.eventTitle}>{event.title}</h3>

                <div className={styles.eventMeta}>
                  <div className={styles.eventMetaItem}>
                    <span className={styles.eventMetaIcon}>📅</span>
                    <span>{event.dateFull}</span>
                  </div>
                  <div className={styles.eventMetaItem}>
                    <span className={styles.eventMetaIcon}>📍</span>
                    <span>{event.venue}</span>
                  </div>
                </div>

                <Link href={`/events/${event.slug}`} className={styles.eventBtn}>
                  Know More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
