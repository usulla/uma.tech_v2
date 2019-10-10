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
      <section class="section">
        <div class="news__top">
          <div class="news__text container">
            <h2 class="typography typography--header">Новости</h2>
          </div>
        </div>
        <div className="news__wrap container">
          <div className="news__content">
            {dataNews.map((item, index) => {
              return (
                <div className="news__item">
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
      </section>
    );
  }
  return (
    <section class="section news">
      <div class="news__top">
        <div class="news__text container">
          <h2 class="typography typography--header">Новости</h2>
        </div>
      </div>
      <div className="news__wrap">
        <Slider {...settings} className="news__content">
          {dataNews.map((item, index) => {
            return (
              <div className="news__item">
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
    </section>
  );
};
export default News;
