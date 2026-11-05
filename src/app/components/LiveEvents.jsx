"use client";
import React from "react";
import styles from "../assets/css/LiveEvents.module.css";

const LiveEvents = () => {
  const events = [
    {
      id: 1,
      title: "10-Week Coaching Programme",
      image: "/events/OCT_Camp_Format.jpg", // Update with your actual image path
      alt: "Oct Camp",
      // bookingUrl: 'https://masterclass-cricket.classforkids.io' // Update with actual booking link
    },
    {
      id: 2,
      title: "Girls Monday Camp",
      image: "/events/Girls_monday_camp-format.jpg", // Update with your actual image path
      alt: "Girls Monday Camp",
      // bookingUrl: 'https://masterclass-cricket.classforkids.io' // Update with actual booking link
    },
  ];

  // const handleBookNow = (url) => {
  //   window.location.href = url;
  // };

  const handleBookNow = () => {
    const phoneNumber = "447961692226"; // UK country code + number without +
    const message = encodeURIComponent(
      "Hi, I would like to book the Summer Cricket Camp.",
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className={styles.liveEventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Live Events</h2>
          <p className={styles.subtitle}>
            Book your spot now - Limited availability!
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={event.image}
                  alt={event.alt}
                  className={styles.eventImage}
                />
              </div>
              <button
                className={styles.bookButton}
                onClick={() => handleBookNow()}
                // aria-label={`Book now for ${event.title}`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveEvents;
