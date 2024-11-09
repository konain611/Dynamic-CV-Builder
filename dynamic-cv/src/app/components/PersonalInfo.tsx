import React from "react";

export default function PersonalInfo({ formData, handleChange }) {
  return (
    <div className="form-group">
      <label>First Name</label>
      <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
      <label>Last Name</label>
      <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Phone</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      <label>City</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      <label>Country</label>
      <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      <label>About</label>
      <textarea name="about" value={formData.about} onChange={handleChange} required />
    </div>
  );
}
