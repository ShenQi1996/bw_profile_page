import React from "react";
import "./Skill.scss";
import Pic1 from "../../../images/istockphoto-1173067172-612x612.jpg";
const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="skills_container1">
        <img src={Pic1} alt="" />
        <a
          href="https://docs.google.com/document/d/1Fc7jn9HGnB6pDHDO0snCIQeUU7JJnMJW/edit?rtpof=true"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="skills_container2">
        <div className="front_end">
          <h1>Front-End</h1>
          <div className="front_end_container">
            <div>
              <h3>HTML</h3>
              <h3>92</h3>
            </div>
            <div>
              <h3>CSS/ SASS</h3>
              <h3>90</h3>
            </div>
            <div>
              <h3>JavaScript</h3>
              <h3>80</h3>
            </div>
            <div>
              <h3>ReactJS</h3>
              <h3>85</h3>
            </div>
            <div>
              <h3>jQuery</h3>
              <h3>88</h3>
            </div>
            <div>
              <h3>REST Api</h3>
              <h3>90</h3>
            </div>
          </div>
        </div>
        <div className="back_end">
          <h1>Back-End</h1>
          <div className="back_end_container">
            <div>
              <h3>Redux</h3>
              <h3>80</h3>
            </div>
            <div>
              <h3>SQL</h3>
              <h3>84</h3>
            </div>
            <div>
              <h3>Ruby on Rails</h3>
              <h3>75</h3>
            </div>
            <div>
              <h3>Firebase</h3>
              <h3>89</h3>
            </div>
            <div>
              <h3>Mongodb</h3>
              <h3>93</h3>
            </div>
          </div>
        </div>
        <div className="technology">
          <h1>Technology</h1>
          <div className="technology_container">
            <div>
              <h3>AWS</h3>
              <h3>70</h3>
            </div>
            <div>
              <h3>Github</h3>
              <h3>90</h3>
            </div>
            <div>
              <h3>Shopify</h3>
              <h3>73</h3>
            </div>
            <div>
              <h3>Heroku</h3>
              <h3>76</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
