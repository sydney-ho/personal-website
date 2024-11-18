import React from "react";

const Experiences: React.FC = () => {
  return (
    <section
      id="experiences"
      className="h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-4">Experiences</h2>
      <div className="max-w-4xl">
        <ul className="list-disc space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Data Engineer Intern</h3>
            <p>Meta | May 2024 - Aug 2024</p>
            <p>Built data foundations and created data pipelines for Metaverse Horizon Captures. Pioneered solution to anonymize Horizon user data. Created analytics dashboard to measure the health and growth of Horizon Captures.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Product Manager</h3>
            <p>Cornell FinTech Club | Oct 2023 - Present</p>
            <p>Product manager for Millennium GenAI Platform (FA24) and AI Earnings Call Summarizer (FA23-SP24).</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Data Engineer Intern</h3>
            <p>Fidelity Investments | Jun 2023 - Aug 2023</p>
            <p>Built analytics dashboard for Wealthscape inbound single sign-on (SSO) and server-to-server (S2S) alert data. </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Data Engineer Intern</h3>
            <p>IoT Nation | Jul 2022 - Aug 2022</p>
            <p>Created a company tagging system using natural language processing to tag 1000+ startups on industry.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
