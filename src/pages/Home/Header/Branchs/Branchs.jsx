import React from "react";
import style from "./branchs.scss";

const Branchs = ({ isMobile }) => {
  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom__wrap">
          <div className="bottom__right">
            <div className="bottom__item">
              <span>Highload</span>
            </div>
            <div className="bottom__item">
              <span>
                Управление IT-
                <br className="desctop" />
                инфраструктурой
              </span>
            </div>
            <div className="bottom__item">
              <span>
                Машинное
                <br className="desctop" /> обучение
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branchs;
