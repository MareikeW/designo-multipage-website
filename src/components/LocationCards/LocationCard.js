import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AustraliaIllustration } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as CanadaIllustration } from "../../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as UKIllustration } from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { StyledLocationCard } from "./LocationCard-styles";
import { ReactComponent as Circle } from "../../assets/shared/desktop/bg-pattern-small-circle.svg"

const LocationCard = ({title}) => {
    let illustrationSource;

    if (title === "Canada")
        illustrationSource = <CanadaIllustration />;
    else if (title === "Australia")
        illustrationSource = <AustraliaIllustration />;
    else if (title === "United Kingdom") 
        illustrationSource = <UKIllustration />;

    return (
        <StyledLocationCard>
            <svg className="circle"><Circle /></svg>
            {illustrationSource}
            <h3>{title}</h3>
            <Link to="/locations"><button>See Location</button></Link>
           
        </StyledLocationCard>
    )
}

export default LocationCard;