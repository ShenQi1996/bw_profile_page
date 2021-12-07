import React from "react";
import "./Navbar.scss";
import SmoothList from "react-smooth-list";

const Navbar = () => {
  return (
    <div className="navbar">
      <SmoothList>
        <a href="#Profile">Sam</a>
        <a href="#Skills">Skills</a>
        <a href="#Work">Works</a>
        <a href="#Education">Education</a>
        <a href="#Contact">Contact</a>
      </SmoothList>
    </div>
  );
};

export default Navbar;
