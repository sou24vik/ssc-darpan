import Tier1Pattern from "./Tier1Pattern";
import Tier2Pattern from "./Tier2Pattern";
import { useRef, useEffect, useState } from "react";

const ExamPattern = () => {
  const tier1Ref = useRef(null);
  const tier2Ref = useRef(null);
  const [activeSection, setActiveSection] = useState("tier1");

  const scrollToSection = (ref, sectionName) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target === tier1Ref.current &&
              entry.boundingClientRect.top < window.innerHeight / 2
            ) {
              setActiveSection("tier1");
            } else if (
              entry.target === tier2Ref.current &&
              entry.boundingClientRect.top < window.innerHeight / 2
            ) {
              setActiveSection("tier2");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    if (tier1Ref.current) observer.observe(tier1Ref.current);
    if (tier2Ref.current) observer.observe(tier2Ref.current);

    return () => {
      if (tier1Ref.current) observer.unobserve(tier1Ref.current);
      if (tier2Ref.current) observer.unobserve(tier2Ref.current);
    };
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b border-gray-200 pb-2">
              Table of Contents
            </h3>
            <nav>
              <ul>
                <li>
                  <button
                    onClick={() => scrollToSection(tier1Ref, "tier1")}
                    className={`text-left w-full py-2 px-3 rounded-md transition ${
                      activeSection === "tier1"
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    SSC CGL Tier 1 Exam Pattern 2024
                  </button>
                </li>
                <li className="mt-2">
                  <button
                    onClick={() => scrollToSection(tier2Ref, "tier2")}
                    className={`text-left w-full py-2 px-3 rounded-md transition ${
                      activeSection === "tier2"
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    SSC CGL Tier 2 Exam Pattern 2024 (Revised)
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <section ref={tier1Ref} className="mb-12">
            <Tier1Pattern />
          </section>
          <section ref={tier2Ref}>
            <Tier2Pattern />
          </section>
        </main>
      </div>
    </div>
  );
};

export default ExamPattern;
