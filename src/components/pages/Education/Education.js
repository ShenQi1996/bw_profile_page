import React from "react";
import "./Education.scss";
import Pic_1 from "../../../images/University_at_Buffalo_logo.png";
import Pic_2 from "../../../images/app.png";
import Pic_3 from "../../../images/pngtree-continuous-one-line-drawing-of-muscular-man-guy-person-with-big-png-image_2070450.jpg";
import Pic_4 from "../../../images/pngtree-continuous-one-line-drawing-of-muscular-person-man-showing-strong-arm-png-image_2070453.jpg";
const Education = () => {
  return (
    <div className="education" id="Education">
      <div className="education_header">
        <div>
          <img src={Pic_3} />
        </div>
      </div>
      <div className="education_container1">
        <div className="education_img">
          <img className="img1" src={Pic_1} alt="" />
        </div>
        <div className="education_text">
          <p>SUNY, University at Buffalo, Buffalo, NY</p>
          <p>Bachelor of Science in Computer Science</p>
        </div>
      </div>
      <div className="education_container2">
        <div className="education_text">
          <p> App Academy,New York, NY</p>
          <p>Web development Bootcamp with 100-hour curriculum</p>
        </div>
        <div className="education_img">
          <img className="img1" src={Pic_2} alt="" />
        </div>
      </div>
      <div className="education_footer">
        <div>
          <img src={Pic_4} />
        </div>
      </div>
    </div>
  );
};

export default Education;
