import NavBar from "../component/NavBar/NavBar";
import banner from "../../assets/restaurant-seo.svg";
import Banner from "../component/Banner/Banner";
import Feature from "../component/Features/Feature";
import About from "../component/About/About";
import Pricing from "../component/Pricing/Pricing";
import Newsletter from "../component/Newsletter/Newsletter";
import Footer from "../component/Footer/Footer";

function HomePage() {
    return (
        <>
            <NavBar />
            <div
                className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20"
                id="home"
            >
                <Banner
                    banner={banner}
                    heading={"Omnichannel Management and Sales Service"}
                    subheading={
                        "Specializing in restaurant management solutions, VietKitchen offers an exceptional experience for customers."
                    }
                    btn1={"Explore Now"}
                    btn2={"Login"}
                />
            </div>
            <Feature />
            <About />
            <Pricing />
            <Newsletter />
            <Footer />
        </>
    );
}

export default HomePage;
