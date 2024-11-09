"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    about: "",
    city: "",
    country: "",
    education: [],
    experience: [],
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { institution: "", type: "", years: "", field: "" },
      ],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { company: "", position: "", years: "", description: "" },
      ],
    });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skill: "", level: "" }],
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index] = { ...newSkills[index], [name]: value };
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic Resume Builder</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Basic Information Fields */}
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea name="about" value={formData.about} onChange={handleChange} required />
        </div>

        {/* Education Section */}
        <div className="form-group">
          <h4>Education</h4>
          {formData.education.map((edu, index) => (
            <div className="education-container">
              <div key={index} className="education-entry">
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                  placeholder="Institution Name"
                  required
                />
                <input
                  type="text"
                  name="type"
                  value={edu.type}
                  onChange={(e) => handleEducationChange(index, e)}
                  placeholder="Type of Education"
                  required
                />
                <input
                  type="text"
                  name="years"
                  value={edu.years}
                  onChange={(e) => handleEducationChange(index, e)}
                  placeholder="Years of Education"
                  required
                />
                <input
                  type="text"
                  name="field"
                  value={edu.field}
                  onChange={(e) => handleEducationChange(index, e)}
                  placeholder="Field of Study"
                  required
                />
              </div>
          </div>
          ))}
          <button type="button" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>

        {/* Experience Section */}
        <div className="form-group">
          <h4>Experience</h4>
          {formData.experience.map((exp, index) => (
            <div className="experience-container">
              <div key={index} className="experience-entry">
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Company Name"
                required
              />
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Position"
                required
              />
              <input
                type="text"
                name="years"
                value={exp.years}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Years of Experience"
                required
              />
              
            </div>
              </div>
          ))}
          <button type="button" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>

        {/* Skills Section */}
        <div className="form-group">
          <h4>Skills</h4>
          {formData.skills.map((skill, index) => (
            <div key={index} className="skill-entry">
              <input
                type="text"
                name="skill"
                value={skill.skill}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Skill"
                required
              />
              <input
                type="text"
                name="level"
                value={skill.level}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Skill Level"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
        </div>

        <div className="button-container">
          <button type="submit" className="submit-btn">
            Generate CV
          </button>
        </div>
      </form>

      {/* Generated CV */}
      <div className="generated-cv">
        <h2>Generated CV</h2>
        <div className="cv-content">
          <h3>{formData.fname} {formData.lname}</h3>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>City: {formData.city}</p>
          <p>Country: {formData.country}</p>

          <h4>About</h4>
          <p>{formData.about}</p>

          <h4>Education</h4>
          {formData.education.length > 0 ? (
            formData.education.map((edu, index) => (
              <div key={index} className="cv-section">
                <p><strong>Institution:</strong> {edu.institution}</p>
                <p><strong>Type of Education:</strong> {edu.type}</p>
                <p><strong>Years:</strong> {edu.years}</p>
                <p><strong>Field of Study:</strong> {edu.field}</p>
              </div>
            ))
          ) : (
            <p>No education entries added.</p>
          )}

          <h4>Experience</h4>
          {formData.experience.length > 0 ? (
            formData.experience.map((exp, index) => (
              <div key={index} className="cv-section">
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Position:</strong> {exp.position}</p>
                <p><strong>Years:</strong> {exp.years}</p>
                <p><strong>Description:</strong> {exp.description}</p>
              </div>
            ))
          ) : (
            <p>No experience entries added.</p>
          )}

          <h4>Skills</h4>
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              <div key={index} className="cv-section">
                <p><strong>Skill:</strong> {skill.skill}</p>
                <p><strong>Level:</strong> {skill.level}</p>
              </div>
            ))
          ) : (
            <p>No skills entries added.</p>
          )}
        </div>
      </div>
    </div>
  );
}
