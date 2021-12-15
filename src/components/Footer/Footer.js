import React from "react";
import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
const Footer = ({ state, setState }) => {
  const handleClick = e => {
    setState(!state);
  };
  return (
    <div className="footer">
      <div className="mobile">
        <a onClick={handleClick} href="#Contact">
          Contact Me
        </a>
      </div>
      <div className="window">
        <div>
          <GitHubIcon className="small" />
          <p>
            <a
              href="https://github.com/ShenQi1996"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div>
          <LinkedInIcon className="small" />
          <p>
            <a
              href="https://www.linkedin.com/in/shenqi1993/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div>
          <EmailIcon className="small" />
          <p>qisam1989@gmail.com</p>
        </div>
        <div>
          <CalendarTodayIcon className="small" />
          <p>
            <a
              href="https://calendly.com/qisam"
              target="_blank"
              rel="noreferrer"
            >
              Calendly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
