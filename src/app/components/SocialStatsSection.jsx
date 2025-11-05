'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/css/SocialStatsSection.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialStatsSection = () => {
  const [counters, setCounters] = useState({
    instagram: 0,
    facebook: 0,
    tiktok: 0,
    linkedin: 0,
    youtube: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    instagram: { value: 80, suffix: 'K+' },
    facebook: { value: 22, suffix: 'K+' },
    tiktok: { value: 21, suffix: 'K+' },
    linkedin: { value: 150, suffix: '+' },
    youtube: { value: 500, suffix: '+' }
  };

  // Format numbers with suffix
  const formatNumber = (num, suffix) => {
    return Math.floor(num) + suffix;
  };

  // Counter animation function
  const animateCounter = (key, target) => {
    const duration = 2000; // 2 seconds
    const increment = target.value / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target.value) {
        current = target.value;
        clearInterval(timer);
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: current
      }));
    }, 16);
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Start counter animations with delays
          Object.keys(targetValues).forEach((key, index) => {
            setTimeout(() => {
              animateCounter(key, targetValues[key]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className={styles.socialStatsSection} ref={sectionRef} id="masterclasscommunity">
      {/* Cricket-themed background elements */}
      <div className={styles.cricketFieldPattern}></div>
      <div className={styles.cricketElement1}></div>
      <div className={styles.cricketElement2}></div>
      <div className={styles.cricketElement3}></div>
      <div className={styles.cricketElement4}></div>
      <div className={styles.cricketPitch}></div>

      <div className={styles.socialStatsContainer}>
        <h2 className={styles.socialStatsTitle}>MasterClass Community</h2>
        <p className={styles.socialStatsSubtitle}>
          No matter whether your a coach, parent, student or cricket enthusiast. Our videos are game changing in giving you vital information in a way that's not been done before
        </p>

        <div className={styles.socialStatsGrid}>
          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/masterclasscricket" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.socialStatCard} ${styles.instagramCard}`}
          >
            <div className={styles.socialStatIconWrapper}>
              <i className={`fab fa-instagram ${styles.socialStatIcon}`}></i>
            </div>
            <div className={styles.socialStatNumber}>
              {formatNumber(counters.instagram, targetValues.instagram.suffix)}
            </div>
            <div className={styles.socialStatLabel}>Instagram</div>
          </a>

          {/* Facebook Card */}
          <a 
            href="https://www.facebook.com/masterclasscricket" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.socialStatCard} ${styles.facebookCard}`}
          >
            <div className={styles.socialStatIconWrapper}>
              <i className={`fab fa-facebook-f ${styles.socialStatIcon}`}></i>
            </div>
            <div className={styles.socialStatNumber}>
              {formatNumber(counters.facebook, targetValues.facebook.suffix)}
            </div>
            <div className={styles.socialStatLabel}>Facebook</div>
          </a>

          {/* TikTok Card */}
          <a 
            href="https://www.tiktok.com/@masterclasscricket?_t=ZN-8uo9sqlW9hO&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.socialStatCard} ${styles.tiktokCard}`}
          >
            <div className={`${styles.socialStatIconWrapper} ${styles.tiktokIcon}`}>
              <i className="fab fa-tiktok"></i>
            </div>
            <div className={styles.socialStatNumber}>
              {formatNumber(counters.tiktok, targetValues.tiktok.suffix)}
            </div>
            <div className={styles.socialStatLabel}>Tiktok</div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/uzi-arif-946674203/?originalSubdomain=uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.socialStatCard} ${styles.twitterCard}`}
          >
            <div className={styles.socialStatIconWrapper}>
              <i className={`fab fa-linkedin ${styles.socialStatIcon}`}></i>
            </div>
            <div className={styles.socialStatNumber}>
              {formatNumber(counters.linkedin, targetValues.linkedin.suffix)}
            </div>
            <div className={styles.socialStatLabel}>Linkedin</div>
          </a>

          {/* YouTube Card */}
          <a 
            href="https://youtube.com/@masterclasscricketcoaching.?si=Ovy--9xFpdpV6dlu" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.socialStatCard} ${styles.youtubeCard}`}
          >
            <div className={styles.socialStatIconWrapper}>
              <i className={`fab fa-youtube ${styles.socialStatIcon}`}></i>
            </div>
            <div className={styles.socialStatNumber}>
              {formatNumber(counters.youtube, targetValues.youtube.suffix)}
            </div>
            <div className={styles.socialStatLabel}>YouTube</div>
          </a>
        </div>

        <div className={styles.socialCta}>
          <a href="#follow-all" className={styles.socialCtaButton}>
            Follow Us & Grow With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialStatsSection;