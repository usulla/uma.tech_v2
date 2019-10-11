import React from "react";
import style from "./popup.scss";

const Popup = (props) => {
    
  return (
      <div className="modal_container">
      <div className="modal_back"></div>
        <div className="modal-blue__window modal-blue__window--pink">
          <div className="modal-blue__close" onClick={() => { props.handleTogglePopup()}}>
              <span></span>
              <span></span>
          </div>
          <div className="modal-blue__header">
            Общие положения использования файлов cookies
          </div>
          <div className="modal-blue__content">
            <div className="modal-blue__rules">
              <p className="modal-blue__textrules">
                Во время просмотра любой страницы данного сайта на Ваш компьютер
                загружается сама страница, а также небольшой текстовый файл под
                названием «cookie». Файлы cookies не содержат никакой личной
                информации о Вас. <br />
                <br />
                Такими файлами пользуются многие сайты, поскольку cookies
                позволяют осуществлять множество полезных вещей. Информация,
                которую мы получаем посредством cookies-файлов, помогает нам
                предоставлять вам наши услуги в наиболее удобном для вас виде.
                <br />
                <br />
                Вы можете отключить cookie их в настройках безопасности вашего
                браузера.
                <br />
                <br />
                Важно понимать, что настройки нужно применить во всех браузерах,
                которыми вы пользуетесь (на компьютере и в телефоне). В случае
                если вы решите отключить cookiе, часть функций сайта перестанут
                быть вам доступны или могут работать непредсказуемо.
                <br />
                <br />
                Если у Вас остались вопросы, Вы можете написать в нашу службу
                поддержки: <a href="mailto:info@uma.tech">info@uma.tech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Popup;
