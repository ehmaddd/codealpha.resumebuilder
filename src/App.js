import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import PersonalInfo from './components/PersonalInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
