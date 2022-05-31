import React from "react";
import './styles/AboutMe.css';
import portrait from './images/portrait.jpeg';

export default function AboutMe() {
    return (
        <section className='about-me-wrap'>
        <article className='about-me'>
          <h3 className='about-me-header text-crimson'>About me</h3>
          <hr></hr>
          <p className='text-barlow'>As a programming hobbyist, I have spent a few years building numerous scripts for algorithmic stock trading that are capable of sending automated trades to stock exchanges, as well as chart indicators to assist in interpreting market fluctuations. More recently I have been working on building my full-stack skills in order to start a career in computer programming.</p>
          <p className='text-barlow'>I received a B.S. in biochemistry from UC Davis and have spent 4+ years as an aircraft structural mechanic for the California National Guard. On my free-time, I enjoy activities like camping, backpacking, fishing, vegetable gardening, woodworking, and of course, spending time with family and friends.</p>
        </article>
        <img className='self-portrait' src={portrait} alt='My self-portrait'></img>
      </section>
    );
}