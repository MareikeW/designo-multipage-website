import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeroBackgroundCircle } from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import { StyledHeroHome, StyledHeroBackgroundCircle, StyledHeroButton, StyledHeroPhoneImage } from "./hero-styles";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone.png";

const HeroHome = () => {
    return (
        <StyledHeroHome>
            <StyledHeroBackgroundCircle>
                <HeroBackgroundCircle />
            </StyledHeroBackgroundCircle>
            
            <div>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                and engaging brand experiences. Find out more about our services.</p>
                <Link to="/about">
                    <StyledHeroButton>Learn more</StyledHeroButton>
                </Link>
            </div>

            <StyledHeroPhoneImage>
                <img src={heroPhoneImage} alt="Mobile Phone" />
            </StyledHeroPhoneImage>
        </StyledHeroHome>
    )
}

export default HeroHome;