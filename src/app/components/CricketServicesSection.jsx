"use client";
import React, { useState, useEffect } from "react";
import styles from "../assets/css/CricketServicesSection.module.css";

const CricketServicesSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // Add animation class after component mounts
    const cards = document.querySelectorAll(`.${styles.serviceCard}`);
    const highlights = document.querySelectorAll(`.${styles.serviceHighlight}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animated);
        }
      });
    });

    cards.forEach((card) => observer.observe(card));
    highlights.forEach((highlight) => observer.observe(highlight));

    return () => observer.disconnect();
  }, []);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section className={styles.servicesSection} id="services">
        {/* Background elements */}
        <div className={styles.servicesBackground}>
          <div className={`${styles.cricketBall} ${styles.cricketBall1}`}></div>
          <div className={`${styles.cricketBall} ${styles.cricketBall2}`}></div>
          <div className={`${styles.cricketBall} ${styles.cricketBall3}`}></div>
        </div>

        <div className={styles.servicesContainer}>
          {/* Section header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionDescription}>
              Comprehensive cricket coaching tailored for all levels, from
              beginners to elite professionals.
            </p>
          </div>

          {/* Top-tier services - First row with popup cards */}
          <div className={styles.servicesGrid}>
            {/* 1-1 Coaching */}
            <div
              className={`${styles.serviceCard} ${styles.delay1}`}
              data-service="coaching-1"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3 className={styles.cardTitle} style={{ color: "black" }}>
                  1-2-1 Coaching
                </h3>
                <p className={styles.cardSubtitle} style={{ color: "black" }}>
                  Tailored Training for Every Cricketer
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("coaching-1-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Small Group Sessions */}
            <div
              className={`${styles.serviceCard} ${styles.delay2}`}
              data-service="group-sessions"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3 className={styles.cardTitle} style={{ color: "black" }}>
                  Small Group Sessions
                </h3>
                <p className={styles.cardSubtitle} style={{ color: "black" }}>
                  Train with Peers, Excel Together
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("group-sessions-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Masterclass Academy Sessions */}
            <div
              className={`${styles.serviceCard} ${styles.delay3}`}
              data-service="academy"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Masterclass Academy Sessions
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Structured Training for Age-Group Development
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("academy-modal")}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Featured service highlight */}
          <div className={styles.serviceHighlight}>
            <div className={styles.highlightAccent}></div>
            <h3 className={styles.highlightTitle}>Masterclass Cricket Camps</h3>
            <p className={styles.highlightSubtitle}>
              Invest in Proper Coaching, Not Babysitting
            </p>
            <p className={styles.highlightDescription}>
              Don't settle for club-run camps that feel like babysitting. At
              Masterclass Cricket Camps, we offer a fun yet professional
              coaching environment, helping players of all abilities develop
              real skills and prepare for the season.
            </p>
            <p className={styles.highlightDescription}>
              Our unique "Skills & Drills" sessions give players a Masterclass
              in all areas of the game, followed by practice tailored to their
              style. With access to three cricket grounds at Kings House Sports
              Grounds, we maximize match practice on astro wickets, ensuring the
              best preparation for competitive cricket.
            </p>
            <h4>Why Choose Masterclass Cricket Camps?</h4>
            <div className={styles.highlightFeatures}>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Expert Coaching</h4>
                  <p>
                    Learn from experienced coaches who have played and coached
                    at elite levels.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Match Practice</h4>
                  <p>
                    Real game scenarios to sharpen skills before the season.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>All Abilities Welcome</h4>
                  <p>From beginners to aspiring county players.</p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Safe & Professional</h4>
                  <p>
                    A structured environment where good practices and ethics are
                    at the heart of what we do.
                  </p>
                </div>
              </div>
            </div>
            <p className={styles.highlightDescription}>
              Once your child experiences a Masterclass Cricket Camp, they'll be
              hooked! Limited Spots Available – Book Now!
            </p>
            <a
              href="https://masterclass-cricket.classforkids.io"
              className={styles.serviceBtn}
              style={{ marginTop: "25px" }}
            >
              Register for Camp
            </a>
          </div>

          <div className={styles.separator}></div>

          {/* Specialized services - Second row with popup cards */}
          <div className={styles.servicesGrid}>
            {/* Elite Performance Clinics */}
            <div
              className={`${styles.serviceCard} ${styles.delay4}`}
              data-service="elite-clinics"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Elite Performance Clinics
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  For Cricketers Who Aspire to Be the Best
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("elite-clinics-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Tours for Clubs and Members */}
            <div
              className={`${styles.serviceCard} ${styles.delay5}`}
              data-service="tours"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Tours for Clubs and Members
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Experience Cricket in Different Conditions
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("tours-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Corporate Team-Building Events */}
            <div
              className={`${styles.serviceCard} ${styles.delay6}`}
              data-service="corporate"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Corporate Team-Building Events
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Cricket as a Tool for Leadership & Teamwork
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("corporate-modal")}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className={styles.separator}></div>

          {/* Online and specialized services - Third row with popup cards */}
          <div className={styles.servicesGrid}>
            {/* Online Bowling Assessments */}
            <div
              className={`${styles.serviceCard} ${styles.delay7}`}
              data-service="bowling-assessment"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Online Bowling Assessments
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Get Expert Feedback—Anytime, Anywhere
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("bowling-assessment-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* School Coaching Programmes */}
            <div
              className={`${styles.serviceCard} ${styles.delay9}`}
              data-service="mental-mapping"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  School Coaching Programmes
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Bringing expert coaching to schools through teacher training
                  and high-quality student masterclasses.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("mental-mapping-modal1")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Online Batting Assessments */}
            <div
              className={`${styles.serviceCard} ${styles.delay8}`}
              data-service="batting-assessment"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3
                  className={styles.cardTitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Online Batting Assessments
                </h3>
                <p
                  className={styles.cardSubtitle}
                  style={{ color: "black", textAlign: "center" }}
                >
                  Analyse, Adjust, Improve
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("batting-assessment-modal")}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Mental Mind Mapping Course */}
            <div
              className={`${styles.serviceCard} ${styles.delay9}`}
              data-service="mental-mapping"
            >
              <div className={styles.cardAccent}></div>
              <div className={`${styles.cardHeader} ${styles.alignTitle}`}>
                <h3 className={styles.cardTitle} style={{ color: "black" }}>
                  Mental Mind Mapping Course
                </h3>
                <p className={styles.cardSubtitle} style={{ color: "black" }}>
                  Masterclass Mind Mapping
                </p>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal("mental-mapping-modal")}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Coaching Certification highlight */}
          <div className={`${styles.serviceHighlight} ${styles.delay10}`}>
            <div className={styles.highlightAccent}></div>
            <h3 className={styles.highlightTitle}>
              Masterclass Approved Coach Programme – The Ultimate Coaching
              Blueprint
            </h3>
            <p className={styles.highlightSubtitle}>
              Become a Masterclass-Approved Coach
            </p>
            <p className={styles.highlightDescription}>
              An accredited coaching certificate alone doesn't make a top-level
              coach—genuine knowledge, experience, and insight do. At
              Masterclass Cricket, we have spent years learning and refining the
              art of coaching. Now, we offer you the opportunity to learn
              directly from Head Coach Uzi, gaining invaluable skills, tactical
              understanding, and business expertise needed to become an elite
              coach and establish a successful coaching career.
            </p>
            <div className={styles.highlightFeatures}>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Advanced Coaching Techniques</h4>
                  <p>
                    Master the skills, drills, biomechanics, and tactical
                    knowledge that differentiate exceptional coaches from the
                    rest.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>The Business of Coaching</h4>
                  <p>
                    Discover how to build, grow, and sustain a profitable
                    coaching business with practical, real-world strategies.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Insider Knowledge</h4>
                  <p>
                    Gain exclusive insights that have taken Uzi years to learn
                    and understand.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Hands-On Experience</h4>
                  <p>
                    Work directly with Uzi and gain invaluable real-world
                    experience that traditional courses cannot offer.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Client Acquisition Support</h4>
                  <p>
                    We will help you secure your first five clients through our
                    established platform.
                  </p>
                </div>
              </div>
              <div className={styles.highlightFeature}>
                <div className={styles.highlightIcon}>✔</div>
                <div>
                  <h4>Full Business & Administrative Support</h4>
                  <p>
                    Receive guidance on the operational side of coaching, from
                    setting up your business to managing clients effectively.
                  </p>
                </div>
              </div>
            </div>
            <p
              className={styles.highlightDescription}
              style={{ marginTop: "20px" }}
            >
              Top-quality cricket coaches are always in demand, yet the current
              coaching system in the UK fails to teach the game with the depth
              and precision that we do. This programme equips you with the
              skills, insights, and strategies to become a Masterclass Approved
              Coach, ensuring you stand out in the industry.
            </p>
            <p className={styles.highlightDescription}>
              This isn't just a course—it's a comprehensive blueprint for
              success. The value of the expertise and experience you will gain
              is priceless.
            </p>
            <p
              className={styles.highlightDescription}
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              If you are ready to elevate your coaching career,{" "}
              <a
                href="mailto:info@masterclasscricket.co.uk"
                style={{ color: "white", textDecoration: "underline" }}
              >
                contact us today
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Modals for popup content */}
      {/* 1-1 Coaching Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "coaching-1-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            &times;
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>1-2-1 Coaching Sessions</h3>
            <p className={styles.modalSubtitle}>
              Tailored Training for Every Cricketer
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our 1-2-1 coaching sessions are tailored to players of all ages
              and abilities, from complete beginners to experienced cricketers
              aspiring to reach county, regional, or professional levels.
              Whether you're looking to establish a solid technical foundation
              or refine advanced skills, our expert coaches provide personalised
              training designed to suit your individual needs.
            </p>
            <p className={styles.cardText}>
              Using high-level technical analysis, biomechanical breakdowns, and
              real-time video feedback, we ensure that every session is
              structured to provide maximum improvement. Our coaching covers:
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Batting Technique & Shot Selection
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Bowling Mechanics, Pace, and Spin Control
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Fielding Skills & Match Awareness
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Game Strategy & Mental Resilience
                </span>
              </div>
            </div>
            <h4 className={styles.sectionTitle}>How It Works</h4>
            <p className={styles.cardText}>
              Our 1-2-1 coaching process begins with an initial assessment to
              ensure we understand your current level, expectations, and goals.
              The assessment "Price Available on Request"
            </p>
            <p className={styles.cardText}>
              During this assessment, we'll have a conversation to gauge how you
              understand the game, followed by video analysis of both your
              batting and bowling. Using our Head Coach's sharp eye for detail,
              we'll provide feedback on your technique and explain our findings.
              We will then immediately start working on key areas for
              improvement, drilling the skills identified.
            </p>
            <p className={styles.cardText}>
              Following the session, we take the time to analyse your movements
              in greater detail, using advanced software tools to track
              progress. We'll then create a tailored training plan for you to
              follow.
            </p>
            <p className={styles.cardText}>
              After each session, we provide a session report form, which takes
              just five minutes to complete, allowing us to understand what
              you've absorbed from the session and adjust future coaching plans
              accordingly.
            </p>
            <p className={styles.cardText}>
              This high-end service is the pinnacle of the Masterclass Cricket
              experience, ensuring focused, personalised development to help you
              reach your full potential. We also provide homework drills and
              create exclusive coaching groups, where all communication and
              notes are managed effectively and clearly.
            </p>
            <p
              className={styles.cardText}
              style={{ fontWeight: "bold", marginTop: "20px" }}
            >
              <a
                href="https://wa.me/+447961692226"
                target="_blank"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Book your initial assessment today and take the next step
                towards becoming the best cricketer you can be.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Small Group Sessions Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "group-sessions-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Small Group Sessions</h3>
            <p className={styles.modalSubtitle}>
              Train with Peers, Excel Together
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our small group sessions provide the perfect balance of individual
              attention and competitive learning. Each cricketer benefits from
              personalised coaching while experiencing the match intensity of
              group dynamics.
            </p>
            <p className={styles.cardText}>
              We focus on scenario-based training, tactical awareness, and
              pressure simulations, ensuring players develop their skills in
              real-match conditions. This approach enhances decision-making,
              adaptability, and confidence, preparing players for high-level
              cricket.
            </p>
            <p className={styles.cardText}>
              For those who thrive in a team-driven environment, small group
              sessions are the key to unlocking their potential.
            </p>
          </div>
        </div>
      </div>

      {/* Academy Sessions Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "academy-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent} style={{ textAlign: "center" }}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>
              Train with Peers, Excel Together
            </h3>
            <p className={styles.modalSubtitle}>
              Structured Training for Age-Group Development
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              The Masterclass Academy is designed to create strong age-group
              training environments where players benefit from practising
              alongside their peers while receiving expert coaching. Our
              structured sessions focus on technical, tactical, and physical
              development, ensuring every player improves in a challenging yet
              supportive atmosphere.
            </p>
            <p className={styles.cardText}>
              At the heart of our academy is the Masterclass Cricket Curriculum,
              which provides a clear development pathway. Players are tested
              weekly in a group environment, tracking progress in batting,
              bowling, fielding, and game awareness.
            </p>
            <p className={styles.cardText}>
              By training in structured, high-quality sessions, players build
              their skills, gain confidence, and develop match-winning
              abilities—whether aiming for school A teams, borough, regional, or
              county squads.
            </p>
          </div>
        </div>
      </div>

      {/* Elite Performance Clinics Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "elite-clinics-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Elite Performance Clinics</h3>
            <p className={styles.modalSubtitle}>
              For Cricketers Who Aspire to Be the Best
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our Elite Performance Camps are designed for advanced players
              looking to take their game to the highest level. Focusing on
              technical mastery, tactical intelligence, and elite-level fitness,
              these camps are for those who want to play at the top—whether
              that's county, national, or professional cricket.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Biomechanical assessments to perfect technique
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Bowling speed & spin control enhancement
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Advanced batting strategies for professional cricket
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Strength & conditioning for power and endurance
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Exclusive access to professional cricketers & coaches
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "tours-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Tours for Clubs and Members</h3>
            <p className={styles.modalSubtitle}>
              Experience Cricket in Different Conditions
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our domestic and international tours provide a unique opportunity
              for players to gain invaluable match experience in different
              playing environments. Playing in challenging conditions enhances
              adaptability, cricketing intelligence, and mental resilience—key
              traits of a successful cricketer.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Competitive fixtures against elite opposition
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Exposure to different pitch & climate conditions
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Specialist coaching from international-level coaches
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Cultural exchange & team bonding experiences
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Events Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "corporate-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>
              Corporate Team-Building Events
            </h3>
            <p className={styles.modalSubtitle}>
              Cricket as a Tool for Leadership & Teamwork
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our corporate cricket experiences are designed to develop team
              cohesion, leadership skills, and resilience in a fun and
              competitive environment. Through interactive coaching sessions and
              match play, we tailor activities to improve team dynamics in the
              workplace.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Communication & strategic thinking
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Leadership & decision-making under pressure
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Team bonding & problem-solving skills
                </span>
              </div>
            </div>
            <p className={styles.cardText}>
              Whether you're looking for a motivational day out or a
              high-performance leadership workshop, our corporate events offer
              an unforgettable experience.
            </p>
          </div>
        </div>
      </div>

      {/* Bowling Assessment Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "bowling-assessment-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Online Bowling Assessments</h3>
            <p className={styles.modalSubtitle}>
              Get Expert Feedback—Anytime, Anywhere
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Our online bowling assessments allow players worldwide to receive
              detailed technical analysis from our expert coaches. Players
              submit video footage of their bowling action, and our coaching
              team provides comprehensive feedback to improve performance.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Biomechanical breakdown & correction strategies
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Action efficiency improvements to increase pace & accuracy
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Personalised drills & exercises for long-term success
                </span>
              </div>
            </div>
            <p className={styles.cardText}>
              This is perfect for aspiring fast bowlers and spinners looking for
              elite-level coaching without geographical barriers.
            </p>
          </div>
        </div>
      </div>

      {/* Batting Assessment Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "batting-assessment-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Online Batting Assessments</h3>
            <p className={styles.modalSubtitle}>Analyse, Adjust, Improve</p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Submit your batting footage for a professional technical breakdown
              from our coaches. Following the assessment, players receive a
              one-on-one coaching call, providing clear, actionable steps to
              improve their batting.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Detailed video analysis of batting stance, shot selection &
                  footwork
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Strategies for building a strong, adaptable batting game
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔</span>
                <span style={{ color: "white" }}>
                  Personalised drills to enhance timing, power, and shot range
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Mapping Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "mental-mapping-modal" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Mental Mind Mapping Course</h3>
            <p className={styles.modalSubtitle}>Masterclass Mind Mapping</p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              Success in cricket isn't just about skill—it's about mindset. Our
              Masterclass Mind Mapping course is designed to help cricketers of
              all levels develop a stronger mental game, equipping them with the
              tools to handle pressure, stay focused, and perform at their best
              when it matters most. Through expert-led sessions, players will
              learn proven mental techniques to enhance confidence, resilience,
              and decision-making on the field. Whether you're striving for peak
              performance or looking to overcome mental barriers, this course
              will give you the edge to succeed. Train Your Mind. Elevate Your
              Game.
            </p>
          </div>
          <div className={styles.modalFooter}>
            <p style={{ color: "white" }}>
              Train Your Mind. Elevate Your Game.
            </p>
          </div>
        </div>
      </div>

      {/* School Mapping Modal */}
      <div
        className={`${styles.modalOverlay} ${activeModal === "mental-mapping-modal1" ? styles.active : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalClose} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>School Coaching Programmes</h3>
            <p className={styles.modalSubtitle}>
              Bringing expert coaching to schools through teacher training and
              high-quality student masterclasses.
            </p>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.cardText}>
              At Masterclass Cricket, we provide specialist school coaching to
              enhance both teacher development and student cricketing ability.
              Our programmes ensure a structured, engaging, and high-quality
              coaching experience, helping schools raise their cricketing
              standards.
            </p>
            <h4 style={{ color: "white" }}>We Offer Two Key Services:</h4>
            <ul style={{ color: "white" }}>
              <li>
                <strong>Teacher Training & Development</strong> – Educational
                training days designed to improve teachers' knowledge of cricket
                techniques and drills, while also providing fun and effective
                session plans to enhance school coaching.
              </li>
              <li>
                <strong>Student Masterclasses</strong> – Professional coaching
                sessions aimed at developing skills, improving progression, and
                enhancing overall cricketing standards. These can be delivered
                during school hours or as an after-school club.
              </li>
            </ul>
            <p className={styles.cardText}>
              All sessions follow our Masterclass Cricket curriculum, ensuring a
              fun, structured, and high-quality learning experience for all
              students.
            </p>
            <p
              className={styles.cardText}
              style={{ fontWeight: "bold", color: "white" }}
            >
              Bring Professional Cricket Coaching to Your School –
              <a
                href="mailto:info@masterclasscricket.co.uk"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Enquire Now!
              </a>
            </p>
          </div>
          <div className={styles.modalFooter}>
            <p style={{ color: "white" }}>
              Train Your Mind. Elevate Your Game.
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes Masterclass Cricket Academy unique?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Masterclass Cricket Academy specializes in elite cricket coaching, covering batting, bowling, and fielding with advanced biomechanics and professional guidance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer one-on-one cricket coaching?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We provide 1-1 coaching, online assessments, and specialized cricket training for all skill levels.",
                },
              },
              {
                "@type": "Question",
                name: "Where is Masterclass Cricket Academy located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Masterclass Cricket Academy is based in the UK and offers local and online coaching options.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default CricketServicesSection;
