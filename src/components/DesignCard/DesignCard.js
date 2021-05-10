import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer, StyledDesignCardContainer, StyledText } from "./designCard-styles";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-right-arrow.svg"

const DesignCard = ({title, linkPath, background}) => {
    return (
        <Link to={linkPath}>
        <StyledContainer>
            <StyledDesignCardContainer background={background}>     
            </StyledDesignCardContainer>
            <StyledText>
                <h3>{title}</h3>
                <button>View Projects <ArrowRight /></button>
            </StyledText>
        </StyledContainer>
        </Link>
    )
}

export default DesignCard;