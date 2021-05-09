import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.png";
import { StyledFooter, StyledLogo, HorizontalLine, StyledNavigation, StyledContactInformation } from "./footer-styles.js";
import { ReactComponent as Facebook } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = ({contactpage}) => {
    return (
        <StyledFooter contactpage={contactpage}>
            <StyledLogo>
                <Link to="/"><img src={logo} alt="Logo Designo" /></Link>
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
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>

                <div>
                    <Facebook />
                    <Youtube />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </div>
            </StyledContactInformation>     
        </StyledFooter>
    )
}

export default Footer;