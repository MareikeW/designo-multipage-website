import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #000000;
    text-align: center;
    display: flex;
    flex-direction: column;
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
`

export const StyledContactInformation = styled.div`
    color: rgba(255, 255, 255, 0.5);

    div:first-of-type {
        margin-top: 1em;
    }

    div:nth-of-type(2) {
        margin-top: 2.5em;
    }

`