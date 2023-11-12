import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import './Skills.css';

const Skills = () => {
  const [technicalSkills, setTechnicalSkills] = useState(data[4]?.skills?.technicalSkills || []);
  const [softSkills, setSoftSkills] = useState(data[4]?.skills?.softSkills || []);
}

export default Skills;
