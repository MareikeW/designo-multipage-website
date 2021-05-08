import React from "react";
import LocationCard from "./LocationCard";

const LocationCards = () => {
    return (
        <div>
            <LocationCard 
                title="Canada" 
            />
            <LocationCard 
                title="Australia" 
            />
            <LocationCard 
                title="United Kingdom"
            />
        </div>
    )
}

export default LocationCards;