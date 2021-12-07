import React, { useState } from "react";
import "./Profile.scss";
import Pic from "../../../images/pro.jpg";
import Typical from "react-typical";
const Profile = () => {
  return (
    <div className="profile" id="Profile">
      <div className="profile_content">
        <div className="image_content">
          <img src={Pic} alt="" />
        </div>
        <div className="image_page">
          <h1>Hi, My name is Sam and I am a </h1>
          <Typical
            className="typeing"
            steps={["Full-Stack Software Engineer and Personal Trainer.", 3000]}
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
      </div>
    </div>
  );
};

export default Profile;
