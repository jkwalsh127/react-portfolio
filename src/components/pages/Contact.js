import React, { useState } from 'react';
import './styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

export default function Form() {

    // State variables for form fields, set to empty string
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorNameMessage, setErrorNameMessage] = useState('');
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorMessageMessage, setErrorMessageMessage] = useState('');

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

    const handleNameBlur = () => {
        if (!userName) {
            setErrorNameMessage('Please include your name');
            return;
        }
        if (userName) {
            setErrorNameMessage('');
            return;
        }
    }
    const handleEmailBlur = () => {
        if (!userName) {
            setErrorEmailMessage('Please enter a valid email');
            return;
        }
        if (userName) {
            setErrorEmailMessage('');
            return;
        }
    }
    const handleMessageBlur = () => {
        if (!userName) {
            setErrorMessageMessage('Please include a message');
            return;
        }
        if (userName) {
            setErrorMessageMessage('');
            return;
        }
    }

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
            <form className='message-form'>
                <h4 className='field-label'>Your Name:</h4>
                {errorNameMessage && (
                <div>
                    <p>{errorNameMessage}</p>
                </div>
                )}
                <input
                    className='field'
                    value={userName}
                    name='userName'
                    onChange={handleInputChange}
                    onBlur={handleNameBlur}
                    type='text'
                    placeholder='Your Name'
                />
                <h4 className='field-label'>Email address:</h4>
                {errorEmailMessage && (
                <div>
                    <p>{errorEmailMessage}</p>
                </div>
                )}
                <input
                    className='field'
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    onBlur={handleEmailBlur}
                    type='email'
                    placeholder='Your Email'
                />
                <h4 className='field-label'>Message:</h4>
                {errorMessageMessage && (
                <div>
                    <p>{errorMessageMessage}</p>
                </div>
                )}
                <textarea
                    className='message-field field'
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    onBlur={handleMessageBlur}
                    type='text'
                />
                <button className='submit-btn' type='button' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}