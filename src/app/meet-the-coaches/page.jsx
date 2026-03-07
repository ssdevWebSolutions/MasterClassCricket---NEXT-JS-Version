"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoachesSection from "../homepage/CoachesSection";
import SocialStatsSection from "../components/SocialStatsSection";
import ContactSection from "../components/ContactSection";

const MeetTheCoachesPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Coaches Section */}
      <section
        style={{
          backgroundColor: "#000", // Keeps same dark theme
          color: "#fff",
          paddingTop: "40px", // 👈 Fix for hidden heading
          paddingBottom: "40px",
          minHeight: "80vh",
        }}
      >
        <CoachesSection title="Meet Our Coaches & Mentor" />
      </section>

      {/* Social Stats Section */}
      <section
        style={{
          marginTop: "0",
          paddingTop: "0",
          backgroundColor: "#000", // make it blend with coaches section
        }}
      >
        <SocialStatsSection />
      </section>

      {/* Contact Section */}
      <section
        style={{
          marginTop: "0",
          paddingTop: "0",
        }}
      >
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MeetTheCoachesPage;
