import React from "react";

// Define the structure of the form data
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  about?: string; // Optional field
}

// Define the props for the PersonalInfo component
interface PersonalInfoProps {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function PersonalInfo({ formData, handleChange }: PersonalInfoProps) {
  return (
    <div id="personal-info" className="form-group">
      <br />
      <br />
      <h3>Personal Information</h3>
      <label>First Name *</label>
      <input
        type="text"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        required
      />
      <label>Last Name *</label>
      <input
        type="text"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        required
      />
      <label>Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Phone *</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <label>City *</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <label>Country *</label>
      <input
        type="text" // Changed from "select" to "text" since "select" is not a valid input type
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      <label>About</label>
      <textarea
        name="about"
        placeholder="Write short description"
        value={formData.about}
        onChange={handleChange}
      />
    </div>
  );
}