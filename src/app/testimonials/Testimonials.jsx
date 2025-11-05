'use client';

import { useEffect, useState, useRef } from 'react';
import styles from '../assets/css/Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const mobileTrackRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const firstRowTestimonials = [
    {
      name: "James Parker – Richmond",
      avatar: "J",
      text: "We've trained with Masterclass Cricket Academy for 10 years, and the professional cricket coaching is unmatched. Thanks to expert batting, bowling, and fielding training, my son progressed from borough cricket to the County Winter Squad."
    },
    {
      name: "Sarah Wilson – Chiswick",
      avatar: "S",
      text: "We tried other academies before coming to Masterclass, but nothing compares to the professionalism and attention to detail here. My daughter started playing for her school B team, then moved to borough cricket. After working with Uzi and Ani, she's now in the County Summer Squad. The investment is worth it!"
    },
    {
      name: "Daniel Simmons – Wimbledon",
      avatar: "D",
      text: "People ask if it's expensive. I say, 'You get what you pay for.' This isn't just an academy—it's an elite coaching program. Thanks to Uzi and the team, my son went from a school second-team cricketer to playing borough cricket and now regional trials. The structured coaching and match preparation made all the difference."
    },
    {
      name: "Priya Patel – Hounslow",
      avatar: "P",
      text: "My son struggled with his batting, and after just a few months at Masterclass, his confidence and technique transformed. The one-on-one sessions with Ani and the detailed reports allowed us to track his progress. He started in borough cricket and has now made the County Winter Squad!"
    },
    {
      name: "Alex Thompson – Clapham",
      avatar: "A",
      text: "We travel two hours every Saturday for a session here. My son was overlooked at his old academy, but Uzi and Sohaib spotted his potential immediately. After working on his bowling, he moved up from borough cricket to the regional setup. Now, he's pushing for county selection!"
    },
    {
      name: "Michelle Davies – Kensington",
      avatar: "M",
      text: "My daughter was the only girl at her club and never got real coaching. Masterclass changed that. After training with Ollie and Ani, she's now playing in her school's A team and has been selected for regional trials. Finally, an academy that values girls' cricket!"
    },
    {
      name: "Andrew Carter – Ealing",
      avatar: "A",
      text: "Sohaib corrected my son's bowling action in just a few weeks, and now he's bowling quicker and more accurately. His confidence has skyrocketed, and he's getting noticed at regional level. Uzi oversees every player's development, making sure they get the best coaching."
    },
    {
      name: "Simon Bradley – Notting Hill",
      avatar: "S",
      text: "Masterclass isn't just coaching—it's a cricket education. The video analysis, structured feedback, and match scenarios prepare players for real competition. My son has moved from regional cricket to the County Summer Squad, and his game awareness has improved massively."
    },
    {
      name: "Thomas Finch – Kingston",
      avatar: "T",
      text: "As a club coach myself, I've never seen an academy that provides this level of detail. My son started in the school B team, moved to borough cricket, and has now been selected for the County Winter Squad. The technical work from Uzi and Sohaib has been outstanding."
    },
    {
      name: "Emma Richards – Chelsea",
      avatar: "E",
      text: "The coaches here don't just create better cricketers; they build confidence, discipline, and passion. My son started in the school C team and is now the opening batter for the A team, all thanks to Masterclass."
    },
    {
      name: "Mark Bennett – Twickenham",
      avatar: "M",
      text: "We've been with Masterclass for 8 years. My son has gone from a club player to a borough-level opener, and now he's in the County Summer Squad. No gimmicks—just pure, high-level coaching from Uzi, Ollie, and the team."
    }
  ];

  const secondRowTestimonials = [
    {
      name: "Rachel Owens – Hammersmith",
      avatar: "R",
      text: "My daughter plays cricket for fun, but even at a recreational level, the improvements have been huge. She went from a school beginner to playing in the A team. The coaches make learning exciting and engaging."
    },
    {
      name: "Mohammed Khan – Southall",
      avatar: "M",
      text: "I drive 3 hours weekly for my son's one-on-one sessions with Sohaib. The personalized coaching and deep understanding of technique make this academy the best. He was struggling in borough cricket but has now been selected for the regional squad!"
    },
    {
      name: "Oliver James – Fulham",
      avatar: "O",
      text: "Other academies felt like daycare. At Masterclass, they actually teach. The coaches push players and set high standards. My son moved up from the school C team to borough cricket and now has regional trials lined up!"
    },
    {
      name: "Nathan Green – Croydon",
      avatar: "N",
      text: "We flew in from Dubai just to train with Uzi and his team. The level of coaching here is on par with international academies. My son's game has completely transformed, and he's now competing in the County Winter Squad."
    },
    {
      name: "Charlotte Adams – Barnes",
      avatar: "C",
      text: "The structured reports are a game-changer. Most academies just let kids play, but here, every session is measured and tracked. My son started at borough level and has now secured a place in the County Summer Squad!"
    },
    {
      name: "Richard Clarke – Essex",
      avatar: "R",
      text: "As a former cricketer myself, I was skeptical at first. But after watching Uzi and his team work, I can confidently say they turn good players into great ones. My son moved from school A team to borough and now regional selection!"
    },
    {
      name: "Sophie Brown – Surrey",
      avatar: "S",
      text: "Masterclass is the reason my son got into the regional setup. The technical coaching, match preparation, and high-level training all contributed to his success. Uzi's knowledge and Ollie's coaching have been key."
    },
    {
      name: "Jacob Lewis – Guildford",
      avatar: "J",
      text: "What sets Masterclass apart is their ability to tailor coaching to each child's strengths and weaknesses. They're developing smart cricketers, not just players who can hit the ball. My son has moved from borough to the County Winter Squad under Sohaib's coaching!"
    },
    {
      name: "David Wright – Birmingham",
      avatar: "D",
      text: "We drive down from Birmingham every half-term just so my son can train here. The level of coaching is that good. Uzi and his team don't just teach cricket—they build champions. My son has gone from regional to the County Summer Squad thanks to their elite coaching!"
    },
    {
      name: "Kesrick Williams – West Indies International Cricketer",
      avatar: "K",
      text: "I've played cricket all over the world, but the coaching setup at Masterclass Cricket is something special. Uzi and his team break down the game in a way that even professionals can learn from. Any young player training here is in the best hands."
    },
    {
      name: "Rayad Emrit – Former West Indies Captain",
      avatar: "R",
      text: "I've trained with Uzi and the Masterclass team, and their technical knowledge is top-tier. They understand what it takes to develop young players, whether it's improving fast bowling, perfecting batting technique, or building a match-winning mindset. If you're serious about cricket, this is the place to be."
    }
  ];

  const allTestimonials = [...firstRowTestimonials, ...secondRowTestimonials];
  const totalItems = allTestimonials.length + 2; // +2 for clones

  const TestimonialCard = ({ testimonial, onClick }) => (
    <div className={styles.testimonialCard} onClick={onClick}>
      <div className={styles.testimonialAuthor}>
        <div className={styles.authorAvatar}>{testimonial.avatar}</div>
        <h3 className={styles.authorName}>{testimonial.name}</h3>
      </div>
      <p className={styles.testimonialText}>{testimonial.text}</p>
    </div>
  );

  const updateMobileCarousel = () => {
    if (!mobileTrackRef.current) return;
    
    setIsAnimating(true);
    const cardWidth = mobileTrackRef.current.querySelector(`.${styles.testimonialCard}`)?.offsetWidth || 250;
    const gapWidth = 24; // 1.5rem in pixels

    mobileTrackRef.current.style.transition = 'transform 0.5s ease';
    mobileTrackRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gapWidth)}px)`;

    // After animation completes, check if we need to jump
    setTimeout(() => {
      if (currentIndex === totalItems - 1) {
        mobileTrackRef.current.style.transition = 'none';
        setCurrentIndex(1);
        mobileTrackRef.current.style.transform = `translateX(-${1 * (cardWidth + gapWidth)}px)`;
      }

      if (currentIndex === 0) {
        mobileTrackRef.current.style.transition = 'none';
        setCurrentIndex(totalItems - 2);
        mobileTrackRef.current.style.transform = `translateX(-${(totalItems - 2) * (cardWidth + gapWidth)}px)`;
      }

      // Re-enable transitions after the jump
      setTimeout(() => {
        if (mobileTrackRef.current) {
          mobileTrackRef.current.style.transition = 'transform 0.5s ease';
          setIsAnimating(false);
        }
      }, 50);
    }, 500);
  };

  const initMobileCarousel = () => {
    if (!mobileTrackRef.current) return;
    
    const cardWidth = mobileTrackRef.current.querySelector(`.${styles.testimonialCard}`)?.offsetWidth || 250;
    const gapWidth = 24;

    mobileTrackRef.current.style.transition = 'none';
    mobileTrackRef.current.style.transform = `translateX(-${cardWidth + gapWidth}px)`;
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    setCurrentIndex(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setCurrentIndex(prev => prev + 1);
  };

  const pauseRow = (rowRef, activeCard = null) => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = 'paused';
      
      // Remove active class from all cards in the row
      const cards = rowRef.current.querySelectorAll(`.${styles.testimonialCard}`);
      cards.forEach(card => card.classList.remove(styles.active));

      // Add active class to the specific card if provided
      if (activeCard) {
        activeCard.classList.add(styles.active);
      }
    }
  };

  const resumeRow = (rowRef) => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = 'running';
      
      // Remove active class from all cards
      const cards = rowRef.current.querySelectorAll(`.${styles.testimonialCard}`);
      cards.forEach(card => card.classList.remove(styles.active));
    }
  };

  useEffect(() => {
    updateMobileCarousel();
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(initMobileCarousel, 100);
    
    const handleResize = () => {
      initMobileCarousel();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Setup desktop row interactions
    const setupRowInteractions = (rowRef) => {
      if (!rowRef.current) return;

      let isHovering = false;

      const handleMouseEnter = (e) => {
        isHovering = true;
        const card = e.target.closest(`.${styles.testimonialCard}`);
        if (card) {
          pauseRow(rowRef, card);
        }
      };

      const handleMouseMove = (e) => {
        if (isHovering) {
          const card = e.target.closest(`.${styles.testimonialCard}`);
          if (card) {
            pauseRow(rowRef, card);
          }
        }
      };

      const handleMouseLeave = () => {
        isHovering = false;
        resumeRow(rowRef);
      };

      rowRef.current.addEventListener('mouseenter', handleMouseEnter);
      rowRef.current.addEventListener('mousemove', handleMouseMove);
      rowRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (rowRef.current) {
          rowRef.current.removeEventListener('mouseenter', handleMouseEnter);
          rowRef.current.removeEventListener('mousemove', handleMouseMove);
          rowRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    };

    const cleanup1 = setupRowInteractions(firstRowRef);
    const cleanup2 = setupRowInteractions(secondRowRef);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section className={styles.testimonialsContainer} id="Testimonials">
      <div className={styles.testimonialsHeader}>
        <h2>Cricket Academy Reviews – Why Players & Parents Love Masterclass</h2>
        <p>See why players, parents, and professionals trust Masterclass Cricket Academy.</p>
      </div>

      {/* Desktop testimonials with infinite scroll */}
      <div className={styles.desktopTestimonials}>
        <div className={styles.testimonialsRow}>
          <div 
            className={`${styles.testimonialsRowInner} ${styles.scrollLeft}`} 
            ref={firstRowRef}
          >
            {/* Render testimonials twice for infinite scroll */}
            {firstRowTestimonials.concat(firstRowTestimonials).map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className={styles.testimonialsRow}>
          <div 
            className={`${styles.testimonialsRowInner} ${styles.scrollRight}`} 
            ref={secondRowRef}
          >
            {/* Render testimonials twice for infinite scroll */}
            {secondRowTestimonials.concat(secondRowTestimonials).map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile testimonials with navigation buttons */}
      <div className={styles.mobileTestimonials}>
        <div className={styles.mobileCarousel}>
          <div className={styles.mobileCarouselInner} ref={mobileTrackRef}>
            {/* Clone of last testimonial at beginning */}
            <TestimonialCard testimonial={allTestimonials[allTestimonials.length - 1]} />
            
            {/* All testimonials */}
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`mobile-${index}`} testimonial={testimonial} />
            ))}
            
            {/* Clone of first testimonial at end */}
            <TestimonialCard testimonial={allTestimonials[0]} />
          </div>
          <div className={styles.navButtons}>
            <button className={styles.navBtn} onClick={handlePrevClick}>←</button>
            <button className={styles.navBtn} onClick={handleNextClick}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;