import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col justify-center items-center">
      <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to our website! We are passionate about providing top-notch services and innovative solutions to our users. Our team is dedicated to ensuring the highest quality in every aspect of our work.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          We believe in fostering creativity and embracing challenges. As we continue to grow, we aim to deliver even more exciting features and improvements to our platform.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for choosing us! Stay tuned for more updates and services as we strive to exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
