import Script from "next/script";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialStatsSection from "../components/SocialStatsSection";
import AboutSection from "./AboutSection";

const about = () => {
  return (
    <>
      {/* <LoadingScreen /> */}
      <Navbar />
      <AboutSection />
      <ContactSection />
      <SocialStatsSection />
      <Footer />
    </>
  );
};

export default about;
