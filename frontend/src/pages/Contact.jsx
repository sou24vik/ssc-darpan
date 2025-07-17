import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Get in Touch: <span className="text-blue-700">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and guide you on your journey to
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
              Our Contact Details
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center">
                <span className="text-blue-600 text-3xl mr-4">&#9993;</span>{" "}
                {/* Email icon */}
                <div>
                  <p className="font-semibold">Email:</p>
                  <a
                    href="mailto:info@yourcoaching.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@sscdarpan.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-3xl mr-4">&#127968;</span>{" "}
                {/* Building icon */}
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>
                    Damughosa, Deshra,
                    <br /> Bankura, 722141
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-3xl mr-4">&#128337;</span>{" "}
                {/* Clock icon */}
                <div>
                  <p className="font-semibold">Operating Hours:</p>
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Inquiry about courses"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300 text-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
            Find Us on the Map
          </h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-md overflow-hidden shadow-md">
            {/* Replace the src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/place/Damughosa+Primary+School/@22.9429113,87.6185264,2518m/data=!3m1!1e3!4m6!3m5!1s0x39f818ddc305a16d:0xdbed9cb20a89b016!8m2!3d22.9428926!4d87.636959!16s%2Fg%2F11c524d8xj?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coaching Center Location"
            ></iframe>
          </div>
        </div>

        {/* Social Media Section (Optional) */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-3">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <span className="text-5xl">&#x1F4F1;</span>{" "}
              {/* Generic phone icon, replace with specific social media icons if available */}
              <p className="text-lg font-semibold mt-2">Facebook</p>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <span className="text-5xl">&#x1F4F7;</span>{" "}
              {/* Generic photo icon */}
              <p className="text-lg font-semibold mt-2">Instagram</p>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <span className="text-5xl">&#x1F4FA;</span>{" "}
              {/* Generic TV icon */}
              <p className="text-lg font-semibold mt-2">YouTube</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
