import React from "react";
import Header from "../components/Header-Footer/Header";
import DesignPageHero from "../components/Hero-Components/DesignPageHero";
import ProjectCaseCard from "../components/Projects/ProjectCaseCard";
import DesignCard from "../components/DesignCard/DesignCard";
import GetInTouchComponent from "../components/GetInTouch-Component/GetInTouchComponent";
import Footer from "../components/Header-Footer/Footer";

const AppDesign = () => {
    return (
        <div>
            <Header />

            <DesignPageHero 
                title="App design" 
                subtitle="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." 
            />

            <ProjectCaseCard 
                title="Airfilter" 
                description="Solving the problem of poor indoor air quality by filtering the air" 
            />
            <ProjectCaseCard 
                title="Eyecam" 
                description="Product that lets you edit your favorite photos and videos at any time" 
            />
            <ProjectCaseCard 
                title="Faceit" 
                description="Get to meet your favorite internet superstar with the faceit app" 
            />
            <ProjectCaseCard 
                title="Todo" 
                description="A todo app that features cloud sync with light and dark mode" 
            />
            <ProjectCaseCard 
                title="Loopstudios" 
                description="A VR experience app made for Loopstudios" 
            />

            <DesignCard 
                title="Web Design" 
                linkPath="/webdesign" 
            />
            <DesignCard 
                title="Graphic Design" 
                linkPath="/graphicdesign" 
            />

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default AppDesign;