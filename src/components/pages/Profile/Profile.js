import React from "react";
import "./Profile.scss";
import Pic from "../../../images/pro2.jpg";
import Typical from "react-typical";
import Pic_top from "../../../images/pro_top.jpg";
import Pic_right from "../../../images/ring.png";
import Pic_btn_left from "../../../images/images.png";
const Profile = () => {
  return (
    <div className="profile" id="Profile">
      <div className="profile_header">
        <Typical
          className="typeing_header"
          steps={["Sam", 3000]}
          loop={1}
          wrapper="h1"
        />
      </div>
      <div className="profile_content">
        <div className="image_page">
          <div className="image_div">
            <img className="pro_pic2" src={Pic_top} alt="" />
            <img className="pro_pic3" src={Pic_right} alt="" />
          </div>
          <h1>Hi, My name is Sam and I am a </h1>
          <Typical
            className="typeing"
            steps={["Full-Stack Software Engineer and Personal Trainer", 3000]}
            loop={1}
            wrapper="p"
          />
          <p>I am a person that loves</p>
          <Typical
            className="typeing"
            steps={[
              "Developing",
              2000,
              "Designing",
              2000,
              "Delivering Softwares",
              2000,
              "Websites",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          <p>
            used by all kinds of businesses. A proven leader with a number of
            years of experience who is driven to make the world a better place
            one solution at a time and create a personal brand that people
            remember me, build things that represent me, and appreciate people
            that helped me.
          </p>
        </div>
        <div className="image_content">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="pro_btn">
        <img className="pro_pic4" src={Pic_btn_left} alt="" />
      </div>
    </div>
  );
};

export default Profile;
