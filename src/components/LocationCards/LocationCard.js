import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({imageSource, imageAlt, title}) => {
    return (
        <div>
            <img src={imageSource}  alt={imageAlt} />
            <h3>{title}</h3>
            <Link to="/location"><button>See Location</button></Link>
        </div>
    )
}

export default LocationCard;