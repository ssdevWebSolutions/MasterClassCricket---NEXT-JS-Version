'use client';

import { useEffect, useRef } from 'react';
import styles from '../assets/css/HeroSection.module.css';

export default function HeroSection() {
  const newsletterFormRef = useRef(null);

  useEffect(() => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('headerHeroNavToggle');
    const navMenu = document.getElementById('headerHeroNavMenu');
    const body = document.body;
    
    if (navToggle && navMenu) {
      const handleToggleClick = () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
      };
      
      navToggle.addEventListener('click', handleToggleClick);
      
      // Cleanup
      return () => {
        navToggle.removeEventListener('click', handleToggleClick);
      };
    }
  }, []);

  useEffect(() => {
    // Navigate and highlight nav links
    const navLinks = document.querySelectorAll('.headerHero-nav-link');
    
    const handleLinkClick = (e) => {
      // For same-page links, prevent default and do smooth scroll
      if (e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
      
      // Set active state
      navLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
      
      // Close mobile menu after click
      const navToggle = document.getElementById('headerHeroNavToggle');
      const navMenu = document.getElementById('headerHeroNavMenu');
      const body = document.body;
      
      if (window.innerWidth < 992 && navMenu && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    // Counter animation functions
    function formatNumber(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1).replace(/\.0$/, '') + "M";
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
      }
      return value;
    }

    function animateCounter(element, target) {
      let count = 0;
      let speed = target / 200; // Adjust speed for animation

      function updateCount() {
        count += speed;
        if (count >= target) {
          element.innerText = formatNumber(target);
        } else {
          element.innerText = formatNumber(Math.floor(count));
          requestAnimationFrame(updateCount);
        }
      }
      updateCount();
    }

    function startCounting(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetNumber = parseInt(entry.target.getAttribute("data-target"));
          animateCounter(entry.target, targetNumber);
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
    document.querySelectorAll(`.${styles['headerHero-badge-number']} span`).forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Handle scroll-based navigation highlighting
    function highlightNavOnScroll() {
      const scrollPosition = window.scrollY + 150;
      const navLinks = document.querySelectorAll('.headerHero-nav-link');
      
      // Find all sections with IDs
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to the corresponding nav link
          const activeLink = document.querySelector(`.headerHero-nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }
    
    // Initial check and add scroll listener
    highlightNavOnScroll();
    window.addEventListener('scroll', highlightNavOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', highlightNavOnScroll);
    };
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzoXbIhL0QvRt7x-jeqhAMlfYv0hY6_VzFf7EcUwiY0MswtuRnjax7fFuBF6U2GZmk3/exec", {
        method: "POST",
        body: formData
      });
      
      const data = await response.text();
      alert("Subscription successful for Newsletter!");
      
      if (newsletterFormRef.current) {
        newsletterFormRef.current.reset();
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <section className={styles['headerHero-section']}>
      {/* Hero Content */}
      <div className={styles['headerHero-content-wrapper']}>
        <div className={styles['headerHero-content']}>
          {/* Using row structure for 2-column layout */}
          <div className={`row ${styles.row} ${styles['align-items-center']}`}>
            {/* Left Side Content */}
            <div className={`col-lg-6 ${styles['col-lg-6']}`}>
              <div className={styles['headerHero-text-content']}>
                <h1 className={styles['headerHero-title']}>
                  <div className={styles['headerHero-title-container']}>
                    <span className={styles['headerHero-title-top']}>𝙼𝙰𝚂𝚃𝙴𝚁𝙲𝙻𝙰𝚂𝚂 𝙲𝚁𝙸𝙲𝙺𝙴𝚃</span>
                  </div>
                  <span className={styles['headerHero-title-main']}>
                    FOR EVERY <span className={styles['animated-skill']}>"𝐒𝐊𝐈𝐋𝐋"</span>,
                  </span>
                  <span className={styles['headerHero-title-bottom']}>
                    WE'VE GOT THE <span className={styles['animated-drill']}>"𝐃𝐑𝐈𝐋𝐋"</span>
                  </span>
                </h1>

                <p className={styles['headerHero-description']}>
                  Masterclass Cricket is known for professional cricket coaching backed by expert knowledge
                  across all areas of the game. We work with players at every level, from beginners to international
                  cricketers, empowering them to reach their full potential and excel on the field.
                </p>

                <div className={styles['headerHero-cta-buttons']}>
                  <a 
                    href="https://masterclass-cricket.classforkids.io" 
                    className={`${styles['headerHero-btn']} ${styles['headerHero-primary-btn']}`}
                  >
<span className={styles['headerHero-btn-text']}>
  <span style={{ color: 'blue' }}>Winter</span> Clinics Registration
</span>                    <span className={styles['headerHero-btn-icon']}>
                    <i className="fa-solid fa-angle-right"></i>

                    </span>
                  </a>
                  
                  <form 
                    ref={newsletterFormRef}
                    onSubmit={handleNewsletterSubmit} 
                    className={styles['subscribe-container']}
                  >
                    <input 
                      type="email" 
                      name="email"  
                      placeholder="Enter your email To Subscribe" 
                      required 
                    />
                    <button type="submit">
                      Newsletter <i className="fas fa-envelope" style={{color:'black'}}></i>
                    </button>
                  </form>
                </div>
                
                {/* Achievement Badges */}
                <div className={styles['headerHero-achievement-badges']}>
                  <div className={styles['headerHero-achievement-badge']}>
                    <span className={styles['headerHero-badge-number']}>
                      <span data-target="20">0</span>+
                    </span>
                    <span className={styles['headerHero-badge-text']}>Years Experience</span>
                  </div>
                  <div className={styles['headerHero-achievement-badge']}>
                    <span className={styles['headerHero-badge-number']}>
                      <span data-target="750">0</span>+
                    </span>
                    <span className={styles['headerHero-badge-text']}>Members</span>
                  </div>
                  <div className={styles['headerHero-achievement-badge']}>
                    <span className={styles['headerHero-badge-number']}>
                      <span data-target="100000">0</span>+
                    </span>
                    <span className={styles['headerHero-badge-text']}>Followers on Social Media</span>
                  </div>
                  <div className={styles['headerHero-achievement-badge']}>
                    <span className={styles['headerHero-badge-number']}>
                      <span data-target="10000000">0</span>+
                    </span>
                    <span className={styles['headerHero-badge-text']}>Views</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Video */}
            <div className={`col-lg-6 ${styles['col-lg-6']}`}>
              <div className={styles['headerHero-video-container']}>
                <div className={styles['headerHero-video-wrapper']}>
                  <iframe 
                    width="560" 
                    height="315" 
                    id="youtube-video"
                    src="https://www.youtube.com/embed/hHuwpK9i4Tc" 
                    title="Cricket Training Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern Overlay */}
      <div className={styles['headerHero-pattern-overlay']}></div>
      
      {/* Gradient Effects */}
      <div className={`${styles['headerHero-gradient']} ${styles['headerHero-gradient-1']}`}></div>
      <div className={`${styles['headerHero-gradient']} ${styles['headerHero-gradient-2']}`}></div>
    </section>
  );
}