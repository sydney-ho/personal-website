import React from "react";

const Experiences: React.FC = () => {
  const experienceData = [
    {
      title: "Data Engineer Intern",
      company: "Meta",
      period: "May 2024 - Aug 2024",
      description:
        "Built data foundations and created data pipelines for Metaverse Horizon Captures. Pioneered solution to anonymize Horizon user data. Created analytics dashboard to measure the health and growth of Horizon Captures.",
    },
    {
      title: "Data Engineer Intern",
      company: "Fidelity Investments",
      period: "May 2023 - Aug 2023",
      description:
        "Built analytics dashboard for Wealthscape inbound single sign-on (SSO) and server-to-server (S2S) alert data.",
    },
    {
      title: "Data Engineer Intern",
      company: "IoT Nation",
      period: "Jul 2022 - Aug 2022",
      description:
        "Created a company tagging system using natural language processing to tag 1000+ startups on industry.",
    },
  ];

  return (
    <section
      id="experiences"
      className="min-h-screen py-16 bg-gray-100 text-gray-900 px-8"
    >
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-8 text-center">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className="transition-all hover:shadow-lg border border-gray-200 rounded-lg bg-white"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-primary font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 mb-4">{job.period}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
