import React from "react";
import "./Navbar.css"; // Import the CSS file
import { assets } from "../../assets/assets"; // Ensure this path is correct for your project

const Navbar = () => {
  return (
    <div className="admin-navbar">
      <img className="admin-navbar-logo" src={assets.logo} alt="Admin Logo" />
      <div className="admin-navbar-profile-section">
        {/* You might add user name or a dropdown here later */}
        <img
          className="admin-navbar-profile-image"
          src={assets.profile_image}
          alt="Admin Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
