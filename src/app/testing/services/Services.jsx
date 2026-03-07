import React from "react";
import {
  ArrowRight,
  Users,
  Trophy,
  Zap,
  Plane,
  Briefcase,
  Video,
  GraduationCap,
  Brain,
  Target,
  ChevronRight,
} from "lucide-react";
import "./Service.css";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "1-2-1 Coaching",
      slug: "1-2-1-coaching", // 👈 add this
      desc: "Intensive personal coaching to refine technique and correct biomechanics.",
      badge: "Premium",
      icon: Target,
      price: "From £50/hr",
    },
    {
      title: "Small Group Sessions",
      slug: "small-group-sessions", // 👈
      desc: "Train with peers in competitive scenarios to improve match awareness.",
      badge: "Group",
      icon: Users,
      price: "From £25/hr",
    },
    {
      title: "Masterclass Academy",
      slug: "masterclass-academy",
      desc: "Structured long-term development programs for committed age-group cricketers.",
      badge: "Academy",
      icon: Trophy,
      price: "Monthly",
    },
    {
      title: "Elite Performance Clinics",
      slug: "elite-performance-clinics",
      desc: "High-intensity specialist camps for advanced players targeting excellence.",
      badge: "Elite",
      icon: Zap,
      price: "Seasonal",
    },
    {
      title: "Tours for Clubs",
      slug: "tours-for-clubs",
      desc: "Organized international and domestic cricket tours for clubs and members.",
      badge: "Travel",
      icon: Plane,
      price: "Custom",
    },
    {
      title: "Corporate Events",
      slug: "corporate-events",
      desc: "Cricket-themed leadership and team-building events for companies.",
      badge: "Corporate",
      icon: Briefcase,
      price: "Custom",
    },
    {
      title: "Online Bowling Analysis",
      slug: "online-bowling-analysis",
      desc: "Remote biomechanical analysis and feedback for fast and spin bowlers.",
      badge: "Online",
      icon: Video,
      price: "£40/review",
    },
    {
      title: "School Programmes",
      slug: "school-programmes",
      desc: "Professional coaching solutions and curriculum support for schools.",
      badge: "Schools",
      icon: GraduationCap,
      price: "Contract",
    },
    {
      title: "Online Batting Analysis",
      slug: "online-batting-analysis",
      desc: "Expert technical analysis for batters using video review technology.",
      badge: "Online",
      icon: Video,
      price: "£40/review",
    },
    {
      title: "Mental Mind Mapping",
      slug: "mental-mind-mapping",
      desc: "Psychological conditioning course to build mental toughness and focus.",
      badge: "Mental",
      icon: Brain,
      price: "Course",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="header">
          <span className="badge">Elite Training</span>
          <h2 className="title">
            PREMIUM <span className="highlight">SERVICES</span>
          </h2>
          <p className="description">
            Comprehensive cricket coaching solutions tailored for individuals,
            teams, and institutions.
          </p>
        </div>

        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="bgIcon">
                <service.icon />
              </div>

              <div className="contentWrapper">
                <div className="iconBox">
                  <service.icon />
                </div>
                <div className="textContent">
                  <div className="cardHeader">
                    <div>
                      <span className="cardBadge">{service.badge}</span>
                      <h3 className="cardTitle">{service.title}</h3>
                    </div>
                    {/* <span className="priceTag">
                      {service.price}
                    </span> */}
                  </div>

                  <p className="cardDesc">{service.desc}</p>

                  <div className="actions">
                    <button className="bookBtn">
                      Book Now <ChevronRight />
                    </button>

                    <Link
                      href={`/programs/${service.slug}`} // 👈 dynamic URL
                      className="readMoreBtn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <button className="scheduleBtn">View Full Schedule</button>
        </div>
      </div>
    </section>
  );
}
