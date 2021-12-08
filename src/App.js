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

  return (
    <div className="app">
      <div id="layout">
        <div id="left" className={leftOpen}>
          <div className="icon" onClick={toggleSidebar}>
            &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <div className="header">
              <h3 className="title"> </h3>
            </div>
            <div className="content">
              <Navbar />
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
            {rightOpen}
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
      <Footer />
    </div>
  );
}

export default App;
