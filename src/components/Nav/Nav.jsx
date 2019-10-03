import React from "react";
import "./nav.scss";
import logo from "../../images/logo_umatech.svg";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";

const Nav = ({ list, isMobile }) => {
  function liClick(e) {
    e.preventDefault();
    var activeLi;
  }
  if (!isMobile) {
    return (
      <nav className="menu nav">
        <div class="container">
          <div class="nav__wrap">
            <div class="nav__left">
              <img src={logo} alt="Uma.Tech" />
            </div>
            <div class="nav__right">
              <ul class="nav__list">
                {list.map((li, index) => (
                  <li
                    key={index}
                    data-index={index + 2}
                    className={`menu-ul__li menu-ul__li-${li.src}`}
                    onClick={liClick}
                  >
                    <a href={`#${li.src}`}>{li.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="menu nav">
      <div class="container">
        <div class="nav__wrap">
          <div class="nav__left">
            <img src={logo} alt="Uma.Tech" />
          </div>
          <ToggleMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
