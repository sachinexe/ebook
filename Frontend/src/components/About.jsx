// src/About.jsx
import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
   <>
   <Navbar/>
   <div className="about-page container mx-auto my-12 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About the eBook Course</h2>
      
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our comprehensive **eBook Course**! This course is designed for individuals who want to master the art of eBook creation, publishing, and marketing. Whether you’re a beginner or an experienced author, this course will guide you step by step through the process, from writing your first draft to launching your eBook on major platforms.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>How to plan and structure your eBook effectively</li>
        <li>Writing and editing techniques for compelling content</li>
        <li>Designing and formatting your eBook for different platforms</li>
        <li>How to publish your eBook on Amazon, Kindle, and more</li>
        <li>Marketing strategies to sell your eBook and reach a wider audience</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Features</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Over 20 video lessons with practical examples</li>
        <li>Downloadable templates and resources</li>
        <li>Lifetime access to course materials</li>
        <li>Direct access to expert feedback and support</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose This Course?</h3>
      <p className="text-lg text-gray-700 mb-6">
        Whether you're looking to write a memoir, guide, or fiction novel, this course provides the tools and knowledge to create a polished eBook that stands out. With practical strategies and expert tips, you'll have everything you need to succeed in the digital publishing world.
      </p>
      
      <div className="text-center">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
          Enroll Now and Start Your Journey
        </button>
      </div>
    </div>
   </>
  );
};

export default About;
