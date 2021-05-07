import React from "react";
import { Link } from "react-router-dom";

const HeroHome = () => {
    return (
        <div>
            <h1>Award-winning custom designs and digital branding solutions</h1>

            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
            and engaging brand experiences. Find out more about our services.</p>

            <Link to="/about"><button>Learn more</button></Link>
        </div>
    )
}

export default HeroHome;