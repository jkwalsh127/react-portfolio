import React from 'react';
import '../styles/Nav.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <div className='header'>
            <div className='my-name-label-border'>
                <div className='my-name-label'>
                    <h1 className='my-name'><a href='#aboutme' className="name-tag">Jake Walsh</a></h1>
                </div>
            </div>
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
        </div>
    )
}

export default Nav;