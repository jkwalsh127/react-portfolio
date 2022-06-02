import React from "react";
import './styles/WorkCard.css';
import './styles/WorkCardMediaQueries.css';
import './styles/WeatherDashboard.css';
import weatherDashboard from '../images/weather-dashboard.png';

export default function WeatherDashboard() {
    return (
        <article className='work-card'>
            <div className='work-card-head'>
                <a href='https://jkwalsh127.github.io/weather-dashboard/' target='_blank' rel='noreferrer'>
                    <h4 className='weather-dashboard-head'>Weather Dashboard</h4>
                </a>
                <p className='work-dates'>
                    Created April 7th, 2022
                </p>
                <p className='work-dates'>
                    Last updated April 11th, 2022
                </p>
            </div>
            <a href='https://jkwalsh127.github.io/weather-dashboard/' target='_blank' rel='noreferrer'>
                <img src={weatherDashboard} className='weather-dashboard-img' alt='placeholder for the weather dashboard site'></img>
            </a> 
            <p className="card-description text-barlow">
                This was my first app that queried a 3rd-party API. It is a useful tool that allows a user to select a location by name and view the current weather and UV-index along with a 5-day forecast. The app connects to the OpenWeatherMap API and also utilizes Moment.js.
                <a href='https://github.com/jkwalsh127/weather-dashboard' target='_blank' rel='noreferrer'>
                    <h5 className='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div className='technologies-div-sbs'>
                    <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' class='sbs-badge' alt='javascript badge'></img>
                    <img src='https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white' className='sbs-badge' alt='jquery badge'></img>
                </div>  
            </p>           
        </article>
    )
}