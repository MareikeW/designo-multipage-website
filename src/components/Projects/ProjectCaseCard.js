import React from "react";
import { StyledProjectCaseCard, StyledProjectImage } from "./projectCaseCard-styles";

const ProjectCaseCard = ({title, description}) => {

    return (
        <StyledProjectCaseCard>
            <StyledProjectImage background={title} /> 
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </StyledProjectCaseCard>
    )
}

export default ProjectCaseCard;