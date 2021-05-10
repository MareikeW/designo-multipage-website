import React from "react";
import { Link } from "react-router-dom";
import { StyledDesignCardContainer } from "./designCard-styles";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-right-arrow.svg"

const DesignCard = ({title, linkPath, background}) => {
    return (
        <Link to={linkPath}>
            <StyledDesignCardContainer background={background}>
                <h3>{title}</h3>
                <button>View Projects <ArrowRight /></button>
            </StyledDesignCardContainer>
        </Link>
    )
}

export default DesignCard;