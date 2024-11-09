import React from "react";
import SkillsInput from "./PreDefinedSkills";

export default function SkillsForm({ formData, handleSkillChange, handleAddSkill }) {
  return (
    <div id="skills" className="form-group">
      <br></br><br></br>
      <label>Skills</label>
      {/* {formData.skills.map((skill, index) => (
        <div key={index} className="form-group">
          <input type="text" name="skill" placeholder="Add your Skills" value={skill.skill} onChange={(e) => handleSkillChange(index, e)} required />
        </div>
      ))} */}
      <SkillsInput/>
      {/* <button type="button" onClick={handleAddSkill}>Add Skill</button> */}
    </div>
  );
}
