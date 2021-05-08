import React from "react";
import { Link } from "react-router-dom";
import { StyledDesignCardContainer } from "./designCard-styles";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-right-arrow.svg"

const DesignCard = ({title, linkPath, background}) => {
    return (
        <StyledDesignCardContainer className="container--dark" background={background}>
            <h3>{title}</h3>
            <Link to={linkPath}><button>View Projects <ArrowRight /></button></Link>
        </StyledDesignCardContainer>
    )
}

export default DesignCard;