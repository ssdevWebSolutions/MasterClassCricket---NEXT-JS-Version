'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/css/Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Column 1: About */}
          <div className={styles.column}>
            <Link href="/" className={styles.logoLink}>
              <Image 
                src="/logo_.ico" 
                alt="Masterclass Cricket Logo" 
                width={120}
                height={60}
                className={styles.logo}
              />
            </Link>
            <p className={styles.aboutText}>
              There's a reason Masterclass Cricket has gone from strength to strength over the past 10 years—we are committed to coaching excellence. Once students get a taste of our training, they keep coming back for more.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.facebook.com/masterclasscricket" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/masterclasscricket" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@masterclasscricket?_t=ZN-8uo9sqlW9hO&_r=1" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/uzi-arif-946674203/?originalSubdomain=uk" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://youtube.com/@masterclasscricketcoaching.?si=Ovy--9xFpdpV6dlu" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>Home</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/about" className={styles.link}>About Us</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/coach" className={styles.link}>Meet The Owner</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/testimonials" className={styles.link}>Testimonials</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact" className={styles.link}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Riverside Dr, Chiswick, London W4 2SH</span>
              </li>
              <li className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <span>+447961 692226</span>
              </li>
              <li className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>info@masterclasscricket.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe YouTube */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Subscribe YouTube</h4>
            <div className={styles.youtubeSubscribe}>
              <p className={styles.subscribeText}>
                Our content drops on YouTube first, including both long-form and short-form videos. Subscribe and turn on notifications to stay ahead and access exclusive behind-the-scenes content and podcasts. Don't miss out!
              </p>
              <a 
                href="https://youtube.com/@masterclasscricketcoaching.?si=Ovy--9xFpdpV6dlu" 
                className={styles.subscribeButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.copyright}>
          <p>
            &copy; 2025. All Rights Reserved. Built with 🤍 by
            <span className={styles.developer}> "SSDEV.TECH"</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;