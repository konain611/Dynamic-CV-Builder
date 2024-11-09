import React from "react";


export default function EducationForm({ formData, handleEducationChange, handleAddEducation }) {
  return (
    <div className="form-group">
      <h4>Education</h4>
      {formData.education.map((edu, index) => (
        <div key={index} className="education-entry">
          <input type="text" name="institution" placeholder="Institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} required />
          <input type="text" name="type" placeholder="Type of Education" value={edu.type} onChange={(e) => handleEducationChange(index, e)} required />
          <input type="text" name="years" placeholder="Years" value={edu.years} onChange={(e) => handleEducationChange(index, e)} required />
          <input type="text" name="field" placeholder="Field" value={edu.field} onChange={(e) => handleEducationChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}
