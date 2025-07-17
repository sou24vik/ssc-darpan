import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-teal-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-gray-800">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Top Divider */}
        <div className="border-t border-blue-300 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 lg:gap-x-12 mb-12">
          {/* Address Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 tracking-wide">
              Our Head Office
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Shubhadip Private Limited India
              <br />
              Damughosa, Deshra
              <br />
              Bankura, 722141
              <br />
              West Bengal, India
            </p>
          </div>

          {/* Center Text Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 tracking-wide">
              Thank you for visiting!
            </h2>
            <p className="text-blue-700 text-lg font-medium leading-relaxed">
              Empowering Education for a Brighter Future.
            </p>

            {/* <img src={assets.footerLogo} alt="SSC DARPAN" className="h-10 mx-auto mt-4" /> */}
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-2 tracking-wide">
              Connect With Us
            </h2>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md text-base font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md text-base font-semibold"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md text-base font-semibold"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-1">
            Our Support Channel
          </p>
          <p className="text-base text-blue-600 hover:underline cursor-pointer">
            support@sscdarpan.in
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-blue-300 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-blue-700">
          <p>© {new Date().getFullYear()} Souvik Das. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
