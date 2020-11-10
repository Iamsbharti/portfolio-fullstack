import React, { useRef, useEffect } from "react";
import "../../css/Project.css";
import "../../css/Blogs.css";
import TechStackSection from "./TechStackSection";
import {
  jobProfileCardIntro,
  animateProjectCard1Intro,
  animateProjectIntro,
} from "../Animation";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  /**job profile */
  let card_sec = useRef(null);
  let card_stack = useRef(null);
  let card_ml = useRef(null);

  /**project card */
  let project_card_1 = useRef(null);
  let project_section = useRef(null);
  let project_card_2 = useRef(null);
  let project_card_3 = useRef(null);
  let project_section_intro = useRef(null);
  /**tech stack refs */
  let tech_satck_ref = useRef(null);

  useEffect(() => {
    jobProfileCardIntro(card_sec, card_stack, card_ml);
    animateProjectCard1Intro(
      project_section,
      project_card_1,
      project_card_2,
      project_card_3
    );
    animateProjectIntro(project_section, project_section_intro);
  });

  return (
    <>
      <div
        className="project"
        ref={(ele) => {
          project_section = ele;
        }}
      >
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
            className="project__job__profile__card color__fs"
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
      </div>

      {/**top 3 projects display */}

      <div className="project__section">
        <div className="projects__intro_p1">
          <div
            className="project__intro"
            ref={(ele) => {
              project_section_intro = ele;
            }}
          >
            <h3>- AllProjects</h3>
            <p className="project__intro__desc">All my builds are live here</p>
            <Link to="allProjects" className="project__intro__desc color">
              Explore More
            </Link>
          </div>

          <div
            className="project1__card"
            ref={(ele) => {
              project_card_1 = ele;
            }}
          >
            <p className="project__card__name">Twitter Clone</p>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/logo512.png"}
                alt=""
                className="project__image"
              />
            </div>
            <code>- Built Tools</code>
            <div className="project__card__techstack">
              <div className="project__tech">
                <p>
                  <img
                    src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                    className="icon_img"
                    alt="NodeJs"
                    title="NodeJs"
                  />
                </p>
                <p>
                  <img
                    src={process.env.PUBLIC_URL + "/icons8-react-100.png"}
                    className="icon_img"
                    alt="ReactJs"
                    title="ReactJs"
                  />
                </p>
                <p>
                  <img
                    src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                    className="icon_img"
                    alt="MongoDB"
                    title="MongoDB"
                  />
                </p>
              </div>

              <div className="project__golive">
                <p>
                  <img
                    src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                    className="icon_img"
                    alt="github"
                    title="SourceCode"
                  />
                </p>
                <p>
                  <img
                    src={process.env.PUBLIC_URL + "/shuttle.png"}
                    className="icon_img_shuttle"
                    alt="live"
                    title="Live"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**project line 2 */}
      <div
        className="project__section2"
        ref={(ele) => {
          tech_satck_ref = ele;
        }}
      >
        <div
          className="project1__card project2__card__position"
          ref={(ele) => {
            project_card_2 = ele;
          }}
        >
          <p className="project__card__name">KanbanBoard</p>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt="img"
              className="project__image"
            />
          </div>
          <code>- Built Tools</code>
          <div className="project__card__techstack">
            <div className="project__tech">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                  className="icon_img"
                  alt="NodeJs"
                  title="NodeJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-react-100.png"}
                  className="icon_img"
                  alt="ReactJs"
                  title="ReactJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                  className="icon_img"
                  alt="MongoDB"
                  title="MongoDB"
                />
              </p>
            </div>

            <div className="project__golive">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                  className="icon_img"
                  alt="github"
                  title="SourceCode"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/shuttle.png"}
                  className="icon_img_shuttle"
                  alt="live"
                  title="Live"
                />
              </p>
            </div>
          </div>
        </div>
        {/**peoject 3rd section */}
        <div
          className="project1__card project3__card__position"
          ref={(ele) => {
            project_card_3 = ele;
          }}
        >
          <p className="project__card__name">KanbanBoard</p>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt=""
              className="project__image"
            />
          </div>
          <code>- Built Tools</code>
          <div className="project__card__techstack">
            <div className="project__tech">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                  className="icon_img"
                  alt="NodeJs"
                  title="NodeJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-react-100.png"}
                  className="icon_img"
                  alt="ReactJs"
                  title="ReactJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                  className="icon_img"
                  alt="MongoDB"
                  title="MongoDB"
                />
              </p>
            </div>

            <div className="project__golive">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                  className="icon_img"
                  alt="github"
                  title="SourceCode"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/shuttle.png"}
                  className="icon_img_shuttle"
                  alt="live"
                  title="Live"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <TechStackSection scrollTrigger="tech_satck_ref" />
    </>
  );
};
export default ProjectSection;
