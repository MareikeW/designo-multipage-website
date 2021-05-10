import React, { useState } from "react";
import { StyledContactForm, FormInputFields } from "./contact-form-styles";
import { ReactComponent as ErrorIcon } from "../../assets/contact/desktop/icon-error.svg";
const ContactForm = () => {  
    const [inputText, setInputText] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    });

    const [isNameError, setIsNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isTelError, setIsTelError] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);

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

    /* Displays Error text & Error icon when form was submitted without filling out all inputs */
    const handleSubmit = event => {
        event.preventDefault();

        inputText.name === "" ? setIsNameError(true) : setIsNameError(false);
        
        inputText.email === "" ? setIsEmailError(true) : setIsEmailError(false);
        
        inputText.tel === "" ? setIsTelError(true) : setIsTelError(false);
        
        inputText.message === "" ? setIsMessageError(true) : setIsMessageError(false);

        if (inputText.name !== "" && inputText.email !== "" && inputText.tel !== "" && inputText.message !== "") {
            setInputText(
                {
                    name: "",
                    email: "",
                    tel: "",
                    message: ""
                }
            )
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
                    <div className="input-error">
                        <input 
                            type="text" 
                            placeholder="Name"
                            name="name" 
                            value={inputText.name} 
                            className={inputText.name ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        {isNameError === true ? <em className="error-text">Can't be empty</em> : null}
                        {isNameError === true ? <ErrorIcon className="error-icon" /> : null}
                    </div>

                    <div className="input-error">
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            name="email" 
                            value={inputText.email} 
                            className={inputText.email ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        {isEmailError === true ? <em className="error-text">Can't be empty</em> : null}
                        {isEmailError === true ? <ErrorIcon className="error-icon" /> : null}
                    </div>

                    <div className="input-error">
                        <input 
                            type="tel" 
                            placeholder="Phone" 
                            name="tel" 
                            value={inputText.tel} 
                            className={inputText.tel ? "filledInput" : "emptyInput"} 
                            onChange={handleChange} 
                        />
                        {isTelError === true ? <em className="error-text">Can't be empty</em> : null}
                        {isTelError === true ? <ErrorIcon className="error-icon" /> : null}
                    </div>

                    <div className="input-error">
                        <textarea 
                            placeholder="Your Message" 
                            name="message" 
                            value={inputText.message} 
                            className={inputText.message ? "filledInput" : "emptyInput"} 
                            onChange={handleChange}
                        />
                        {isMessageError === true ? <em className="error-text">Can't be empty</em> : null}
                        {isMessageError === true ? <ErrorIcon className="error-icon" /> : null}
                    </div>
                </FormInputFields>
                <input type="submit" value="Submit" />
            </form>
        </StyledContactForm>
    )
}

export default ContactForm;