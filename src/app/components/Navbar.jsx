'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/css/Navbar.module.css';

export default function Navbar() {
  const navToggleRef = useRef(null);
  const navMenuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const navToggle = navToggleRef.current;
    const navMenu = navMenuRef.current;
    const body = document.body;
    const navLinks = document.querySelectorAll(`.${styles['headerHero-nav-link']}`);
    const navbar = document.querySelector(`.${styles['headerHero-navbar']}`);

    const handleToggleClick = () => {
      navToggle.classList.toggle(styles.active);
      navMenu.classList.toggle(styles.active);
      body.classList.toggle('menu-open');
    };

    const handleLinkClick = (e) => {
      navLinks.forEach((link) => link.classList.remove(styles.active));
      e.target.classList.add(styles.active);

      // Close mobile menu when link is clicked
      if (window.innerWidth < 992 && navMenu.classList.contains(styles.active)) {
        navToggle.classList.remove(styles.active);
        navMenu.classList.remove(styles.active);
        body.classList.remove('menu-open');
      }
    };

    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('#headerHeroNavToggle') &&
        !event.target.closest('#headerHeroNavMenu')
      ) {
        navToggle.classList.remove(styles.active);
        navMenu.classList.remove(styles.active);
        body.classList.remove('menu-open');
      }
    };

    const updateNavbar = () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add(styles.scrolled);
        } else {
          navbar.classList.remove(styles.scrolled);
        }
      }
    };

    const handleResize = () => {
      // Close mobile menu if window is resized to desktop size
      if (window.innerWidth >= 992 && navMenu.classList.contains(styles.active)) {
        navToggle.classList.remove(styles.active);
        navMenu.classList.remove(styles.active);
        body.classList.remove('menu-open');
      }
    };

    // Add event listeners
    navToggle.addEventListener('click', handleToggleClick);
    navLinks.forEach((link) => link.addEventListener('click', handleLinkClick));
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', handleResize);

    // Initial call
    updateNavbar();

    // Cleanup function
    return () => {
      navToggle.removeEventListener('click', handleToggleClick);
      navLinks.forEach((link) => link.removeEventListener('click', handleLinkClick));
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation items configuration
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/Founders', label: 'Meet The Founder' },
    { href: '/masterclass_elite_cricket_academy.jsx', label: 'Elite Academy' },
    { href: '/meet-the-coaches', label: 'Meet The Coaches' }, // 👈 ADD THIS
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact Us' }
  ];


  // Function to check if current path is active
  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles['headerHero-navbar']}>
      <div className={styles['headerHero-navbar-container']}>
        <div className={styles['headerHero-navbar-logo']}>
          <Link href="/">
            <Image
              src="/logo_.ico"
              alt="Masterclass Cricket Logo"
              width={50}
              height={50}
              className={styles['headerHero-logo-image']}
            />
          </Link>
          <span className={styles['headerHero-logo-text']}>MASTERCLASS CRICKET</span>
        </div>

        <div
          className={styles['headerHero-navbar-toggle']}
          id="headerHeroNavToggle"
          ref={navToggleRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={styles['headerHero-navbar-menu']}
          id="headerHeroNavMenu"
          ref={navMenuRef}
        >
          {navItems.map((item) => (
            <li key={item.href} className={styles['headerHero-nav-item']}>
              <Link
                href={item.href}
                className={`${styles['headerHero-nav-link']} ${isActiveLink(item.href) ? styles.active : ''
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className={`${styles['headerHero-nav-item']} ${styles['headerHero-nav-cta']}`}>
            <a
              href="https://masterclassbookings-rt5n.vercel.app/"
              className={styles['headerHero-book-now-btn']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}