import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialStatsSection from "../components/SocialStatsSection";

const contact = () => {
  return (
    <>
      {/* <Loading /> */}
      <Navbar />
      <ContactSection />
      <SocialStatsSection />
      <Footer />
    </>
  );
};
export default contact;
