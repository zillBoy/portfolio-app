// Internal Components 
import Navigation from "../components/Navigation";
import HeroHeader from "../components/HeroHeader";
import Work from "../components/Work";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navigation textColor='white' />
            <HeroHeader />
            <Work />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Home;