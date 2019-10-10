import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import Header from "../../pages/Home/Header/Header.jsx";
import Home from "../../pages//Home/Home.jsx";
import appData from "./appData.json";
import Footer from "../Footer/Footer.jsx";
import Products from "../../pages/Products/Products.jsx";
import Licenses from "../../pages/Licenses/Licenses.jsx";
import Contacts from "../../pages/Contacts/Contacts.jsx";
import Competences from "../../pages/Competences/Competences.jsx";
import AboutUs from "../../pages/AboutUs/AboutUs.jsx";

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
    const {
      dataHeader,
      dataAbout,
      dataNews,
      dataLicenses,
      dataProducts,
      dataCompetences
    } = appData;
    return (
      <Router>
        <React.Fragment>
          <Nav list={dataHeader.nav} isMobile={this.state.isMobile} />
          {this.state.isMobile ? (
            <React.Fragment>
              <MobileMenu list={dataHeader.nav} />
            </React.Fragment>
          ) : null}

          <Switch>
            <Route exact path="/">
              <Home
                isMobile={this.state.isMobile}
                dataNews={dataNews}
                dataAbout={dataAbout}
                header_title={dataHeader.title}
              />
            </Route>
            <Route exact path="/about">
              <AboutUs isMobile={this.state.isMobile} />
            </Route>
            <Route path="/products">
              <Products
                isMobile={this.state.isMobile}
                dataProducts={dataProducts}
              />
            </Route>
            <Route path="/competencies">
              <Competences
                isMobile={this.state.isMobile}
                dataCompetences={dataCompetences}
              />
            </Route>
            <Route path="/licenses">
              <Licenses
                isMobile={this.state.isMobile}
                dataLicenses={dataLicenses}
              />
            </Route>
            <Route path="/contacts">
              <Contacts isMobile={this.state.isMobile} />
            </Route>
          </Switch>
          <Footer isMobile={this.state.isMobile} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
