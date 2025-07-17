import React from "react";

const Tier1Pattern = () => {
  return (
    // Outer container for the entire Tier 1 content, mimicking a content card
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
      {/* Introduction Paragraph */}
      <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
        The SSC CGL Tier-1 Exam will be conducted online, comprising 4 sections
        with{" "}
        <strong className="text-blue-800">
          100 multiple-choice questions (MCQs) in total, for a maximum of 200
          marks.
        </strong>{" "}
        The entire exam must be completed within a time span of 60 minutes.
        <strong className="text-blue-800">
          SSC CGL Tier 1 Exam will be of a qualifying nature, and marks will not
          be counted in the final selection.
        </strong>
      </p>

      {/* Sections List */}
      <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
        The questions asked in the SSC CGL Tier 1 Exam 2024 are from the
        following sections:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-lg text-gray-800 pl-4 mb-8">
        <li>General Intelligence &amp; Reasoning</li>
        <li>General Awareness</li>
        <li>Quantitative Aptitude</li>
        <li>English Comprehension</li>
      </ol>

      {/* Exam Pattern Table */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th
                colSpan="5"
                className="text-center py-4 font-bold text-xl rounded-t-lg"
              >
                SSC CGL Tier 1 Exam Pattern 2024 Overview
              </th>
            </tr>
            <tr className="bg-blue-100 text-blue-800 text-left">
              <th className="px-4 py-3 border-b-2 border-blue-200">S.No.</th>
              <th className="px-4 py-3 border-b-2 border-blue-200">Sections</th>
              <th className="px-4 py-3 border-b-2 border-blue-200">
                No. of Questions
              </th>
              <th className="px-4 py-3 border-b-2 border-blue-200">
                Total Marks
              </th>
              <th className="px-4 py-3 border-b-2 border-blue-200">
                Time Allotted
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-4 py-3 border-b border-gray-200">1</td>
              <td className="px-4 py-3 border-b border-gray-200">
                General Intelligence and Reasoning
              </td>
              <td className="px-4 py-3 border-b border-gray-200">25</td>
              <td className="px-4 py-3 border-b border-gray-200">50</td>
              <td
                rowSpan="5"
                className="px-4 py-3 border-b border-gray-200 text-center align-middle bg-gray-100 font-semibold text-blue-700"
              >
                60 minutes (cumulative)
              </td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-4 py-3 border-b border-gray-200">2</td>
              <td className="px-4 py-3 border-b border-gray-200">
                General Awareness
              </td>
              <td className="px-4 py-3 border-b border-gray-200">25</td>
              <td className="px-4 py-3 border-b border-gray-200">50</td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-4 py-3 border-b border-gray-200">3</td>
              <td className="px-4 py-3 border-b border-gray-200">
                Quantitative Aptitude
              </td>
              <td className="px-4 py-3 border-b border-gray-200">25</td>
              <td className="px-4 py-3 border-b border-gray-200">50</td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-4 py-3 border-b border-gray-200">4</td>
              <td className="px-4 py-3 border-b border-gray-200">
                English Comprehension
              </td>
              <td className="px-4 py-3 border-b border-gray-200">25</td>
              <td className="px-4 py-3 border-b border-gray-200">50</td>
            </tr>
            <tr className="bg-blue-50 text-blue-800 font-bold">
              {" "}
              {/* Highlight total row */}
              <td
                colSpan="2"
                className="px-4 py-3 border-b border-gray-200 text-right"
              >
                Total
              </td>
              <td className="px-4 py-3 border-b border-gray-200">100</td>
              <td className="px-4 py-3 border-b border-gray-200">200</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Negative Marking Note */}
      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded">
        <p className="font-semibold text-lg">Important Note:</p>
        <p className="text-base">
          There is a negative marking of{" "}
          <strong className="text-yellow-900">0.50 marks</strong> for each wrong
          answer in Tier 1.
        </p>
      </div>
    </div>
  );
};

export default Tier1Pattern;
