import React from "react";
import SlideDownItem from "../../components/SlideDownItem/SlideDownItem.jsx";
import "./competences.scss";
import competition_bg from "../../images/competition_page/competition_bg@2x.jpg";
import competition_bg_mob from "../../images/competition_page/competition_bg-mob@2x.jpg";

const Competences = ({ isMobile, dataCompetences }) => {
  var item1 = {
    title: dataCompetences[2].item_2,
    description: dataCompetences[2].item_1.concat(dataCompetences[2].item_3)
  };
  return (
    <div className="page competences__wrap">
      <div className="competences__content">
        <h1 className="typography typography--header container">
          <span>| </span>Компетенции
        </h1>

        <div className="competences__items">
          {/* 1 */}
          <div id="highload" className="competences__item container competences__item-1 competences__item--white">
            <h2>{dataCompetences[0].title1}</h2>
            <div className="competences__item--content">
              <div className="competences__item--left">
                <h3>{dataCompetences[0].title2}</h3>
                <p>{dataCompetences[0].item_1}</p>
              </div>
              {!isMobile && (
                <div className="competences__item--right">
                  <p>
                    <span className="title">
                      {dataCompetences[0].item_2.title}
                    </span>
                    <span>{dataCompetences[0].item_2.description}</span>
                  </p>
                  <p>
                    <span className="title">
                      {dataCompetences[0].item_3.title}
                    </span>
                    {dataCompetences[0].item_3.description}
                  </p>
                </div>
              )}
              {isMobile && (
                <SlideDownItem
                  items={[dataCompetences[0].item_2, dataCompetences[0].item_3]}
                />
              )}
            </div>
          </div>
          {/* 2 */}
          <div id="management" className="competences__item competences__item-2 competences__item--blue">
            <div className="container">
              <h2>{dataCompetences[1].title1}</h2>
              <h3>{dataCompetences[1].title2}</h3>
              {!isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--top">
                    <span className="title col-1">
                      {dataCompetences[1].item_1}
                    </span>
                    <span className="title col-2">
                      {dataCompetences[1].item_3}
                    </span>
                  </div>
                  <div className="competences__item--down">
                    <span className="col-1">{dataCompetences[1].item_2}</span>
                    <span className="col-2">{dataCompetences[1].item_4}</span>
                  </div>
                </div>
              )}
              {isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--top">
                    <span className="title col-1">
                      {dataCompetences[1].item_1}
                    </span>
                    <span className="col-1">{dataCompetences[1].item_2}</span>
                  </div>
                  <div className="competences__item--down">
                    <span className="title col-2">
                      {dataCompetences[1].item_3}
                    </span>
                    <span className="col-2">{dataCompetences[1].item_4}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="competition__image">
            {!isMobile && <img src={competition_bg} />}
            {isMobile && <img src={competition_bg_mob} />}
          </div>
          {/* 3 */}
          <div id="machine-learning" className="competences__item competences__item-3 competences__item--white">
            <div className="container">
              <h2>{dataCompetences[2].title1}</h2>

              {!isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--top">
                    <h3 className="col-1">{dataCompetences[2].title2}</h3>

                    <p className="title2 col-2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetences[2].item_2
                        }}
                      ></span>
                    </p>
                  </div>
                  <div className="competences__item--down">
                    <p className="col-1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetences[2].item_1
                        }}
                      ></span>
                    </p>
                    <p className="col-2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetences[2].item_3
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              )}
              {isMobile && <SlideDownItem items={[item1]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
