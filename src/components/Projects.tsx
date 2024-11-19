import React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Millennium x Cornell FinTech Club: GenAI Platform",
      description:
        "The GenAI Platform is a generative AI-driven platform designed to streamline and enhance the process of analyzing financial documents, with a focus on equity and credit insights. Leveraging advanced language models and a unique architecture, the platform aims to extract, summarize, and analyze key insights from financial documents, such as 10-K reports and bond covenants, supporting analysts in making timely, informed decisions.",
    },
    {
      title: "Applied Research Innovations in Science and Engineering (ARISE): Visual Analytics of Publications Data",
      description:
        "Research project that uses natural language processing and clustering to determine research conference track topics.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-gray-100 text-gray-900 px-8"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Projects
      </h2>
      <div className="space-y-8">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="transition-all hover:shadow-lg border border-gray-200 rounded-lg bg-white"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
