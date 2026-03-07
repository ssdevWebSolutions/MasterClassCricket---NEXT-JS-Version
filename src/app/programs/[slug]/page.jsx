// src/app/programs/[slug]/page.jsx
"use client";

import "./slug.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  Check,
  Calendar,
  Users,
  Star,
  Trophy,
} from "lucide-react";

// ALL PROGRAM DATA HERE
const programs = {
  "1-2-1-coaching": {
    badge: "Premium Service",
    headingPrefix: "1-2-1",
    headingHighlight: "Coaching",
    intro:
      "The fastest way to improve. Dedicated time with an elite coach to break down your technique, identify improvements, and build a game plan for success.",
    whatToExpect: [
      "Biomechanical Video Analysis",
      "Personalized Drill Plans",
      "Tactical Game Awareness",
      "Mental Skills Training",
      "Equipment Advice",
      "Post-Session Report",
    ],
    whoText:
      "Our 1-2-1 sessions are suitable for cricketers of all ages (7+) and abilities. Whether you are a beginner looking to learn the basics, or an advanced player refining your skills for county trials, our coaches tailor the session to your specific needs.",
    duration: "60 Minutes",
    capacity: "1 Player",
    level: "All Levels",
    price: "£50",
    priceNote: "Secure payment powered by Stripe. Cancellation policy applies.",
  },

  "small-group-sessions": {
    badge: "Group",
    headingPrefix: "Small Group",
    headingHighlight: "Sessions",
    intro:
      "Train with teammates or friends in a competitive small-group environment designed to build skills, communication, and match awareness.",
    whatToExpect: [
      "Scenario–Based Training",
      "Peer Feedback & Collaboration",
      "Game Awareness Drills",
      "Role-Specific Coaching",
      "Video Feedback (where applicable)",
      "Progress Review",
    ],
    whoText:
      "Ideal for players who enjoy learning alongside others and want to simulate match situations in a supportive but challenging environment.",
    duration: "90 Minutes",
    capacity: "4–6 Players",
    level: "All Levels",
    price: "£25 per player",
    priceNote: "Secure payment powered by Stripe. Cancellation policy applies.",
  },
  "masterclass-academy": {
    badge: "Academy",
    headingPrefix: "Masterclass",
    headingHighlight: "Academy",
    intro:
      "A long-term high-performance training program designed to build technically strong and mentally resilient cricketers.",
    whatToExpect: [
      "Seasonal Training Plans",
      "Strength & Conditioning",
      "Skill Progression Tracking",
      "Performance Reports",
      "Match Simulation Sessions",
      "Coach Feedback Reviews",
    ],
    whoText:
      "Perfect for committed cricketers who want structured development across an entire season with ongoing coaching support.",
    duration: "Seasonal Program",
    capacity: "Limited Cohort",
    level: "Intermediate to Advanced",
    price: "Monthly",
    priceNote: "Pricing varies by age group and program length.",
  },
  "elite-performance-clinics": {
    badge: "Elite",
    headingPrefix: "Elite Performance",
    headingHighlight: "Clinics",
    intro:
      "High-intensity specialist clinics for advanced players targeting excellence and competitive performance.",
    whatToExpect: [
      "Biomechanics Optimization",
      "Advanced Skill Drills",
      "Performance Testing",
      "Mental Conditioning",
      "Speed & Agility Work",
      "Coach-Led Match Scenarios",
    ],
    whoText:
      "Ideal for serious young cricketers preparing for selections, tournaments, or high-performance pathways.",
    duration: "Varies by clinic",
    capacity: "12–20 Players",
    level: "Advanced",
    price: "Seasonal",
    priceNote: "Pricing varies based on clinic duration.",
  },
  "tours-for-clubs": {
    badge: "Travel",
    headingPrefix: "Tours for",
    headingHighlight: "Clubs",
    intro:
      "Domestic and international cricket tours for teams seeking professional match experience and high-quality opposition.",
    whatToExpect: [
      "Professional Match Fixtures",
      "High-Level Coaching",
      "Travel & Accommodation",
      "Match Footage & Analysis",
      "Team Bonding Activities",
      "Strength & Conditioning Sessions",
    ],
    whoText:
      "Perfect for clubs wanting structured tour experiences for player development and team building.",
    duration: "Multi-Day",
    capacity: "Club Teams",
    level: "All Levels",
    price: "Custom",
    priceNote: "Pricing depends on destination and duration.",
  },
  "corporate-events": {
    badge: "Corporate",
    headingPrefix: "Corporate",
    headingHighlight: "Events",
    intro:
      "Cricket-themed corporate experiences designed for leadership training, teamwork development, and staff engagement.",
    whatToExpect: [
      "Team-Building Cricket Games",
      "Leadership Challenges",
      "Coach-Led Skill Sessions",
      "Competitive Fun Activities",
      "Awards & Recognition",
      "Custom Event Planning",
    ],
    whoText:
      "Ideal for companies looking to host unique team-building events with a cricket twist.",
    duration: "Half-Day or Full-Day",
    capacity: "Corporate Groups",
    level: "All Levels",
    price: "Custom",
    priceNote: "Flexible packages available.",
  },
  "online-bowling-analysis": {
    badge: "Online",
    headingPrefix: "Online Bowling",
    headingHighlight: "Analysis",
    intro:
      "Remote biomechanical video analysis for bowlers, designed to improve accuracy, pace, and efficiency.",
    whatToExpect: [
      "Detailed Biomechanical Breakdown",
      "Technical Correction Points",
      "Drill Recommendations",
      "Follow-Up Review",
      "Side-by-Side Comparison",
      "Speed & Rhythm Evaluation",
    ],
    whoText:
      "Perfect for bowlers who want professional feedback without attending in person.",
    duration: "48-Hour Turnaround",
    capacity: "1 Player",
    level: "All Levels",
    price: "£40 per review",
    priceNote: "Upload your videos after purchase.",
  },
  "school-programmes": {
    badge: "Schools",
    headingPrefix: "School",
    headingHighlight: "Programmes",
    intro:
      "Professional cricket coaching programs delivered directly to schools, aligned with curriculum and PE goals.",
    whatToExpect: [
      "Curriculum-Aligned Coaching",
      "Term-Wise Progress Tracking",
      "Group Skill Development",
      "Coach-Led Game Scenarios",
      "Teacher Support Materials",
      "Season-End Awards",
    ],
    whoText:
      "Great for schools looking to elevate their sports development with certified cricket coaches.",
    duration: "Term-Based",
    capacity: "School Groups",
    level: "All Levels",
    price: "Contract",
    priceNote: "Pricing based on term length and number of sessions.",
  },
  "online-batting-analysis": {
    badge: "Online",
    headingPrefix: "Online Batting",
    headingHighlight: "Analysis",
    intro:
      "Professional video analysis for batters to identify technique errors and improve shot selection.",
    whatToExpect: [
      "Bat Swing Analysis",
      "Footwork Corrections",
      "Timing & Shot Selection Feedback",
      "Video Comparison",
      "Drill Plan",
      "Follow-Up Review",
    ],
    whoText:
      "Ideal for batters wanting expert feedback without visiting in person.",
    duration: "48-Hour Turnaround",
    capacity: "1 Player",
    level: "All Levels",
    price: "£40 per review",
    priceNote: "Upload your batting videos after purchase.",
  },
  "mental-mind-mapping": {
    badge: "Mental",
    headingPrefix: "Mental",
    headingHighlight: "Mind Mapping",
    intro:
      "A cricket-specific psychological conditioning program designed to build mental toughness and focus.",
    whatToExpect: [
      "Pressure Handling Techniques",
      "Focus Training",
      "Visualization Practice",
      "Confidence-Building",
      "Goal Setting",
      "Routine Development",
    ],
    whoText:
      "Perfect for young and adult cricketers wanting to improve consistency and mindset.",
    duration: "Course-Based",
    capacity: "Individual or Group",
    level: "All Levels",
    price: "Course",
    priceNote: "Pricing depends on program duration.",
  },

  // add more slugs later...
};

