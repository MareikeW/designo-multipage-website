import styled from "styled-components";

/* HOMEPAGE */
export const StyledHeroHome = styled.div`
    background-color: #E7816B;
    text-align: center;
    height: 843px;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin: 0 auto 7em auto;
    max-width: 625px;

    @media (min-width: 625px) {
        border-radius: 1rem;
    }
`

export const StyledHeroBackgroundCircle = styled.div`
    position: absolute;
    left: 0;
    top: 100px;
`

export const StyledHeroTextContainer = styled.div`
    max-width: 689px;
    margin: 0 auto;
    margin-top: 75px;
    padding: 0 1em;
    z-index: 10;

    h1 {
        font-size: 2rem;
        line-height: 2.25rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6rem;
        margin: 1em;
    }

    button {
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        border: none;
        padding: 1.08rem 1.5rem;
        color: #333136;
        cursor: pointer;
        margin: 1em;
    }

    button:hover,
    button:focus {
        background-color: #FFAD9B;
        color: #FFFFFF;
    }
`

export const StyledHeroPhoneImage = styled.div`
    margin-top: -5rem;
    z-index: 0;
        
    img {
        position: relative;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
    }
`

/* DESIGN PAGES FOR WEB, APP, AND GRAPHIC */
export const StyledDesignPageHero = styled.div`
    background-color: #E7816B;
    text-align: center;
    color: #FFFFFF;
    padding: 1em;
    height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    h1 {
        font-size: 2rem;
        margin-bottom: 0.6em;
    }

    p {
        font-size: 1rem;
        line-height: 1.56em;
    }
`

/* ABOUT PAGE */
export const StyledHeroAbout = styled.div`
    background-color:  #E7816B;
    text-align: center;
    color: #FFFFFF;
    margin: 0 auto;
    

    h1 {
        font-size: 2rem;
        margin-top: 2em;
    }

    p {
        padding: 1.5em 1em 5em 1em;
        margin-bottom: 0;
    }

    img {
        max-height: 320px; 
        max-width: 100%;
    }
`