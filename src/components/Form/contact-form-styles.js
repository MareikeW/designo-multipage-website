import styled from "styled-components";

export const StyledContactForm = styled.div`
    background-color: #E7816B;
    text-align: center;
    color: #FFFFFF;
    padding: 0 1.5em;
    

    h1 {
        font-size: 2rem;
        padding-top: 2em;
    }

    p {
        font-size: 1rem;
    }

    form div {
        display: flex;
        flex-direction: column;
    }

    input[type=submit] {
        background-color: #FFFFFF;
        border-radius: 0.5em;
        border: none;
        padding: 1.15em 3.15em;
        text-transform: uppercase;
        margin-bottom: 4.5em;   
    } 
`

export const FormInputFields = styled.div`
    input,
    textarea {
        border: none;
        background: none;
        border-bottom: 1px solid #FFFFFF;
        padding: 1em;
        margin-bottom: 1.5em;
    }

    textarea {
        padding-bottom: 4.75em;
        margin-bottom: 2.5em;
    }

    input::placeholder,
    textarea::placeholder {
        color: #FFFFFF;
        opacity: 0.5;
    }
`