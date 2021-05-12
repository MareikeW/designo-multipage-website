import React from "react";
import australia from "../../assets/locations/tablet/image-map-australia.png";
import canada from "../../assets/locations/tablet/image-map-canada.png";
import uk from "../../assets/locations/tablet/image-map-uk.png";
/* Desktop */
import australiaDesktop from "../../assets/locations/desktop/image-map-australia.png";
import canadaDesktop from "../../assets/locations/desktop/image-map-canada.png";
import ukDesktop from "../../assets/locations/desktop/image-map-united-kingdom.png";
import { StyledMap } from "./location-styles";

const MapComponent = ({imageAlt}) => {
    let imageSource;
    let imageDesktopSource;

    if (imageAlt === "Map of Toronto.") {
        imageSource = canada;
        imageDesktopSource = canadaDesktop;
    }  
    else if (imageAlt === "Map of New South Wales.") {
        imageSource = australia;
        imageDesktopSource = australiaDesktop;
    }
    else if (imageAlt === "Map of Rhyd-y-fro.") {
        imageSource = uk;
        imageDesktopSource = ukDesktop;
    }
        
    return (
        <StyledMap>
            <img src={imageSource} className="imageMobileTablet" alt={imageAlt} />
            <img src={imageDesktopSource} className="imageDesktop" alt={imageAlt} />
        </StyledMap>
    )
}

export default MapComponent;