import React from "react";

export default function SkillsForm({ formData, handleSkillChange, handleAddSkill }) {
  return (
    <div className="form-group">
      <h4>Skills</h4>
      {formData.skills.map((skill, index) => (
        <div key={index} className="skill-entry">
          <input type="text" name="skill" placeholder="Skill" value={skill.skill} onChange={(e) => handleSkillChange(index, e)} required />
          <input type="text" name="level" placeholder="Skill Level" value={skill.level} onChange={(e) => handleSkillChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
}
