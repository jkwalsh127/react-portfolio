import React from "react";
import '../styles/WorkCard.css';
import '../styles/WorkCardMediaQueries.css';
import '../styles/Stoch.css';
import pineScript from '../images/pine-script.png';
import tradingview from '../images/tradingview.png';

export default function Stoch() {
  return (
    <article className='work-card-large'>
      <div className='work-card-head'>
        <a href='https://www.tradingview.com/script/4l7Zul9z-GTI-B/' target='_blank' rel='noreferrer'>
          <h4 className='tradingview-head'>Enhanced RSI Chart Indicator</h4>
        </a>
        <p className='work-dates'>
          Created April, 2021
        </p>
        <p className='work-dates'>
          Last updated July, 2021
        </p>
      </div>
      <a href='https://www.tradingview.com/script/4l7Zul9z-GTI-B/' target='_blank' rel='noreferrer'>
        <img src={tradingview} className='tradingview-img' alt='placeholder for stock chart indicator'></img>
      </a>
      <p className="text-barlow card-description-no-repo">
        Since I began this project in the spring of 2021, I have been coding more and more frequently. Not only is this indicator the first useful tool I built as a programmer, but this is still a core component to the trading algoritm that I continue to maintain and use to handle personal assets. 
        <div className='technologies-div'>
          <p className='text-barlow technologies-indicator'>
            This is built entirely with Trading View's proprietary Pine Script language.
          </p>
          <img src={pineScript} className='pine-script-img' alt='placeholder for pinescript and tradingview'></img>
        </div>
      </p>
    </article>
  )
}