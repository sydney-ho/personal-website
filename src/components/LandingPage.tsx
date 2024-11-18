import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen flex flex-col justify-center items-center"
    >
      {/* Headshot */}
      <div className="mb-6">
        <img
          src="sydney.jpeg" // Replace with your image path
          alt="Headshot"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
        />
      </div>

      {/* Intro */}
      <h1 className="text-6xl font-bold">Hi, I'm Sydney!</h1>
      <p className="mt-4 text-lg">Welcome to my website.</p>
      <a
        href="#about"
        className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100"
      >
        Learn More About Me
      </a>
    </section>
  );
};

export default LandingPage;
