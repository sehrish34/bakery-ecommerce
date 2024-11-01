import React from 'react'
import Button from '../components/CustomButton/Button'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactTextInfo from '../components/ContactTextInfo/ContactTextInfo'
import './contact.css'

function Contact() {
    return (
        <section className="contact-section">
            <h2 className="contact-heading">Contact Us</h2>
            <div className="contact-container">
                <ContactTextInfo />
                <ContactForm />
            </div>
        </section>)
}

export default Contact