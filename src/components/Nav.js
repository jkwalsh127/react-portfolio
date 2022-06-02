import React from 'react';
import './styles/Nav.css';
import './styles/NavMediaQueries.css';
import { Link } from 'react-router-dom';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div className='nav'>
          <ul className='nav-tabs'>
            <li className='nav-items'>
              <Link to="/">
                  About Me
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/portfolio">
                  Portfolio
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/contact">
                  Contact
              </Link>
            </li>
            <li className='nav-items'>
              <Link to="/resume">
                  Resume
              </Link>
            </li>
          </ul>
        </div>
    )
}