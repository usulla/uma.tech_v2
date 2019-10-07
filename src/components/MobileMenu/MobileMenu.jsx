import React from "react";
import "./mobilemenu.js";
import "./mobilemenu.scss";
import logo from "../../images/logo_umatech.svg";

const MobileMenu = ({ list }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-inner">
        <img src={logo} alt="Uma.Tech" className="logo-uma" />
        <ul>
          {list.map((li, index) => (
            <li key={index}>
              <a href={`#${li.src}`}>{li.title}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__close">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
