import React from "react";

const Tier2Pattern = () => {
  return (
    // Outer container for the entire Tier 2 content, mimicking a content card
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
      {/* Introduction Paragraph */}
      <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
        The SSC CGL Tier 2 Exam 2024 will be conducted in 2 phases:{" "}
        <strong className="text-blue-800">Paper 1</strong> and{" "}
        <strong className="text-blue-800">Paper 2</strong>. Paper I is
        compulsory for all posts. Paper II is specifically for candidates who
        apply for the posts of Junior Statistical Officer (JSO) in the Ministry
        of Statistics and Programme Implementation.
      </p>

      {/* Overview Table - (No change needed here, it's not the problematic table) */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th
                colSpan="3"
                className="text-center py-4 font-bold text-xl rounded-t-lg"
              >
                SSC CGL Tier 2 Exam Papers Overview
              </th>
            </tr>
            <tr className="bg-blue-100 text-blue-800 text-left">
              <th className="px-3 py-2 border-b-2 border-blue-200">S.No.</th>
              <th className="px-3 py-2 border-b-2 border-blue-200">Papers</th>
              <th className="px-3 py-2 border-b-2 border-blue-200">
                Time Allotted
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200">1</td>
              <td className="px-3 py-2 border-b border-gray-200">
                <strong className="text-blue-800">Paper I:</strong> (Compulsory
                for all posts)
              </td>
              <td className="px-3 py-2 border-b border-gray-200">
                2 hours 30 minutes
              </td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200">2</td>
              <td className="px-3 py-2 border-b border-gray-200">
                <strong className="text-blue-800">Paper II:</strong> For Junior
                Statistical Officer (JSO) and Statistical Investigator Gr. II
              </td>
              <td className="px-3 py-2 border-b border-gray-200">2 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
        The detailed SSC CGL Exam Pattern 2024 for Tier 2 Exam has been
        discussed below, along with the changes made by SSC this year.
      </p>

      {/* Paper 1 Detailed Pattern Table - **MODIFIED: text-sm added** */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-8">
        {/* Added text-sm to reduce font size for the entire table */}
        <table className="min-w-full table-fixed border-collapse text-sm">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th
                colSpan="8"
                className="text-center py-4 font-bold text-xl rounded-t-lg"
              >
                SSC CGL Tier 2 Exam Pattern 2024 [Paper 1]
              </th>
            </tr>
            <tr className="bg-blue-100 text-blue-800 text-left">
              {/* Adjusted explicit widths slightly for better fit with smaller font */}
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[8%]">
                Sessions
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[12%]">
                Sections
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[8%]">
                Modules
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[30%]">
                Subject
              </th>{" "}
              {/* Adjusted width */}
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[9%]">
                No. of Questions
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[9%]">
                Marks
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[9%]">
                Weightage
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200 w-[15%]">
                Duration
              </th>{" "}
              {/* Adjusted width */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td
                rowSpan="5"
                className="px-3 py-2 border-b border-gray-200 font-semibold text-blue-700 align-top"
              >
                Session I
              </td>
              <td
                rowSpan="2"
                className="px-3 py-2 border-b border-gray-200 font-semibold text-gray-800 align-top"
              >
                Section I
              </td>
              <td className="px-3 py-2 border-b border-gray-200">Module-I</td>
              <td className="px-3 py-2 border-b border-gray-200">
                Mathematical Abilities
              </td>
              <td className="px-3 py-2 border-b border-gray-200">30</td>
              <td className="px-3 py-2 border-b border-gray-200">90</td>
              <td className="px-3 py-2 border-b border-gray-200">23%</td>
              <td
                rowSpan="2"
                className="px-3 py-2 border-b border-gray-200 text-center align-middle bg-gray-100 font-semibold text-blue-700"
              >
                1 hour
              </td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200">Module-II</td>
              <td className="px-3 py-2 border-b border-gray-200">
                Reasoning and General Intelligence
              </td>
              <td className="px-3 py-2 border-b border-gray-200">30</td>
              <td className="px-3 py-2 border-b border-gray-200">90</td>
              <td className="px-3 py-2 border-b border-gray-200">23%</td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td
                rowSpan="2"
                className="px-3 py-2 border-b border-gray-200 font-semibold text-gray-800 align-top"
              >
                Section II
              </td>
              <td className="px-3 py-2 border-b border-gray-200">Module-I</td>
              <td className="px-3 py-2 border-b border-gray-200">
                English Language and Comprehension
              </td>
              <td className="px-3 py-2 border-b border-gray-200">45</td>
              <td className="px-3 py-2 border-b border-gray-200">135</td>
              <td className="px-3 py-2 border-b border-gray-200">35%</td>
              <td
                rowSpan="2"
                className="px-3 py-2 border-b border-gray-200 text-center align-middle bg-gray-100 font-semibold text-blue-700"
              >
                1 hour
              </td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200">Module-II</td>
              <td className="px-3 py-2 border-b border-gray-200">
                General Awareness
              </td>
              <td className="px-3 py-2 border-b border-gray-200">25</td>
              <td className="px-3 py-2 border-b border-gray-200">75</td>
              <td className="px-3 py-2 border-b border-gray-200">19%</td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td
                rowSpan="2"
                className="px-3 py-2 border-b border-gray-200 font-semibold text-blue-700 align-top"
              >
                Section III
              </td>
              <td className="px-3 py-2 border-b border-gray-200">Module-I</td>
              <td className="px-3 py-2 border-b border-gray-200">
                Computer Knowledge Test
              </td>
              <td className="px-3 py-2 border-b border-gray-200">20</td>
              <td className="px-3 py-2 border-b border-gray-200">60</td>
              <td className="px-3 py-2 border-b border-gray-200">Qualifying</td>
              <td className="px-3 py-2 border-b border-gray-200 text-center align-middle bg-gray-100 font-semibold text-blue-700">
                15 minutes
              </td>
            </tr>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200 font-semibold align-top">
                Session II
              </td>
              <td className="px-3 py-2 border-b border-gray-200">Module-II</td>
              <td className="px-3 py-2 border-b border-gray-200">
                Data Entry Speed Test
              </td>
              <td colSpan="2" className="px-3 py-2 border-b border-gray-200">
                One Data Entry Task
              </td>
              <td className="px-3 py-2 border-b border-gray-200">Qualifying</td>
              <td className="px-3 py-2 border-b border-gray-200 text-center align-middle bg-gray-100 font-semibold text-blue-700">
                15 minutes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paper 2 Detailed Pattern Table - (No change needed here, it's not the problematic table) */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th
                colSpan="5"
                className="text-center py-4 font-bold text-xl rounded-t-lg"
              >
                SSC CGL Tier 2 Exam Pattern 2024 [Paper 2]
              </th>
            </tr>
            <tr className="bg-blue-100 text-blue-800 text-left">
              <th className="px-3 py-2 border-b-2 border-blue-200">Papers</th>
              <th className="px-3 py-2 border-b-2 border-blue-200">Sections</th>
              <th className="px-3 py-2 border-b-2 border-blue-200">
                No. of Questions
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200">
                Maximum Marks
              </th>
              <th className="px-3 py-2 border-b-2 border-blue-200">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white odd:bg-gray-50 text-gray-800">
              <td className="px-3 py-2 border-b border-gray-200">Paper II</td>
              <td className="px-3 py-2 border-b border-gray-200">Statistics</td>
              <td className="px-3 py-2 border-b border-gray-200">100</td>
              <td className="px-3 py-2 border-b border-gray-200">200</td>
              <td className="px-3 py-2 border-b border-gray-200">2 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Negative Marking Note */}
      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded">
        <p className="font-semibold text-lg">Important Note:</p>
        <p className="text-base">
          There is a negative marking of{" "}
          <strong className="text-yellow-900">1 mark</strong> for each wrong
          answer in Section-I, Section-II and Module-I of Section-III of
          Paper-I.
        </p>
        <p className="text-base mt-2">
          Additionally, there is a negative marking of{" "}
          <strong className="text-yellow-900">0.50 marks</strong> for each wrong
          answer in Paper-II.
        </p>
      </div>
    </div>
  );
};

export default Tier2Pattern;
