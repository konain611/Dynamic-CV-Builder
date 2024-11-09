import React from "react";

export default function GeneratedCV({ formData }) {
  return (
    <div id="resume" className="generated-cv">
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
        {formData.education.map((edu, index) => (
          <div key={index} className="cv-section">
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Type:</strong> {edu.type}</p>
            <p><strong>Years:</strong> {edu.years}</p>
            <p><strong>Field:</strong> {edu.field}</p>
          </div>
        ))}
        <h4>Experience</h4>
        {formData.experience.map((exp, index) => (
          <div key={index} className="cv-section">
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Years:</strong> {exp.years}</p>
          </div>
        ))}
        <h4>Skills</h4>
        {formData.skills.map((skill, index) => (
          <div key={index} className="cv-section">
            <p><strong>Skill:</strong> {skill.skill}</p>
            <p><strong>Level:</strong> {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
