import React from "react";
import Header from "../components/Header-Footer/Header";
import HeroHome from "../components/Hero-Components/HeroHome";
import DesignCard from "../components/DesignCard/DesignCard";
import CharacteristicCard from "../components/CharacteristicCard/CharacteristicCard";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
  
            <HeroHome />

            <div>
                <DesignCard 
                    title="Web Design" 
                    linkPath="/webdesign" 
                    background="webdesign" 
                />

                <DesignCard 
                    title="App Design" 
                    linkPath="/appdesign" 
                    background="appdesign" 
                />

                <DesignCard 
                    title="Graphic Design" 
                    linkPath="/graphicdesign" 
                    background="graphicdesign" 
                />
            </div>
  
            <div>
                <CharacteristicCard 
                    characteristic="Passionate" 
                    description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                art, design, and technology into exciting new solutions."
                    svgName="passionate" 
                />
                
                <CharacteristicCard 
                    characteristic="Resourceful" 
                    description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our clients’ needs." 
                    svgName="resourceful"
                />

                <CharacteristicCard 
                    characteristic="Friendly" 
                    description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
                strive to give them the best experience a company can provide."
                    svgName="friendly"
                />
            </div>

            <GetInTouchComponent />

            <Footer />
        </div>
    )
}

export default Home;