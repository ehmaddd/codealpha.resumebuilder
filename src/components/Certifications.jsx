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
          {certifications.map((certification, index) => (
            <div key={index} className="certification">
              <div className="cert-field">
                <input
                  type="text"
                  value={certification.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  placeholder="Certification Name"
                />
              </div>
              <div className="cert-field">
                <input
                  type="text"
                  value={certification.issuingOrganization}
                  onChange={(e) => handleInputChange(index, 'issuingOrganization', e.target.value)}
                  placeholder="Issuing Organization"
                />
              </div>
              <div className="cert-field">
                <input
                  type="date"
                  value={certification.dateOfCertification}
                  onChange={(e) => handleInputChange(index, 'dateOfCertification', e.target.value)}
                  placeholder="Date of Certification"
                />
              </div>
              <button type="button" onClick={() => handleRemoveCertification(index)}>
                remove
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
