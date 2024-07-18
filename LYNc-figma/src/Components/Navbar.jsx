import React, { useState } from "react";
import sub from "../assets/Subtract.png";
import sub1 from "../assets/Sub1.png";
import "../Styles/Navbar.scss";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={sub1} alt="Logo Part 1" />
          <img src={sub} alt="Logo Part 2" />
        </div>
        <div className="navbar__links">
          <a href="#home">Home</a>
          <a href="#documentation">Documentation</a>
          <a href="#blog">Blog</a>
          <a href="#lyncportal">LyncPortal</a>
          <a href="#request-demo">Request a Demo</a>
        </div>
        <div className="navbar__actions">
          <button className="navbar__button" onClick={toggleMenu}>
            {isOpen ? "Close" : "Get Started"}
          </button>
          <span className="navbar__icon">
            <FaArrowRightLong />
          </span>
        </div>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
      {isOpen && (
        <div className="navbar__dropdown">
          <a href="#home">Home</a>
          <a href="#documentation">Documentation</a>
          <a href="#blog">Blog</a>
          <a href="#lyncportal">LyncPortal</a>
          <a href="#request-demo">Request a Demo</a>
          <button className="navbar__button" onClick={toggleMenu}>
            Close
          </button>
        </div>
      )}
    </nav>
  );
};
