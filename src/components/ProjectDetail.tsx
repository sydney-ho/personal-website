import React, { useEffect } from "react";

interface ProjectModalProps {
  project: { title: string; description: string; image: string; explanation: string; media: string; link: string };
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close on backdrop click
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl md:h-[600px] h-[90%] p-8 overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.explanation}</p>
            <img
              src={project.media}
              alt={project.title}
              className="w-full md:w-1/2 h-60 object-cover justify-center rounded-lg"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white justify-center font-semibold mt-4 px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
