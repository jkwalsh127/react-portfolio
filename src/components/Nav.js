import React from 'react';
import '../styles/Nav.css';
import '../styles/NavMediaQueries.css';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div className='nav'>
          <ul className='nav-tabs'>
            <li>
              <a
                  href="#aboutme"
                  onClick={() => handlePageChange('AboutMe')}
                  className={currentPage === 'AboutMe' ? 'nav-items-active' : 'nav-items'}
              >
                  About Me
              </a>
            </li>
            <li>
              <a
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-items-active' : 'nav-items'}
              >
                  Portfolio
              </a>
            </li>
            <li>
              <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-items-active' : 'nav-items'}
              >
                  Contact
              </a>
            </li>
            <li>
              <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-items-active' : 'nav-items'}
              >
                  Resume
              </a>
            </li>
          </ul>
        </div>
    )
}