import React from "react";
import "./Sidebar.css"; // Import the CSS file
import { assets } from "../../assets/assets"; // Ensure this path is correct for your project
import { NavLink } from "react-router-dom"; // NavLink is perfect for active styling

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-options">
        <NavLink to="/addquestion" className="admin-sidebar-option">
          <img src={assets.add_icon} alt="Add Question Icon" />
          <p>Add Question</p>{" "}
          {/* Capitalized for consistency with title style */}
        </NavLink>
        <NavLink to="/listquestion" className="admin-sidebar-option">
          <img src={assets.list_icon} alt="List Question Icon" />
          <p>List Questions</p> {/* Adjusting text for clarity/consistency */}
        </NavLink>
        <NavLink to="/addnotes" className="admin-sidebar-option">
          <img src={assets.add_icon} alt="Add Notes Icon" />
          <p>Add Notes</p>
        </NavLink>
        <NavLink to="/listnotes" className="admin-sidebar-option">
          <img src={assets.list_icon} alt="List Notes Icon" />
          <p>List Notes</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
