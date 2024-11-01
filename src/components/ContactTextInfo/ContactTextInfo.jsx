import React from 'react'
import './contact-text-info.css'
import image from '../../assets/images/bakeryshop.jpeg'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactTextInfo() {
    return (
        <div className="image-container">
            <img
                src={image}
                alt="Contact Us"
                className="contact-image"
            />
            <p className="contact-text">
                We’d love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us. Your thoughts are valuable to us.
            </p>
            <p className="contact-text">
                <span className="icon-container">
                    <FaMapMarkerAlt className="contact-icon" />
                </span>
                123 Bakery St, Sweet Town, ST 45678
            </p>
            <p className="contact-text">
                <span className="icon-container">
                    <FaPhone className="contact-icon" />
                </span>
                (123) 456-7890
            </p>
            <p className="contact-text">
                <span className="icon-container">
                    <FaEnvelope className="contact-icon" />
                </span>
                info@bakery.com
            </p>
        </div>)
}

export default ContactTextInfo