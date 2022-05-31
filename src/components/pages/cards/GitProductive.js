import React from "react";
import '../styles/GitProductive.css';
import '../styles/WorkCard.css';
import gitproTimer from '../images/gitpro-timer.gif';
import handlebars from '../images/handlebars.png';

export default function GitProductive() {
    return (
        <article className='work-card-large'>
            <div className='work-card-head'>
                <a href='https://git-productive.herokuapp.com/' target='_blank' rel='noreferrer'>
                    <h4 className='gitpro-head'>GitProductive</h4>
                </a>
                <p className='work-dates'>
                    Created May 7th, 2022
                </p>
                <p className='work-dates'>
                    Last updated May 13th, 2022
                </p>
            </div>
            <a href='https://git-productive.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img src={gitproTimer} className='gitpro-img' alt='placeholder for git productive website'></img>
            </a>     
            <p className="card-description text-barlow">
                This project was my first full-stack application from scratch. I worked with two classmates to develop a tool designed for programmers, but one that can also be effective for anyone who works from a computer. It is equipped with features like the ability to record the amount of time spent and value earned on each project a user works on, a progarmmable timer that alerts users to take an exercise break, and also the ability to save notes or code-snippets for later user. The built in database stores all this info for a user to maintain as their project list grows.
                <a href='https://github.com/jkwalsh127/git-productive' target='_blank' rel='noreferrer'>
                    <h5 className='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div className='technologies-div-gitpro'>
                    <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' class='gitpro-badge' alt='javascript badge'></img>
                    <img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
                ' className='gitpro-badge' alt='node badge'></img>
                    <img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' class='gitpro-badge' alt='tailwind badge'></img>
                    <img src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white' className='gitpro-badge' alt='mysql badge'></img>
                    <img src='https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white' class='gitpro-badge' alt='sequelize badge'></img>
                    <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' className='gitpro-badge' alt='express.js badge'></img>
                    <img src={handlebars} className='gitpro-badge-handlebars' alt='handlebars badge'></img>
                </div>
            </p>           
        </article>
    )
}