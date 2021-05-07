import React from "react";
import { Link } from "react-router-dom";

const DesignCard = ({title, linkPath}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Link to={linkPath}><button>View Project</button></Link>
        </div>
    )
}

export default DesignCard;