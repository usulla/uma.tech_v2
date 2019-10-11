import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./footer.scss";
import SocButton from "../SocButton/SocButton.jsx";
import Popup from "../Popup/Popup.jsx";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
    this.handleTogglePopup = this.handleTogglePopup.bind(this);
  }
  handleTogglePopup() {
    this.setState(state => ({
      showPopup: !state.showPopup
    }));

    document.documentElement.classList.toggle("hidden");
  }

  render() {
    const { list, isMobile } = this.props;
    return (
      <React.Fragment>
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
                  <div class="footer__item" onClick={this.handleTogglePopup}>
                    <span className="cookie_rules">
                      Политика использования файлов cookie
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.state.showPopup ? (
          <React.Fragment>
            <Popup handleTogglePopup={this.handleTogglePopup} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
export default Footer;
