import React from "react";

const LocationCard = ({imageSource, imageAlt, title}) => {
    return (
        <div>
            <img src={imageSource}  alt={imageAlt} />
            <h3>{title}</h3>
            <button>See Location</button>
        </div>
    )
}

export default LocationCard;