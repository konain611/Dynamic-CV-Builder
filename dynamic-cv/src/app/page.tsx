"use client";

import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import GeneratedCV from "./components/GeneratedCV";



export default function Home() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    about: "",
    education: [],
    experience: [],
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { institution: "", type: "", years: "", field: "" },
      ],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { company: "", position: "", years: "", description: "" },
      ],
    });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skill: "", level: "" }],
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index] = { ...newSkills[index], [name]: value };
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

      <div className="container">
        <span>Fields with * are required</span>

        <form onSubmit={handleSubmit}>
          <PersonalInfo formData={formData} handleChange={handleChange} />
          <EducationForm formData={formData} handleEducationChange={handleEducationChange} handleAddEducation={handleAddEducation} />
          <ExperienceForm formData={formData} handleExperienceChange={handleExperienceChange} handleAddExperience={handleAddExperience} />
          <SkillsForm formData={formData} handleSkillChange={handleSkillChange} handleAddSkill={handleAddSkill} />
        </form>
        <br></br>
        <br></br>
        <button type="submit" className="submit-btn">Generate Resume</button>
      </div>
      
      <GeneratedCV formData={formData} />

    </div>
  );
}
