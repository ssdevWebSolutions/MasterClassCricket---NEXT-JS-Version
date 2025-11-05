
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar"
import FoundersLetter from "./FoundersLetter"
import ContactSection from "../components/ContactSection";
import SocialStatsSection from "../components/SocialStatsSection";
import Footer from "../components/Footer";
const Founders =()=>{
    return <>
     {/* <LoadingScreen /> */}
        <Navbar />
        <FoundersLetter />
        <ContactSection />
     <SocialStatsSection />
     <Footer />

    </>
}

export default Founders;