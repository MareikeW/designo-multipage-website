import React from "react";
import talent from "../../assets/about/mobile/image-world-class-talent.jpg";
import realDeal from "../../assets/about/mobile/image-real-deal.jpg";
import talentTablet from "../../assets/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../../assets/about/desktop/image-world-class-talent.jpg";
import realDealTablet from "../../assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "../../assets/about/desktop/image-real-deal.jpg";
import { StyledAboutDescriptionCard } from "./aboutDescriptionCard-styles";

const AboutDescriptionCard = ({imageAlt, title, description, specialDesktopVersion}) => {
    let imageSourceMobile;
    let imageSourceTablet;
    let imageSourceDesktop;
    // Conditional Rendering
    if (title === "World-class talent") {
        imageSourceMobile = talent;
        imageSourceTablet = talentTablet;
        imageSourceDesktop = talentDesktop;
    } 
    else if (title === "The real deal") {
        imageSourceMobile = realDeal;
        imageSourceTablet = realDealTablet;
        imageSourceDesktop = realDealDesktop;
    }
        
    return (
        <StyledAboutDescriptionCard desktopImage={specialDesktopVersion}>
            <img src={imageSourceMobile} className="mobileVersion" alt={imageAlt} />
            <img src={imageSourceTablet} className="tabletVersion" alt={imageAlt} />
            <img src={imageSourceDesktop} className="desktopVersion" alt={imageAlt} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </StyledAboutDescriptionCard>
    )
}

export default AboutDescriptionCard;