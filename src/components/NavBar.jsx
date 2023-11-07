import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Experience from './Experience';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const activePath = location.pathname;

    return (
    <>
      <nav>
        <p><span className={activePath === '/' ? 'active' : 'passive'}>1</span>Personal Info</p>
        <p><span className={activePath === '/summary' ? 'active' : 'passive'}>2</span>Summary</p>
        <p><span className={activePath === '/exp' ? 'active' : 'passive'}>3</span>Experience</p>
      </nav>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/exp" element={<Experience />} />
      </Routes>
    </>
  );
}

export default Navbar;
