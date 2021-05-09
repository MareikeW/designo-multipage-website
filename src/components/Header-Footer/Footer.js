import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.png";
import { StyledFooter, StyledLogo, HorizontalLine, StyledNavigation, StyledContactInformation } from "./footer-styles.js";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLogo>
                <img src={logo} alt="Logo Designo" />
                <HorizontalLine />
            </StyledLogo> 
            <StyledNavigation> 
                <ul>
                    <Link to="/about"><li>Our Company</li></Link>
                    <Link to="/locations"><li>Locations</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </StyledNavigation>
            <StyledContactInformation>
                <div>
                    <p><strong>Designo Central Office</strong></p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>

                <div>
                    <p><strong>Contact Us (Central Office)</strong></p>
                    <p><strong>P : +1 253-863-8967</strong></p>
                    <p><strong>M : contact@designo.co</strong></p>
                </div>

                <div>
                
                </div>
            </StyledContactInformation>     
        </StyledFooter>
    )
}

export default Footer;