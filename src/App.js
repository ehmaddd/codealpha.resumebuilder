import React, { useState } from 'react';
import './App.css';

function App() {
  const [skill, setSkill] = useState('');
  const [exper, setExper] = useState('');
  const [value, setValue] = useState(
    {
      name: '',
      title: '',
      summary: '',
      github: '',
      twitter: '',
      linkedin: '',
      skills: [],
      experience: [],
      education: [],
    }
  );

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
        <h2>Personal Information</h2>
        <label>Name: <input type="text" name="name" value={value.name} onChange={(e)=> { setValue({ name: e.target.value })} } /></label>
        <label>Title: <input type="text" name="title" value={value.title}  onChange={(e)=> { setValue({ title: e.target.value })} } /></label>
        <label>Summary: <textarea name="summary" value={value.summary} onChange={(e)=> { setValue({ summary: e.target.value })} } /></label>
        <label>GitHub: <input type="text" name="github" value={value.github} onChange={(e)=> { setValue({ github: e.target.value })} } /></label>
        <label>Twitter: <input type="text" name="twitter" value={value.twitter} onChange={(e)=> { setValue({ twitter: e.target.value })} } /></label>
        <label>LinkedIn: <input type="text" name="linkedin" value={value.linkedin} onChange={(e)=> { setValue({ linkedin: e.target.value })} } /></label>

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
        <input type="text" name="skill" value={skill} onChange={(e)=>setSkill(e.target.value)} />
        </label>
        <button onClick={addSkill}>Add Skill</button>

        <h2>Experience</h2>
        <ul>
          {value.experience.map((exp, index) => (
            <li key={index}>
              <input
                type="text"
                value={exper}
                readOnly
              />
              <button>Remove</button>
            </li>
          ))}
        </ul>
        <label>
        New Experience:
        <input type="text" name="experience" value={exper} onChange={(e)=>setExper(e.target.value)} />
        </label>
        <button onClick={addExper}>Add Experience</button>

        <h2>Education</h2>
        {/* Similar structure for education section */}
        <button type="submit">Save</button>
      </form>
  );
}

export default App;
