import React from "react";

// Define the structure of each education entry
interface EducationEntry {
  institution: string;
  type: string;
  years?: string; // Optional field
  field: string;
}

// Define the structure of the form data
interface FormData {
  education: EducationEntry[];
}

// Define the props for the EducationForm component
interface EducationFormProps {
  formData: FormData;
  handleEducationChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
}

export default function EducationForm({ formData, handleEducationChange, handleAddEducation }: EducationFormProps) {
  return (
    <div id="education" className="form-group">
      <br />
      <br />
      <label>Education & Certifications</label>
      {formData.education.map((edu, index) => (
        <div key={index} className="form-group">
          <input
            type="text"
            name="institution"
            placeholder="Institution Name *"
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, e)}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type of Education (Bachelor/Masters/Course etc) *"
            value={edu.type}
            onChange={(e) => handleEducationChange(index, e)}
            required
          />
          <input
            type="text"
            name="years"
            placeholder="Years of Program"
            value={edu.years}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="text"
            name="field"
            placeholder="Field (Computer Science/Business Analytics/Cyber Security etc) *"
            value={edu.field}
            onChange={(e) => handleEducationChange(index, e)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}