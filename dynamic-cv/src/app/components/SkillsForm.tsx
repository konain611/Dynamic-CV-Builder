import React from "react";
import SkillsInput from "./PreDefinedSkills";

export default function SkillsForm({ formData, handleSkillSelect, handleSkillRemove }) {
  return (
    <div id="skills" className="form-group">
      <br></br><br></br>
      <label>Skills</label>
      <SkillsInput 
        selectedSkills={formData.skills} 
        onSkillSelect={handleSkillSelect} 
        onSkillRemove={handleSkillRemove} 
      />
    </div>
  );
}
