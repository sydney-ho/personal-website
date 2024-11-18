import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-500">SH</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#landing" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About Me
            </a>
          </li>
          <li>
            <a href="#experiences" className="text-gray-800 hover:text-blue-500">
              Experiences
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
