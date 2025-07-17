import React, { useState } from "react";

const renderTopics = (topics) => {
  if (!topics || topics.length === 0) return null;
  return (
    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
      {topics.map((topic, i) => (
        <li key={i}>{topic}</li>
      ))}
    </ul>
  );
};

const sscCGLSyllabus = {
  name: "SSC CGL",
  details: {
    tiers: [
      {
        title: "Tier I – Preliminary (Paper 1)",
        description:
          "Format: Computer-Based Test, 100 MCQs (4 sections × 25 Qs), 200 marks, 60 minutes, –0.50 per wrong answer.",
        sections: [
          {
            name: "1. General Intelligence & Reasoning",
            topics: [
              "Analogies",
              "Coding‑Decoding",
              "Series",
              "Blood relations",
              "Direction sense",
              "Syllogisms",
              "Non-Verbal series",
              "Puzzles",
              "Venn diagrams",
              "Statement & Conclusion",
              "Cube/Pattern folding",
              "Matrix",
              "Classification",
              "Symbolic operations",
              "Spatial visualization & orientation",
            ],
          },
          {
            name: "2. General Awareness",
            topics: [
              "Current affairs",
              "History",
              "Geography",
              "Economy (including Finance)",
              "Political Science",
              "Indian polity",
              "Culture",
              "General Science",
              "Environment",
              "Books & Authors",
              "Awards",
              "Sports",
              "Science landmarks",
              "Govt schemes",
            ],
          },
          {
            name: "3. Quantitative Aptitude",
            topics: [
              "Number systems",
              "Percentage",
              "Ratio & Proportion",
              "Profit & Loss",
              "Simple & Compound Interest",
              "Time & Work",
              "Time & Distance",
              "Mensuration (2D & 3D)",
              "Algebra",
              "Trigonometry",
              "Geometry",
              "Data interpretation (graphs, charts)",
              "Averages",
              "Partnership",
              "Mixture & Allegation",
              "Surds & Indices",
            ],
          },
          {
            name: "4. English Comprehension",
            topics: [
              "Reading comprehension",
              "Cloze test",
              "Error spotting & correction",
              "Sentence improvement",
              "Phrase/idiom usage",
              "One-word substitution",
              "Synonym & antonym",
              "Active/passive voice",
              "Direct/indirect speech",
              "Spelling correction",
              "Word rearrangement",
            ],
          },
        ],
      },
      {
        title: "Tier II – Mains (Objective)",
        description:
          "Conducted online. Includes Paper-I (Compulsory) and post-specific Papers II/III. Marks count toward final merit.",
        papers: [
          {
            name: "Paper I – (All Posts)",
            modules: [
              {
                name: "Mathematical Abilities (30 Qs, 90 marks)",
                description:
                  "Advanced Quant: Number systems, Algebra, Geometry, Trigonometry, DI, Mensuration, Probability, Permutation & Combination.",
              },
              {
                name: "Reasoning & General Intelligence (30 Qs, 90 marks)",
                description: "Higher-level logical reasoning & puzzles.",
              },
              {
                name: "English Language & Comprehension (45 Qs, 135 marks)",
                description:
                  "Advanced grammar, vocabulary, reading comprehension.",
              },
              {
                name: "General Awareness (25 Qs, 75 marks)",
                description:
                  "Static GK and Current Affairs (expected mix of topics from Tier I).",
              },
              {
                name: "Computer Knowledge (20 Qs, 60 marks)",
                description:
                  "Basic MS Office (Word, Excel, PowerPoint), Internet, e‑governance, IT fundamentals.",
              },
            ],
          },
          {
            name: "Paper II – Statistics (For JSO posts only)",
            description: "100 Qs, 200 marks.",
            topics: [
              "Collection/Presentation of Data",
              "Measures of Central Tendency/Dispersion",
              "Moments",
              "Skewness",
              "Kurtosis",
              "Probability theory",
              "Random variables",
              "Sampling theory",
              "Tests (Chi-square, t, F)",
              "Correlation & Regression",
              "Index Numbers",
              "Time Series",
              "Linear programming (basic)",
            ],
          },
          {
            name: "Paper III – Finance & Economics (For AAO/AAO posts)",
            description:
              "Advanced economics and financial concepts including Government Finance, Budget, Basic economics, Accounts, Costing.",
          },
        ],
      },
      {
        title: "Post-Tier II: Tier III & Tier IV",
        sections: [
          {
            name: "Tier III: Descriptive Paper",
            description:
              "Essay, Precis, Letter/Application writing in English or Hindi.",
          },
          {
            name: "Tier IV: Skill Test/Computer Proficiency Test or Data Entry Speed Test",
            description: "As per post requirement.",
          },
        ],
      },
    ],
  },
};

