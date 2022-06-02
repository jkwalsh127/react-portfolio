import React from 'react';
import './styles/Nav.css';
import './styles/NavMediaQueries.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='nav'>
          <ul className='nav-tabs'>
            <li className='nav-items'>
              <Link to="/react-portfolio/">
                  About Me
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/react-portfolio/portfolio">
                  Portfolio
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/react-portfolio/contact">
                  Contact
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/react-portfolio/resume">
                  Resume
              </Link>
            </li>
          </ul>
        </div>
    )
}