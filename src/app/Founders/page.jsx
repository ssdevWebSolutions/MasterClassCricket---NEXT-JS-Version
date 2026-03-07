import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import FoundersLetter from "./FoundersLetter";
import ContactSection from "../components/ContactSection";
import SocialStatsSection from "../components/SocialStatsSection";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
const Founders = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <FoundersLetter />
      <ContactSection />
      <SocialStatsSection />
      <Footer />
      <Popup />
    </>
  );
};

export default Founders;
