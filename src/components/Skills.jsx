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

  useEffect(() => {
    if (data[4] && data[4].skills) {
      setTechnicalSkills(data[4].skills.technicalSkills);
      setSoftSkills(data[4].skills.softSkills);
    }
  }, [data]);

  return (
    <div className="main-div">
      <h1>Skills</h1>
      <div className="container-div">
        <div className="skill-div">
          <h2>Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange('technical', index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveSkill('technical', index)}>
                -
              </button>
            </div>
          ))}
          <button type="button" className="skill-button" onClick={() => handleAddSkill('technical')}>
            +
          </button>
        </div>
        <div className="skill-div">
          <h2>Soft Skills</h2>
          {softSkills.map((skill, index) => (
            <div key={index} className="skill">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange('soft', index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveSkill('soft', index)}>
                -
              </button>
            </div>
          ))}
          <button type="button" className="skill-button" onClick={() => handleAddSkill('soft')}>
            +
          </button>
        </div>
      </div>
      <div className="buttons">
        <Link to="/edu" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton dim" onClick={handleSaveData}>
          SAVE
        </button>
        <Link to="/cert" className="nextButton" onClick={handleSaveData}>
          NEXT
        </Link>
      </div>
    </div>
  );
}

export default Skills;
