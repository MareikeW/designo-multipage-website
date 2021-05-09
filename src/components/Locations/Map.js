import React from "react";
import australia from "../../assets/locations/tablet/image-map-australia.png";
import canada from "../../assets/locations/tablet/image-map-canada.png";
import uk from "../../assets/locations/tablet/image-map-uk.png";
import { StyledMap } from "./location-styles";

const MapComponent = ({imageAlt}) => {
    let imageSource;

    if (imageAlt === "Map of Toronto.")
        imageSource = canada;
    else if (imageAlt === "Map of New South Wales.")
        imageSource = australia;
    else if (imageAlt === "Map of Rhyd-y-fro.")
        imageSource = uk;

    return (
        <StyledMap>
            <img src={imageSource} alt={imageAlt} />
        </StyledMap>
    )
}

export default MapComponent;