import React from "react";
import { ReactComponent as PassionateIllustration } from "../../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as ResourcefulIllustration } from "../../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as FriendlyIllustration } from "../../assets/home/desktop/illustration-friendly.svg";
import { StyledCharacteristicCard } from "./characteristicCard-styles";

const CharacteristicCard = ({ characteristic, description }) => {
    let illustration;

    // conditional rendering
    if (characteristic === "Passionate") 
        illustration = <PassionateIllustration />
    else if (characteristic === "Resourceful") 
        illustration = <ResourcefulIllustration />
    else if (characteristic === "Friendly") 
        illustration = <FriendlyIllustration />

    return (
        <StyledCharacteristicCard>
            {illustration}
            <h3>{characteristic}</h3>
            <p>{description}</p>
        </StyledCharacteristicCard>
    )
}

export default CharacteristicCard;