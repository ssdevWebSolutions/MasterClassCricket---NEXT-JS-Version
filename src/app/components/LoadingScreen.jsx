'use client';

import React, { useState, useEffect } from 'react';
import styles from '../assets/css/LoadingScreen.module.css';

const LoadingScreen = ({ onLoadingComplete, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or connect to actual loading states)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        setTimeout(() => onLoadingComplete(), 500); // Wait for fade out animation
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loadingScreen} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingLogo}>
          <div className={styles.loadingSpinner}></div>
          <img 
            src="/logo_.ico" 
            alt="Masterclass Cricket Academy Logo" 
            loading="lazy"
          />
        </div>
        <div className={styles.loadingText}>Preparing Your Cricket Experience...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;