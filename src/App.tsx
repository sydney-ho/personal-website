import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
// import Experiences from "./components/Experiences";
import Projects from "./components/Projects";



const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>

  );
};

export default App;
