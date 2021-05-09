import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-dark.png";
import { StyledHeader, StyledLogo } from "./header-styles";
import { ReactComponent as HamburgerMenu } from "../../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as CloseMenu } from "../../assets/shared/mobile/icon-close.svg";

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

    /* Changes MenuIcon on click */
    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    let menuIcon = isChecked ? <CloseMenu className="closeMenuIcon" /> : <HamburgerMenu className="hamburgerMenuIcon" />;

    return (
        <StyledHeader>
            <StyledLogo>
                <img src={logo} alt="Logo Designo" />
            </StyledLogo>
            <nav>
                <input type="checkbox" name="isMenuOpen" id="check" checked={isChecked} onChange={handleChange} />
                <label for="check" class="checkButton">
                    {menuIcon} 
                </label>
                <ul>
                    <Link to="/about"><li>Our Company</li></Link>
                    <Link to="/locations"><li>Locations</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header;