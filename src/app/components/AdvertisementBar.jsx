'use client';
import React from 'react';
import styles from '../assets/css/AdvertisementBar.module.css';
import Link from 'next/link';

const AdvertisementBar = () => {
  const updates = [
    { text: '🏏 New Training Camp – Book Now', link: '/events/training-camp' },
    { text: '🔥 Early Bird Offer for December Coaching', link: '/events/december-coaching' },
    { text: '💪 Player Performance Dashboard Updated', link: '/dashboard/player' },
    { text: '⚡ Limited Slots Available – Join the Masterclass!', link: '/bookings' },
  ];

  // Duplicate items for seamless scroll
  const scrollingItems = [...updates, ...updates];

  return (
    <div className={styles.adBar}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {scrollingItems.map((item, index) => (
            <Link href={item.link} key={index} className={styles.item}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBar;
