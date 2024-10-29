import Banner from "../Banner/Banner";
import bannerSvg from "../../../assets/restaurant-seo.svg";

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner
                banner={bannerSvg}
                heading={"Everything you need to manage and grow your business"}
                subheading={"Sign up quickly to get a 7-day free trial."}
                btn1={"Try Now"}
                btn2={"Sign Up"}
            />
        </div>
    );
};

export default Newsletter;
