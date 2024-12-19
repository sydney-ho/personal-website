import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    id: 1,
    title: "GenAI Platform",
    description: "Project in partnership between Millennium Management and Cornell FinTech Club that leverages LLMs to analyze and extrapolate bullish/bearish price movement for a company's equity and credit",
    image: "millennium.png",
    explanation: "The GenAI Platform is a generative AI-driven platform designed to streamline and enhance the process of analyzing financial documents, with a focus on equity and credit insights. Leveraging LLMs and different NLP techniques, the platform aims to extract, summarize, and analyze key insights from financial documents, such as 10-K reports and bond covenants, supporting analysts in making timely, informed decisions. This project uses different techniques such as heavy prompt engineering, GraphRAG summarization, and vector databases to achieve this goal.",
    media: "genai.png",
    link: "https://docs.google.com/presentation/d/16Gj178wOaP8zauvh9N2hpve-tKBcQwdAr2WFX5yZCKU/edit?usp=sharing"
  },
  {
    id: 2,
    title: "Metaverse Horizon Captures",
    description: "Summer 2024 intern project for Meta where I revamped data foundations for the Metaverse Horizon Captures team by building out data pipelines, source of truth datasets, and analytics dashboards.",
    image: "meta.png",
    explanation: "As part of my intern project at Meta, I built out multiple data pipelines, source of truth datasets, and analytics dashboards for the Horizon Captures feature using Meta internal tools. Previously, the Horizon Captures team had an outdated live-time dashboard for feature performance, health, and growth tracking. To revamp the data foundations for this team, I created new data pipelines, implemented several data quality checks, developed a novel anonymization technique for user data, and created dashboards.",
    media: "meta.png",
    link: "https://www.meta.com/help/quest/articles/horizon/explore-horizon-worlds/take-and-share-photos-horizon/?srsltid=AfmBOoqCVW3ordRelnDZrKkCTrG9mmXqfUWuBYZHJ4yjhs8GR6isy8HK"
  },
  {
    id: 3,
    title: "Cosmestics Recommender System",
    description: "Application that recommends cosmetics based on user preferences and skin type using information retrieval techniques on skincare stored in a MySQL database.",
    image: "skincare.jpg",
    explanation: "Information retrieval system that recommends cosmetics based on user preferences and skin type. The system uses a MySQL database to store information on skincare products and their respective attributes. It then uses TF-IDF vectorization, cosine similarity, and boolean search to recommend products based on user input, with a user interface that allows users to input their preferences and skin type to receive recommendations.",
    media: "cosmetics.png",
    link: "https://docs.google.com/document/d/1E_j_bppXEBR2012O1oS9JwMydLz5astqTOczbSvQ-0U/edit?usp=sharing"
  },
  {
    id: 4,
    title: "Airbnb Analysis",
    description: "Analysis of Airbnb listings in New York City to determine key factors that impact the pricing of Airbnb listings and how prices have changed over time.",
    image: "airbnb.jpg",
    explanation: "The project analyzes Airbnb listings in New York City to determine key factors that impact the pricing of Airbnb listings and how prices have changed over time. The project was split into two milestones:\n1. Data Cleaning, Exploration, and Visualization: Cleaned the dataset, performed exploratory data analysis, and visualized the data to determine key factors that impact pricing.\n2. Analysis: Analyzed how prices have changed over time, built a linear regression model to predict prices, and used time series forecasting to predic future demand. Below is an excerpt from a report on the analysis.",
    media: "airbnb_sample.png",
    link: "https://github.com/sydney-ho/Airbnb-Analysis"
  },
  {
    id: 5,
    title: "ARISE Visual Analytics",
    description: "Research project conducted at the NYU ARISE program that analyzes IEEE Visualization publications data.",
    image: "nyu.jpg",
    explanation: "IEEE Visualization is the premier conference for data visualization research. This project analyzes the publications from the conference to determine trends and insights in the field. It uses TF-IDF vectorization and K-means clustering to determine what were the main topics in each 'track' of the conference. The research project concludes with visualizations of the different conference tracks and their respective topics.",
    media: "poster.png",
    link: "https://github.com/sydney-ho/publications-dataset-analysis"
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-blue-500 to-purple-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-white"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative w-full aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 bg-white group-hover:bg-gray-100 transition">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed group-hover:text-gray-700 transition">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
