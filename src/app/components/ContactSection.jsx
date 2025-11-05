'use client';

import React, { useState } from 'react';
import styles from '../assets/css/ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Subject', formData.subject);
      formDataToSend.append('Message', formData.message);

      const response = await fetch("https://script.google.com/macros/s/AKfycbwE3r5mbEhwhMUOv-beY-m7GwrWMOzvJEjFq2Xv_CCs3Gdky3O1ksJgYmsNOI12avNXfA/exec", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.text();
      
      if (result === "Success") {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactUsSection} id="Contact">
      <div className={styles.contactUsContainer}>
        {/* Header */}
        <header className={styles.contactUsHeader}>
          <h2 className={styles.contactUsTitle}>Get In Touch</h2>
          <p className={styles.contactUsSubtitle}>
            Whether you have questions about our services, coaching programmes, or opportunities for partnerships and collaborations,
            we'd love to hear from you. Our <span className={styles.contactUsHighlight}>dedicated team</span> is here to assist you.
          </p>
        </header>

        {/* Content (Info and Form) */}
        <div className={styles.contactUsContent}>
          {/* Contact Information */}
          <div className={styles.contactUsInfo}>
            <h3 className={styles.contactUsInfoTitle}>Contact Information</h3>
            <p className={styles.contactUsInfoText}>
              Our academy operates Monday to Sunday, from 8:00 AM to 8:00 PM. Feel free to contact us using the details below. If you would like to visit us, please ensure you book an appointment using the form provided or give us a call.
            </p>

            <ul className={styles.contactUsInfoList}>
              {/* Address */}
              <li className={styles.contactUsInfoItem}>
                <div className={styles.contactUsInfoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.contactUsInfoContent}>
                  <span className={styles.contactUsInfoLabel}>Address</span>
                  <span className={styles.contactUsInfoValue}>Riverside Dr, Chiswick, London W4 2SH</span>
                </div>
              </li>

              {/* Phone */}
              <li className={styles.contactUsInfoItem}>
                <div className={styles.contactUsInfoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.contactUsInfoContent}>
                  <span className={styles.contactUsInfoLabel}>Phone</span>
                  <span className={styles.contactUsInfoValue}>+447961 692226</span>
                </div>
              </li>

              {/* Email */}
              <li className={styles.contactUsInfoItem}>
                <div className={styles.contactUsInfoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactUsInfoContent}>
                  <span className={styles.contactUsInfoLabel}>Email</span>
                  <span className={styles.contactUsInfoValue}>info@masterclasscricket.co.uk</span>
                </div>
              </li>

              {/* Hours */}
              <li className={styles.contactUsInfoItem}>
                <div className={styles.contactUsInfoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.contactUsInfoContent}>
                  <span className={styles.contactUsInfoLabel}>Working Hours</span>
                  <span className={styles.contactUsInfoValue}>Monday - Sunday: 8:00 AM - 8:00 PM</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className={styles.contactUsSocial}>
              <h4 className={styles.contactUsSocialTitle}>Follow Us</h4>
              <div className={styles.contactUsSocialList}>
                {/* Instagram */}
                <a href="https://www.instagram.com/masterclasscricket" 
                   className={styles.contactUsSocialItem}
                   target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/masterclasscricket" 
                   className={styles.contactUsSocialItem}
                   target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@masterclasscricket?_t=ZN-8uo9sqlW9hO&_r=1"
                   className={styles.contactUsSocialItem}
                   target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 2a4 4 0 0 0 4 4 4 4 0 0 1-4-4h-4v12a4 4 0 1 1-4-4v4a4 4 0 1 0 4 4V6h4z"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/uzi-arif-946674203/?originalSubdomain=uk"
                   className={styles.contactUsSocialItem}
                   target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2a4 4 0 0 1 4-2z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com/@masterclasscricketcoaching.?si=Ovy--9xFpdpV6dlu"
                   className={styles.contactUsSocialItem}
                   target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactUsFormContainer}>
            <form className={styles.contactUsForm} onSubmit={handleSubmit}>
              <h3 className={styles.contactUsFormTitle}>Send us a message</h3>

              {/* Name Field */}
              <div className={styles.contactUsFormGroup}>
                <label htmlFor="name" className={styles.contactUsLabel}>Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className={styles.contactUsInput} 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              {/* Email Field */}
              <div className={styles.contactUsFormGroup}>
                <label htmlFor="email" className={styles.contactUsLabel}>Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className={styles.contactUsInput} 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              {/* Subject Field */}
              <div className={styles.contactUsFormGroup}>
                <label htmlFor="subject" className={styles.contactUsLabel}>Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className={styles.contactUsInput}
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              {/* Message Field */}
              <div className={styles.contactUsFormGroup}>
                <label htmlFor="message" className={styles.contactUsLabel}>Message</label>
                <textarea 
                  id="message"
                  name="message"
                  className={styles.contactUsTextarea}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={styles.contactUsSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.contactUsMapContainer}>
          <iframe 
            className={styles.contactUsMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9987089406413!2d-0.2535617!3d51.476538000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e5e5e9b00d7%3A0xc0aef9bb62cccf41!2sKing&#39;s%20House%20School%20Sports%20Ground!5e0!3m2!1sen!2sin!4v1742372691324!5m2!1sen!2sin"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.contactUsMapOverlay}></div>
        </div>
      </div>

      {/* Background Cricket Elements */}
      <div className={styles.contactUsBgElements}>
        {/* Cricket Balls */}
        <div className={`${styles.contactUsBall} ${styles.contactUsBall1}`}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.cricketBallSvg}>
            <defs>
              <radialGradient id="ball-gradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#b91c1c" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#ball-gradient)" />
            <path d="M50,5 C50,5 50,95 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
            <path d="M50,5 C65,20 65,80 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
            <path d="M50,5 C35,20 35,80 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
            <circle cx="35" cy="35" r="8" fill="white" fillOpacity="0.2" />
          </svg>
        </div>

        <div className={`${styles.contactUsBall} ${styles.contactUsBall2}`}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.cricketBallSvg}>
            <circle cx="50" cy="50" r="45" fill="#f43f5e" />
            <path d="M50,5 C50,5 50,95 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
            <path d="M50,5 C65,20 65,80 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
            <path d="M50,5 C35,20 35,80 50,95" stroke="white" strokeWidth="2" fill="none"
              strokeLinecap="round" />
          </svg>
        </div>
        
         {/* Cricket Bats */}

        {/* Cricket Bats */}
        <div className={`${styles.contactUsBat} ${styles.contactUsBat1}`}>
          <svg viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg" className={styles.cricketBatSvg}>
            <defs>
              <linearGradient id="bat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#854d0e" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
            </defs>
            {/* Bat handle */}
            <rect x="43" y="10" width="14" height="100" rx="7" fill="#1e293b" />
            {/* Bat shoulder */}
            <path d="M43,110 C40,115 30,120 30,125 L30,135 L70,135 L70,125 C70,120 60,115 57,110 Z"
              fill="#a16207" />
            {/* Bat blade */}
            <path d="M30,135 L30,350 C30,380 50,390 50,390 C50,390 70,380 70,350 L70,135 Z"
              fill="url(#bat-gradient)" />
          </svg>
        </div>

        <div className={`${styles.contactUsBat} ${styles.contactUsBat2}`}>
          <svg viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg" className={styles.cricketBatSvg}>
            {/* Bat handle */}
            <rect x="43" y="10" width="14" height="100" rx="7" fill="#1e293b" />
            {/* Bat shoulder */}
            <path d="M43,110 C40,115 30,120 30,125 L30,135 L70,135 L70,125 C70,120 60,115 57,110 Z"
              fill="#a16207" />
            {/* Bat blade */}
            <path d="M30,135 L30,350 C30,380 50,390 50,390 C50,390 70,380 70,350 L70,135 Z"
              fill="#a16207" />
          </svg>
        </div>

        {/* Cricket Stumps */}
        <div className={`${styles.contactUsStumps} ${styles.contactUsStumps1}`}>
          <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" className={styles.cricketStumpsSvg}>
            {/* Base */}
            <rect x="10" y="160" width="100" height="10" rx="2" fill="#8b5cf6" />
            {/* Stumps */}
            <rect x="25" y="60" width="10" height="100" rx="2" fill="#f4f4f5" />
            <rect x="55" y="60" width="10" height="100" rx="2" fill="#f4f4f5" />
            <rect x="85" y="60" width="10" height="100" rx="2" fill="#f4f4f5" />
            {/* Bails */}
            <rect x="20" y="60" width="25" height="5" rx="2" fill="#eab308" />
            <rect x="50" y="60" width="25" height="5" rx="2" fill="#eab308" />
            <rect x="80" y="60" width="25" height="5" rx="2" fill="#eab308" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;