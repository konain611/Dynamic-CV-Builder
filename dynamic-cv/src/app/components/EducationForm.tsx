import React from "react";


export default function EducationForm({ formData, handleEducationChange, handleAddEducation }) {
  return (
    <div id="education" className="form-group">
      <br></br>
      <br></br>
      <label>Education & Certifications</label>
      {formData.education.map((edu, index) => (
        <div key={index} className="form-group">
          <input type="text" name="institution" placeholder="Institution Name *" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} required />
          <input type="text" name="type" placeholder="Type of Education (Bachelor/Masters/Course etc) *" value={edu.type} onChange={(e) => handleEducationChange(index, e)} required />
          <input type="text" name="years" placeholder="Years of Program" value={edu.years} onChange={(e) => handleEducationChange(index, e)} />
          <input type="text" name="field" placeholder="Field (Computer Science/Business Analytics/Cyber Security etc) *" value={edu.field} onChange={(e) => handleEducationChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}
