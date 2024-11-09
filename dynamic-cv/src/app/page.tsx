"use client";

import { useState } from 'react';


export default function Home() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    about: '',
    city: '',
    country: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic Resume Builder</h1>
      <form onSubmit={handleSubmit} className="form">
        
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>
      
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea name="about" value={formData.about} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <textarea name="education" value={formData.education} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <textarea name="skills" value={formData.skills} onChange={handleChange} required />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-btn">Generate CV</button>
        </div>
      </form>
      <div className="generated-cv">
        <h2>Generated CV</h2>
        <div className="cv-content">
          <h3>{formData.fname} {formData.lname}</h3>
         
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>City: {formData.city}</p>
          <p>Country: {formData.country}</p>
          <h4>About</h4>
          <p>{formData.about}</p>
          <h4>Education</h4>
          <p>{formData.education}</p>
          <h4>Experience</h4>
          <p>{formData.experience}</p>
          <h4>Skills</h4>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );
}
