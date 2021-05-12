import React from "react";
import LocationCard from "./LocationCard";
import { StyledLocationCards } from "./LocationCard-styles";

const LocationCards = () => {
    return (
        <StyledLocationCards>
            <LocationCard 
                title="Canada" 
            />
            <LocationCard 
                title="Australia" 
            />
            <LocationCard 
                title="United Kingdom"
            />
        </StyledLocationCards>
    )
}

export default LocationCards;