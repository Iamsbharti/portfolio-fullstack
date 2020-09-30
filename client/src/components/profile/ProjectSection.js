import React, { useRef, useEffect } from "react";
import "../../css/Project.css";
import { jobProfileCardIntro } from "../Animation";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  let card_sec = useRef(null);
  let card_stack = useRef(null);
  let card_ml = useRef(null);
  useEffect(() => {
    jobProfileCardIntro(card_sec, card_stack, card_ml);
  });
  return (
    <div className="project">
      <div className="project__job__profile">
        <div
          className="project__job__profile__card color__sec"
          ref={(ele) => {
            card_sec = ele;
          }}
        >
          <i
            className="fa fa-shield job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Security Consultant</h3>
        </div>
        <div
          className="project__job__profile__card"
          ref={(ele) => {
            card_stack = ele;
          }}
        >
          <i
            className="fa fa-desktop job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Full Stack Developer</h3>
        </div>
        <div
          className="project__job__profile__card color__ml"
          ref={(ele) => {
            card_ml = ele;
          }}
        >
          <i
            className="fa fa-line-chart job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Machine Learning Enthuiast</h3>
        </div>
      </div>
      {/**top 3 projects display */}
      <div className="projects">
        <div className="projects__intro_p1">
          <div className="project__intro">
            <h3>- AllProjects</h3>
            <p>All my builds are live here</p>
            <Link to="allProjects">Explore More</Link>
          </div>
          <div className="project1__card">
            <p>Twitter Clone</p>
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt=""
              className="project__image"
            />
            <div className="project__card__techstack">
              <p>
                <img src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"} />
              </p>
              <p>
                <img src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"} />
              </p>
              <p>
                <img src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
