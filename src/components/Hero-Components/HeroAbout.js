import React from "react";
import heroAboutImage from "../../assets/about/mobile/image-about-hero.jpg";
import { StyledHeroAbout } from "./hero-styles";

const HeroAbout = () => {
    return (
        <StyledHeroAbout>
            <img src={heroAboutImage} alt="Bird angle of office table where people with laptops are sitting at." />
            <div>
                <h1>About Us</h1>
                <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
                that make real impact. We’re always looking forward to creating brands, products, and 
                digital experiences that connect with our clients' audiences.</p>
            </div>
            
        </StyledHeroAbout>
    )
}

export default HeroAbout;