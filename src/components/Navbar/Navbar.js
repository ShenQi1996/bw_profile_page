import React from "react";
import "./Navbar.scss";
import SmoothList from "react-smooth-list";

const Navbar = ({ state, setState }) => {
  const handleClick = e => {
    setState(!state);
  };
  return (
    <div className="navbar">
      <SmoothList>
        <a onClick={handleClick} href="#Profile">
          Sam
        </a>
        <a onClick={handleClick} href="#Skills">
          Skills
        </a>
        <a onClick={handleClick} href="#Work">
          Works
        </a>
        <a onClick={handleClick} href="#Education">
          Education
        </a>
        <a onClick={handleClick} href="#Contact">
          Contact
        </a>
      </SmoothList>
    </div>
  );
};

export default Navbar;
