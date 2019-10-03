import React from "react";
import Header from "./Header/Header.jsx";
import About from "./About.jsx";
import Competence from "./Competence.jsx";
import Projects from "./Projects.jsx";

const Home = ({ isMobile, dataNews, dataAbout, header_title }) => {
  return (
    <React.Fragment>
      <Header isMobile={isMobile} title={header_title} />
      <About slider_list={dataAbout} />
      <Competence isMobile={isMobile} dataNews={dataNews} />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
