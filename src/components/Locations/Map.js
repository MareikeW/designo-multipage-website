import React from "react";

const Map = ({imageSource, imageAlt}) => {
    return (
        <div>
            <img src={imageSource} alt={imageAlt} />
        </div>
    )
}

export default Map;