import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import data from "./data";
import './styles.css';

const PersonalInfo = () => {
  const [formData, setFormData] = useState(data[0].personalinfo);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveData = () => {
    data[0].personalinfo = { ...formData };
    console.log("Data stored in data array:", data);
    navigate('/web');
  };

  useEffect(() => {
    setFormData(data[0].personalinfo);
  }, [data]);

  return (
    <div className="main-div">
      <h1>Personal Information</h1>
      <div className="container-div">
        <form>
        <div>
            <span className="bull">&bull;</span>
            <label className="lbl">What is your title?</label>
            <input
              type="text"
              id="userTitle"
              name="userTitle"
              value={formData.userTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="bull">&bull;</span>
            <label className="lbl">... your full name?<p className="mandatory">*</p></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="bull">&bull;</span>
            <label className="lbl">... your Contact number<p className="mandatory">*</p></label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="bull">&bull;</span>
            <label className="lbl">... your Email Address<p className="mandatory">*</p></label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="bull">&bull;</span>
            <label className="lbl">... your city, country<p className="mandatory">*</p></label>
            <input
              type="text"
              id="physicalAddress"
              name="physicalAddress"
              value={formData.physicalAddress}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="bull">&bull;</span>
            <label className="lbl">... your LinkedIn Profile</label>
            <input
              type="text"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="#" className="backButton dim">
          B A C K
        </Link>
        <button className="saveButton dim">
          S A V E
        </button>
        <Link to="/summary" className="nextButton" onClick={handleSaveData}>
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
