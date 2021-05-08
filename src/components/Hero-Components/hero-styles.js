import styled from "styled-components";

export const StyledHeroHome = styled.div`
    background-color: #E7816B;
    text-align: center;
    height: 843px;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
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

    h1 {
        font-size: 2rem;
        line-height: 2.25rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6rem;
    }
`

export const StyledHeroButton = styled.button`
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    border: none;
    padding: 1.08rem 1.5rem;
    color: #333136;
`

export const StyledHeroPhoneImage = styled.div`
    margin-top: -5rem;
    
    
    img {
        position: relative;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
    }
`

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
        margin-bottom: 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.56em;
    }
`