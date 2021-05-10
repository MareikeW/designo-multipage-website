import React, { useState } from "react";
import { StyledContactForm, FormInputFields, StyledInputContainer } from "./contact-form-styles";
import { ReactComponent as ErrorIcon } from "../../assets/contact/desktop/icon-error.svg";
const ContactForm = () => { 
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");
    const messageInput = document.getElementById("message");
    
    const nameContainer = document.getElementById("name-input-container");

    const nameErrorText = document.getElementById("name-error-text");
    const nameErrorIcon = document.getElementById("name-error-icon");
    
    const [inputText, setInputText] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    });

    /* Changes input colour when it's filled out */
    const handleChange = event => {
        const {name, value} = event.target;

        setInputText(prevState => {
            return {
                ...prevState,
                [name]: value
            }    
        });
    }


    const handleSubmit = event => {
        event.preventDefault();

        if (inputText.name === "") {
            console.log("empty");
        } else {
            console.log("not empty")
        }  
    }

    return (
        <StyledContactForm>
            <div>
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how 
                we can help your business grow. If you are looking for unique digital experiences that’s 
                relatable to your users, drop us a line.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
                <FormInputFields>
                    <StyledInputContainer id="name-input-container">
                        <input 
                            type="text" 
                            placeholder="Name"
                            id="name" 
                            name="name" 
                            value={inputText.name} 
                            className={inputText.name ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        <em id="name-error-text">Can't be empty</em>
                        <ErrorIcon id="name-error-icon" />
                    </StyledInputContainer>

                    <StyledInputContainer id="email-input-container">
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            id="email" 
                            name="email" 
                            value={inputText.email} 
                            className={inputText.email ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        <small id="email-error-text">Can't be empty</small>
                    </StyledInputContainer>

                    <StyledInputContainer id="tel-input-container">
                        <input 
                            type="tel" 
                            placeholder="Phone" 
                            id="tel"
                            name="tel" 
                            value={inputText.tel} 
                            className={inputText.tel ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        <small id="tel-error-text">Can't be empty</small>
                    </StyledInputContainer>

                    <StyledInputContainer id="message-input-container">
                        <textarea 
                            placeholder="Your Message" 
                            id="message"
                            name="message" 
                            value={inputText.message} 
                            className={inputText.message ? "filledInput" : "emptyInput"} 
                            onChange={handleChange}
                        />
                        <small id="message-error-text">Can't be empty</small>
                    </StyledInputContainer>
                </FormInputFields>
                <input type="submit" value="Submit" />
            </form>
        </StyledContactForm>
    )
}

export default ContactForm;