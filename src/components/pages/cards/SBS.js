import React from "react";
import '../styles/SBS.css';
import '../styles/WorkCard.css';
import sbs from '../images/sbs.png';

export default function SBS() {
    return (
        <article className='work-card'>
            <div className='work-card-head'>
                <a href='https://jvbridge.github.io/sbs-email-verification/' target='_blank' rel='noreferrer'>
                    <h4 className='sbs-head'>SBS email verification</h4>
                </a>
                <p className='work-dates'>
                    Created April 11th, 2022
                </p>
                <p className='work-dates'>
                    Last updated April 17th, 2022
                </p>
            </div>
            <a href='https://jvbridge.github.io/sbs-email-verification/' target='_blank' rel='noreferrer'>
                <img src={sbs} className='sbs-img' alt='placeholder for sbs website'></img>
            </a>     
            <p class="card-description text-barlow">
                This was a peoject meant to further practice utilizing queries to third-party APIs in a proto-website. Using the power of JavaScript and jQuery, as well as several frameworks, this site is able to tell a user if their e-mail has been found to be involved in a data breach.
                <a href='https://github.com/jvbridge/sbs-email-verification' target='_blank' rel='noreferrer'>
                    <h5 className='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div class='technologies-div-sbs'>
                    <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' className='sbs-badge' alt='javascript badge'></img>
                    <img src='https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white' className='sbs-badge' alt='jquery badge'></img>
                </div>
            </p>           
        </article>
    )
}