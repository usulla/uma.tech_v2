import React from "react";
import "./contacts.scss";

const Contacts = ({ isMobile }) => {
  return (
    <div className="page contacts__wrap container_big">
      <div className="contacts__content">
        <h1 className="typography typography--header container">
          <span>| </span>Контакты
        </h1>
        <div className="contacts__items">
          <div className="contacts__item--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.553264335651!2d37.58930021664227!3d55.76626228517608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a39f30b9915%3A0x425731b50838b1!2z0JLQuNC90L3Ri9C5INCR0LDQt9Cw0YAg0L3QsCDQodCw0LTQvtCy0L7QuQ!5e0!3m2!1sru!2sru!4v1570455509822!5m2!1sru!2sru"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="contacts__item--grayblock">
            <div className="contacts__item--data">
              <div className="contacts__data-row">
                <p>Адрес</p>
                <p>Большая Садовая ул., 5, Москва, 123001</p>
              </div>
              <div className="contacts__data-row">
                <p>Телефон</p>
                <p>+7 (495) 357-33-01</p>
              </div>
              <div className="contacts__data-row">
                <p>Общая информация</p>
                <p>info@uma.tech</p>
              </div>
              <div className="contacts__data-row">
                <p>Вопросы трудоустройства</p>
                <p>talents@uma.tech</p>
              </div>
              <div className="contacts__data-row contact-us">
                <p>Свяжитесь с нами </p>
                <p>Оставьте сообщение в форме и мы Вам обязательно ответим.</p>
              </div>
              <a
                className="button button-mail"
                href="mailto:talents@uma.tech?subject=Uma.Tech"
                target="_blank"
              >
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
