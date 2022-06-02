import React from 'react';
import './styles/Portfolio.css';
import './styles/PortfolioMediaQueries.css';
import Stoch from './cards/Stoch';
import GitProductive from './cards/GitProductive';
import SBS from './cards/SBS';
import WeatherDashboard from './cards/WeatherDashboard';


export default function Portfolio() {
    return (
        <section className='my-work'>
        <h3 className='my-work-header'>My Work</h3>

          <section className='work-section-container'>
    
            <div className='work-group-label-container'>
              <h4 className='work-label'>Asset</h4>
              <h4 className='work-label'>Trading</h4>
              <h4 className='work-label'>Applications</h4>
            </div>
    
            <section className='work-section-work-container'>
              <Stoch />
            </section>
    
          </section>
        
        <section className='work-section-container'>
    
          <div className='work-group-label-container'>
            <h4 className='work-label'>Websites</h4>
          </div>
    
          <section className='work-section-work-container'>

            <GitProductive />

            <SBS />
    
          </section>
        </section>
        
        <section className='work-section-container'>
    
          <div className='work-group-label-container'>
            <h4 className='work-label'>Utility Apps</h4>
          </div>
    
          <section className='work-section-work-container'>
    
            <WeatherDashboard />
    
          </section>
    
        </section>
      </section>
    )
}