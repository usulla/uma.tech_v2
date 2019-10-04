import React from "react";
import News from "./News.jsx";
import "./competence.scss";

const Competence = ({ isMobile, dataNews }) => {
  return (
    <section class="section">
      <div class="competence">
        <div class="competence__top">
          <div class="competence__text container">
            <h2 class="typography typography--header">
              У нас уникальные компетенции
            </h2>
            <p class="typography">
              В области разработки программного обеспечения, эксплуатации
              распределенной инфраструктуры, способной работать под высокими
              нагрузками, аналитики, Big Data, информационной безопасности и
              управления информацией.
            </p>
          </div>
        </div>
        <News isMobile={isMobile} dataNews={dataNews} />
      </div>
    </section>
  );
};
export default Competence;
