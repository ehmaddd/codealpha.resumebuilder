import React, { useState } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import './App.css';

function App() {
  const [skill, setSkill] = useState('');
  const [exper, setExper] = useState('');
  const [edu, setEdu] = useState({degree: '', subject: ''});
  const [value, setValue] = useState({
    name: '',
    title: '',
    summary: '',
    github: '',
    twitter: '',
    linkedin: '',
    skills: [],
    experience: [],
    education: [],
  });

  const addSkill = () => {
    if (value.skills.includes(skill) || skill === '') {
      return;
    }

    setValue((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, skill],
    }));
    setSkill('');
  };

  const addExper = () => {
    if (value.experience.includes(exper) || exper === '') {
      return;
    }

    setValue((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, exper],
    }));
    setExper('');
  };

  const addEdu = () => {
    if(edu.degree !== 'null' && edu.degree !== '' && edu.subject !== 'null' && edu.subject !== ''){
      setValue((prevState) => ({
        ...prevState,
        education: [...prevState.education, edu],
      }));
      setEdu({ degree: '', subject: '' });
    }
    document.querySelector('.degree').value = 'null';
    document.querySelector('.subject').value = 'null';
  }

  const addSub = (event) => {
    const sub = event.target.value;
    setEdu((prevEdu) => ({
      ...prevEdu,
      subject: sub,
    }));
  };

  const addDeg = (event) => {
    const degre = event.target.value;
    setEdu((prevEdu) => ({
      ...prevEdu,
      degree: degre,
    }));
  }

  const delSkill = (index) => {
    setValue((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((_, i) => i !== index),
    }));
  };

  const delExper = (index) => {
    setValue((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index),
    }));
  };

  const delEdu = (index) => {
    setValue((prevState) => ({
      ...prevState,
      education: prevState.education.filter((_, i) => i !== index),
    }));
  };

  async function createPdf() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const helveticaFont = await pdfDoc.embedFont('Helvetica');

    // Calculate the position for each piece of text
    let y = page.getHeight() - 40; // Start below the top margin

    // Personal Information
    page.drawText(`Title: ${value.title}`, {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 20;

    page.drawText(`Name: ${value.name}`, {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 20;

    page.drawText(`Summary: ${value.summary}`, {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 30;

    // Skills
    page.drawText('Skills:', {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 20;
    value.skills.forEach((skill) => {
      page.drawText(skill, {
        x: 70,
        y,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      y -= 20;
    });
    y -= 10;

    // Experience
    page.drawText('Experience:', {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 20;
    value.experience.forEach((exp) => {
      page.drawText(exp, {
        x: 70,
        y,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      y -= 20;
    });
    y -= 10;

    // Education
    page.drawText('Education:', {
      x: 50,
      y,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    y -= 20;
    value.education.forEach((edu) => {
      page.drawText(`${edu.degree} in ${edu.subject}`, {
        x: 70,
        y,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      y -= 20;
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(blob);

    // Create a container for the PDF viewer and close button
    const pdfViewerContainer = document.createElement('div');
    pdfViewerContainer.className = 'pdf-viewer-container';

    // Display the PDF in an iframe
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.style.width = '100%';
    iframe.style.height = '500px'; // Adjust the height as needed
    pdfViewerContainer.appendChild(iframe);

    // Provide a download link for the user to save the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'resume.pdf'; // You can set the file name here
    downloadLink.textContent = 'Download PDF';
    pdfViewerContainer.appendChild(downloadLink);

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      // Close the PDF viewer
      document.body.removeChild(pdfViewerContainer);
    });
    pdfViewerContainer.appendChild(closeButton);

    // Append the PDF viewer container to the body
    document.body.appendChild(pdfViewerContainer);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="top-div">
        <div class="personal-div">
          <h2>Personal Information</h2>
          <input type="text" name="title" value={value.title} placeholder="Title" onChange={(e) => setValue({ ...value, title: e.target.value })} />
          <input type="text" name="name" value={value.name} placeholder="Name" onChange={(e) => setValue({ ...value, name: e.target.value })} />
          <textarea name="summary" value={value.summary} placeholder="Summary" onChange={(e) => setValue({ ...value, summary: e.target.value })} />
        </div>

        <div class="skills-div">
          <h2>Skills</h2>
          <input type="text" name="skill" class="skill-add" placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
          <button class="btn" onClick={addSkill}>Add Skill</button>
            <ul>
              {value.skills.map((skill, index) => (
                <li key={index}>
                <input
                  type="text"
                  class="spec-display"
                  value={skill}
                  readOnly
                />
                 <button onClick={()=>delSkill(index)}>Remove</button>
                </li>
              ))}
            </ul>
        </div>

        <div class="experience-div">
          <h2>Experience</h2>
          <input type="text" name="experience" class="exp-add" value={exper} placeholder="Experience" onChange={(e) => setExper(e.target.value)} />
          <button class="btn" onClick={addExper}>Add Experience</button>
          <ul>
            {value.experience.map((exp, index) => (
              <li key={index}>
              <input
              type="text"
              class="spec-display"
              value={exp}
              readOnly
              />
            <button onClick={()=>delExper(index)}>Remove</button>
            </li>
          ))}
          </ul>
        </div>
      </div>
      <div class="top-div">
        <div class="social-div">
          <h2>Social Links</h2>
          <input type="text" name="github" value={value.github} placeholder="Github" onChange={(e) => setValue({ ...value, github: e.target.value })} />
          <input type="text" name="twitter" value={value.twitter} placeholder="Twitter" onChange={(e) => setValue({ ...value, twitter: e.target.value })} />
          <input type="text" name="linkedin" value={value.linkedin} placeholder="LinkedIn" onChange={(e) => setValue({ ...value, linkedin: e.target.value })} />
        </div>

        <div class="education-div">
          <h2>Education</h2>
          <select class="degree" onChange={addDeg}>
            <option value="null">Select Degree</option>
            <option value="PhD">PhD</option>
            <option value="MS">MS</option>
            <option value="MSc">M.Sc</option>
            <option value="MA">M.A</option>
            <option value="BSc">B.Sc</option>
            <option value="BA">B.A</option>
            <option value="FSc">F.Sc</option>
            <option value="FA">F.A</option>
          </select>
          <select class="subject" onChange={addSub}>
            <option value="null">Select Subject</option>
            <option value="Arabic">Arabic</option>
            <option value="Biology">Biology</option>
            <option value="Computer">Computer</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Geography">Geography</option>
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="Urdu">Urdu</option>
          </select>
          <button class="btn" onClick={addEdu}>Add Education</button>
          <ul>
              {value.education.map((edu, index) => (
                <li key={index}>
                <input
                  type="text"
                  class="spec-display"
                  value={`${edu.degree} in ${edu.subject}`}
                  readOnly
                />
                 <button onClick={()=>delEdu(index)}>Remove</button>
                </li>
              ))}
            </ul>
        </div>
      </div>

      <button class="submit-btn" onClick={createPdf} type="button">Save</button>
    </form>
  );
}

export default App;
