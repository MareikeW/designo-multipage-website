import React from "react";
import talent from "../../assets/about/mobile/image-world-class-talent.jpg";
import realDeal from "../../assets/about/mobile/image-real-deal.jpg";
import talentTablet from "../../assets/about/tablet/image-world-class-talent.jpg";
import realDealTablet from "../../assets/about/tablet/image-real-deal.jpg";
import { StyledAboutDescriptionCard } from "./aboutDescriptionCard-styles";

const AboutDescriptionCard = ({imageAlt, title, description}) => {
    let imageSourceMobile;
    let imageSourceTablet;
    // Conditional Rendering
    if (title === "World-class talent") {
        imageSourceMobile = talent;
        imageSourceTablet = talentTablet;
    } 
    else if (title === "The real deal") {
        imageSourceMobile = realDeal;
        imageSourceTablet = realDealTablet;
    }
        
    return (
        <StyledAboutDescriptionCard>
            <img src={imageSourceMobile} className="mobileVersion" alt={imageAlt} />
            <img src={imageSourceTablet} className="tabletVersion" alt={imageAlt} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </StyledAboutDescriptionCard>
    )
}

export default AboutDescriptionCard;