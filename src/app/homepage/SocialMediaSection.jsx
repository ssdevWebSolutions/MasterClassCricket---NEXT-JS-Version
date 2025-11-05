'use client';
import { useEffect, useRef } from 'react';
import styles from '../assets/css/SocialMediaSection.module.css';

const SocialMediaSection = () => {
  const currentlyPlayingRef = useRef(null);
  const currentPlayButtonRef = useRef(null);
  const currentThumbnailRef = useRef(null);

  const toggleVideo = (videoId, thumbnailId, container) => {
    const video = document.getElementById(videoId);
    const thumbnail = document.getElementById(thumbnailId);
    const playButton = container.querySelector(`.${styles.igPlayButton}`);

    // If there's a video currently playing and it's not this one, stop it
    if (currentlyPlayingRef.current && currentlyPlayingRef.current !== video) {
      currentlyPlayingRef.current.pause();
      currentlyPlayingRef.current.style.display = 'none';
      if (currentThumbnailRef.current) {
        currentThumbnailRef.current.style.display = 'block';
      }
      if (currentPlayButtonRef.current) {
        currentPlayButtonRef.current.style.display = 'flex';
      }
    }

    // Toggle current video
    if (video.style.display === 'none' || video.style.display === '') {
      // Play this video
      thumbnail.style.display = 'none';
      video.style.display = 'block';
      playButton.style.display = 'none';
      video.play().catch(error => {
        console.error("Error playing video:", error);
      });
      currentlyPlayingRef.current = video;
      currentPlayButtonRef.current = playButton;
      currentThumbnailRef.current = thumbnail;
    } else {
      // Stop this video
      video.pause();
      video.style.display = 'none';
      thumbnail.style.display = 'block';
      playButton.style.display = 'flex';
      currentlyPlayingRef.current = null;
      currentPlayButtonRef.current = null;
      currentThumbnailRef.current = null;
    }
  };

  const handleViewProfile = () => {
    window.open('https://www.instagram.com/masterclasscricket', '_blank');
  };

  const handleFollowUs = () => {
    window.open('https://www.instagram.com/masterclasscricket', '_blank', 'noopener,noreferrer');
  };

  const handleActionButtonClick = (e) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  useEffect(() => {
    const actionButtons = document.querySelectorAll(`.${styles.igActionBtn}`);
    actionButtons.forEach(button => {
      button.addEventListener('click', handleActionButtonClick);
    });

    return () => {
      actionButtons.forEach(button => {
        button.removeEventListener('click', handleActionButtonClick);
      });
    };
  }, []);

  const socialCards = [
    {
      id: 1,
      videoId: 'video1',
      thumbnailId: 'thumbnail1',
      thumbnailSrc: '/insta11.jpg',
      videoSrc: '/v1.mp4',
      views: '1M Views'
    },
    {
      id: 2,
      videoId: 'video2',
      thumbnailId: 'thumbnail2',
      thumbnailSrc: '/insta2.jpg',
      videoSrc: '/v2.mp4',
      views: '717k Views'
    },
    {
      id: 3,
      videoId: 'video3',
      thumbnailId: 'thumbnail3',
      thumbnailSrc: '/inst3.jpg',
      videoSrc: '/v3.mp4',
      views: '1M Views'
    },
    {
      id: 4,
      videoId: 'video4',
      thumbnailId: 'thumbnail4',
      thumbnailSrc: '/insta4.jpg',
      videoSrc: '/v4.mp4',
      views: '92.7k Views'
    }
  ];

  return (
    <section className={styles.igReelsSection}>
      <h2 className={styles.igSectionTitle}>
        CHECK OUT <span className={styles.igHighlight}>OUR SOCIAL MEDIA!</span>
      </h2>

      {/* Decorative cricket bat - top left */}
      <div className={`${styles.igDecorativeBat} ${styles.igBatTopLeft}`}>
        <svg viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg" className={styles.igCricketBatSvg}>
          <defs>
            <linearGradient id="bat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>
          {/* Bat handle */}
          <rect x="43" y="10" width="14" height="100" rx="7" fill="#1e293b" />

          {/* Handle grip texture */}
          <g opacity="0.4">
            <rect x="43" y="20" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="29" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="38" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="47" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="56" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="65" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="74" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="83" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="92" width="14" height="5" rx="2.5" fill="white" />
            <rect x="43" y="101" width="14" height="5" rx="2.5" fill="white" />
          </g>

          {/* Bat shoulder */}
          <path d="M43,110 C40,115 30,120 30,125 L30,135 L70,135 L70,125 C70,120 60,115 57,110 Z"
            fill="#a16207" />

          {/* Bat blade */}
          <path d="M30,135 L30,350 C30,380 50,390 50,390 C50,390 70,380 70,350 L70,135 Z"
            fill="url(#bat-gradient)" />

          {/* Bat edge */}
          <path d="M30,135 L30,350 C30,380 50,390 50,390" fill="none" stroke="#713f12" strokeWidth="2" />
          <path d="M70,135 L70,350 C70,380 50,390 50,390" fill="none" stroke="#713f12" strokeWidth="2" />

          {/* Bat face texture/grain */}
          <g opacity="0.1">
            <line x1="35" y1="150" x2="65" y2="150" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="160" x2="65" y2="160" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="170" x2="65" y2="170" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="180" x2="65" y2="180" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="190" x2="65" y2="190" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="200" x2="65" y2="200" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="210" x2="65" y2="210" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="220" x2="65" y2="220" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="230" x2="65" y2="230" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="240" x2="65" y2="240" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="250" x2="65" y2="250" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="260" x2="65" y2="260" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="270" x2="65" y2="270" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="280" x2="65" y2="280" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="290" x2="65" y2="290" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="300" x2="65" y2="300" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="310" x2="65" y2="310" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="320" x2="65" y2="320" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="330" x2="65" y2="330" stroke="#422006" strokeWidth="1" />
            <line x1="35" y1="340" x2="65" y2="340" stroke="#422006" strokeWidth="1" />
          </g>

          {/* Bat branding */}
          <text x="50" y="200" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold"
            transform="rotate(90, 50, 200)">
            CRICKET MASTER
          </text>
        </svg>
      </div>

      {/* Decorative cricket ball - bottom right */}
      <div className={`${styles.igDecorativeBall} ${styles.igBallBottomRight}`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.igCricketBallSvg}>
          <defs>
            <radialGradient id="ball-gradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#b91c1c" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#ball-gradient)" />

          {/* Cricket ball seam */}
          <path d="M50,5 C50,5 50,95 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M50,5 C65,20 65,80 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M50,5 C35,20 35,80 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Highlights */}
          <circle cx="35" cy="35" r="8" fill="white" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Decorative cricket ball - middle left */}
      <div className={`${styles.igDecorativeBall} ${styles.igBallMiddleLeft}`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.igCricketBallSvg}>
          <circle cx="50" cy="50" r="45" fill="#f43f5e" />
          <path d="M50,5 C50,5 50,95 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M50,5 C65,20 65,80 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M50,5 C35,20 35,80 50,95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative cricket bat - middle right */}
      <div className={`${styles.igDecorativeBat} ${styles.igBatMiddleRight}`}>
        <svg viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg" className={styles.igCricketBatSvg}>
          {/* Bat handle */}
          <rect x="43" y="10" width="14" height="100" rx="7" fill="#1e293b" />

          {/* Bat shoulder */}
          <path d="M43,110 C40,115 30,120 30,125 L30,135 L70,135 L70,125 C70,120 60,115 57,110 Z"
            fill="#a16207" />

          {/* Bat blade */}
          <path d="M30,135 L30,350 C30,380 50,390 50,390 C50,390 70,380 70,350 L70,135 Z" fill="#a16207" />
        </svg>
      </div>

      <div className={styles.igReelsGrid}>
        {socialCards.map((card) => (
          <div key={card.id} className={styles.igSocialCard}>
            <div className={styles.igCardHeader}>
              <div className={styles.igProfileImage}>
                <a href="https://www.instagram.com/masterclasscricket" target="_blank" rel="noopener noreferrer">
                  <img src="/instalogo.JPG" alt="masterclasscricket profile" />
                </a>
              </div>
              <div className={styles.igProfileInfo}>
                <div className={styles.igUsername}>masterclasscricket</div>
                <div className={styles.igAudioInfo}>Original audio</div>
              </div>
              <button className={styles.igViewProfileBtn} onClick={handleViewProfile}>
                View profile
              </button>
            </div>

            <div 
              className={styles.igCardContent} 
              onClick={(e) => toggleVideo(card.videoId, card.thumbnailId, e.currentTarget)}
            >
              <img 
                id={card.thumbnailId} 
                src={card.thumbnailSrc} 
                alt="Reel thumbnail" 
                className={styles.reelThumbnail}
              />
              <video 
                id={card.videoId} 
                src={card.videoSrc} 
                className={styles.reelVideo} 
                loop
              />
              
              <div className={styles.igPlayButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <div className={styles.igCricketBallCorner}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#f43f5e" />
                  <path d="M50,5 C50,5 50,95 50,95" stroke="white" strokeWidth="4" fill="none" />
                  <path d="M50,5 C65,20 65,80 50,95" stroke="white" strokeWidth="4" fill="none" />
                  <path d="M50,5 C35,20 35,80 50,95" stroke="white" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>

            <div className={styles.igCardActions}>
              <div className={styles.igActionButtons}>
                <button className={styles.igActionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className={styles.igActionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button className={styles.igActionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <button className={styles.igActionBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            <div className={styles.igCardDetails}>
              <div className={styles.igLikes}>
                <span className={styles.igLikesCount}>{card.views}</span>
              </div>
              <p className={styles.igViewMore}>
                View more on Instagram
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <div className={styles.igFollowBtnContainer}>
      <button className={styles.igFollowBtn} onClick={handleFollowUs}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
        FOLLOW US ON INSTAGRAM
      </button>
    </div>
    </section>
  );
};

export default SocialMediaSection;