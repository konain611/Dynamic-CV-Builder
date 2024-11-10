"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import GeneratedCV from "./components/GeneratedCV";

// Define the structure of the form data
interface Education {
  institution: string;
  type: string;
  years: string;
  field: string;
}

interface Experience {
  company: string;
  position: string;
  years: string;
  description: string;
}

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  about: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { institution: "", type: "", years: "", field: "" },
      ],
    }));
  };

  const handleAddExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { company: "", position: "", years: "", description: "" },
      ],
    }));
  };

  const handleEducationChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const handleExperienceChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSkillSelect = (skill: string) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const handleSkillRemove = (skill: string) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((s) => s !== skill),
    }));
  };

  const [showCV, setShowCV] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowCV(true);
  };

  function scrollToSection() {
    window.scrollTo({
      top: 1800, // Adjust this value as needed
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <PersonalInfo formData={formData} handleChange={handleChange} />
          <EducationForm
            formData={formData}
            handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
          />
          <ExperienceForm
            formData={formData}
            handleExperienceChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
          />
          <SkillsForm
            formData={formData}
            handleSkillSelect={handleSkillSelect}
            handleSkillRemove={handleSkillRemove}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection();
              handleSubmit(e);
            }}
            className="gen-cv-btn"
          >
            Generate Resume
          </button>
        </form>
      </div>
      {showCV && <GeneratedCV formData={formData} />}
    </div>
  );
}
