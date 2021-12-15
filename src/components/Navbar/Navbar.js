import React from "react";
import "./Navbar.scss";
import SmoothList from "react-smooth-list";
import Pic from "../../images/arrow-drawing-6.png";
const Navbar = ({ state, setState }) => {
  const handleClick = e => {
    // setState(!state);
  };
  return (
    <div className="navbar">
      <SmoothList>
        <a onClick={handleClick} href="#Profile">
          About Me
        </a>
        <a onClick={handleClick} href="#Skills">
          Skills
        </a>
        <a onClick={handleClick} href="#Work">
          Projects
        </a>
        <a onClick={handleClick} href="#Education">
          Education
        </a>
        <a onClick={handleClick} href="#Contact">
          Contact
        </a>
        <div className="navbar_img_container">
          <img src={Pic} alt="" />
        </div>
      </SmoothList>
    </div>
  );
};

export default Navbar;
