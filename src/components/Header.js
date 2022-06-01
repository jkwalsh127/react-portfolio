import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className='header'>
            <div className='my-name-label-border'>
                <div className='my-name-label'>
                    <h1 className='my-name'><a href='#aboutme' className="name-tag">Jake Walsh</a></h1>
                </div>
            </div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}