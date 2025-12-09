import React from "react";
import "./SideBar.css";


import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaListAlt,
  FaPlusCircle,
  FaRegCreditCard,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Vegore</h2>

      <ul className="sidebar-menu">
        <NavLink to="/orders" className="sidebar-link">
          <li className="sidebar-item">
            <FaClipboardList />
            <span>Orders</span>
          </li>
        </NavLink>

        <NavLink to="/list" className="sidebar-link">
          <li className="sidebar-item">
            <FaListAlt />
            <span>List Items</span>
          </li>
        </NavLink>

        <NavLink to="/add" className="sidebar-link">
          <li className="sidebar-item">
            <FaPlusCircle />
            <span>Add Items</span>
          </li>
        </NavLink>

        <NavLink to="/subscriptions" className="sidebar-link">
          <li className="sidebar-item">
            <FaRegCreditCard />
            <span>Subscriptions</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
