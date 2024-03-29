import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./nav.scss";
import logo from "../../images/logo_umatech.svg";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";

const Nav = ({ list, isMobile }) => {
  if (!isMobile) {
    return (
      <nav className="menu nav">
        <div class="container">
          <div class="nav__wrap">
            <div class="nav__left">
            <Link to='/'><img src={logo} alt="Uma.Tech" /></Link>
            </div>
            <div class="nav__right">
              <ul class="nav__list">
    
                {list.map((li, index) => (
                    <li
                    key={index}
                    data-index={index + 2}
                    className={`menu-ul__li menu-ul__li-${li.src}`}
                  >
                    <NavLink to={li.src} className='menu-ul__li' activeClassName="active">{li.title}</NavLink>
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
          <Link to='/'><img src={logo} alt="Uma.Tech" /></Link>
          </div>
          <ToggleMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
