import ContactSection from "./components/ContactSection";
import CricketServicesSection from "./components/CricketServicesSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdvertisementBar from "./components/AdvertisementBar";
import SocialStatsSection from "./components/SocialStatsSection";
import CoachesSection from "./homepage/CoachesSection";
import HeroSection from "./homepage/HeroSection";
import PartnersSection from "./homepage/PartnersSection";
import SocialMediaSection from "./homepage/SocialMediaSection";
import VideoSection from "./homepage/VideoSection";
import { Inter } from 'next/font/google'
import LoadingScreen from "./components/LoadingScreen";
import './globals.css'
import Popup from "./components/Popup";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Masterclass Cricket Academy',
  description: 'Professional cricket coaching and training with expert guidance. Join Masterclass Cricket for personalized coaching sessions and improve your cricket skills.',
  keywords: 'cricket coaching, cricket training, professional cricket coach, cricket lessons, cricket academy',
  authors: [{ name: 'Masterclass Cricket' }],
  creator: 'Masterclass Cricket',
  publisher: 'Masterclass Cricket',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Masterclass Cricket - Professional Cricket Coaching',
    description: 'Professional cricket coaching and training with expert guidance. Join Masterclass Cricket for personalized coaching sessions.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Masterclass Cricket',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Masterclass Cricket',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masterclass Cricket - Professional Cricket Coaching',
    description: 'Professional cricket coaching and training with expert guidance.',
    images: ['/twitter-image.jpg'], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo_.ico', sizes: '16x16', type: 'image/png' },
      { url: '/logo_.ico', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

const Main = () => {
  return <>
    {/* <Popup /> */}
    <LoadingScreen />
    <Navbar />
    <AdvertisementBar />
    <HeroSection />
    <VideoSection />
    <CricketServicesSection />
    <SocialMediaSection />
    {/* <CoachesSection /> */}
    <PartnersSection />
    <SocialStatsSection />
    <ContactSection />
    <Footer />
  </>
}

export default Main;