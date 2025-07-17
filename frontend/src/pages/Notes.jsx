import { useContext, useEffect, useState } from "react";
import { CglContext } from "../context/CglContext";

const Notes = () => {
  const { url } = useContext(CglContext);

  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [notes, setNotes] = useState([]);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [loadingSubjects, setLoadingSubjects] = useState(true);
  const [loadingChapters, setLoadingChapters] = useState(false);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoadingSubjects(true);
      setError(null);
      try {
        const res = await fetch(`${url}/api/notes/subjects`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setSubjects(data.subjects || []);
      } catch (err) {
        setError("Failed to fetch subjects. Please try again later.");
        console.error("Error fetching subjects:", err);
      } finally {
        setLoadingSubjects(false);
      }
    };
    fetchSubjects();
  }, [url]);

  const handleSubjectClick = async (subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setNotes([]);
    setLoadingChapters(true);
    setError(null);

    try {
      const res = await fetch(`${url}/api/notes/chapters/${subject}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setChapters(data.chapters || []);
    } catch (err) {
      setError(`Failed to fetch chapters for ${subject}.`);
      console.error("Error fetching chapters:", err);
    } finally {
      setLoadingChapters(false);
    }
  };

  const handleChapterClick = async (chapter) => {
    setSelectedChapter(chapter);
    setLoadingNotes(true);
    setError(null);

    try {
      const res = await fetch(
        `${url}/api/notes/notes/${selectedSubject}/${chapter}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setNotes(data.notes || []);
    } catch (err) {
      setError(`Failed to fetch notes for ${chapter}.`);
      console.error("Error fetching notes:", err);
    } finally {
      setLoadingNotes(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Light background for the whole page */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center tracking-tight">
          Explore Our Notes Library
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

        {/* Subjects Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Choose a Subject
          </h3>
          {loadingSubjects ? (
            <p className="text-gray-600 text-center py-4">
              Loading subjects...
            </p>
          ) : subjects.length === 0 ? (
            <p className="text-gray-600 text-center py-4">No subjects found.</p>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center">
              {subjects.map((subject, index) => (
                <button
                  key={index}
                  onClick={() => handleSubjectClick(subject)}
                  className={`
                    px-6 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 ease-in-out
                    ${
                      selectedSubject === subject
                        ? "bg-blue-700 text-white ring-2 ring-blue-500 transform scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
                    }
                  `}
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Chapters Section */}
        {selectedSubject && (
          <section className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Chapters in "{selectedSubject}"
            </h3>
            {loadingChapters ? (
              <p className="text-gray-600 text-center py-4">
                Loading chapters...
              </p>
            ) : chapters.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No chapters found for this subject.
              </p>
            ) : (
              <div className="flex flex-wrap gap-3 justify-center">
                {chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => handleChapterClick(chapter)}
                    className={`
                      px-5 py-2 rounded-full text-base font-medium shadow-sm transition-all duration-300 ease-in-out
                      ${
                        selectedChapter === chapter
                          ? "bg-green-700 text-white ring-2 ring-green-500 transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 border border-gray-200"
                      }
                    `}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Notes List Section */}
        {selectedChapter && (
          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Notes for "{selectedChapter}"
            </h3>
            {loadingNotes ? (
              <p className="text-gray-600 text-center py-4">Loading notes...</p>
            ) : notes.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No notes found for this chapter.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note) => (
                  <div
                    key={note._id}
                    className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  >
                    <p className="text-xl font-semibold text-blue-800 mb-2">
                      {note.title}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {" "}
                      {/* Line clamp for long descriptions */}
                      {note.description}
                    </p>
                    <a
                      href={note.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm shadow"
                    >
                      View Note
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

export default Notes;
