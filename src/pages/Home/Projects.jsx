import React from "react";
import "./projects.scss";
import projects_logos from "../../images/all.jpg";
import project_1 from "../../images/logos/logo-1_hover.png";
import project_2 from "../../images/logos/logo-2_hover.png";
import project_3 from "../../images/logos/logo-3_hover.png";
import project_4 from "../../images/logos/logo-4_hover.png";
import project_5 from "../../images/logos/logo-5_hover.png";
import project_6 from "../../images/logos/logo-6_hover.png";
import project_7 from "../../images/logos/logo-7_hover.png";
import project_8 from "../../images/logos/logo-8_hover.png";
import project_9 from "../../images/logos/logo-9_hover.png";
import project_10 from "../../images/logos/logo-10_hover.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../images/arrow.png";

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
const Projects = () => {
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
        breakpoint: 3500,
        settings: "unslick"
      },
      {
        breakpoint: 769,
        settings: "slick"
      }
    ]
  };
  return (
    <section className="section">
      <div className="project">
        <div className="project__header">
          <span>
            На нашей инфраструктуре и технической платформе{" "}
            <br className="desctop" />
            работают такие проекты как:
          </span>
        </div>
        <div className="project__cont">
          <img className="desctop" src={projects_logos} alt="Uma.Tech" />
          <Slider {...settings} className="carousel-logo">
            <img src={project_1} alt="" />
            <img src={project_2} alt="" />
            <img src={project_3} alt="" />
            <img src={project_4} alt="" />
            <img src={project_5} alt="" />
            <img src={project_6} alt="" />
            <img src={project_7} alt="" />
            <img src={project_8} alt="" />
            <img src={project_9} alt="" />
            <img src={project_10} alt="" />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
