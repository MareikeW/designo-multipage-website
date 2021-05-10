import styled from "styled-components";
import webDesignBackground from "../../assets/home/mobile/image-web-design.jpg";
import appDesignBackground from "../../assets/home/mobile/image-app-design.jpg";
import graphicDesignBackground from "../../assets/home/mobile/image-graphic-design.jpg";

export const StyledDesignCardContainer = styled.div`
    width: 90vw;
    text-align: center;
    color: #FFFFFF;
    border-radius: 1rem;
    height: 15.6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 1.5em auto;
    background-image: ${({background}) => {
        if (background === "webdesign") return `url(${webDesignBackground})`;
        else if (background === "appdesign") return `url(${appDesignBackground})`;
        else if (background === "graphicdesign") return `url(${graphicDesignBackground})`;
    }};
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;

    h3 {
        font-size: 1.75rem;
        line-height: 2.25rem;
        letter-spacing: 0.08rem;
        margin-top:  0;
    }

    button {
        margin-top: 1em;
        background: none;
        border: none;
        color: #FFFFFF;
        letter-spacing: 0.3rem;
        font-size: 1rem;
    }

    button:hover,
    button:focus {
        color: #E7816B;
        text-decoration: underline;
    }
`