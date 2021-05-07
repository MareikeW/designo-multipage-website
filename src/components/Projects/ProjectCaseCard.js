import React from "react";

const ProjectCaseCard = ({title, description}) => {
    return (
        <div>
            
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCaseCard;