import React from "react";
import style from "./footer.scss";

const Footer = ({ isMobile }) => {
  return (
    <section class="section">
      <div class="footer">
        <div class="container">
          <div class="footer__block">
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
    </section>
  );
};
export default Footer;
