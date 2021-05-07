import React from "react";
import Navigation from "./Header-Footer/Navigation";

const Footer = () => {
    return (
        <footer>
                <div>
                    <Navigation />
                </div>

                <div>
                    <p><strong>Designo Central Office</strong>
                    3886 Wellington Street
                    Toronto, Ontario M9C 3J5</p>

                    <p><strong>Contact Us (Central Office)</strong>
                    <strong>P : +1 253-863-8967</strong>
                    <strong>M : contact@designo.co</strong></p>
                </div>     
            </footer>
    )
}

export default Footer;