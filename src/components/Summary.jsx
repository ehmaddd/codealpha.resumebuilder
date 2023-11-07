import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import data from "./data";
import './styles.css';

const Summary = () => {
  const [summary, setSummary] = useState(data[1].summary);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSummary(value);
  };

  const handleSaveData = () => {
    data[1].summary = summary;
    console.log("Summary data stored in data array:", data);
  };

  useEffect(() => {
    setSummary(data[1].summary);
  }, [data]);

  return (
    <div className="main-div">
      <h1>Resume Summary</h1>
      <div className="container-div">
        <form>
          <div>
            <textarea
              id="summary"
              name="summary"
              value={summary}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="/" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton dim" onClick={handleSaveData}>
          SAVE
        </button>
        <Link to="/exp" className="nextButton" onClick={handleSaveData}>
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default Summary;
