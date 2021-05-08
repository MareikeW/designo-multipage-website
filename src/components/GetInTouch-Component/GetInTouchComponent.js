import React from "react";
import { Link } from "react-router-dom";
import { StyledGetInTouchContainer } from "./getInTouch-styles";

const GetInTouchComponent = () => {
    return (
        <StyledGetInTouchContainer>
            <div>
                <h2>Let’s talk about your project</h2>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Link to="/contact"><button>Get in touch</button></Link>
        </StyledGetInTouchContainer>
    )
}

export default GetInTouchComponent;