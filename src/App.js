import { useState } from "react";
import "./App.scss";
import {
  Navbar,
  Skills,
  TimeLine,
  Footer,
  Education,
  Profile,
  Work,
  Contact,
} from "./components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function App() {
  const [state, setState] = useState({
    leftOpen: true,
    rightOpen: false,
  });

  const toggleSidebar = e => {
    let key = `${e.currentTarget.parentNode.id}Open`;
    setState({ ...state, [key]: !state[key] });
  };
  let leftOpen = state.leftOpen ? "open" : "closed";
  let rightOpen = state.rightOpen ? "open" : "closed";

  let time_line;
  if (rightOpen === "closed") {
    time_line = <ArrowBackIcon />;
  } else {
    time_line = <ArrowForwardIcon />;
  }

  return (
    <div className="app">
      <div id="layout">
        <div id="left" className={leftOpen}>
          <div className="icon" onClick={toggleSidebar}>
            &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <div className="header">
              <h3 className="title">Sam Qi</h3>
            </div>
            <div className="content">
              <Navbar state={state} setState={setState} />
            </div>
          </div>
        </div>
        <div id="main">
          <div className="header"></div>
          <div className="content">
            <Profile />
            <Skills />
            <Work />
            <Education />
            <Contact />
          </div>
        </div>
        <div id="right" className={rightOpen}>
          <div className="icon2" onClick={toggleSidebar}>
            {time_line}
          </div>
          <div className={`sidebar ${rightOpen}`}>
            <div className="header">
              <h3 className="title">Time Line</h3>
            </div>
            <div className="content">
              <TimeLine />
            </div>
          </div>
        </div>
      </div>
      <Footer state={state} setState={setState} />
    </div>
  );
}

export default App;
