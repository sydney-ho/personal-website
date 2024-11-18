import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center bg-white text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl text-lg">
        Hi, I’m Sydney! I’m a senior at Cornell University majoring in Computer Science and minoring in Operations Research & Information Engineering from Queens, New York. I’m mainly interested in data engineering and software engineering, with a focus on database systems and analytics.
        <br />
        <br />
        Outside of classes, I am a product manager on the Cornell FinTech Club. I also enjoy running, rock climbing, going to concerts, and trying new restaurants/cafes!
      </p>
    </section>
  );
};

export default AboutMe;
