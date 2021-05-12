import styled from "styled-components";
/* Mobile Images */
import webDesignBackground from "../../assets/home/mobile/image-web-design.jpg";
import appDesignBackground from "../../assets/home/mobile/image-app-design.jpg";
import graphicDesignBackground from "../../assets/home/mobile/image-graphic-design.jpg";
/* Tablet Images */
import webDesignTablet from "../../assets/home/tablet/image-web-design.jpg";
import appDesignTablet from "../../assets/home/tablet/image-app-design.jpg";
import graphicDesignTablet from "../../assets/home/tablet/image-graphic-design.jpg";
/* Desktop Images */
import webDesignDesktop from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesignDesktop from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesignDesktop from "../../assets/home/desktop/image-graphic-design.jpg";

export const StyledContainer = styled.div`
    position: relative;
    width: 90vw;
    height: 15.6em;
    margin: 1.5em auto;

    @media (min-width: 625px) {
        max-width: 625px;
    }

    @media (min-width: 1140px) {
        max-width: 541px;

        position: ${({height}) => {
            if (height) return "absolute";
        }};

        top: ${({height}) => {
            if (height === "webdesignDesktop") return "0";
            else if (height === "appdesignDesktop") return "0";
            else if (height === "graphicdesignDesktop") return "332px"; 
        }};

        left ${({height}) => {
            if (height === "webdesignDesktop") return "0";
            else if (height === "appdesignDesktop") return "571px";
            else if (height === "graphicdesignDesktop") return "571px";
        }};
        
    }
`

export const StyledDesignCardContainer = styled.div`
    border-radius: 1rem;
    width: 90vw;
    height: 15.6em;
    
    background-image: ${({background}) => {
        if (background === "webdesign") return `url(${webDesignBackground})`;
        else if (background === "appdesign") return `url(${appDesignBackground})`;
        else if (background === "graphicdesign") return `url(${graphicDesignBackground})`;
    }};
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;

    filter: brightness(50%);
    z-index: 5;
    position: absolute;

    @media (min-width: 625px) {
        max-width: 625px;
        background-image: ${({background}) => {
            if (background === "webdesign") return `url(${webDesignTablet})`;
            else if (background === "appdesign") return `url(${appDesignTablet})`;
            else if (background === "graphicdesign") return `url(${graphicDesignTablet})`;
        }};
    }

    @media (min-width: 1140px) {
        max-width: 541px;
        height: 308px;
        height: ${({height}) => {
            if (height === "webdesignDesktop") return "640px";
        }};
        background-image: ${({background}) => {
            if (background === "webdesign") return `url(${webDesignDesktop})`;
            else if (background === "appdesign") return `url(${appDesignDesktop})`;
            else if (background === "graphicdesign") return `url(${graphicDesignDesktop})`;
        }};
    }
`

export const StyledText = styled.div`
    position: absolute;
    z-index: 10;
    height: 15.6em;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-radius: 1rem;

    &:hover,
    &:focus {
        background-color: rgba(231, 129, 107, 0.5);
    }

    h3 {
        font-size: 1.75rem;
        line-height: 2.25rem;
        letter-spacing: 0.08rem;
        margin-top:  0;
        color: #FFFFFF;
        text-align: center;
    }

    button {
        margin-top: 1em;
        background: none;
        border: none;
        color: #FFFFFF;
        letter-spacing: 0.3rem;
        font-size: 1rem;
    }

    @media (min-width: 625px) {
        max-width: 625px;

        h3 {
            font-size: 2.5rem;
            line-height: 3rem;
            letter-spacing: 0.125rem;
        }
    }

    @media (min-width: 1140px) {
        max-width: 541px;
        height: 308px;

        height: ${({height}) => {
            if (height === "webdesignDesktop") return "640px";
        }};
    }
`

export const StyledDesignCardsHomeContainer = styled.div`
    @media (min-width: 1140px) {
        position: relative;
        height: 640px;
        width: 1112px;
        margin: 0 auto;
    }
`

export const StyledDesignCardsPageContainer = styled.div`
    @media (min-width: 1140px) {
        max-width: 1150px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 10em;
    }
`