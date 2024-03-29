import React from "react";
import style from "./header.scss";
import Branchs from "./Branchs/Branchs.jsx";

const Header = ({ isMobile, title }) => {
  return (
    <header class="section header">
      <div className="bg">
        <div className="content">
          <div className="container content__wrapper">
            <div className="content__top">
              <p>{title}</p>
            </div>
          </div>
        </div>
        <Branchs />
      </div>
    </header>
  );
};
export default Header;
