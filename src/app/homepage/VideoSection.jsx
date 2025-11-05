'use client';

import styles from '../assets/css/VideoSection.module.css';

export default function VideoSection() {
  return (
    <div className={styles.videoSection}>
      <a 
        href="https://www.instagram.com/masterclasscricket?igsh=MWJ4eDJqaHhkN2x3NQ==" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/img/masterclass-cricket-thumbnail.jpg" 
          className={styles.video}
        >
          <source src="Interaction 2 copy.mp4" type="video/mp4" />
        </video>
      </a>
    </div>
  );
}