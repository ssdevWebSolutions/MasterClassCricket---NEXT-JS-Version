"use client";

import "./EventDetails.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = {
  "new-years-eve-gala-match": {
    badge: "Featured Event",
    title: "New Year's Eve Gala Match",
    date: "31 December 2025",
    time: "19:00 - 23:30",
    venue: "Academy Grounds",
    price: "£20.00",
    ticketType: "General Admission",
    heroImage: "/images/events/event-ny-gala.jpg",
    overview:
      "Ring in the New Year with a high-energy cricket gala under the lights. Enjoy a showcase match featuring top local talent, big hits, and plenty of fireworks both on and off the field.",
    expect:
      "Expect live music, food stalls, family activities, and a festive countdown as the clock strikes midnight. There will be fan competitions, giveaways, and a special presentation during the innings break.",
    venueInfo:
      "Academy Grounds offers free on-site parking and allocated seating for advance ticket holders. Gates open at 17:30. Please arrive early to avoid queues at the entry and food courts.",
  },

  "winter-training-camp-open-day": {
    badge: "Open Day",
    title: "Winter Training Camp Open Day",
    date: "05 January 2026",
    time: "10:00 - 16:00",
    venue: "Indoor Centre",
    price: "£15.00",
    ticketType: "Player Pass",
    heroImage: "/images/events/event-winter-camp.jpg",
    overview:
      "Experience a full day inside our elite Winter Training Camp. This open day is designed for players and parents to see how we structure sessions, use technology, and build performance plans.",
    expect:
      "Take part in sample coaching sessions, fitness testing, skill stations, and Q&A with our coaching team. Players will receive feedback on key areas of their game and an overview of the full camp programme.",
    venueInfo:
      "The Indoor Centre is a fully covered facility with nets and performance zones. Please bring indoor shoes and training kit. Limited changing and viewing areas are available, so early arrival is recommended.",
  },

  "charity-celebrity-match": {
    badge: "Charity Event",
    title: "Charity Celebrity Match",
    date: "14 January 2026",
    time: "18:00 - 22:00",
    venue: "City Stadium",
    price: "£30.00",
    ticketType: "Charity Ticket",
    heroImage: "/images/events/event-charity.jpg",
    overview:
      "Watch cricket stars, local celebrities, and special guests go head-to-head in a fun, high-profile charity match in support of grassroots cricket initiatives.",
    expect:
      "Enjoy big hitting, on-field challenges, autograph sessions, and entertainment between overs. There will be fundraising activities, auctions, and opportunities to support community cricket projects.",
    venueInfo:
      "City Stadium is easily accessible by public transport and has limited on-site parking. Food and beverages are available throughout the venue. All proceeds from the event go directly to our charity partners.",
  },

  "national-t20-cup-final": {
    badge: "Upcoming Event",
    title: "National T20 Cup Final",
    date: "12 December 2025",
    time: "18:00 - 22:00",
    venue: "Lord's Cricket Ground, London",
    price: "£25.00",
    ticketType: "General Admission",
    heroImage: "/images/events/event-t20-final-hero.jpg",
    overview:
      "Join us for the thrilling conclusion of the National T20 Cup. Watch the top two teams battle it out under the lights at the Home of Cricket. This event promises high-octane action, entertainment, and a showcase of the best domestic talent in the country.",
    expect:
      "Aside from the main match, enjoy a festive atmosphere with food stalls, live music, and opportunities to meet cricket legends. There will be a junior skills zone for kids before the match starts.",
    venueInfo:
      "Lord's Cricket Ground is iconic. Gates open at 16:30. Please arrive early for security checks. No outside alcohol is permitted.",
  },
};

export default function EventDetailsPage({ params }) {
  const event = events[params.slug];

  if (!event) {
    notFound();
  }

  return (
    <div className="event-page">
      {/* HERO SECTION */}
      <header className="event-hero">
        <div
          className="event-hero-bg"
          style={{ backgroundImage: `url(${event.heroImage})` }}
        />

        <div className="event-hero-overlay" />

        <div className="event-hero-content">
          <div className="event-hero-top">
            <Link href="/" className="event-back">
              ← Back to Home
            </Link>
            <span className="event-brand">
              MASTERCLASS<span className="event-brand-dot">.</span>
            </span>
          </div>

          <div className="event-hero-main">
            <span className="event-hero-badge">{event.badge}</span>
            <h1 className="event-hero-title">{event.title}</h1>

            <div className="event-hero-meta">
              <div className="event-hero-meta-item">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>
              <div className="event-hero-meta-item">
                <Clock size={16} />
                <span>{event.time}</span>
              </div>
              <div className="event-hero-meta-item">
                <MapPin size={16} />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="event-main">
        <div className="event-main-inner">
          {/* LEFT TEXT SECTIONS */}
          <div className="event-main-left">
            <section className="event-section">
              <h2 className="event-section-title">Event Overview</h2>
              <p className="event-section-text">{event.overview}</p>
            </section>

            <section className="event-section">
              <h2 className="event-section-title">What to Expect</h2>
              <p className="event-section-text">{event.expect}</p>
            </section>

            <section className="event-section">
              <h2 className="event-section-title">Venue Information</h2>
              <p className="event-section-text">{event.venueInfo}</p>
            </section>
          </div>

          {/* RIGHT TICKET CARD */}
          <aside className="event-ticket-card">
            <div className="event-ticket-price">{event.price}</div>
            <div className="event-ticket-type">{event.ticketType}</div>

            <div className="event-ticket-detail">
              <span>Date</span>
              <span>{event.date}</span>
            </div>
            <div className="event-ticket-detail">
              <span>Time</span>
              <span>{event.time}</span>
            </div>
            <div className="event-ticket-detail">
              <span>Venue</span>
              <span className="event-ticket-venue">
                {event.venue.split(",")[0]}
              </span>
            </div>

            <button className="event-ticket-btn">Buy Tickets Now</button>

            <p className="event-ticket-note">Limited tickets available.</p>
          </aside>
        </div>
      </main>
    </div>
  );
}
