
import Navbar from "../components/Navbar";
import Testimonials from "./Testimonials";
import ContactSection from "../components/ContactSection";
import SocialStatsSection from "../components/SocialStatsSection";

import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const testimonials =()=>
{
    return <>
    {/* <LoadingScreen /> */}
    <Navbar />
    <Testimonials />
    <ContactSection />
     <SocialStatsSection />
     <Footer />
    </>
}

export default testimonials;