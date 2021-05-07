import React from "react";
import Header from "../components/Header-Footer/Header";
import ContactForm from "../components/Form/ContactForm";
import LocationCards from "../components/LocationCards";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Header />

            <ContactForm />

            <LocationCards />

            <Footer />
        </div>
    )
}

export default Contact;