import React from "react";
import talent from "../../assets/about/mobile/image-world-class-talent.jpg";
import realDeal from "../../assets/about/mobile/image-real-deal.jpg";
import { StyledAboutDescriptionCard } from "./aboutDescriptionCard-styles";

const AboutDescriptionCard = ({imageAlt, title, description}) => {
    let imageSource;
    // Conditional Rendering
    if (title === "World-class talent")
        imageSource = talent;
    else if (title === "The real deal")
        imageSource = realDeal;

    return (
        <StyledAboutDescriptionCard>
            <img src={imageSource} alt={imageAlt} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </StyledAboutDescriptionCard>
    )
}

export default AboutDescriptionCard;