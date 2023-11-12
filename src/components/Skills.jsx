import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import './Skills.css';

const Skills = () => {
  const [technicalSkills, setTechnicalSkills] = useState(data[4]?.skills?.technicalSkills || []);
  const [softSkills, setSoftSkills] = useState(data[4]?.skills?.softSkills || []);

  const handleInputChange = (category, index, value) => {
    if (category === 'technical') {
      const updatedTechnicalSkills = [...technicalSkills];
      updatedTechnicalSkills[index] = value;
      setTechnicalSkills(updatedTechnicalSkills);
    } else if (category === 'soft') {
      const updatedSoftSkills = [...softSkills];
      updatedSoftSkills[index] = value;
      setSoftSkills(updatedSoftSkills);
    }
  };

  const handleAddSkill = (category) => {
    if (category === 'technical') {
      setTechnicalSkills([...technicalSkills, '']);
    } else if (category === 'soft') {
      setSoftSkills([...softSkills, '']);
    }
  };

  const handleRemoveSkill = (category, index) => {
    if (category === 'technical') {
      const updatedTechnicalSkills = [...technicalSkills];
      updatedTechnicalSkills.splice(index, 1);
      setTechnicalSkills(updatedTechnicalSkills);
    } else if (category === 'soft') {
      const updatedSoftSkills = [...softSkills];
      updatedSoftSkills.splice(index, 1);
      setSoftSkills(updatedSoftSkills);
    }
  };

  const handleSaveData = () => {
    data[4].skills = {
      technicalSkills: [...technicalSkills],
      softSkills: [...softSkills],
    };
  };

  return (
    <div className="main-div">
      <h1>Skills</h1>
      <div className="container-div">
        <div>
          <h2>Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange('technical', index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveSkill('technical', index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddSkill('technical')}>
            Add Technical Skill
          </button>
        </div>
        <div>
          <h2>Soft Skills</h2>
          {softSkills.map((skill, index) => (
            <div key={index} className="skill">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange('soft', index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveSkill('soft', index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddSkill('soft')}>
            Add Soft Skill
          </button>
        </div>
      </div>
      <div className="buttons">
        <Link to="/summary" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton" onClick={handleSaveData}>
          SAVE
        </button>
        <Link to="/nextPage" className="nextButton" onClick={handleSaveData}>
          NEXT
        </Link>
      </div>
    </div>
  );
}

export default Skills;
