import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      {" "}
      {/* Slightly off-white background for the section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6">
        {[
          { path: "/notes", title: "ALL NOTES" },
          { path: "/previousYear", title: "PREVIOUS YEAR QUESTIONS" },
          { path: "/lectures", title: "LECTURES" },
          { path: "/syllabus", title: "SYLLABUS" },
        ].map((card, idx) => (
          <Link
            to={card.path}
            key={idx}
            className="w-full sm:w-[46%] xl:w-[22%] bg-blue-900 text-white rounded-xl shadow-xl border border-blue-800 p-6 flex flex-col justify-between items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-blue-800 min-h-[200px]"
          >
            <div className="flex flex-col items-center">
              <p className="text-4xl font-extrabold text-blue-300 mb-2 tracking-wide">
                View
              </p>
              <p className="text-2xl text-gray-200 font-semibold leading-tight">
                for {card.title}
              </p>
            </div>
            <p className="mt-4 text-lg text-blue-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Explore Now &rarr;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
