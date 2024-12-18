import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700 text-white px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Left Content: Welcome Text */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">Sydney Ho</h1>
          <div className="space-y-4 text-lg md:text-xl tracking-wider">
            <p>
              Incoming Data Engineer @{" "}
              <a
                href="https://about.meta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                Meta
              </a>
            </p>
            <p>
              Prev Data Engineer Intern @{" "}
              <a
                href="https://about.meta.com/realitylabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                Meta Reality Labs
              </a>
            </p>
            <p>
              Prev Data Engineer Intern @{" "}
              <a
                href="https://www.fidelity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                Fidelity Investments
              </a>
            </p>
            <p>
              Product Manager @{" "}
              <a
                href="https://www.cornellfintechclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                Cornell FinTech Club
              </a>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/sydneyho/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="linkedin.png"
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://github.com/sydney-ho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="github.png"
                className="h-8 w-8"
              />
            </a>
          </div>

          <a
            href="resume.pdf "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white justify-center font-semibold mt-4 px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            aria-label="resume"
          >Resume</a>
        </div>
        {/* Right Content: Headshot */}
        <div className="flex-1 flex justify-center">
          {/* <div className="flex-1 mt-10 md:mt-0 md:ml-10"> */}
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
