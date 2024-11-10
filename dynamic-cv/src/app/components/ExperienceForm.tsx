import React from "react";

// Define the structure of each experience entry
interface ExperienceEntry {
  company: string;
  position: string;
  years: string;
}

// Define the structure of the form data
interface FormData {
  experience: ExperienceEntry[];
}

// Define the props for the ExperienceForm component
interface ExperienceFormProps {
  formData: FormData;
  handleExperienceChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddExperience: () => void;
}

export default function ExperienceForm({ formData, handleExperienceChange, handleAddExperience }: ExperienceFormProps) {
  return (
    <div id="experience" className="form-group">
      <br />
      <br />
      <label>Experience (if any)</label>
      {formData.experience.map((exp, index) => (
        <div key={index} className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
          <input
            type="text"
            name="years"
            placeholder="Years"
            value={exp.years}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}