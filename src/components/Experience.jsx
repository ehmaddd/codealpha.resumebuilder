// Experience.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import data from "./data";
import './styles.css';

const Experience = () => {
  const [formData, setFormData] = useState(data[2]?.experience || {});
  const [workExperiences, setWorkExperiences] = useState(data[2]?.workExperiences || []);

  const handleInputChange = (index, key, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][key] = value;
    setWorkExperiences(updatedExperiences);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      expertiseDomains: {
        ...formData.expertiseDomains,
        [name]: checked,
      },
    });
  };

  const handleAddExperience = () => {
    const newExperience = {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      responsibilities: [],
    };

    // Use local state to keep track of multiple experiences
    setWorkExperiences([...workExperiences, newExperience]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences.splice(index, 1);
    setWorkExperiences(updatedExperiences);
  };

  const handleSaveData = () => {
    data[2].experience = { ...formData };
    data[2].workExperiences = [...workExperiences];
  };

  useEffect(() => {
    if (data[2] && data[2].experience) {
      setFormData(data[2].experience);
    }

    if (data[2] && data[2].workExperiences) {
      setWorkExperiences(data[2].workExperiences);
    }
  }, [data]);

  return (
    <div className="main-div">
      <h1>Experience</h1>
      <div className="container-div">
        <form>
          <div>
            <h2>Work Experience</h2>
            {workExperiences.map((experience, index) => (
              <div key={index} className="work-experience">
                <div>
                  <input
                    type="text"
                    value={experience.company}
                    placeholder="Company"
                    onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                  />
                </div>
                <div>
                  <label>Job Title</label>
                  <input
                    type="text"
                    value={experience.jobTitle}
                    onChange={(e) => handleInputChange(index, 'jobTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label>Start Date</label>
                  <input
                    type="text"
                    value={experience.startDate}
                    onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                  />
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    type="text"
                    value={experience.endDate}
                    onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                  placeholder="Responsibilities">
                    Responsibilities
                  </textarea>
                </div>
                <button type="button" onClick={() => handleRemoveExperience(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddExperience}>
              Add Experience
            </button>
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="/summary" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton">
          S A V E
        </button>
        <Link to="#" className="finishButton" onClick={handleSaveData}>
          FINISH
        </Link>
      </div>
    </div>
  );
};

export default Experience;