export default function ProgramDetailsPage({ params }) {
  const program = programs[params.slug];

  if (!program) {
    notFound();
  }

  return (
    <div className="slug-page">
      {/* NAVBAR */}
      <nav className="slug-nav">
        <div className="slug-nav-container">
          <Link href="/" className="back-link">
            <ChevronLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <span className="brand">
            MASTERCLASS<span className="brand-dot">.</span>
          </span>

          <div className="nav-spacer" />
        </div>
      </nav>

      {/* HEADER */}
      <header className="slug-header">
        <div className="slug-header-inner">
          <span className="slug-badge">{program.badge}</span>
          <h1 className="slug-title">
            {program.headingPrefix} <span>{program.headingHighlight}</span>
          </h1>
          <p className="slug-intro">{program.intro}</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="slug-main">
        <div className="slug-container">
          {/* LEFT COLUMN */}
          <div className="slug-left">
            {/* What to Expect */}
            <section className="section-block">
              <h2 className="section-title">What to Expect</h2>
              <div className="expect-grid">
                {program.whatToExpect.map((item, index) => (
                  <div key={index} className="expect-item">
                    <Check size={18} className="expect-icon" />
                    <span className="expect-text">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Who is this for */}
            <section className="section-block">
              <h2 className="section-title">Who is this for?</h2>
              <p className="who-text">{program.whoText}</p>
            </section>
          </div>

          {/* RIGHT COLUMN – Session details */}
          <aside className="details-card">
            <h3 className="details-title">Session Details</h3>

            <div className="details-row">
              <span className="details-label">
                <Calendar size={16} /> Duration
              </span>
              <span className="details-value">{program.duration}</span>
            </div>

            <div className="details-row">
              <span className="details-label">
                <Users size={16} /> Capacity
              </span>
              <span className="details-value">{program.capacity}</span>
            </div>

            <div className="details-row">
              <span className="details-label">
                <Trophy size={16} /> Level
              </span>
              <span className="details-value">{program.level}</span>
            </div>

            <div className="details-row last">
              <span className="details-label">
                <Star size={16} /> Price
              </span>
              <span className="details-price">{program.price}</span>
            </div>

            <button className="book-btn">Book Session Now</button>
            <p className="payment-note">{program.priceNote}</p>
          </aside>
        </div>
      </main>
    </div>
  );
}
