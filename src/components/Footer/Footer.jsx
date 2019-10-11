import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.scss";
import SocButton from "../SocButton/SocButton.jsx";

const Footer = ({ list, isMobile }) => {
  return (
    <section class="section">
      <div class="footer">
        <div class="container">
          <div class="footer__block">
            {!isMobile && (
              <nav class="footer__nav footer__row">
                <ul class="nav__list">
                  {list.map((li, index) => (
                    <li
                      key={index}
                      data-index={index + 2}
                      className={`menu-ul__li menu-ul__li-${li.src}`}
                    >
                      <Link to={li.src} className="menu-ul__li">
                        {li.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="footer__row">
              <SocButton />
            </div>
            <div class="footer__license footer__row">
              <div class="footer__item">© ООО «Ума.Тех» 2019</div>
              <div class="footer__item">Все права защищены</div>
              <div class="footer__item">
                <a href="/rules.html" target="_blank">
                  Политика использования файлов cookie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
