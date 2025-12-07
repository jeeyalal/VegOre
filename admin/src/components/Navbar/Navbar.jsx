import React from "react";
import "./Navbar.css";
import { FaUserShield, FaBell, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="admin-navbar">
      {/* Left Section */}
      <div className="admin-navbar-left">
        <FaUserShield className="admin-icon" />
        <h2 className="vegore-title">Vegore Admin</h2>
      </div>

      {/* Right Section */}
      <div className="admin-navbar-right">
        <FaBell className="nav-icon" />
        <div className="admin-profile">
          <img
            src="https://pravatar.cc/40"
            alt="admin"
            className="admin-avatar"
          />
          <span className="admin-name">Admin</span>
        </div>
        <FaSignOutAlt className="nav-icon logout" />
      </div>
    </div>
  );
};

export default Navbar;
