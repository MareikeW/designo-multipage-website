import React from "react";
import { StyledLocationInfoCard } from "./location-styles";

const LocationInformationCard = ({country, officeName, street, city, postCode, phone, email}) => {
    return (
            <StyledLocationInfoCard>
                <h2>{country}</h2>
                <div>
                    <p><strong>Designo {officeName}</strong></p>
                    <p>{street}</p>
                    <p>{city} {postCode}</p>
                </div>

                <div>
                    <p><strong>Contact</strong></p>
                    <p>P: {phone}</p>
                    <p>M: {email}</p>
                </div>
            </StyledLocationInfoCard>
    )
}

export default LocationInformationCard;