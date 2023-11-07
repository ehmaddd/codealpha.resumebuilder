import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import data from "./data";
import './styles.css';

const WebPresence = () => {
  const [formData, setFormData] = useState(data[1].webpresence);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveData = () => {
    data[1].webpresence = { ...formData };
    console.log("Data stored in data array:", data);
  };

  useEffect(() => {
    setFormData(data[1].webpresence);
  }, [data]);

  return (
    <div className="main-div">
      <h1>Web Presence</h1>
      <div className="container-div">
      <form>
        <div>
          <span className="bull">&bull;</span><label className="lbl">LinkedIn</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Facebook</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Twitter</label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Github</label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Personal Website or blog</label>
          <input
            type="text"
            id="personalWebsite"
            name="personalWebsite"
            value={formData.personalWebsite}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="bull">&bull;</span><label className="lbl">Any other reference</label>
          <input
            type="text"
            id="otherReference"
            name="otherReference"
            value={formData.otherReference}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
    <div className="buttons">
      <Link to="/" className="backButton" onClick={handleSaveData}>
        BACK
      </Link>
      <button className="saveButton dim">
        S A V E
      </button>
      <Link to="/exp" className="nextButton" onClick={handleSaveData}>
        NEXT
      </Link>
    </div>
  </div>
  );
};

export default WebPresence;
