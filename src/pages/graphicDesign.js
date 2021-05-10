import React from "react";
import Header from "../components/Header-Footer/Header";
import DesignPageHero from "../components/Hero-Components/DesignPageHero";
import ProjectCaseCard from "../components/Projects/ProjectCaseCard";
import DesignCard from "../components/DesignCard/DesignCard";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";

const GraphicDesign = () => {
    return (
        <div>
            <Header />

            <DesignPageHero 
                title="Graphic design" 
                subtitle="We deliver eye-catching branding materials that are tailored to meet your business objectives." 
            />

            <ProjectCaseCard 
                title="Tim Brown" 
                description="A book cover designed for Tim Brown’s new release, ‘Change’" 
            />
            <ProjectCaseCard 
                title="Boxed water" 
                description="A simple packaging concept made for Boxed Water" 
            />
            <ProjectCaseCard 
                title="Science!" 
                description="A poster made in collaboration with the Federal Art Project" 
            />

            <DesignCard 
                title="App Design" 
                linkPath="/appdesign" 
                background="appdesign"
            />
            <DesignCard 
                title="Web Design" 
                linkPath="/webdesign" 
                background="webdesign"
            />

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default GraphicDesign;