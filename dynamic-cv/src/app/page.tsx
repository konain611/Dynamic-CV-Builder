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

  const handleSkillSelect = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const handleSkillRemove = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter(s => s !== skill),
    }));
  };

  const [showCV, setShowCV] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCV(true); 
  };

  
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <PersonalInfo formData={formData} handleChange={handleChange} />
          <EducationForm formData={formData} handleEducationChange={handleEducationChange} handleAddEducation={handleAddEducation} />
          <ExperienceForm formData={formData} handleExperienceChange={handleExperienceChange} handleAddExperience={handleAddExperience} />
          <SkillsForm 
            formData={formData} 
            handleSkillSelect={handleSkillSelect} 
            handleSkillRemove={handleSkillRemove} 
          />
          <button type="submit" className="gen-cv-btn">Generate Resume</button>
        </form>
      </div>
      
      {showCV && <GeneratedCV formData={formData} />}
    </div>
  );
}