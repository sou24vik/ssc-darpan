const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Empowering Your Ambition:{" "}
            <span className="text-blue-700">About Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in navigating the path to success in
            competitive examinations.
          </p>
        </div>

        {/* Section: About Our Coaching Center */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
            Our Coaching Center: Nurturing Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Story & Mission
              </h3>
              <p className="mb-4">
                Founded in 2024, SSC Darpan began with a singular vision: to
                demystify competitive exams and make quality preparation
                accessible to every aspiring candidate. We recognized the need
                for a personalized approach in an often overwhelming landscape.
              </p>
              <p>
                Our mission is to empower students with not just knowledge, but
                also the strategic thinking, confidence, and resilience needed
                to excel. We are committed to fostering an environment where
                potential is recognized, nurtured, and transformed into
                achievement.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-blue-600">Expert Faculty:</strong>{" "}
                  Learn from seasoned educators with years of experience and
                  deep subject matter expertise.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Comprehensive Curriculum:
                  </strong>{" "}
                  Meticulously designed courses covering every aspect of the
                  syllabus.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Personalized Mentorship:
                  </strong>{" "}
                  Small batch sizes and one-on-one sessions ensure individual
                  attention and doubt clarification.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Proven Track Record:
                  </strong>{" "}
                  A history of successful students who have secured top ranks in
                  various exams.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Dynamic Teaching Methodology:
                  </strong>{" "}
                  Engaging classes, interactive sessions, and innovative
                  learning tools.
                </li>
                <li>
                  <strong className="text-blue-600">
                    State-of-the-Art Facilities:
                  </strong>{" "}
                  A conducive learning environment equipped with modern
                  amenities.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: About Our Website */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
            Our Digital Platform: Your Resource Hub
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond our physical classrooms, our website serves as a powerful
            extension of our commitment to your success. It's designed to be
            your comprehensive online resource hub, providing essential tools
            and information at your fingertips, anytime, anywhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <span className="text-blue-600 text-4xl mb-3">&#128218;</span>{" "}
              {/* Book icon */}
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Detailed Exam Patterns & Syllabus
              </h4>
              <p>
                Access up-to-date and thoroughly explained exam patterns,
                including the revised SSC CGL structure, and detailed syllabi
                for various competitive exams.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <span className="text-blue-600 text-4xl mb-3">&#128187;</span>{" "}
              {/* Computer icon */}
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Extensive Study Resources
              </h4>
              <p>
                Dive into a rich library of study notes, articles, strategy
                guides, and curated materials developed by our expert faculty.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <span className="text-blue-600 text-4xl mb-3">&#128221;</span>{" "}
              {/* Clipboard icon */}
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Practice Tests & Previous Papers
              </h4>
              <p>
                Sharpen your skills with a wide array of practice tests, mock
                exams, and archives of previous year's question papers.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <span className="text-blue-600 text-4xl mb-3">&#128227;</span>{" "}
              {/* Megaphone icon */}
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Latest Notifications & Updates
              </h4>
              <p>
                Stay ahead with real-time alerts on exam dates, application
                deadlines, results, and other crucial announcements.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <span className="text-blue-600 text-4xl mb-3">&#127891;</span>{" "}
              {/* Graduation Cap icon */}
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Result Analysis & Success Stories
              </h4>
              <p>
                Celebrate achievements and find inspiration in the success
                stories of our past students, along with insights into result
                trends.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center p-8 bg-blue-700 text-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Begin Your Success Journey?
          </h3>
          <p className="text-xl mb-6">
            Join SSC Darpan today and take the first step towards
            achieving your career aspirations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-md"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
