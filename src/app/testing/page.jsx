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

const Testing= () => {

    return <>
    {/* <Popup /> */}
    {/* <LoadingScreen /> */}
    <Navbar />
    {/* <AdvertisementBar /> */}
    {/* <HeroSection /> */}
    <div >
    <HeroSection />
    </div>
  
      {/* Services -> Upcoming Events -> etc */}
    {/* <VideoSection /> */}
    <CricketServicesSection />
    <SocialMediaSection />
    {/* <CoachesSection /> */}
    <PartnersSection />
    <SocialStatsSection />
    <ContactSection />
    <Footer />
    </>
}

export default Testing;

