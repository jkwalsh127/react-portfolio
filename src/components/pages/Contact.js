import React, { useState } from 'react';
import './styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

export default function Form() {

    // State variables for form fields, set to empty string
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Get name and value of input that triggered the change
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Set state based on input type
        if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Prevent page refresh
        e.preventDefault();

        // Validate email and check if userName field is empty
        if (!userName) {
            setErrorMessage('Please include your name');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }
        if (!message) {
            setErrorMessage('Please include a message to send');
            return;
        }
        alert(`Thank you ${userName}! Your message was received`);

        setEmail('');
        setUserName('');
        setMessage('');
    };

    return (
        <div className='form-wrapper'>
            <h3>Send me a message</h3>
            <form>
                <h4>Your Name:</h4>
                <input
                    className='field'
                    value={userName}
                    name='userName'
                    onBlur={handleInputChange}
                    type='text'
                    placeholder='Your Name'
                />
                <h4>Email address:</h4>
                <input
                    className='field'
                    value={email}
                    name='email'
                    onBlur={handleInputChange}
                    type='email'
                    placeholder='Your Email'
                />
                <h4>Message:</h4>
                <input
                    className='message-field field'
                    value={message}
                    name='message'
                    onBlur={handleInputChange}
                    type='text'
                    placeholder='Leave me a message'
                />
                <button type='button' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}