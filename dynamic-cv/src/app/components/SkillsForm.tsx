import React from "react";

export default function SkillsForm({ formData, handleSkillChange, handleAddSkill }) {
  return (
    <div className="form-group">
      <label>Skills</label>
      {formData.skills.map((skill, index) => (
        <div key={index} className="form-group">
          <input type="text" name="skill" placeholder="Add your Skills" value={skill.skill} onChange={(e) => handleSkillChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
}
