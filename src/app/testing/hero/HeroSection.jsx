'use client'
import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css"
/**
 * Hero component converted from provided HTML/CSS/JS.
 * - Keeps original CSS and animations.
 * - Modal with basic focus handling.
 * - WhatsApp button opens wa.me with prefilled message.
 *
 * Usage: <Hero />
 */

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const nameRef = useRef(null);

  // change to your phone number in international format (no plus)
  const phoneNumber = "919876543210";

  // Accessibility: trap focus in modal when open
  useEffect(() => {
    if (!modalOpen) return;

    const focusable = modalRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function onKey(e) {
      if (e.key === "Escape") {
        closeModal();
      }
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    // Focus the first input
    setTimeout(() => {
      if (nameRef.current) nameRef.current.focus();
    }, 40);

    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  function handleWhatsApp(e) {
    e.preventDefault();
    const text = encodeURIComponent(
      "Hi Coach, I'm interested in booking a session. Please share details."
    );
    const url = "https://wa.me/" + phoneNumber + "?text=" + text;
    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target["name"].value.trim();
    const phone = e.target["phone"].value.trim();
    const service = e.target["service"].value;

    if (!name || !phone || phone.length < 10 || !service) {
      alert("Please fill name, 10-digit phone and choose a service.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      closeModal();
      alert(
        `Thanks ${name}! We received your booking request. We will contact ${phone} to confirm the slot.`
      );
      console.log("Booking submitted:", {
        name,
        phone,
        service,
        timestamp: new Date().toISOString(),
      });
      // optionally clear form
      e.target.reset();
    }, 900);
  }

  

  return (
    <>
      {/* animated background */}
      <div className="animated-bg" aria-hidden="true" >
        <div className="cricket-ball-bg ball-1" />
        <div className="cricket-ball-bg ball-2" />
        <div className="cricket-ball-bg ball-3" />
        <svg
          className="stumps-decoration"
          viewBox="0 0 60 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="10" y="0" width="8" height="80" fill="rgba(212,175,55,0.15)" rx="2" />
          <rect x="26" y="0" width="8" height="80" fill="rgba(212,175,55,0.15)" rx="2" />
          <rect x="42" y="0" width="8" height="80" fill="rgba(212,175,55,0.15)" rx="2" />
          <rect x="5" y="5" width="50" height="4" fill="rgba(212,175,55,0.15)" rx="2" />
          <rect x="5" y="10" width="50" height="4" fill="rgba(212,175,55,0.15)" rx="2" />
        </svg>
      </div>

      <div className="page">
        <main className="hero" role="main" aria-label="Hero - Book coaching">

          
          <div className="hero-card" role="region" aria-labelledby="hero-title">
            <div className="badge-row" aria-hidden="true">
              <div className="badge-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="var(--gold)" strokeWidth="1" fill="rgba(212,175,55,0.06)" />
                  <path d="M6 8c2 2 4 2 6 2s4 0 6-2" stroke="var(--gold)" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="2 4" />
                  <path d="M6 16c2-2 4-2 6-2s4 0 6 2" stroke="var(--gold)" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="2 4" />
                </svg>
              </div>

              <div>
                <div className="badge-title">Premium Coaching</div>
                <div className="badge-sub">Personalized plans • Video analysis</div>
              </div>
            </div>

            <h1 id="hero-title" className="hero-title">
              Transform your game — <span className="gold">Book Session</span>
            </h1>

            <p className="hero-desc">
              I'm <strong>Coach Samuel</strong> — I turn players into match-winners. Personalized batting, bowling &amp; fielding coaching, small groups, measurable progress.{" "}
              <strong>Book a trial and feel the difference.</strong>
            </p>

            <div className="cta-wrap" role="group" aria-label="Primary actions">
              <div className="cta-left">
                <button
                  id="openBooking"
                  className="super-button"
                  aria-haspopup="dialog"
                  aria-label="Book Session"
                  onClick={openModal}
                >
                  <span>Book Session</span>
                  <span className="arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 6 L15 12 L9 18" stroke="#00ffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>

              <button id="whatsappBtn" className="btn-wa" aria-label="Message on WhatsApp" title="Message on WhatsApp" onClick={handleWhatsApp}>
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.92 11.92 0 0012 .2C6.22.2 1.46 4.96 1.46 10.74c0 1.89.5 3.76 1.45 5.4L.2 23l6.05-2.02a11.95 11.95 0 005.76 1.42c5.78 0 10.54-4.76 10.54-10.54 0-2.82-1.1-5.45-3.03-7.38z" fill="#25D366" />
                  <path d="M17.1 14.03c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.075-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.45.14-.6.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.66-1.58-.9-2.16-.24-.56-.48-.5-.66-.5-.18 0-.4 0-.62 0-.22 0-.58.08-.87.37-.3.3-1.16 1.14-1.16 2.78s1.19 3.23 1.36 3.46c.18.25 2.35 3.6 5.69 4.91 3.36 1.3 3.36.87 3.96.82.6-.05 1.95-.8 2.23-1.57.27-.78.27-1.44.19-1.57-.08-.14-.27-.22-.57-.37z" fill="#fff" />
                </svg>
              </button>
            </div>

            <div className="badges" aria-hidden="true">
              <div className="badge-pill" title="Players coached"><strong>3,200+</strong><span>Players coached</span></div>
              <div className="badge-pill" title="Years of experience"><strong>12</strong><span>Years experience</span></div>
            </div>
          </div>

          {/* visual preview */}
          <div className="visual" aria-hidden="true">
            <div className="latest-heading">Latest Event</div>

            <div className="image" role="img" aria-label="Event preview image">
              <div className="new-pill-wrap" aria-hidden="true">
                <div className="new-pill-bg" aria-hidden="true">
                  <div className="eclipse glow" />
                </div>
                <div className="new-pill" aria-hidden="true">
                  <div className="inner">New</div>
                </div>
              </div>

              <div className="left-badge" role="note" aria-label="Event title">
                <div className="title">Power Hitting Intensive</div>
              </div>
            </div>

            <div className="meta">
              <div className="left">
                <div className="dot-container">
                  <span className="dot" aria-hidden="true"></span>
                  <span className="dot-ring" aria-hidden="true"></span>
                </div>
                <span className="cta-text">Limited slots — Join now & level up!</span>
              </div>
            </div>
          </div>

          
        </main>
      </div>

      {/* booking modal */}
      <div
        className="modal-backdrop"
        id="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-hidden={!modalOpen}
        style={{ display: modalOpen ? "flex" : "none" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal" role="document" ref={modalRef}>
          <h3 id="modal-title">Book a Trial Session</h3>
          <p style={{ color: "#cfcfcf", margin: "6px 0 0 0", fontSize: "13px" }}>
            Quick booking — we'll message to confirm your slot.
          </p>

          <form id="bookingForm" className="form-row" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="name">Full name</label>
            <input id="name" name="name" ref={nameRef} className="input" type="text" placeholder="Full name" required />

            <label className="sr-only" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" className="input" type="tel" placeholder="Phone (10 digits)" inputMode="numeric" required pattern="[0-9]{10}" />

            <label className="sr-only" htmlFor="service">Service</label>
            <select id="service" name="service" className="select" required>
              <option value="">Choose service</option>
              <option>1:1 Batting Coaching</option>
              <option>Bowling Clinic</option>
              <option>Fielding & Fitness</option>
              <option>Monthly Membership</option>
            </select>

            <div className="form-actions">
              <button id="submitBooking" className="btn-submit" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Confirm Booking"}
              </button>
              <button id="cancelBooking" className="btn-cancel" type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
