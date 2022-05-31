import React from "react";
import './styles/Resume.css';
import resume from './assets/Resume 2.0.pdf';

export default function Resume() {
    return (
        <div className="resume-wrap">
            <div className='resume'>
                Download a pdf of my resume <a className='resume-link' href={resume} download='jake-walsh-resume' target='_blank' rel='noreferrer'>here</a>
            </div>
            <div className="skills-wrapper">
                <div className="front-end-wrapper">
                    <h3 className="skills-head">Front-end Skills</h3>
                    <ul className="skills-list">
                        <li className="skills-item">
                            <p className="skill">
                                HTML
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                CSS
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                JavaScript
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                jQuery
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                Responsive Design
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                React
                            </p>
                        </li>
                        <li className="skills-list">
                            <p className="skill">
                                Bootstrap
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="back-end-wrapper">
                    <h3 className="skills-head">Back-end Skills</h3>
                    <ul className="skills-list">
                        <li className="skills-item">
                            <p className="skill">
                                APIs
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                Node
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                Express
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                mySQL Sequelize
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                MongoDB, Mongoose
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                REST
                            </p>
                        </li>
                        <li className="skills-item">
                            <p className="skill">
                                GraphQL
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}