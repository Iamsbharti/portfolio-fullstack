import React, { useRef, useEffect } from "react";
import "../../css/Project.css";
import { jobProfileCardIntro } from "../Animation";
import { Link } from "react-router-dom";
import { useIntersection } from "react-use";
import gsap from "gsap/gsap-core";
const ProjectSection = () => {
  /**job profile */
  let card_sec = useRef(null);
  let card_stack = useRef(null);
  let card_ml = useRef(null);

  /**project card */
  let project_intro = useRef(null);
  let project_card_1 = useRef(null);
  let project_card_2 = useRef(null);
  let project_card_3 = useRef(null);
  let project_card_title = useRef(null);
  let tech_satck_icons = useRef(null);
  let project_live = useRef(null);
  useEffect(() => {
    jobProfileCardIntro(card_sec, card_stack, card_ml);
  });
  /**project card animation on scroll */
  const interSection = useIntersection(project_card_1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const projectCardFadeIn = (elememt) => {
    console.log("fade in");
    gsap.to(elememt, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const projectCardFadeOut = (elememt) => {
    console.log("fade out");
    gsap.to(elememt, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  interSection && interSection.intersectionRatio < 0.5
    ? projectCardFadeOut(".project__section")
    : projectCardFadeIn(".project__section");
  return (
    <>
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
      </div>
      {/**top 3 projects display */}
      <div
        className="project__section"
        ref={(ele) => {
          project_card_1 = ele;
        }}
      >
        <div className="projects__intro_p1">
          <div className="project__intro">
            <h3>- AllProjects</h3>
            <p className="project__intro__desc">All my builds are live here</p>
            <Link to="allProjects" className="project__intro__desc color">
              Explore More
            </Link>
          </div>
          <div className="project1__card">
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
      <div className="project__section2">
        <div className="project1__card project2__card__position">
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
        <div className="project1__card project3__card__position">
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
    </>
  );
};
export default ProjectSection;
