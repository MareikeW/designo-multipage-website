import React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import DesignCard from "../components/DesignCard";
import CharacteristicCard from "../components/CharacteristicCard";
import GetInTouchComponent from "../components/GetInTouchComponent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
  
            <HeroHome />

            <div>
                <DesignCard title="Web Design" />

                <DesignCard title="App Design" />

                <DesignCard title="Graphic Design" />
            </div>
  
            <div>
                <CharacteristicCard characteristic="Passionate" description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                art, design, and technology into exciting new solutions." />
                
                <CharacteristicCard characteristic="Resourceful" description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our clients’ needs." />

                <CharacteristicCard characteristic="Friendly" description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
                strive to give them the best experience a company can provide." />
            </div>

            <GetInTouchComponent />

            <Footer />
        </div>
    )
}

export default Home;