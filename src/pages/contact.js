import React from "react";
import Header from "../components/Header-Footer/Header";
import ContactForm from "../components/Form/ContactForm";
import LocationCards from "../components/LocationCards/LocationCards";
import Footer from "../components/Header-Footer/Footer";

const Contact = () => {
    return (
        <div>
            <Header />

            <ContactForm />

            <LocationCards />

            <Footer contactpage="true" />
        </div>
    )
}

export default Contact;