'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../assets/css/CoachesSection.module.css';

const CoachesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const coaches = [
    {
      id: 1,
      name: "Uzi Arif",
      title: "Masterclass Head Coach",
      experience: "15+ Years",
      image: "/coach-removebg-preview.png",
      bio: "Former Country Cricketer and International Franchise Coach"
    },
    {
      id: 2,
      name: "Ollie Sheen",
      title: "Masterclass Coach",
      experience: "5+ Years",
      image: "/Coach2edited (1).png",
      bio: "A product of Masterclass Cricket, Ollie Sheen has trained under Head Coach Uzi since the age of 13, developing into a high-level cricketer. He has represented Surrey County, the ECB Young Lions Super 4s, and Durham University UCCE. He has played all over the world, in countries like Australia, Sri Lanka, South Africa and India gaining top-level experience."
    },
    {
      id: 3,
      name: "Anirudh Reddy",
      title: "Assistant Head Coach",
      experience: "6+ Years",
      image: "/anirudhCoach3.png",
      bio: "Ani Reddy, an experienced ECB Level 2 cricket coach, has been guiding players under Head Coach Uzi for over 5 years. He specializes in refining techniques, enhancing mental toughness, and preparing athletes for county cricket success, focusing on performance."
    },
    // {
    //   id: 4,
    //   name: "Sohaib Arif",
    //   title: "Masterclass Coach",
    //   experience: "7+ Years",
    //   image: "/Sohabpnb.png",
    //   bio: "Our exceptional coach, trained under Head Coach Uzi, brings expertise in biomechanics and spin bowling. With experience in county training and 1st XI cricket, he bowls at 80mph. Get ready for exciting developments as he shapes the next generation of players!"
    // },
    {
      id: 5,
      name: "Patrick Littlemore",
      title: "Masterclass Mentor",
      experience: "15+ Years",
      image: "/Mentor.png",
      bio: "We've been working with Patrick Littlemore for several years now, although he'd remind us to describe it in seasons! Originally from Australia, he's cricket mad and always has been. Patrick comes to us from the business world, and our paths crossed at the cricket club where he was a player's parent. He's led businesses in London in the property sector for years as a board level director and has been involved with amateur sports clubs for the last 15 years as a volunteer coach and committee member. In his businesses, he's specialised in developing high-performing teams. He has a passion for organisations that want to help people develop from just starting in industry to becoming an expert in their field and passionate contributors to the success of the organisation. From an operational perspective Patrick keeps us from over stepping that front crease too much, by making sure that we're always looking to inspire the next player to start their cricket journey in the right way sticking to what we do best. His current personal pick of our most valuable drills we've taught him to perfect his skills is the batting zones."
    }
  ];

  const scrollCoaches = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Different scroll amounts based on device type
    const cardWidth = isMobile ? carousel.offsetWidth : 320;
    const scrollAmount = isMobile ? cardWidth : cardWidth * 1;

    if (direction === 'left') {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setActiveSlide(Math.max(0, activeSlide - 1));
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      const maxSlide = isMobile ? coaches.length - 1 : 2;
      setActiveSlide(Math.min(maxSlide, activeSlide + 1));
    }
  };

  const toggleCardFlip = (coachId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(coachId)) {
        newSet.delete(coachId);
      } else {
        newSet.add(coachId);
      }
      return newSet;
    });
  };

  // Consistent image styles
  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '50%'
  };

  // Bio container styles for consistent height and scrolling
  const bioContainerStyles = {
    maxHeight: '200px',
    overflowY: 'auto',
    paddingRight: '8px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1'
  };

  // Custom scrollbar styles for webkit browsers
  const scrollbarStyles = {
    WebkitScrollbar: {
      width: '6px'
    },
    WebkitScrollbarTrack: {
      background: '#f1f1f1',
      borderRadius: '3px'
    },
    WebkitScrollbarThumb: {
      background: '#888',
      borderRadius: '3px'
    },
    WebkitScrollbarThumbHover: {
      background: '#555'
    }
  };

  return (
    <>
      <style jsx>{`
        .bio-container::-webkit-scrollbar {
          width: 6px;
        }
        .bio-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .bio-container::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        .bio-container::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <section className={styles.coachesPremiumSection} id="coach-mentors">
        <div className={styles.coachesContainer}>
          <div className={styles.coachesHeadingWrapper}>
            <h2 className={styles.coachesHeading}>MEET THE COACHES AND MENTOR</h2>
            <div className={styles.coachesHeadingUnderline}></div>
            <p className={styles.coachesSubheading}>Meet the masterminds behind our cricket excellence</p>
          </div>
          
          <div className={styles.coachesCarouselContainer}>
            <button 
              className={`${styles.coachesNavBtn} ${styles.coachesPrevBtn}`}
              onClick={() => scrollCoaches('left')}
              aria-label="Previous coaches"
            >
              <ChevronLeft size={24} /> 
            </button>

            <div className={styles.coachesCarousel} ref={carouselRef}>
              {coaches.map((coach) => (
                <div key={coach.id} className={styles.coachCard}>
                  <div 
                    className={`${styles.coachCardInner} ${flippedCards.has(coach.id) ? styles.flipped : ''}`}
                    onClick={() => toggleCardFlip(coach.id)}
                  >
                    <div className={styles.coachCardFront}>
                      <div className={styles.coachImageContainer}>
                        <img 
                          src={coach.image} 
                          alt={coach.name}
                          className={styles.coachImage}
                          style={imageStyles}
                          loading="lazy"
                        />
                        <div className={styles.coachCredentials}>
                          <span className={styles.coachExperience}>{coach.experience}</span>
                        </div>
                      </div>
                      <div className={styles.coachInfoPreview}>
                        <h3 className={styles.coachName}>{coach.name}</h3>
                        <p className={styles.coachTitle}>{coach.title}</p>
                      </div>
                    </div>
                    
                    <div className={styles.coachCardBack}>
                      <div className={styles.coachDetails}>
                        <h3 className={styles.coachName}>{coach.name}</h3>
                        <p className={styles.coachTitle}>{coach.title}</p>
                        <div className={styles.coachSeparator}></div>
                        
                        <div 
                          className="bio-container"
                          style={bioContainerStyles}
                        >
                          <p className={`${styles.coachBio} ${coach.name === 'Patrick Littlemore' ? styles.coachBioMentor : ''}`}>
                            {coach.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`${styles.coachesNavBtn} ${styles.coachesNextBtn}`}
              onClick={() => scrollCoaches('right')}
              aria-label="Next coaches"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.coachesIndicators}>
            {(isMobile ? coaches : [0, 1, 2]).map((item, index) => (
              <span 
                key={isMobile ? item.id : index}
                className={`${styles.indicatorDot} ${(isMobile ? index : index) === activeSlide ? styles.active : ''}`}
                onClick={() => setActiveSlide(isMobile ? index : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SportsClub",
              "name": "Masterclass Cricket Academy"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "James Parker"
            },
            "reviewBody": "We've trained with Masterclass Cricket Academy for 10 years, and the professional coaching is unmatched. Thanks to expert batting, bowling, and fielding training, my son progressed from borough cricket to the County Winter Squad."
          })
        }}
      />
    </>
  );
};

export default CoachesSection;