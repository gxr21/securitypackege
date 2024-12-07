import React from 'react';
import "./Header.css";
import logo from "../../assets/Logo.png"

const Header = () => {
  return (
    <header>
      <label htmlFor="logo">securityPackege</label>
      <img src={logo} alt="photo" className="shieldlogo" />
      <nav>
        <ul className="links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="#cards">content</a>
          </li>
          <li>
            <a href="#SECURITY">Explore</a>
          </li>
          <li>
            <a href="#trends">trends</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
