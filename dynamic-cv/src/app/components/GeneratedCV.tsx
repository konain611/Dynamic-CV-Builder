import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

// Define the structure of each education entry
interface EducationEntry {
  institution: string;
  type: string;
  years: string;
  field: string;
}

// Define the structure of each experience entry
interface ExperienceEntry {
  company: string;
  position: string;
  years: string;
  description: string;
}

// Define the structure of the form data
interface FormData {
  fname: string;
  lname: string;
  position: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  skills: string[];
  about: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
}

// Define the props for the GeneratedCV component
interface GeneratedCVProps {
  formData: FormData;
}

export default function GeneratedCV({ formData }: GeneratedCVProps) {
  const resumeRef = useRef<HTMLDivElement>(null); // Specify the ref type

  const handleDownload = () => {
    const element = resumeRef.current;
    if (element) {
      const options = {
        margin: 1,
        filename: "generated_resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .from(element)
        .set(options)
        .save();
    }
  };

  return (
    <div>
      <br />
      <h1 id="resume" className="title">
        Generated resume
      </h1>
      <button onClick={handleDownload} className="down-cv-btn">
        Download Resume
      </button>
      <div ref={resumeRef} className="generated-cv">
        {/* Header Section */}
        <div className="cv-header">
          <h1>
            {formData.fname} {formData.lname}
          </h1>
          <h2>{formData.position}</h2>
          <p>
            Email: {formData.email} | Phone: {formData.phone} | Location:{" "}
            {formData.city}, {formData.country}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="cv-content">
          {/* Left Column */}
          <div className="cv-left">
            {/* Skills Section */}
            <div className="cv-skills">
              <h3 className="section-title">Skills</h3>
              <ul>
                {formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="cv-right">
            {/* Profile Section */}
            <div className="cv-profile">
              <h3 className="section-title">About</h3>
              <p>{formData.about}</p>
            </div>

            {/* Education Section */}
            <div className="cv-education">
              <h3 className="section-title">Education</h3>
              {formData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.institution}</h4>
                  <p>
                    <strong>Type:</strong> {edu.type}
                  </p>
                  <p>
                    <strong>Years:</strong> {edu.years}
                  </p>
                  <p>
                    <strong>Field:</strong> {edu.field}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="cv-experience">
              <h3 className="section-title">Experience</h3>
              {formData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h4>{exp.company}</h4>
                  <h5>
                    {exp.position} | {exp.years}
                  </h5>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}