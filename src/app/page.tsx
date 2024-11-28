import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import LatestBlogs from "./components/LatestBlogs";
import Newsletter from "./components/Newsletter"; //remove
import Schedule from "./components/Schedule";
import Cradits from "./components/cradits";

const Home = () => {
    return <>
    <div className="home-page">
        <HeroSection />
        <AboutSection/>
        <Schedule />
        <LatestBlogs/>
        <Newsletter/>
        <Contact/>
        <Cradits />
    </div>
    </>
}

export default Home;