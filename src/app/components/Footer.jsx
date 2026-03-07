"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../assets/css/Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const servicesData = [
    {
      id: 1,
      name: "1-2-1 Coaching",
      description: "Tailored Training for Every Cricketer",
      link: "/services/one-on-one",
    },
    {
      id: 2,
      name: "Small Group Sessions",
      description: "Train with Peers, Excel Together",
      link: "/services/group-sessions",
    },
    {
      id: 3,
      name: "Masterclass Academy Sessions",
      description: "Structured Training for Age-Group Development",
      link: "/services/holiday-camps",
    },
    {
      id: 4,
      name: "Elite Performance Clinics",
      description: "For Cricketers Who Aspire to Be the Best",
      link: "/services/holiday-camps",
    },
    {
      id: 5,
      name: "Tours for Clubs and Members",
      description: "Experience Cricket in Different Conditions",
      link: "/services/holiday-camps",
    },
    {
      id: 6,
      name: "Corporate Team-Building Events",
      description: "Cricket as a Tool for Leadership & Teamwork",
      link: "/services/holiday-camps",
    },
    {
      id: 7,
      name: "Online Bowling Assessments",
      description: "Get Expert Feedback—Anytime, Anywhere",
      link: "/services/holiday-camps",
    },
    {
      id: 8,
      name: "School Coaching Programmes",
      description:
        "Bringing expert coaching to schools through teacher training and high-quality student masterclasses.",
      link: "/services/holiday-camps",
    },
    {
      id: 9,
      name: "Online Batting Assessments",
      description: "Analyse, Adjust, Improve",
      link: "/services/holiday-camps",
    },
    {
      id: 10,
      name: "Mental Mind Mapping Course",
      description: "Masterclass Mind Mapping",
      link: "/services/holiday-camps",
    },
  ];

  const [chatOpen, setChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => setSelectedService(service);
  const handleBackClick = () => setSelectedService(null);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447961692226"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Booking Chatbot Floating Button */}
      {/* Floating Chatbot Button */}
      {/* <button
        className={`${styles.chatbotButton} ${chatOpen ? styles.hide : ''}`}
        onClick={() => setChatOpen(true)}
      >
        💬
      </button> */}

      {/* Chatbot Window */}
      {chatOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Bookings Chatbot</span>
            <button
              onClick={() => setChatOpen(false)}
              className={styles.closeBtn}
            >
              ✖
            </button>
          </div>

          <div className={styles.chatBody}>
            {!selectedService ? (
              <>
                <p className={styles.botText}>
                  👋 Hello! What service would you like to know about?
                </p>
                <div className={styles.servicesList}>
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      className={styles.serviceBtn}
                      onClick={() => handleServiceClick(service)}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className={styles.botText}>
                  <strong>{selectedService.name}</strong>
                </p>
                <p className={styles.botText}>{selectedService.description}</p>
                <p className={styles.botText}>
                  👉 <a href={selectedService.link}>Click here</a> to learn
                  more.
                </p>
              </>
            )}
          </div>

          {/* Footer buttons */}
          <div className={styles.chatFooter}>
            {selectedService ? (
              <>
                <button onClick={handleBackClick} className={styles.footerBtn}>
                  ⬅ Back
                </button>
                <a href={selectedService.link} className={styles.footerBtn}>
                  📅 Book Now
                </a>
              </>
            ) : (
              <button className={styles.footerBtn}>❓ Any Queries?</button>
            )}
          </div>
        </div>
      )}

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
                There's a reason Masterclass Cricket has gone from strength to
                strength over the past 10 years—we are committed to coaching
                excellence. Once students get a taste of our training, they keep
                coming back for more.
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
                  <Link href="/" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/about" className={styles.link}>
                    About Us
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/coach" className={styles.link}>
                    Meet The Owner
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/testimonials" className={styles.link}>
                    Testimonials
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/contact" className={styles.link}>
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="/SafeguardingPolicy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.animatedLink} ${styles.link}`}
                  >
                    Safeguarding Policy
                    <span className={styles.arrow}>↑</span>
                  </a>
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
                  Our content drops on YouTube first, including both long-form
                  and short-form videos. Subscribe and turn on notifications to
                  stay ahead and access exclusive behind-the-scenes content and
                  podcasts. Don't miss out!
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
    </>
  );
};

export default Footer;
