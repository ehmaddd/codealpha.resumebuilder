import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import data from "./data";
import './styles.css';

const Experience = () => {
  const [formData, setFormData] = useState(data[2].experience);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSaveData = () => {
    data[2].experience = { ...formData };
    console.log("Data stored in data array:", data);
  };

  useEffect(() => {
    setFormData(data[2].experience);
  }, [data]);

  return (
    <div className="main-div">
      <h1>Experience</h1>
      <div className="container-div">
      <form>
        <div>
          <span className="bull">&bull;</span><label className="lbl">How many years of relevant experience do you have?</label>
          <select
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
          >
            <option value="null">Select</option>
            <option value="One to less">One to less</option>
            <option value="One to three">One to three</option>
            <option value="Three or more">Three or more</option>
          </select>
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">What domain is your expertise in?</label>
          <div className="domains">
            <div className="domain-div">
              <input
                type="checkbox"
                name="frontEnd"
                checked={formData.expertiseDomains.frontEnd}
                onChange={handleCheckboxChange}
              />
              <label>
                Front End
              </label>
            </div>

            <div className="domain-div">
              <input
                type="checkbox"
                name="backEnd"
                checked={formData.expertiseDomains.backEnd}
                onChange={handleCheckboxChange}
              />
              <label>
                Back End
              </label>
            </div>

            <div className="domain-div">
              <input
                type="checkbox"
                name="databases"
                checked={formData.expertiseDomains.databases}
                onChange={handleCheckboxChange}
              />
              <label>
                Databases
              </label>
            </div>

            <div className="domain-div">
              <input
                type="checkbox"
                name="algorithms"
                checked={formData.expertiseDomains.algorithms}
                onChange={handleCheckboxChange}
              />
              <label>
                Algorithms
              </label>
            </div>

            <div className="domain-div">
              <input
                type="checkbox"
                name="architectures"
                checked={formData.expertiseDomains.architectures}
                onChange={handleCheckboxChange}
              />
              <label>
                Architectures
              </label>
            </div>

          </div>
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Other expert skills</label>
          <input
            type="text"
            id="otherSkills"
            name="otherSkills"
            value={formData.otherSkills}
            onChange={handleInputChange}
          />
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
