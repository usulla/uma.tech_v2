import React from "react";
import "./news.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 600,
  dotsClass: "pagination pagination2"
};
const News = ({ isMobile, dataNews }) => {
  if (!isMobile) {
    return (
      <div className="competence__wrap">
        <div className="competence__content">
          {dataNews.map((item, index) => {
            return (
              <div className="competence__item">
                <p className="hashtag">
                  <b>{item.hashtag}</b>
                </p>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.text
                  }}
                ></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="competence__wrap">
      <Slider {...settings} className="competence__content">
        {dataNews.map((item, index) => {
          return (
            <div className="competence__item">
              <p className="hashtag">
                <b>{item.hashtag}</b>
              </p>
              <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
              ></p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default News;
