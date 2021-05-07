import React from "react";
import Header from "../components/Header";
import DesignPageHero from "../components/DesignPageHero";
import ProjectCaseCard from "../components/ProjectCaseCard";
import DesignCard from "../components/DesignCard";
import GetInTouchComponent from "../components/GetInTouchComponent";
import Footer from "../components/Footer";

const GraphicDesign = () => {
    return (
        <div>
            <Header />

            <DesignPageHero title="Graphic design" subtitle="We deliver eye-catching branding materials that are tailored to meet your business objectives." />

            <ProjectCaseCard title="Tim Brown" description="A book cover designed for Tim Brown’s new release, ‘Change’" />
            <ProjectCaseCard title="Boxed water" description="A simple packaging concept made for Boxed Water" />
            <ProjectCaseCard title="Science!" description="A poster made in collaboration with the Federal Art Project" />

            <DesignCard title="App Design" linkPath="/appdesign" />
            <DesignCard title="Web Design" linkPath="/webdesign" />

            <GetInTouchComponent />
            <Footer />
        </div>
    )
}

export default GraphicDesign;