// Education.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import './Education.css';

const Education = () => {
  const [formData, setFormData] = useState(data[3]?.education || []);
  const [educations, setEducations] = useState(data[3]?.educations || []);

  const handleInputChange = (index, key, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][key] = value;
    setEducations(updatedEducations);
  };

  const handleAddEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      major: '',
      graduationDate: '',
      honorsAwards: '',
    };

    setEducations([...educations, newEducation]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const handleSaveData = () => {
    data[3].education = [...formData];
    data[3].educations = [...educations];
  };

  useEffect(() => {
    if (data[3] && data[3].education) {
      setFormData(data[3].education);
    }

    if (data[3] && data[3].educations) {
      setEducations(data[3].educations);
    }
  }, [data]);

  return (
    <div className="main-div">
      <h1>Education</h1>
      <div className="container-div">
        <form>
          <div>
            {educations.map((education, index) => (
              <div key={index} className="education">
                <div className="edu-cat">
                  <label>Institution</label>
                  <input
                    type="text"
                    value={education.institution}
                    onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                  />
                </div>
                <div className="edu-cat">
                  <label>Degree</label>
                  <input
                    type="text"
                    value={education.degree}
                    onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                  />
                </div>
                <div className="edu-cat">
                  <label>Major</label>
                  <input
                    type="text"
                    value={education.major}
                    onChange={(e) => handleInputChange(index, 'major', e.target.value)}
                  />
                </div>
                <div className="edu-cat">
                  <label>Graduation</label>
                  <input
                    type="date"
                    value={education.graduationDate}
                    onChange={(e) => handleInputChange(index, 'graduationDate', e.target.value)}
                  />
                </div>
                <div className="edu-cat">
                  <label>Distinctions</label>
                  <input
                    type="text"
                    value={education.honorsAwards}
                    onChange={(e) => handleInputChange(index, 'honorsAwards', e.target.value)}
                  />
                </div>
                <button type="button" className="del-edu" onClick={() => handleRemoveEducation(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="/exp" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button className="saveButton" onClick={handleAddEducation}>
          ADD NEW
        </button>
        <Link to="/skills" className="nextButton" onClick={handleSaveData}>
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default Education;
