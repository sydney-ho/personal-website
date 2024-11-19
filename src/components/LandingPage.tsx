import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Left Content: Welcome Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Sydney!</h1>
          <p className="mt-4 text-lg">
            Welcome to my website.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100"
          >
            About Me
          </a>
        </div>

        {/* Right Content: Headshot */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img
            src="sydney.jpeg"
            alt="Headshot"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
