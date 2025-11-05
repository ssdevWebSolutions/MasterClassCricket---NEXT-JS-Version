'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../assets/css/PartnersSection.module.css';

const PartnersSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementsToAnimate = entry.target.querySelectorAll(
              `.${styles.partnershipSubtitle}, .${styles.partnershipTitle}, .${styles.partnershipTitleBackground}, .${styles.partnershipDescription}, .${styles.partnerCard}, .${styles.viewAllPartners}`
            );
            
            elementsToAnimate.forEach((element) => {
              element.classList.add(styles.visible);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

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
    <>
      <section className={styles.partnershipEliteSection} id="partners" ref={sectionRef}>
        {/* Cricket Decorative Elements */}
        <div className={`${styles.cricketElement} ${styles.cricketBall}`}></div>
        <div className={`${styles.cricketElement} ${styles.cricketBat}`}></div>
        <div className={styles.partnershipTrophy}></div>

        <div className={styles.partnershipHeadingContainer}>
          <p className={styles.partnershipSubtitle}>Our Cricket Partnerships</p>
          <div className={styles.partnershipTitleBackground}>Elite Sponsorships</div>
          <h2 className={styles.partnershipTitle}>
            Our <span className={styles.partnershipTitleHighlight}>Trusted</span> Cricket Partners
          </h2>
          <p className={styles.partnershipDescription}>
            At <strong>Masterclass Cricket</strong> Academy, we believe in building strong partnerships with local businesses and organisations
            that share our vision for growth, excellence, and community impact. We collaborate with industry-leading brands that
            add value to our students&apos; development, providing them with access to top-tier training equipment, world-class
            facilities, and unique opportunities.
            
            We&apos;re always looking to form meaningful relationships with businesses that align with our values. If you&apos;re a brand
            that wants to partner with Masterclass Cricket and be part of our journey, we&apos;d love to hear from you.
            
            Get in touch today and let&apos;s create something special together!
          </p>
        </div>

        <div className={styles.partnersEliteContainer}>
          <Link href="https://www.ssdev.tech/" target="_blank" className={styles.partnerLink}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerRing}></div>
              <Image 
                className={styles.partnerLogo} 
                src="/ssdev logoPng 2.png" 
                alt="SS Dev Cricket Equipment - Gold Partner"
                width={200}
                height={150}
              />
              {/* <div className={styles.partnerLevel}>Gold Partner</div> */}
            </div>
          </Link>
          
          
           
         
          
          <div className={styles.partnerCard}>
            <div className={styles.partnerRing}></div>
            <Image 
              className={styles.partnerLogo} 
              src="/MREPartner.png" 
              alt="Cricket Gear Sponsor - Gold Partner"
              width={200}
              height={150}
            />
            {/* <div className={styles.partnerLevel}>Gold Partner</div> */}
          </div>
          
          <div className={styles.partnerCard}>
            <div className={styles.partnerRing}></div>
            <Image 
              className={styles.partnerLogo} 
              src="/comingsoon.jpg" 
              alt="Cricket Training Sponsor - Silver Partner"
              width={200}
              height={150}
            />
            {/* <div className={styles.partnerLevel}>Silver Partner</div> */}
          </div>
        </div>

        {/* <Link href="/our-partners" className={styles.viewAllPartners}>View All Cricket Partners</Link> */}
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Masterclass Cricket Academy",
            "url": "https://yourwebsite.com",
            "sponsor": [
              {
                "@type": "Organization",
                "name": "SS Dev Cricket Equipment",
                "url": "https://ssdevcricket.com",
                "description": "Gold partner providing premium cricket equipment."
              },
              {
                "@type": "Organization",
                "name": "Platinum Cricket Sponsor",
                "description": "Elite sponsor supporting cricket training and facilities."
              }
            ]
          })
        }}
      />
    </>
  );
};

export default PartnersSection;