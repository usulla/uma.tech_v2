import React from "react";
import "./competences.scss";
import competition_bg from "../../images/competition_page/competition_bg@2x.jpg";

const Competences = ({ isMobile, dataCompetences }) => {
  return (
    <div className="page competences__wrap">
      <div className="competences__content">
        <h1 className="typography typography--header container">
          <span>| </span>Компетенции
        </h1>

        <div className="competences__items">
          {/* 1 */}
          <div className="competences__item container competences__item-1 competences__item--white">
            <h2>{dataCompetences[0].title1}</h2>
            <div className="competences__item--content">
              <div className="competences__item--left">
                <h3>{dataCompetences[0].title2}</h3>
                <p>{dataCompetences[0].item_1}</p>
              </div>
              <div className="competences__item--right">
                <p>
                  <span className="title">
                    {dataCompetences[0].item_3.title}
                  </span>
                  <span>{dataCompetences[0].item_3.description}</span>
                </p>
                <p>
                  <span className="title">
                    {dataCompetences[0].item_4.title}
                  </span>
                  {dataCompetences[0].item_4.description}
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="competences__item competences__item-2 competences__item--blue">
            <div className="container">
              <h2>{dataCompetences[1].title1}</h2>
              <h3>{dataCompetences[1].title2}</h3>
              <div className="competences__item--content">
                <div className="competences__item--top">
                  <span className="title col-1">{dataCompetences[1].item_1}</span>
                  <span className="title col-2">
                    {dataCompetences[1].item_3}
                  </span>
                </div>
                <div className="competences__item--down">
                  <span className="col-1">{dataCompetences[1].item_2}</span>
                  <span className="col-2">{dataCompetences[1].item_4}</span>
                </div>
            </div>
          </div>
          </div>


          <div className="competition__image"> 
            <img src={competition_bg}/>
          </div>
          {/* 3 */}
          <div className="competences__item competences__item-3 competences__item--white">
            <div className="container">
              <h2>{dataCompetences[2].title1}</h2>
              <div className="competences__item--content">
                <div className="competences__item--top">
                <h3 className="col-1">{dataCompetences[2].title2}</h3>
                <p className="title2 col-2">
                  <span dangerouslySetInnerHTML={{__html:(
                      dataCompetences[2].item_2)}}>
                  </span>
                  </p>
                </div>
                <div className="competences__item--down">
                  <p className="col-1">
                  <span dangerouslySetInnerHTML={{__html:(
                      dataCompetences[2].item_1)}}>
                  </span>
                </p>
                  <p className="col-2">
                    <span dangerouslySetInnerHTML={{__html:(
                      dataCompetences[2].item_3)}}>
                    </span>
                  </p>
                </div>
            </div>
          </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default Competences;
