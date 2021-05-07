import React from "react";

const CharacteristicCard = ({characteristic, description}) => {
    return (
        <div>
            <h3>{characteristic}</h3>
            <p>{description}</p>
        </div>
    )
}

export default CharacteristicCard;