import React from "react";
import { Link } from "react-router-dom";

const Lectures = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 text-center">
        {/* Optional Icon for visual appeal */}
        <svg
          className="mx-auto h-20 w-20 text-blue-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>{" "}
        {/* Simple video icon */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
          No Lectures Available Yet
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are actively working on curating and uploading high-quality video
          lectures to enhance your learning experience. Please check back soon!
        </p>
        {/* Optional Call to Action */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Lectures;
