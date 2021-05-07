import React from "react";

const AboutDescriptionCard = ({imageSource, imageAlt, title, description}) => {
    return (
        <div>
            <img src={imageSource} alt={imageAlt} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AboutDescriptionCard;