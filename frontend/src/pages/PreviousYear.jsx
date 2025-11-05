import { useState, useEffect, useContext } from "react";
import { CglContext } from "../context/CglContext";

const PreviousYear = () => {
  const { url } = useContext(CglContext);

  const [exams, setExams] = useState([]);
  const [years, setYears] = useState([]);
  const [files, setFiles] = useState([]);

  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // "Mains" or "Preli"

  const [loadingExams, setLoadingExams] = useState(true);
  const [loadingYears, setLoadingYears] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Exams on mount
  useEffect(() => {
    const fetchExams = async () => {
      setLoadingExams(true);
      setError(null);
      try {
        const res = await fetch(`${url}/api/previousYear/exams`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setExams(data.exams || []);
      } catch (err) {
        setError("Failed to fetch exams. Please try again later.");
        console.error("Error fetching exams", err);
      } finally {
        setLoadingExams(false);
      }
    };

    fetchExams();
  }, [url]);

  const handleExamClick = async (exam) => {
    setSelectedExam(exam);
    setSelectedYear(null);
    setSelectedCategory(null);
    setFiles([]);
    setYears([]);

    setLoadingYears(true);
    setError(null);
    try {
      const res = await fetch(`${url}/api/previousYear/years/${exam}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setYears(data.years || []);
    } catch (err) {
      setError(`Failed to fetch years for ${exam}.`);
      console.error("Error fetching years", err);
    } finally {
      setLoadingYears(false);
    }
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setSelectedCategory(null);
    setFiles([]);
  };

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoadingFiles(true);
    setError(null);

    try {
      const res = await fetch(
        `${url}/api/previousYear/files/${selectedExam}/${selectedYear}/${category}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setFiles(data.files || []);
    } catch (err) {
      setError(`Failed to fetch files for ${category} ${selectedYear}.`);
      console.error("Error fetching files", err);
    } finally {
      setLoadingFiles(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center tracking-tight">
          Previous Year Questions
        </h2>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {/* === Step 1: Select Exam === */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">1.</span> Select an Exam
          </h3>
          {loadingExams ? (
            <p className="text-gray-600 text-center py-4">Loading exams...</p>
          ) : exams.length === 0 ? (
            <p className="text-gray-600 text-center py-4">
              No exams available.
            </p>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center">
              {exams.map((exam, idx) => (
                <button
                  key={idx}
                  onClick={() => handleExamClick(exam)}
                  className={`
                    px-6 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 ease-in-out
                    ${selectedExam === exam
                      ? "bg-blue-700 text-white ring-2 ring-blue-500 transform scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
                    }
                  `}
                >
                  {exam}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* === Step 2: Select Year === */}
        {selectedExam && (
          <section className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">2.</span> Select Year for "
              {selectedExam}"
            </h3>
            {loadingYears ? (
              <p className="text-gray-600 text-center py-4">Loading years...</p>
            ) : years.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No years found for this exam.
              </p>
            ) : (
              <div className="flex flex-wrap gap-3 justify-center">
                {years.map((year, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleYearClick(year)}
                    className={`
                      px-5 py-2 rounded-full text-base font-medium shadow-sm transition-all duration-300 ease-in-out
                      ${selectedYear === year
                        ? "bg-blue-700 text-white ring-2 ring-blue-500 transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
                      }
                    `}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* === Step 3: Select Category === */}
        {selectedYear && (
          <section className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">3.</span> Select Category for{" "}
              {selectedYear}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Mains", "Preli"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    px-5 py-2 rounded-full text-base font-medium shadow-sm transition-all duration-300 ease-in-out
                    ${selectedCategory === category
                      ? "bg-blue-700 text-white ring-2 ring-blue-500 transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* === Step 4: Show Files === */}
        {selectedCategory && (
          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Available Files for {selectedExam} - {selectedYear} -{" "}
              {selectedCategory}
            </h3>
            {loadingFiles ? (
              <p className="text-gray-600 text-center py-4">Loading files...</p>
            ) : files.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No files found for this selection.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {files.map((file) => (
                  <div
                    key={file._id}
                    className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  >
                    <p className="text-xl font-semibold text-blue-800 mb-2">
                      {file.title}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {file.description}
                    </p>
                    <a
                      href={file.file}
                      download={file.originalFilename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm shadow"
                    >
                      View File
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l5 5m0 0l-5 5m5-5H14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default PreviousYear;
