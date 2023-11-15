// Certifications.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import './Certifications.css';

const Certifications = () => {
  const [certifications, setCertifications] = useState(data[5]?.certifications || []);

  const handleInputChange = (index, key, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][key] = value;
    setCertifications(updatedCertifications);
  };

  const handleAddCertification = () => {
    const newCertification = {
      name: '',
      issuingOrganization: '',
      dateOfCertification: '',
      expirationDate: '',
      credentialID: '',
      details: '',
    };

    setCertifications([...certifications, newCertification]);
  };

  const handleRemoveCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const handleSaveData = () => {
    data[5].certifications = [...certifications];
  };

  useEffect(() => {
    if (data[5] && data[5].certifications) {
      setCertifications(data[5].certifications);
    }
  }, [data]);

  return (
    <div className="main-div">
      <h1>Certifications and Licenses</h1>
      <div className="container-div">
        <form>
          <div>
            <h2>Certifications</h2>
            {certifications.map((certification, index) => (
              <div key={index} className="certification">
                <div className="cert-field">
                  <label>Certification Name</label>
                  <input
                    type="text"
                    value={certification.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  />
                </div>
                {/* Add similar input fields for issuingOrganization, dateOfCertification, etc. */}
                <button type="button" onClick={() => handleRemoveCertification(index)}>
                  -
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="buttons">
        <Link to="/skills" className="backButton" onClick={handleSaveData}>
          BACK
        </Link>
        <button type="button" className="saveButton" onClick={handleAddCertification}>
          ADD
        </button>
        <Link to="#" className="finishButton">
          FINISH
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