const syllabusData = [
  sscCGLSyllabus,
  {
    name: "SSC CHSL",
    details: {
      tiers: [
        {
          title: "Tier I – Preliminary (CBT)",
          sections: [
            { name: "General Intelligence" },
            { name: "English Language" },
            { name: "Quantitative Aptitude" },
            { name: "General Awareness" },
          ],
        },
        {
          title: "Tier II – Mains (Descriptive & Skill Test)",
          sections: [
            {
              name: "Paper-I (CBE): Mathematical Abilities, Reasoning, English, GA, Computer Knowledge",
            },
            { name: "Skill Test/Typing Test (Qualifying)" },
          ],
        },
      ],
    },
  },
  {
    name: "SSC MTS & Havaldar",
    details: {
      tiers: [
        {
          title: "Computer Based Examination (CBE)",
          sections: [
            {
              name: "Session-I: Numerical & Mathematical Ability, Reasoning Ability & Problem Solving",
            },
            {
              name: "Session-II: General Awareness, English Language & Comprehension",
            },
          ],
        },
        {
          title:
            "Physical Efficiency Test (PET) / Physical Standard Test (PST) (For Havaldar only)",
          description:
            "Walking, Cycling, Height, Chest, Weight as per standards.",
        },
      ],
    },
  },
  {
    name: "SSC GD Constable",
    details: {
      tiers: [
        {
          title: "Computer-Based Exam",
          sections: [
            { name: "General Intelligence & Reasoning" },
            { name: "General Knowledge & General Awareness" },
            { name: "Elementary Mathematics" },
            { name: "English/Hindi" },
          ],
        },
        {
          title:
            "Physical Efficiency Test (PET) / Physical Standard Test (PST)",
          description: "Race, Height, Chest measurements as per standards.",
        },
      ],
    },
  },
  {
    name: "SSC CPO",
    details: {
      tiers: [
        {
          title: "Paper-I (CBE)",
          sections: [
            { name: "General Intelligence & Reasoning" },
            { name: "General Knowledge & General Awareness" },
            { name: "Quantitative Aptitude" },
            { name: "English Comprehension" },
          ],
        },
        {
          title: "Physical Standard Test (PST) / Physical Endurance Test (PET)",
          description:
            "Physical measurements and various endurance tests (races, jumps, shotput).",
        },
        {
          title: "Paper-II (English Language & Comprehension)",
          description: "Focuses on English proficiency.",
        },
      ],
    },
  },
  {
    name: "SSC JE (Junior Engineer)",
    details: {
      tiers: [
        {
          title: "Paper I (CBT)",
          sections: [
            { name: "General Intelligence & Reasoning" },
            { name: "General Awareness" },
            { name: "Engineering (Civil/Mechanical/Electrical)" },
          ],
        },
        {
          title: "Paper II (Descriptive)",
          sections: [{ name: "Engineering (Same stream as Paper I)" }],
        },
      ],
    },
  },
  {
    name: "SSC Stenographer (Gr. C & D)",
    details: {
      message:
        "Detailed syllabus for SSC Stenographer will be available soon! Please check back later for updates.",
    },
  },
  {
    name: "SSC Selection Post",
    details: {
      message:
        "Detailed syllabus for SSC Selection Post will be available soon! Please check back later for updates.",
    },
  },
  {
    name: "SSC JHT (Junior Hindi Translator)",
    details: {
      message:
        "Detailed syllabus for SSC JHT will be available soon! Please check back later for updates.",
    },
  },
];

const Syllabus = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set initial active index to 0 for CGL

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-900 leading-tight">
          SSC Exam <span className="text-blue-700">Syllabus</span>
        </h1>

        {syllabusData.map((exam, index) => (
          <div
            key={index}
            className="mb-6 rounded-lg shadow-xl border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className={`
                w-full text-left px-6 py-4 font-bold text-xl transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-blue-700 text-white rounded-t-lg"
                    : "bg-white text-gray-800 hover:bg-blue-50"
                }
                flex justify-between items-center
              `}
            >
              {exam.name}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-6 bg-white text-gray-700 border-t border-gray-100">
                {exam.details.message ? (
                  // Render placeholder message if provided
                  <p className="text-lg text-gray-500 py-10 text-center">
                    {exam.details.message}
                  </p>
                ) : (
                  // Render structured syllabus details
                  exam.details.tiers &&
                  exam.details.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="mb-6 last:mb-0">
                      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                        {tier.title}
                      </h3>
                      {tier.description && (
                        <p className="mb-4 text-lg">{tier.description}</p>
                      )}

                      {tier.sections &&
                        tier.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 ml-4">
                            <h4 className="text-xl font-medium text-gray-800 mb-2">
                              {section.name}
                            </h4>
                            {section.description && (
                              <p className="mb-2 text-base">
                                {section.description}
                              </p>
                            )}
                            {renderTopics(section.topics)}
                          </div>
                        ))}

                      {tier.papers &&
                        tier.papers.map((paper, paperIndex) => (
                          <div key={paperIndex} className="mb-4 ml-4">
                            <h4 className="text-xl font-medium text-gray-800 mb-2">
                              {paper.name}
                            </h4>
                            {paper.description && (
                              <p className="mb-2 text-base">
                                {paper.description}
                              </p>
                            )}
                            {paper.modules &&
                              paper.modules.map((module, moduleIndex) => (
                                <div key={moduleIndex} className="mb-2 ml-4">
                                  <h5 className="text-lg font-normal text-gray-700">
                                    {module.name}
                                  </h5>
                                  {module.description && (
                                    <p className="text-base text-gray-600">
                                      {module.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            {renderTopics(paper.topics)}
                          </div>
                        ))}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
