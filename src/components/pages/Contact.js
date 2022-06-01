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
            setErrorNameMessage('-- Please include your name --');
        } else if (userName) {
            setErrorNameMessage('');
        }
        if (message) {
            setErrorMessageMessage('');
        }       
        if (email) {
            setErrorEmailMessage('');
        }
    }
    const handleEmailBlur = () => {
        if (!email || !validateEmail(email)) {
            setErrorEmailMessage('-- Please enter a valid email --');
        } else if (email) {
            setErrorEmailMessage('');
        }
        if (message) {
            setErrorMessageMessage('');
        }
        if (userName) {
            setErrorNameMessage('');
        }
    }
    const handleMessageBlur = () => {
        if (!message) {
            setErrorMessageMessage('-- Please include a message --');
        } else if (message) {
            setErrorMessageMessage('');
        }
        if (userName) {
            setErrorNameMessage('');
        }
        if (email) {
            setErrorEmailMessage('');
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
            <h3 className='welcome-head'>
                Thanks for visiting! I would be happy to hear from you.
            </h3>
            <h3 className='welcome-banner'>
                Feel free to leave me or message or reach me through my email or socials
            </h3>
            {errorMessage && (
                <div>
                    <p className='error-message'>{errorMessage}</p>
                </div>
            )}
            <form className='message-form'>
                <h4 className='field-label'>Your Name:</h4>
                <div className='field-wrap'>
                    <input
                        className='field'
                        value={userName}
                        name='userName'
                        onChange={handleInputChange}
                        onBlur={handleNameBlur}
                        type='text'
                        placeholder='Your Name'
                    />
                    {errorNameMessage && (
                    <div>
                        <p className='error-message'>{errorNameMessage}</p>
                    </div>
                    )}
                </div>
                <h4 className='field-label'>Email address:</h4>
                <div className='field-wrap'>
                    <input
                        className='field'
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        onBlur={handleEmailBlur}
                        type='email'
                        placeholder='Your Email'
                    />
                    {errorEmailMessage && (
                    <div>
                        <p className='error-message'>{errorEmailMessage}</p>
                    </div>
                    )}
                </div>
                <div className='field-wrap'>
                    <h4 className='field-label'>Leave me a message:</h4>
                    {errorMessageMessage && (
                        <div>
                            <p className='error-message-message'>{errorMessageMessage}</p>
                        </div>
                    )}
                </div>
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
        </div>
    );
}