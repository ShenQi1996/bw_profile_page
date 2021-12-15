import React from "react";
import "./Education.scss";
import Pic from "../../../images/nav.jpg";
const Education = () => {
  return (
    <div className="education" id="Education">
      <img src={Pic} alt="" />
      <div className="education_container1">
        <div className="education_img">
          <img src="" alt="" />
        </div>
        <div className="education_text">test</div>
      </div>
      <div className="education_container2">
        <div className="education_text">test</div>
        <div className="education_img">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
