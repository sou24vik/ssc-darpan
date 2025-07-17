import { useContext, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CglContext } from "../context/CglContext";
import { assets } from "../assets/assests";

const Navbar = () => {
  const { navigate, setShowSearch, showSearch, token, setToken } =
    useContext(CglContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleSearch = () => {
    if (
      location.pathname.includes("notes") ||
      location.pathname.includes("previousYear") ||
      location.pathname.includes("lectures")
    ) {
      setShowSearch(!showSearch);
    }
  };

  return (
    <div className="w-full bg-blue-950 shadow-lg text-gray-100 relative z-20">
      {" "}
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative hover:text-blue-400 transition-colors duration-300 ${
                isActive
                  ? "text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-300"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative hover:text-blue-400 transition-colors duration-300 ${
                isActive
                  ? "text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-300"
                  : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative hover:text-blue-400 transition-colors duration-300 ${
                isActive
                  ? "text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-300"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        {/* Search & Profile */}
        <div className="flex items-center gap-6">
          {" "}
          {/* Increased gap for icons */}
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200" // Slightly larger, subtle hover
            onClick={toggleSearch}
          />
          {!token ? (
            <img
              src={assets.profile_icon}
              alt="Login"
              className="w-7 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200" // Slightly larger, subtle hover
              onClick={() => navigate("/user/login")}
            />
          ) : (
            <div className="relative group">
              <img
                src={assets.logout_icon}
                alt="Logout"
                className="w-7 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200" // Slightly larger, subtle hover
              />
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-3 w-40 bg-gray-800 border border-blue-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 invisible group-hover:visible z-10">
                {" "}
                {/* Darker dropdown, rounded corners, subtle transition */}
                <Link
                  to="/profile"
                  className="block py-3 px-5 text-gray-200 hover:bg-blue-700 rounded-t-lg transition-colors duration-200"
                >
                  {" "}
                  {/* Added Link to profile page, better padding */}
                  My Profile
                </Link>
                <p
                  onClick={logout}
                  className="py-3 px-5 text-red-400 hover:bg-blue-700 rounded-b-lg cursor-pointer transition-colors duration-200" // Better padding, slightly softer red
                >
                  Log out
                </p>
              </div>
            </div>
          )}
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2 focus:outline-none" // Added focus outline
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-blue-300" // Larger icon, lighter color for contrast
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-4 pb-4 border-t border-blue-800">
          {" "}
          {/* Darker background, top border */}
          <nav className="flex flex-col gap-2 text-gray-100 text-lg py-2">
            {" "}
            {/* Lighter text, increased font size */}
            <NavLink
              to="/"
              className="py-2 px-3 rounded hover:bg-blue-800 transition-colors duration-200"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 px-3 rounded hover:bg-blue-800 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2 px-3 rounded hover:bg-blue-800 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
