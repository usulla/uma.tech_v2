import React, { Component } from "react";
import Nav from "../Nav/Nav.jsx";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import Header from "../../pages/Home/Header/Header.jsx";
import Home from "../../pages//Home/Home.jsx";
import appData from "./appData.json";
import Footer from "../Footer/Footer.jsx";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isMobile: false,
      scrollPoint: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(event) {
    var scrollTop;
    scrollTop = document.documentElement.scrollTop;
    if (!this.state.scrollPoint) {
      if (scrollTop > 90) {
        this.setState({ scrollPoint: true });
        document.querySelector(".menu").classList.add("active");
      }
    }
    if (scrollTop <= 90) {
      if (document.querySelector(".menu").classList.contains("active")) {
        document.querySelector(".menu").classList.remove("active");
        this.setState({ scrollPoint: false });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    if (this.state.isMobile) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  componentWillMount() {
    this.resize();
    if (this.state.isMobile) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.setState({ isMobile: window.innerWidth <= 767 });
  }

  render() {
    const { dataHeader, dataAbout, dataNews } = appData;
    return (
      <React.Fragment>
        <Nav list={dataHeader.nav} isMobile={this.state.isMobile} />
        {this.state.isMobile ? (
          <React.Fragment>
            <MobileMenu list={dataHeader.nav} />
          </React.Fragment>
        ) : null}
        <Home
          isMobile={this.state.isMobile}
          dataNews={dataNews}
          dataAbout={dataAbout}
          header_title={dataHeader.title}
        />
        <Footer isMobile={this.state.isMobile} />
      </React.Fragment>
    );
  }
}
export default App;
