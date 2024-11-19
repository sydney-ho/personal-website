import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center bg-white text-gray-900"
    >
      {/* About Me Text */}
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl text-lg mb-10">
        Hi, I’m Sydney! I’m a senior at Cornell University majoring in Computer Science and minoring in Operations Research & Information Engineering from Queens, New York. I’m mainly interested in data engineering and software engineering, with a focus on database systems and analytics.
        <br />
        <br />
        Outside of classes, I am a product manager on the Cornell FinTech Club. I also enjoy running, rock climbing, going to concerts, and trying new restaurants/cafes!
      </p>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src="aboutme1.JPG"
          alt="Image 1"
          className="w-60 h-60 object-cover rounded-lg shadow-md"
        />
        <img
          src="aboutme2.png"
          alt="Image 2"
          className="w-60 h-60 object-cover rounded-lg shadow-md"
        />
        <img
          src="aboutme3.png"
          alt="Image 3"
          className="w-60 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutMe;
