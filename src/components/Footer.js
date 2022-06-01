import React from 'react';
import '../styles/Footer.css';
import github from './images/GitHub-Mark-Light-32px.png';
import linkedin from './images/linkedin.png';

export default function Footer() {
    return (
        <div className='contact-me'>
            <h3 className='contact-me-header'>Contact Me</h3>
            <hr className='hr-full'></hr>
            <ul className='contact-ul'>
            <li className='contact-link'><a href='mailto:jkwalsh127@gmail.com' target='_blank' rel='noreferrer' className='email-link'>jkwalsh127@gmail.com</a></li>
            <li  className='contact-link'>
                <a href='https://www.linkedin.com/in/jake--walsh/' rel='noreferrer' target='_blank'>
                <div className='contact-link-wrap'>
                    <img className='social-logo' alt='linkedin link' src={linkedin}></img>
                    <p className='link-text'>
                    LinkedIn
                    </p>
                </div>  
                </a>
            </li>                
            <li  className='contact-link'>
                <a href='https://github.com/jkwalsh127' rel='noreferrer' target='_blank'>
                <div className='contact-link-wrap'>
                <img className='social-logo' alt='github link' src={github}></img>
                <p className='link-text'>
                    GitHub
                </p>
                </div>
                </a>
            </li>            
            </ul>
      </div>
    )
}