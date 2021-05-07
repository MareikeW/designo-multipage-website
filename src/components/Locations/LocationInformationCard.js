import React from "react";

const LocationInformationCard = ({country, officeName, street, city, postCode, phone, email}) => {
    return (
        <div>
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
        </div>
    )
}

export default LocationInformationCard;