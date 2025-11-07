'use client';

import React, { useState, useEffect } from 'react';
import styles from '../assets/css/Popup.module.css';

const Popup = ({
  isVisible = true,
  onClose,
  showAfterDelay = true,
  delay = 3000,
  imageUrl = '/Half_Camp_Flyer.png', // ✅ Update this to your new flyer if needed
  imageAlt = '2026 Masterclass Elite Cricket Academy Flyer',
  bookingUrl = 'https://masterclass-cricket.classforkids.io/',
  buttonText = 'Learn More',
}) => {
  const [showPopup, setShowPopup] = useState(isVisible);
  const [isClosing, setIsClosing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Show popup after delay
  useEffect(() => {
    if (showAfterDelay && !isVisible) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [showAfterDelay, delay, isVisible]);

  useEffect(() => {
    setShowPopup(isVisible);
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
      if (onClose) onClose();
    }, 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showPopup) handleClose();
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  // Backdrop click to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!showPopup) return null;

  return (
    <div
      className={`${styles.popupOverlay} ${isClosing ? styles.hidden : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.popupBox}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
          ×
        </button>

        {/* Flyer Image */}
        <img src={imageUrl} alt={imageAlt} className={styles.popupImg} loading="lazy" />

        {/* Learn More Button */}
        <button className={styles.redirectBtn} onClick={() => setShowModal(true)}>
          {buttonText}
        </button>

        {/* ✅ Terms & Conditions Modal */}
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeModal} onClick={() => setShowModal(false)}>
                ✕
              </button>

              <h2>Terms and Conditions</h2>
              <div className={styles.termsBox}>
                <h3>Masterclass Elite Cricket Academy 2026</h3>
                <p>
                  The Masterclass Elite Cricket Academy is where the region’s most promising young
                  cricketers are tested, challenged and developed to reach professional standards.
                </p>
                <p>
                  Our coaching team, including <strong>Uzi Arif</strong> &{' '}
                  <strong>Fahim Qureshi</strong>, will assess your technical skills, tactical
                  awareness and mental approach during the official trials.
                </p>

                <h4>Eligibility:</h4>
                <p>
                  Open to <strong>BOYS aged 10–18 only</strong>. A dedicated Girls Academy will be
                  announced soon.
                </p>

                <h4>Acceptance & Payment:</h4>
                <p>
                  Selected players will join a 10-week high-performance course for{' '}
                  <strong>£350</strong>. Confirmation and payment are due within 7 days of selection
                  to secure your spot.
                </p>

                <h4>Trial Details:</h4>
                <ul>
                  <li>
                    <strong>Trial 1:</strong> Wednesday 26th November (Ages 10–13: 5–6:30 PM | Ages
                    14–18: 6:30–8 PM)
                  </li>
                  <li>
                    <strong>Trial 2:</strong> Wednesday 17th December (Ages 10–13: 5–6:30 PM | Ages
                    14–18: 6:30–8 PM)
                  </li>
                  <li>
                    <strong>Venue:</strong> Lynch Hill Enterprise Academy
                  </li>
                  <li>
                    <strong>Cost:</strong> £15
                  </li>
                </ul>

                <h4>What to Expect:</h4>
                <ul>
                  <li>Technical ability — precision, consistency, adaptability</li>
                  <li>Tactical awareness — decision-making, discipline</li>
                  <li>Mental approach — focus, resilience, attitude</li>
                </ul>

                <p>
                  <strong>Only standout performers</strong> will receive invitations to join the
                  Elite Programme.
                </p>

                <h4>Programme Overview:</h4>
                <ul>
                  <li>Duration: 10 weeks</li>
                  <li>Led by: Uzi Arif, Fahim Qureshi & Masterclass coaching team</li>
                  <li>Cost: £350 block booking</li>
                </ul>

                <p>
                  <strong>Register here:</strong>{' '}
                  <a
                    href="https://masterclass-cricket.classforkids.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://masterclass-cricket.classforkids.io
                  </a>
                </p>
              </div>

              {/* Checkbox */}
              <div className={styles.checkboxArea}>
                <input
                  type="checkbox"
                  id="accept"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                />
                <label htmlFor="accept"> I accept the Terms and Conditions</label>
              </div>

              {/* Book Now Button */}
              <button
                disabled={!accepted}
                onClick={() => {
                  window.open(bookingUrl, '_blank');
                  setShowModal(false); // closes modal after booking
                }}
                className={`${styles.bookNowBtn} ${accepted ? styles.activeBtn : styles.disabledBtn
                  }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
