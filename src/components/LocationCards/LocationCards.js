import React from "react";
import LocationCard from "./LocationCard";

const LocationCards = () => {
    return (
        <div>
            <LocationCard imageSource="../assets/shared/desktop/illustration-canada.svg" imageAlt="Illustration of famous Canadian Buildings." title="Canada" />
            <LocationCard imageSource="../assets/shared/desktop/illustration-australia.svg" imageAlt="Illustration of Operao in Sydney." title="Australia" />
            <LocationCard imageSource="../assets/shared/desktop/illustration-united-kingdom.svg" imageAlt="Illustration of Tower Bridge in London." title="United Kingdom"/>
        </div>
    )
}

export default LocationCards;