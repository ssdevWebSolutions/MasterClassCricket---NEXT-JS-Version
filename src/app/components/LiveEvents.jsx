'use client'
import React from 'react';
import styles from '../assets/css/LiveEvents.module.css';

const LiveEvents = () => {
  const events = [
    {
      id: 1,
      title: '10-Week Coaching Programme',
      image: '/Easter Half Term V1.jpg', // Update with your actual image path
      alt: '10-Week Cricket Coaching Programme for ages 7-13',
      bookingUrl: 'https://masterclass-cricket.classforkids.io' // Update with actual booking link
    },
    // {
    //   id: 2,
    //   title: 'Elite Cricket Academy 2026',
    //   image: '/EliteCricketCoaching.png', // Update with your actual image path
    //   alt: '2026 Masterclass Elite Cricket Academy',
    //   bookingUrl: 'https://masterclass-cricket.classforkids.io' // Update with actual booking link
    // }
  ];

  const handleBookNow = (url) => {
    window.location.href = url;
  };

  return (
    <section className={styles.liveEventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Live Events</h2>
          <p className={styles.subtitle}>Book your spot now - Limited availability!</p>
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
                onClick={() => handleBookNow(event.bookingUrl)}
                aria-label={`Book now for ${event.title}`}
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