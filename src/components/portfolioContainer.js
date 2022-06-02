import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PorftolioContainer() {
    return (
        <Router>
            <div className='root'>
                <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<AboutMe />}
                        />
                        <Route
                            path="/portfolio"
                            element={<Portfolio />}
                        />
                        <Route
                            path="/resume"
                            element={<Resume />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}