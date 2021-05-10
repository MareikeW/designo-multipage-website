import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #000000;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* Footer in /contact is different */
    padding-top: ${({contactpage}) => {
        if (contactpage) return "4em";
        else return "23em"
    }}
`

export const StyledLogo = styled.div`
    img {
        width: 202px;
        
    }
`
export const HorizontalLine = styled.div`
    border: 1px solid #FFFFFF;
    width: 90%;
    margin: 1em auto;
    opacity: 0.1;
`

export const StyledNavigation = styled.nav`
    ul li {
        color: #FFFFFF;
        font-size: 0.875em;
        text-transform: uppercase;
        letter-spacing: 0.125em;
        padding: 1em;
    }

    ul li:hover,
    ul li:focus {
        text-decoration: underline;
    }
`

export const StyledContactInformation = styled.div`
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 1px;

    div:first-of-type {
        margin-top: 1em;
    }

    div:nth-of-type(2) {
        margin-top: 2.5em;
    }
`

export const StyledSocialMediaButtons = styled.div`
    
    ul {
        margin: 2.5em 0;
        display: flex;
        lex-direction: row;
        justify-content: center;
    }

    ul li {
        margin: 0 0.5em;
    }

    ul li:hover,
    ul li:focus {
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(82%) sepia(17%) saturate(2053%) hue-rotate(304deg) brightness(112%) contrast(101%);
    }
`