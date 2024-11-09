import React from "react";

export default function ExperienceForm({ formData, handleExperienceChange, handleAddExperience }) {
  return (
    <div className="form-group">
      <h4>Experience</h4>
      {formData.experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} required />
          <input type="text" name="position" placeholder="Position" value={exp.position} onChange={(e) => handleExperienceChange(index, e)} required />
          <input type="text" name="years" placeholder="Years" value={exp.years} onChange={(e) => handleExperienceChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}