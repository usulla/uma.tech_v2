import React from "react";
import {Link} from "react-router-dom";
import "./mobilemenu.scss";
import logo from "../../images/logo_umatech.svg";

const MobileMenu = ({ list }) => {
  //close mobile menu
  function handleClick(e){
      const fullMobileMenu = document.querySelector('.mobile-menu');
      fullMobileMenu.classList.remove('mobile-menu--is-active');
      if (document.querySelector('.mobile-title-page.show')) {
          document.querySelector('.mobile-title-page.show').style.opacity = '';
      }
  }
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-inner"> 
      <Link to='/'><img src={logo} alt="Uma.Tech" className="logo-uma" onClick={handleClick}/></Link>
        <ul>
          {list.map((li, index) => (
            <li key={index} onClick={handleClick}>
              <Link to={li.src}>{li.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__close" onClick={handleClick}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
