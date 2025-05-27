import React from "react";
import { CiSearch } from "react-icons/ci";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="title-section">
        <div className="menu-icon">
          <img src="public/assets/menu.svg" />
        </div>
        <div className="title-main">Health</div>
        <span className="title-sub">care.</span>
      </div>
      <div className="search-section">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="notification">
        <img src="public/assets/bell-icon.svg" />
      </div>
      <div className="profile-section">
        <img src="public/assets/avatar2.svg" className="avatar" />
        <img src="public\assets\add-icon.svg" className="add-icon" />
      </div>
    </div>
  );
};

export default Header;
