import React from "react";
import { StyledDesignPageHero } from "./hero-styles";

const DesignPageHero = ({title, subtitle}) => {
    return (
        <StyledDesignPageHero>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </StyledDesignPageHero>
    )
}

export default DesignPageHero;