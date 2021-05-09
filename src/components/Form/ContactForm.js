import React from "react";
import { StyledContactForm, FormInputFields } from "./contact-form-styles";
const ContactForm = () => {
    return (
        <StyledContactForm>
            <div>
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how 
                we can help your business grow. If you are looking for unique digital experiences that’s 
                relatable to your users, drop us a line.</p>
            </div>
            
            <form>
                <FormInputFields>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="tel" placeholder="Phone" />
                    <textarea placeholder="Your Message"/>
                </FormInputFields>
                <input type="submit" value="Submit" />
            </form>
        </StyledContactForm>
    )
}

export default ContactForm;