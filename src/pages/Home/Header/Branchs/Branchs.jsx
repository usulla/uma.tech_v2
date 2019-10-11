import React from "react";
// import { Link } from "react-router-dom";
import style from "./branchs.scss";
import { HashLink as Link } from "react-router-hash-link";

const Branchs = ({ isMobile }) => {
  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom__wrap">
          <div className="bottom__right">
            <div className="bottom__item">
              <span>
                <Link to="/competencies#highload">Highload</Link>
              </span>
            </div>
            <div className="bottom__item">
              <span>
                <Link to="/competencies#management">
                  Управление IT-
                  <br className="desctop" />
                  инфраструктурой
                </Link>
              </span>
            </div>
            <div className="bottom__item">
              <span>
                <Link to="/competencies#machine-learning">
                  Машинное
                  <br className="desctop" /> обучение
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branchs;
