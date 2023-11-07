import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import WebPresence from './WebPresence';
import Experience from './Experience';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const activePath = location.pathname;

    return (
    <>
      <nav>
        <p><span className={activePath === '/' ? 'active' : 'passive'}>1</span>Personal Info</p>
        <p><span className={activePath === '/web' ? 'active' : 'passive'}>2</span>Web Presence</p>
        <p><span className={activePath === '/exp' ? 'active' : 'passive'}>3</span>Experience</p>
      </nav>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/web" element={<WebPresence />} />
        <Route path="/exp" element={<Experience />} />
      </Routes>
    </>
  );
}

export default Navbar;
