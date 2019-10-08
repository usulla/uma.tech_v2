import React from "react";
import "./licenses.scss";
import arrow_light from "../../images/arrow_light.svg";

const Licenses = ({ isMobile, dataLicenses }) => {
  function handleClick(e) {
    e.currentTarget.parentNode.previousElementSibling.querySelector(
      ".props"
    ).classList.toggle('active');
    e.currentTarget.classList.toggle("active");
  }
  return (
    <div className="page licenses__wrap container">
      <div className="licenses__content">
        <h1 className="typography typography--header">
          <span>| </span>Лицензии
        </h1>
        <div className="license__items">
          {dataLicenses.map((item, index) => {
            return (
              <div className="license__item">
                <div className="license__item--left">
                  <h3 className="title">{item.title}</h3>
                  <div className="props">
                    <div className="prop prop-1">
                      <div className="prop-title">{item.props[0].title}</div>
                      <div className="prop-data">{item.props[0].data}</div>
                    </div>
                    <div className="prop prop-2">
                      <div className="prop-title">{item.props[1].title}</div>
                      <div className="prop-data">{item.props[1].data}</div>
                    </div>
                    <div className="prop prop-3">
                      <div className="prop-title">{item.props[2].title}</div>
                      <div className="prop-data">{item.props[2].data}</div>
                    </div>
                    <div className="prop prop-4">
                      <div className="prop-title">{item.props[3].title}</div>
                      <div className="prop-data">{item.props[3].data}</div>
                    </div>
                    {item.props[4] && item.props[5] ? (
                      <React.Fragment>
                        <div className="prop prop-5">
                          <div className="prop-title">
                            {item.props[4].title}
                          </div>
                          <div className="prop-data">{item.props[4].data}</div>
                        </div>
                        <div className="prop prop-6">
                          <div className="prop-title">
                            {item.props[5].title}
                          </div>
                          <div className="prop-data">{item.props[5].data}</div>
                        </div>
                      </React.Fragment>
                    ) : null}
                  </div>
                </div>
                <div className="license__item--right">
                  <img
                    src={arrow_light}
                    className="arrow-light"
                    alt=""
                    onClick={handleClick}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Licenses;
