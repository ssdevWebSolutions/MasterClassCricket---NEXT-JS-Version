'use client';
import styles from '../assets/css/ServiceLayout.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceLayout({ title, subtitle, description, image, expectations }) {
  return (
    <div className={styles.serviceContainer}>
      {/* ======= HEADER ======= */}
      <header className={styles.topNav}>
        <div>
          <Link href="/" className={styles.navLink}>Home</Link>
        </div>
        <div>
          <Link href="https://masterclassbookings-rt5n.vercel.app/" className={styles.navLink}>
            Booking
          </Link>
        </div>
      </header>

      {/* ======= TITLE + SUBTITLE ======= */}
      <section className={styles.serviceHeader}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>

      {/* ======= HERO IMAGE + CTA ======= */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={image}
            alt={title}
            width={900}
            height={500}
            className={styles.heroImage}
          />
        </div>
        <a
          href="https://masterclassbookings-rt5n.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          Book a Session
        </a>
      </section>

      {/* ======= ABOUT SECTION ======= */}
      <section className={styles.aboutSection}>
        <h2>About {title}</h2>
        <p>{description}</p>
      </section>

      {/* ======= EXPECTATIONS ======= */}
      {expectations && expectations.length > 0 && (
        <section className={styles.expectSection}>
          <h2>What You Can Expect</h2>
          <div className={styles.expectGrid}>
            {expectations.map((item, index) => (
              <div key={index} className={styles.expectCard}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={160}
                  className={styles.expectImg}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ======= CTA SECTION ======= */}
      <section className={styles.readySection}>
        <h2>Ready to Get Started?</h2>
        <Link href="/contact" className={styles.contactBtn}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
