import React from "react";
import Header from "../components/Header-Footer/Header";
import HeroAbout from "../components/Hero-Components/HeroAbout";
import AboutDescriptionCard from "../components/AboutDescriptions/AboutDescriptionCard";
import LocationCards from "../components/LocationCards/LocationCards";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";

const About = () => {
    return (
        <div>
            <Header />

            <HeroAbout />

            <AboutDescriptionCard 
                imageAlt="Woman looking at a wall with photos."
                title="World-class talent"
                specialDesktopVersion="talent"
                description={`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                \nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`}
            />

            <LocationCards />

            <AboutDescriptionCard
                imageAlt="Photos are glued on a white wall."
                title="The real deal"
                specialDesktopVersion="deal"
                description={`As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                \nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
            />

            <GetInTouchComponent />

            <Footer />
        </div>
    )
}

export default About;