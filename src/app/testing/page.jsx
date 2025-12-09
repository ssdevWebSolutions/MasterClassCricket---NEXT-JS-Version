import ContactSection from "../components/ContactSection";
import CricketServicesSection from "../components/CricketServicesSection";

import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import SocialStatsSection from "../components/SocialStatsSection";
import PartnersSection from "../homepage/PartnersSection";
import SocialMediaSection from "../homepage/SocialMediaSection";
import VideoSection from "../homepage/VideoSection";
import HeroSection from "./hero/HeroSection";
import ServiceSection from "./services/Services";
import Services from "./services/Services";
import UpcomingEventsCarousel from "./UpcomingEventsCarousel/UpcomingEventsCarousel";

const Testing= () => {

    return <>
    {/* <Popup /> */}
    {/* <LoadingScreen /> */}
    <Navbar />
    {/* <HeroSection /> */}
    {/* <ServiceSection /> */}
    <UpcomingEventsCarousel />
    {/* <SocialMediaSection /> */}
   
    {/* <HeroSection /> */}
  
  
      {/* Services -> Upcoming Events -> etc */}
    {/* <VideoSection /> */}
  <ServiceSection />
    {/* <CricketServicesSection /> */}
    {/* <SocialMediaSection /> */}
    {/* <CoachesSection /> */}
    <PartnersSection />
    <SocialStatsSection />
    <ContactSection />
    {/* <Footer /> */}
    </>
}

export default Testing;

