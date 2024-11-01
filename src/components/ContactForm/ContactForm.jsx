import React from 'react'
import Button from '../CustomButton/Button'
import './contact-form.css'
import { useDispatch } from 'react-redux'
import { toastSucess } from '../../store/slice/toast';

function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(toastSucess({
            text: 'Form Submitted'
        }));
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder='Name' required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Email' required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder='Enter a message...' required></textarea>
            <Button title='Submit' />
        </form>)
}

export default ContactForm