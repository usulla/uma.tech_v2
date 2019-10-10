import React, { Component } from "react";
import "./projects.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../images/arrow.svg";
import project_1_hover from "../../images/logos/logo-1_hover.png";
import project_2_hover from "../../images/logos/logo-2_hover.png";
import project_3_hover from "../../images/logos/logo-3_hover.png";
import project_4_hover from "../../images/logos/logo-4_hover.png";
import project_5_hover from "../../images/logos/logo-5_hover.png";
import project_6_hover from "../../images/logos/logo-6_hover.png";
import project_7_hover from "../../images/logos/logo-7_hover.png";
import project_8_hover from "../../images/logos/logo-8_hover.png";
import project_9_hover from "../../images/logos/logo-9_hover.png";
import project_10_hover from "../../images/logos/logo-10_hover.png";
import project_11_hover from "../../images/logos/logo-11_hover.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className="next-slick slick-arrow" src={arrow} onClick={onClick} />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className="prev-slick slick-arrow" src={arrow} onClick={onClick} />
  );
}
class Projects extends Component {
  constructor(props) {
    super();
  }
  render() {
    var settings = {
      arrows: true,
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 600,
      arrowsClass: "pagination pagination2",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <section className="section">
          <div className="project">
            <div className="project__header container">
              <span>
                На нашей инфраструктуре и технической платформе
                <br className="desctop" />
                работают такие проекты как:
              </span>
            </div>
            <div className="project__cont">
              {!this.props.isMobile ? (
                <React.Fragment>
                  <div className="project__logos">
                    <div className="logo-item">
                      <img src={project_1_hover} alt="" class="tnt hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_2_hover} alt="" className="tv3 hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_3_hover} alt="" class="pyatnica hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_4_hover} alt="" class="dvax2 hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_5_hover} alt="" class="tnt4 hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_6_hover} alt="" class="super hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_7_hover} alt="" class="match hide" />
                    </div>
                    <div className="logo-item">
                      <img src={project_8_hover} alt="" class="premier hide" />
                    </div>
                    <div className="logo-item">
                      <img
                        src={project_11_hover}
                        alt=""
                        class="match_club hide"
                      />
                    </div>
                    <div className="logo-item">
                      <img
                        src={project_9_hover}
                        alt=""
                        class="match_premier hide"
                      />
                    </div>
                    <div className="logo-item">
                      <img
                        src={project_10_hover}
                        alt=""
                        class="sportbox hide"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <Slider {...settings} className="carousel-logo">
                  <img src={project_1_hover} alt="" />
                  <img src={project_2_hover} alt="" />
                  <img src={project_3_hover} alt="" />
                  <img src={project_4_hover} alt="" />
                  <img src={project_5_hover} alt="" />
                  <img src={project_6_hover} alt="" />
                  <img src={project_7_hover} alt="" />
                  <img src={project_8_hover} alt="" />
                  <img src={project_11_hover} alt="" />
                  <img src={project_9_hover} alt="" />
                  <img src={project_10_hover} alt="" />
                </Slider>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
