import React from "react";
import Header from "../components/Header";
import DesignPageHero from "../components/DesignPageHero";
import ProjectCaseCard from "../components/ProjectCaseCard";
import DesignCard from "../components/DesignCard";
import GetInTouchComponent from "../components/GetInTouchComponent";
import Footer from "../components/Footer";

const WebDesign = () => {
    return (
        <div>
            <Header />

            <DesignPageHero title="Web Design" subtitle="We build websites that serve as powerful marketing tools 
            and bring memorable brand experiences." />

            <ProjectCaseCard title="Express" description="A multi-carrier shipping website for ecommerce businesses" />
            <ProjectCaseCard title="Transfer" description="Site for low-cost money transfers and sending money within seconds" />
            <ProjectCaseCard title="Photon" description="A state-of-the-art music player with high-resolution audio and DSP effects" />
            <ProjectCaseCard title="Builder" description="Connects users with local contractors based on their location" />
            <ProjectCaseCard title="Blogr" description="Blogr is a platform for creating an online blog or publication" />
            <ProjectCaseCard title="Camp" description="Get expert training in coding, data, design, and digital marketing" />

            <DesignCard title="App Design" />
            <DesignCard title="Graphic Design" />

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default WebDesign;