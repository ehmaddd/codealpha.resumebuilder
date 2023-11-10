import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import data from "./data";
import './Experience.css';

const Experience = () => {
  const [formData, setFormData] = useState(data[2]?.experience || {});
  const [workExperiences, setWorkExperiences] = useState(data[2]?.workExperiences || []);

  const handleInputChange = (index, key, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][key] = value;
    setWorkExperiences(updatedExperiences);
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
            {workExperiences.map((experience, index) => (
              <div key={index} className="work-experience">
                <div className="exp-cat">
                  <label>Company</label>
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                  />
                </div>
                <div className="exp-cat">
                  <label>Job Title</label>
                  <input
                    type="text"
                    value={experience.jobTitle}
                    onChange={(e) => handleInputChange(index, 'jobTitle', e.target.value)}
                  />
                </div>
                <div className="exp-cat">
                  <label>Start Date</label>
                  <input
                    type="date"
                    value={experience.startDate}
                    onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                  />
                </div>
                <div className="exp-cat">
                  <label>End Date</label>
                  <input
                    type="date"
                    value={experience.endDate}
                    onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                  />
                </div>
                <div className="exp-cat">
                  <label>Resonsibilities</label>
                  <textarea
                    className="exp-resp"
                    defaultValue={experience.responsibilities}
                    onChange={(e) => handleInputChange(index, 'responsibilities', e.target.value)}
                  ></textarea>
                </div>
                <button type="button" className="del-edu" onClick={() => handleRemoveExperience(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="/summary" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton" onClick={handleAddExperience}>
          ADD NEW
        </button>
        <Link to="#" className="nextButton" onClick={handleSaveData}>
          FINISH
        </Link>
      </div>
    </div>
  );
};

export default Experience;
