'use client';

import React, { useState, useEffect } from 'react';
import styles from '../assets/css/Popup.module.css';

const Popup = ({ 
  isVisible = false, 
  onClose, 
  showAfterDelay = true, 
  delay = 3000,
  imageUrl = '/Half_Camp_Flyer.jpeg',
  imageAlt = 'Masterclass Cricket Academy Booking Poster',
  linkUrl = 'https://masterclass-cricket.classforkids.io',
  bookingUrl = 'https://masterclass-cricket.classforkids.io/cms/camps/register/8/week/10',
  buttonText = 'Book Now'
}) => {
  const [showPopup, setShowPopup] = useState(isVisible);
  const [isClosing, setIsClosing] = useState(false);

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
    }, 300); // Wait for animation
  };

  const handleImageClick = () => {
    window.open(linkUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBookNow = () => {
    window.location.href = bookingUrl;
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showPopup) {
        handleClose();
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showPopup) return null;

  return (
    <div 
      className={`${styles.popupOverlay} ${isClosing ? styles.hidden : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.popupBox}>
        <button 
          className={styles.closeBtn} 
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Image as a clickable link */}
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            handleImageClick();
          }}
        >
          <img 
            src={imageUrl}
            alt={imageAlt}
            className={styles.popupImg}
            loading="lazy"
          />
        </a>
        
        <br />
        
        {/* Redirect Button */}
        <button 
          className={styles.redirectBtn}
          onClick={handleBookNow}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Popup;