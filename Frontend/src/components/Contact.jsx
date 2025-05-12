// src/ContactPage.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Log the form data for now
    console.log('Form Submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormStatus('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <>
    <Navbar/>
    <div className="contact-page container mx-auto my-8 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center mb-6 text-gray-700">
        Have questions or feedback? Reach out to us!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Form Status */}
      {formStatus && (
        <div className="mt-4 text-center text-sm text-gray-600">
          {formStatus}
        </div>
      )}
    </div>
    </>

   
  );
};

export default ContactPage;
