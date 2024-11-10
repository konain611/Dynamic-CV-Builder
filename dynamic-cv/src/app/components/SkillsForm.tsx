import React from "react";
import SkillsInput from "./PreDefinedSkills";

// Define the structure of formData that contains skills
interface FormData {
    skills: string[];
}

// Define types for the props
interface SkillsFormProps {
    formData: FormData;
    handleSkillSelect: (skill: string) => void;
    handleSkillRemove: (skill: string) => void;
}

export default function SkillsForm({
    formData,
    handleSkillSelect,
    handleSkillRemove
}: SkillsFormProps) {
    return (
        <div id="skills" className="form-group">
            <br /><br />
            <label>Skills</label>
            <SkillsInput 
                selectedSkills={formData.skills} 
                onSkillSelect={handleSkillSelect} 
                onSkillRemove={handleSkillRemove} 
            />
        </div>
    );
}
