import React from "react";
import Header from "../components/Header-Footer/Header";
import DesignPageHero from "../components/Hero-Components/DesignPageHero";
import ProjectCaseCard from "../components/Projects/ProjectCaseCard";
import DesignCard from "../components/DesignCard/DesignCard";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";
import { StyledProjectCardsContainer } from "../components/Projects/projectCaseCard-styles";
import { StyledDesignCardsPageContainer } from "../components/DesignCard/designCard-styles";

const WebDesign = () => {
    return (
        <div>
            <Header />

            <DesignPageHero 
                title="Web Design" 
                subtitle="We build websites that serve as powerful marketing tools 
                and bring memorable brand experiences." 
            />

            <StyledProjectCardsContainer>
                <ProjectCaseCard
                    title="Express" 
                    description="A multi-carrier shipping website for ecommerce businesses" 
                />
                <ProjectCaseCard 
                    title="Transfer" 
                    description="Site for low-cost money transfers and sending money within seconds" 
                />
                <ProjectCaseCard 
                    title="Photon" 
                    description="A state-of-the-art music player with high-resolution audio and DSP effects" 
                />
                <ProjectCaseCard 
                    title="Builder" 
                    description="Connects users with local contractors based on their location" 
                />
                <ProjectCaseCard 
                    title="Blogr" 
                    description="Blogr is a platform for creating an online blog or publication" 
                />
                <ProjectCaseCard
                    title="Camp" 
                    description="Get expert training in coding, data, design, and digital marketing" 
                />
            </StyledProjectCardsContainer>

            <StyledDesignCardsPageContainer>
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
            </StyledDesignCardsPageContainer>

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default WebDesign;