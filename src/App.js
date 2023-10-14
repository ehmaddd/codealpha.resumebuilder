import React, { useState } from 'react';
import './App.css';

function App() {
  const [skill, setSkill] = useState('');
  const [exper, setExper] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="personal-div">
        <h2>Personal Information</h2>
        <label class="personal-label">Name: </label><input type="text" name="name" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
        <label class="personal-label">Title: </label><input type="text" name="title" value={value.title} onChange={(e) => setValue({ ...value, title: e.target.value })} />
        <label class="personal-label">Summary: </label><textarea name="summary" value={value.summary} onChange={(e) => setValue({ ...value, summary: e.target.value })} />
        <label class="personal-label">GitHub: </label><input type="text" name="github" value={value.github} onChange={(e) => setValue({ ...value, github: e.target.value })} />
        <label class="personal-label">Twitter: </label><input type="text" name="twitter" value={value.twitter} onChange={(e) => setValue({ ...value, twitter: e.target.value })} />
        <label class="personal-label">LinkedIn: </label><input type="text" name="linkedin" value={value.linkedin} onChange={(e) => setValue({ ...value, linkedin: e.target.value })} />
      </div>

      <div class="skill-experience">
        <div class="skills-div">
          <h2>Skills</h2>
            <ul>
              {value.skills.map((skill, index) => (
                <li key={index}>
                <input
                  type="text"
                  value={skill}
                  readOnly
                />
                 <button>Remove</button>
                </li>
              ))}
            </ul>
        <label>
        New Skill:
        <input type="text" name="skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
      </label>
      <button onClick={addSkill}>Add Skill</button>
        </div>

      <h2>Experience</h2>
      <ul>
        {value.experience.map((exp, index) => (
          <li key={index}>
            <input
              type="text"
              value={exp}
              readOnly
            />
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <label>
        New Experience:
        <input type="text" name="experience" value={exper} onChange={(e) => setExper(e.target.value)} />
      </label>
      <button onClick={addExper}>Add Experience</button>
      </div>

      <h2>Education</h2>
      {/* Similar structure for education section */}
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
